import * as React from "react"
import { Check, Copy } from "lucide-react"

export interface iColorSwatchProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  value: string // e.g. hex code, css variable, or tailwind class like "bg-gradient-to-r from-blue-500 to-purple-500"
  isGradient?: boolean
}

export const ColorSwatch = React.forwardRef<HTMLDivElement, iColorSwatchProps>(
  ({ className, name, value, isGradient = false, ...props }, ref) => {
    const [copied, setCopied] = React.useState(false)

    const handleCopy = () => {
      navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }

    // Determine the style or class to apply to the preview square
    const isTailwindClass = value.startsWith("bg-")
    const previewStyle = !isTailwindClass ? { background: value } : {}
    const previewClass = isTailwindClass ? value : ""

    return (
      <div
        ref={ref}
        className={[
          "group relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] shadow-sm transition-all hover:shadow-md",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {/* Color/Gradient Preview area */}
        <div 
          className={["h-24 w-full shrink-0", previewClass].filter(Boolean).join(" ")}
          style={previewStyle}
        />
        
        {/* Info area */}
        <div className="flex flex-1 flex-col justify-between p-3">
          <div className="mb-2">
            <h4 className="text-sm font-semibold text-[var(--color-foreground)]">{name}</h4>
            <p className="line-clamp-1 text-xs font-mono text-[var(--color-muted-foreground)]">
              {value}
            </p>
          </div>
          
          <button
            type="button"
            onClick={handleCopy}
            className="flex w-full items-center justify-center gap-2 rounded-md bg-[var(--color-secondary)] px-2 py-1.5 text-xs font-medium text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-secondary-hover)]"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-500" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    )
  }
)

ColorSwatch.displayName = "ColorSwatch"
