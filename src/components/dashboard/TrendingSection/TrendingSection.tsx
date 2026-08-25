import * as React from "react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export interface iTrendingItem {
  id: string | number
  title: string
  subtitle?: string
  score?: string | number
  trend: "up" | "down" | "flat"
  onClick?: () => void
}

export interface iTrendingSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  items: iTrendingItem[]
  viewAllText?: string
  onViewAll?: () => void
}

export const TrendingSection = React.forwardRef<HTMLDivElement, iTrendingSectionProps>(
  (
    { className, title, items, viewAllText = "View All", onViewAll, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-sm",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
            {title}
          </h3>
          {onViewAll && (
            <button
              onClick={onViewAll}
              className="text-sm font-medium text-[var(--color-primary)] transition-colors hover:text-[var(--color-primary-hover)] hover:underline"
            >
              {viewAllText}
            </button>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <div
              key={item.id}
              onClick={item.onClick}
              className={[
                "flex items-center justify-between rounded-md p-2 transition-colors",
                item.onClick ? "cursor-pointer hover:bg-[var(--color-secondary)]" : ""
              ].filter(Boolean).join(" ")}
            >
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold text-[var(--color-muted-foreground)] w-4 text-right">
                  {index + 1}
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-[var(--color-foreground)]">
                    {item.title}
                  </span>
                  {item.subtitle && (
                    <span className="text-xs text-[var(--color-muted-foreground)]">
                      {item.subtitle}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                {item.score && (
                  <span className="text-sm font-medium text-[var(--color-muted-foreground)]">
                    {item.score}
                  </span>
                )}
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-secondary)]">
                  {item.trend === "up" && (
                    <TrendingUp className="h-3.5 w-3.5 text-green-500" />
                  )}
                  {item.trend === "down" && (
                    <TrendingDown className="h-3.5 w-3.5 text-red-500" />
                  )}
                  {item.trend === "flat" && (
                    <Minus className="h-3.5 w-3.5 text-[var(--color-muted-foreground)]" />
                  )}
                </div>
              </div>
            </div>
          ))}
          {items.length === 0 && (
            <div className="py-4 text-center text-sm text-[var(--color-muted-foreground)]">
              No trending items right now.
            </div>
          )}
        </div>
      </div>
    )
  }
)

TrendingSection.displayName = "TrendingSection"
