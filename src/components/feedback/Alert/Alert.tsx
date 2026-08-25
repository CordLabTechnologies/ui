import * as React from "react"
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react"

export type tAlertVariant = "default" | "destructive" | "success" | "warning"

export interface iAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: tAlertVariant
  icon?: React.ReactNode
}

export const Alert = React.forwardRef<HTMLDivElement, iAlertProps>(
  ({ className, variant = "default", icon, children, ...props }, ref) => {
    const variantStyles: Record<tAlertVariant, string> = {
      default: "bg-[var(--color-secondary)]/50 text-[var(--color-foreground)] border-[var(--color-border)]",
      destructive: "bg-red-500/10 text-red-600 border-red-500/20 dark:border-red-900/50 dark:text-red-500",
      success: "bg-green-500/10 text-green-600 border-green-500/20 dark:border-green-900/50 dark:text-green-500",
      warning: "bg-yellow-500/10 text-yellow-600 border-yellow-500/20 dark:border-yellow-900/50 dark:text-yellow-500",
    }

    const defaultIcons: Record<tAlertVariant, React.ReactNode> = {
      default: <Info className="h-4 w-4" />,
      destructive: <XCircle className="h-4 w-4" />,
      success: <CheckCircle className="h-4 w-4" />,
      warning: <AlertCircle className="h-4 w-4" />,
    }

    return (
      <div
        ref={ref}
        role="alert"
        className={[
          "relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-[inherit] [&>svg~*]:pl-7",
          variantStyles[variant],
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {icon || defaultIcons[variant]}
        {children}
      </div>
    )
  }
)
Alert.displayName = "Alert"

export const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={["mb-1 font-medium leading-none tracking-tight", className].filter(Boolean).join(" ")}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={["text-sm [&_p]:leading-relaxed opacity-90", className].filter(Boolean).join(" ")}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"
