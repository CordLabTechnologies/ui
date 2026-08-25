import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../../elements/Avatar"

export interface iActivityItem {
  id: string | number
  user: {
    name: string
    avatarUrl?: string
  }
  action: string | React.ReactNode
  target?: string | React.ReactNode
  timestamp: string
  icon?: React.ReactNode
}

export interface iActivityFeedProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  items: iActivityItem[]
}

export const ActivityFeed = React.forwardRef<HTMLDivElement, iActivityFeedProps>(
  ({ className, title, items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-sm",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {title && (
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-[var(--color-foreground)]">
              {title}
            </h3>
          </div>
        )}

        <div className="relative border-l-2 border-[var(--color-border)] ml-3 sm:ml-4">
          {items.map((item, index) => {
            const initials = item.user.name
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2)
              .toUpperCase()

            return (
              <div key={item.id} className="mb-6 ml-6 relative last:mb-0">
                <div className="absolute -left-[35px] top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--color-background)] bg-[var(--color-secondary)]">
                  {item.icon ? (
                    item.icon
                  ) : (
                    <Avatar className="h-full w-full">
                      <AvatarImage src={item.user.avatarUrl} alt={item.user.name} />
                      <AvatarFallback className="text-[10px]">{initials}</AvatarFallback>
                    </Avatar>
                  )}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <p className="text-sm text-[var(--color-foreground)]">
                    <span className="font-semibold">{item.user.name}</span>{" "}
                    <span className="text-[var(--color-muted-foreground)]">
                      {item.action}
                    </span>{" "}
                    {item.target && (
                      <span className="font-medium">{item.target}</span>
                    )}
                  </p>
                  <time className="mt-1 text-xs text-[var(--color-muted-foreground)] sm:mt-0 sm:ml-4 sm:shrink-0">
                    {item.timestamp}
                  </time>
                </div>
              </div>
            )
          })}
          {items.length === 0 && (
            <div className="ml-6 py-2 text-sm text-[var(--color-muted-foreground)]">
              No recent activity.
            </div>
          )}
        </div>
      </div>
    )
  }
)

ActivityFeed.displayName = "ActivityFeed"
