import * as React from "react"
import { Copy, Check } from "lucide-react"

export interface iCouponProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  description?: string
  discount?: string
}

export const Coupon = React.forwardRef<HTMLDivElement, iCouponProps>(
  ({ className, code, description, discount, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = () => {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    return (
      <div
        ref={ref}
        className={[
          "relative flex items-center justify-between rounded-[var(--radius-md)] border-2 border-dashed border-[var(--color-primary)] bg-[var(--color-secondary)] p-4",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <div className="flex flex-col gap-1">
          {discount && (
            <span className="text-lg font-bold text-[var(--color-primary)]">
              {discount}
            </span>
          )}
          {description && (
            <span className="text-sm text-[var(--color-muted-foreground)]">
              {description}
            </span>
          )}
          <div className="mt-1 flex items-center gap-2">
            <code className="rounded bg-[var(--color-background)] px-2 py-1 font-mono text-sm font-bold tracking-wider">
              {code}
            </code>
          </div>
        </div>
        
        <button
          onClick={handleCopy}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white transition-transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="h-5 w-5" />
          ) : (
            <Copy className="h-5 w-5" />
          )}
        </button>
        
        {/* Ticket cutouts */}
        <div className="absolute -left-3 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[var(--color-background)] border-r-2 border-dashed border-[var(--color-primary)]" />
        <div className="absolute -right-3 top-1/2 h-5 w-5 -translate-y-1/2 rounded-full bg-[var(--color-background)] border-l-2 border-dashed border-[var(--color-primary)]" />
      </div>
    )
  }
)
Coupon.displayName = "Coupon"
