import * as React from "react"
import { Circle } from "lucide-react"

export interface iTimelineItem {
  id: string
  title: string
  description?: string
  date?: string
  icon?: React.ReactNode
  isActive?: boolean
}

export interface iTimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: iTimelineItem[]
}

export const Timeline = React.forwardRef<HTMLDivElement, iTimelineProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["relative border-l border-[var(--color-border)] ml-3 space-y-8", className].filter(Boolean).join(" ")}
        {...props}
      >
        {items.map((item, index) => (
          <div key={item.id} className="relative pl-8">
            <div
              className={[
                "absolute -left-[17px] top-1 flex h-8 w-8 items-center justify-center rounded-full border bg-[var(--color-background)]",
                item.isActive 
                  ? "border-[var(--color-primary)] text-[var(--color-primary)]" 
                  : "border-[var(--color-border)] text-[var(--color-muted-foreground)]"
              ].filter(Boolean).join(" ")}
            >
              {item.icon || <Circle className="h-3 w-3 fill-current" />}
            </div>
            
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between gap-4">
                <h4 className="text-sm font-semibold tracking-tight text-[var(--color-foreground)]">
                  {item.title}
                </h4>
                {item.date && (
                  <time className="text-xs text-[var(--color-muted-foreground)] tabular-nums">
                    {item.date}
                  </time>
                )}
              </div>
              {item.description && (
                <p className="text-sm text-[var(--color-muted-foreground)]">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
)
Timeline.displayName = "Timeline"
