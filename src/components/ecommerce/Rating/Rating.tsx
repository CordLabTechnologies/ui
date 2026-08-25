import * as React from "react"
import { Star } from "lucide-react"

export interface iRatingProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: number
  max?: number
  readOnly?: boolean
  onChange?: (value: number) => void
  size?: 'sm' | 'md' | 'lg'
}

export const Rating = React.forwardRef<HTMLDivElement, iRatingProps>(
  ({ className, value, max = 5, readOnly = false, onChange, size = 'md', ...props }, ref) => {
    
    const [hoverValue, setHoverValue] = React.useState<number | null>(null)

    const sizeClasses = {
      sm: 'h-3 w-3',
      md: 'h-5 w-5',
      lg: 'h-7 w-7'
    }

    const gapClasses = {
      sm: 'gap-0.5',
      md: 'gap-1',
      lg: 'gap-1.5'
    }

    return (
      <div
        ref={ref}
        className={[
          "inline-flex items-center",
          gapClasses[size],
          className
        ].filter(Boolean).join(" ")}
        onMouseLeave={() => !readOnly && setHoverValue(null)}
        {...props}
      >
        {Array.from({ length: max }).map((_, index) => {
          const ratingValue = index + 1
          const isFilled = hoverValue !== null ? ratingValue <= hoverValue : ratingValue <= value
          const isHalf = hoverValue === null && value > index && value < index + 1 // For readOnly fractional values

          return (
            <button
              key={index}
              type="button"
              disabled={readOnly}
              className={[
                "relative text-[var(--color-muted-foreground)] transition-colors",
                !readOnly ? "cursor-pointer hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-sm" : "cursor-default",
                isFilled ? "text-yellow-400" : ""
              ].filter(Boolean).join(" ")}
              onMouseEnter={() => !readOnly && setHoverValue(ratingValue)}
              onClick={() => !readOnly && onChange?.(ratingValue)}
              aria-label={`Rate ${ratingValue} out of ${max}`}
            >
              {isHalf ? (
                <>
                  <Star className={sizeClasses[size]} strokeWidth={2} />
                  <div className="absolute inset-0 overflow-hidden text-yellow-400" style={{ width: `${(value % 1) * 100}%` }}>
                    <Star className={sizeClasses[size]} fill="currentColor" strokeWidth={2} />
                  </div>
                </>
              ) : (
                <Star 
                  className={sizeClasses[size]} 
                  fill={isFilled ? "currentColor" : "none"} 
                  strokeWidth={2} 
                />
              )}
            </button>
          )
        })}
      </div>
    )
  }
)
Rating.displayName = "Rating"
