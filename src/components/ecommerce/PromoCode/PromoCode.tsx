import * as React from "react"
import { Input } from "../../elements/Input"
import { Button } from "../../elements/Button"
import { Check, X, Tag } from "lucide-react"

export interface iPromoCodeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSubmit'> {
  onSubmit?: (code: string) => Promise<boolean> | boolean
  status?: "idle" | "loading" | "success" | "error"
  successMessage?: string
  errorMessage?: string
}

export const PromoCode = React.forwardRef<HTMLDivElement, iPromoCodeProps>(
  (
    { className, onSubmit, status = "idle", successMessage, errorMessage, ...props },
    ref
  ) => {
    const [code, setCode] = React.useState("")
    const [internalStatus, setInternalStatus] = React.useState(status)

    React.useEffect(() => {
      setInternalStatus(status)
    }, [status])

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!code.trim() || !onSubmit) return

      setInternalStatus("loading")
      try {
        const result = await onSubmit(code)
        setInternalStatus(result ? "success" : "error")
      } catch {
        setInternalStatus("error")
      }
    }

    return (
      <div ref={ref} className={["flex flex-col gap-2 w-full max-w-sm", className].filter(Boolean).join(" ")} {...props}>
        <form onSubmit={handleSubmit} className="flex gap-2 w-full">
          <div className="relative flex-1">
            <Tag className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--color-muted-foreground)]" />
            <Input
              value={code}
              onChange={(e) => {
                setCode(e.target.value)
                setInternalStatus("idle")
              }}
              placeholder="Promo code"
              className="pl-9"
              disabled={internalStatus === "loading" || internalStatus === "success"}
            />
          </div>
          <Button 
            type="submit" 
            variant="secondary" 
            loading={internalStatus === "loading"}
            disabled={!code.trim() || internalStatus === "success"}
          >
            Apply
          </Button>
        </form>

        {internalStatus === "success" && (
          <div className="flex items-center gap-1.5 text-sm font-medium text-green-600 dark:text-green-500">
            <Check className="h-4 w-4" />
            <span>{successMessage || `Code applied successfully!`}</span>
          </div>
        )}

        {internalStatus === "error" && (
          <div className="flex items-center gap-1.5 text-sm font-medium text-red-600 dark:text-red-500">
            <X className="h-4 w-4" />
            <span>{errorMessage || `Invalid or expired code.`}</span>
          </div>
        )}
      </div>
    )
  }
)
PromoCode.displayName = "PromoCode"
