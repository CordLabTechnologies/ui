import * as React from "react"
import { Minus, Plus } from "lucide-react"

export interface iQuantitySelectorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: number
  min?: number
  max?: number
  onChange?: (value: number) => void
  disabled?: boolean
}

export const QuantitySelector = React.forwardRef<HTMLDivElement, iQuantitySelectorProps>(
  ({ className, value, min = 1, max, onChange, disabled = false, ...props }, ref) => {
    
    const handleMinus = () => {
      if (disabled) return;
      if (value > min) {
        onChange?.(value - 1)
      }
    }

    const handlePlus = () => {
      if (disabled) return;
      if (max === undefined || value < max) {
        onChange?.(value + 1)
      }
    }

    return (
      <div
        ref={ref}
        className={[
          "inline-flex h-9 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] p-1",
          disabled ? "opacity-50 pointer-events-none" : "",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <button
          type="button"
          onClick={handleMinus}
          disabled={disabled || value <= min}
          className="flex h-7 w-7 items-center justify-center rounded-sm text-[var(--color-muted-foreground)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] disabled:opacity-50 disabled:hover:bg-transparent"
        >
          <Minus className="h-4 w-4" />
          <span className="sr-only">Decrease quantity</span>
        </button>
        <div className="flex w-10 items-center justify-center">
          <span className="text-sm font-medium tabular-nums text-[var(--color-foreground)]">
            {value}
          </span>
        </div>
        <button
          type="button"
          onClick={handlePlus}
          disabled={disabled || (max !== undefined && value >= max)}
          className="flex h-7 w-7 items-center justify-center rounded-sm text-[var(--color-muted-foreground)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] disabled:opacity-50 disabled:hover:bg-transparent"
        >
          <Plus className="h-4 w-4" />
          <span className="sr-only">Increase quantity</span>
        </button>
      </div>
    )
  }
)
QuantitySelector.displayName = "QuantitySelector"
