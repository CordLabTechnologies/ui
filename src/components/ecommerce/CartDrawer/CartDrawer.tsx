import * as React from "react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetFooter, SheetClose } from "../../layout/Sheet"
import { Button } from "../../elements/Button"
import { ShoppingCart, X } from "lucide-react"
import { QuantitySelector } from "../../ecommerce/QuantitySelector"

export interface iCartItem {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export interface iCartDrawerProps {
  children?: React.ReactNode // Trigger element
  items: iCartItem[]
  onUpdateQuantity?: (id: string, quantity: number) => void
  onRemoveItem?: (id: string) => void
  onCheckout?: () => void
  currency?: string
}

export const CartDrawer: React.FC<iCartDrawerProps> = ({
  children,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  currency = "$"
}) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children || (
          <Button variant="outline" className="relative" aria-label="Open cart">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-[10px] font-bold text-white">
                {totalItems}
              </span>
            )}
          </Button>
        )}
      </SheetTrigger>
      <SheetContent side="right" className="flex w-full flex-col sm:max-w-md bg-[var(--color-background)]">
        <SheetHeader className="border-b border-[var(--color-border)] px-6 py-4">
          <SheetTitle className="text-xl">Your Cart</SheetTitle>
        </SheetHeader>
        
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-[var(--color-muted-foreground)]">
              <ShoppingCart className="mb-4 h-12 w-12 opacity-20" />
              <p className="text-lg font-medium">Your cart is empty</p>
              <p className="text-sm">Looks like you haven't added anything yet.</p>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  {item.image && (
                    <div className="h-20 w-20 shrink-0 overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-secondary)]/50">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="line-clamp-2 text-sm font-semibold text-[var(--color-foreground)]">{item.name}</h4>
                      <button
                        onClick={() => onRemoveItem?.(item.id)}
                        className="text-[var(--color-muted-foreground)] hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <QuantitySelector
                        value={item.quantity}
                        onChange={(val) => onUpdateQuantity?.(item.id, val)}
                      />
                      <span className="font-bold text-[var(--color-foreground)]">
                        {currency}{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-[var(--color-border)] p-6">
            <div className="mb-4 flex items-center justify-between text-lg font-bold">
              <span>Subtotal</span>
              <span>{currency}{subtotal.toFixed(2)}</span>
            </div>
            <p className="mb-4 text-sm text-[var(--color-muted-foreground)]">
              Shipping and taxes calculated at checkout.
            </p>
            <Button variant="primary" className="w-full" size="lg" onClick={onCheckout}>
              Checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
CartDrawer.displayName = "CartDrawer"
