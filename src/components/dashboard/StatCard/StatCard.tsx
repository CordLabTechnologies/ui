import * as React from "react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export interface iStatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  trendValue?: string | number
  trendDirection?: "up" | "down" | "neutral"
  icon?: React.ReactNode
  description?: string
}

export const StatCard = React.forwardRef<HTMLDivElement, iStatCardProps>(
  (
    {
      className,
      title,
      value,
      trendValue,
      trendDirection = "neutral",
      icon,
      description,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "flex flex-col rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-background)] p-6 shadow-sm",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-[var(--color-muted-foreground)]">
            {title}
          </p>
          {icon && (
            <div className="text-[var(--color-muted-foreground)]">
              {icon}
            </div>
          )}
        </div>
        <div className="mt-2 flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)]">
            {value}
          </h2>
          {trendValue && (
            <span
              className={[
                "flex items-center text-sm font-medium whitespace-nowrap",
                trendDirection === "up" && "text-green-500",
                trendDirection === "down" && "text-red-500",
                trendDirection === "neutral" && "text-[var(--color-muted-foreground)]"
              ].filter(Boolean).join(" ")}
            >
              {trendDirection === "up" && <TrendingUp className="mr-1 h-3.5 w-3.5" />}
              {trendDirection === "down" && <TrendingDown className="mr-1 h-3.5 w-3.5" />}
              {trendDirection === "neutral" && <Minus className="mr-1 h-3.5 w-3.5" />}
              {trendValue}
            </span>
          )}
        </div>
        {description && (
          <p className="mt-1 text-xs text-[var(--color-muted-foreground)]">
            {description}
          </p>
        )}
      </div>
    )
  }
)

StatCard.displayName = "StatCard"
