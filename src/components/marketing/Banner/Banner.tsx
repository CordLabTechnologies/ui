import * as React from "react"
import { AlertCircle, CheckCircle, Info, X } from "lucide-react"
import { Button } from "../../elements/Button"

export type tBannerVariant = "default" | "promotional" | "warning"

export interface iBannerProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: tBannerVariant
  icon?: React.ReactNode
  onClose?: () => void
  action?: React.ReactNode
}

export const Banner = React.forwardRef<HTMLDivElement, iBannerProps>(
  ({ className, variant = "default", icon, children, onClose, action, ...props }, ref) => {
    const variantStyles: Record<tBannerVariant, string> = {
      default: "bg-[var(--color-secondary)] text-[var(--color-foreground)]",
      promotional: "bg-[var(--color-primary)] text-white",
      warning: "bg-[var(--color-destructive)] text-white",
    }

    const defaultIcons: Record<tBannerVariant, React.ReactNode> = {
      default: <Info className="h-5 w-5" />,
      promotional: <CheckCircle className="h-5 w-5" />,
      warning: <AlertCircle className="h-5 w-5" />,
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={[
          "flex w-full items-center justify-between px-4 py-3 sm:px-6 lg:px-8",
          variantStyles[variant],
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <div className="flex items-center gap-3">
          <span className="flex-shrink-0">
            {icon || defaultIcons[variant]}
          </span>
          <div className="text-sm font-medium">
            {children}
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          {action && (
            <div className="flex-shrink-0">
              {action}
            </div>
          )}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="flex-shrink-0 rounded-md p-1 transition-colors hover:bg-black/10 focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Close banner"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    )
  }
)
Banner.displayName = "Banner"
