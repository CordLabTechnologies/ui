import * as React from "react"
import { Button } from "../../elements/Button"
import { Badge } from "../../elements/Badge"

export interface iProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc: string
  imageAlt?: string
  title: string
  description?: string
  price: number
  originalPrice?: number
  currency?: string
  badgeText?: string
  onAddToCart?: () => void
  actionText?: string
}

export const ProductCard = React.forwardRef<HTMLDivElement, iProductCardProps>(
  (
    {
      className,
      imageSrc,
      imageAlt = "Product Image",
      title,
      description,
      price,
      originalPrice,
      currency = "$",
      badgeText,
      onAddToCart,
      actionText = "Add to Cart",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "group relative flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-background)] shadow-sm transition-all hover:shadow-md",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        <div className="relative aspect-square overflow-hidden bg-[var(--color-secondary)]/30">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {badgeText && (
            <Badge className="absolute left-2 top-2 z-10">{badgeText}</Badge>
          )}
        </div>
        <div className="flex flex-1 flex-col p-4">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h3 className="font-semibold text-[var(--color-foreground)] line-clamp-2">
              {title}
            </h3>
            <div className="flex flex-col items-end">
              <span className="font-bold text-[var(--color-foreground)]">
                {currency}
                {price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-xs text-[var(--color-muted-foreground)] line-through">
                  {currency}
                  {originalPrice.toFixed(2)}
                </span>
              )}
            </div>
          </div>
          {description && (
            <p className="mb-4 text-sm text-[var(--color-muted-foreground)] line-clamp-2">
              {description}
            </p>
          )}
          <div className="mt-auto pt-4">
            <Button
              className="w-full"
              variant="primary"
              onClick={onAddToCart}
            >
              {actionText}
            </Button>
          </div>
        </div>
      </div>
    )
  }
)

ProductCard.displayName = "ProductCard"
