import * as React from "react"
import { ResponsiveContainer } from "recharts"

export interface iChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config?: Record<string, { label: string; color?: string }>
}

export const ChartContainer = React.forwardRef<HTMLDivElement, iChartContainerProps>(
  ({ className, children, config, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["w-full h-[350px]", className].filter(Boolean).join(" ")}
        style={
          {
            ...Object.entries(config || {}).reduce(
              (acc, [key, value]) => {
                if (value.color) {
                  acc[`--color-${key}`] = value.color
                }
                return acc
              },
              {} as Record<string, string>
            ),
          } as React.CSSProperties
        }
        {...props}
      >
        <ResponsiveContainer width="100%" height="100%">
          {children as React.ReactElement}
        </ResponsiveContainer>
      </div>
    )
  }
)
ChartContainer.displayName = "ChartContainer"

// Tooltip wrapper for styling
export const ChartTooltip = ({
  active,
  payload,
  label,
}: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-background)] p-3 shadow-sm">
        <p className="mb-2 text-sm font-medium text-[var(--color-muted-foreground)]">{label}</p>
        <div className="flex flex-col gap-1">
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center gap-2">
              <div 
                className="h-2 w-2 rounded-full" 
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm font-medium">
                {entry.name}:
              </span>
              <span className="text-sm font-bold">
                {entry.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    )
  }
  return null
}
