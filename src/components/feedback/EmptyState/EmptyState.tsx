import * as React from "react"
import { Button } from "../../elements/Button"
import { Search } from "lucide-react"

export interface iEmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description?: string
  actionText?: string
  onAction?: () => void
}

export const EmptyState = React.forwardRef<HTMLDivElement, iEmptyStateProps>(
  ({ className, icon, title, description, actionText, onAction, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "flex flex-col items-center justify-center p-8 text-center rounded-[var(--radius-lg)] border border-dashed border-[var(--color-border)] bg-[var(--color-background)]/50",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-secondary)]/50 text-[var(--color-muted-foreground)]">
          {icon || <Search className="h-8 w-8" />}
        </div>
        <h3 className="mb-1 text-lg font-semibold text-[var(--color-foreground)]">
          {title}
        </h3>
        {description && (
          <p className="mb-6 max-w-sm text-sm text-[var(--color-muted-foreground)]">
            {description}
          </p>
        )}
        {actionText && (
          <Button variant="primary" onClick={onAction}>
            {actionText}
          </Button>
        )}
      </div>
    )
  }
)
EmptyState.displayName = "EmptyState"
