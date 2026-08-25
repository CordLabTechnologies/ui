# 🛒 E-Commerce

Welcome to the **E-Commerce** category! This folder contains everything you need to build stunning online storefronts.

## Components Included

- `ProductCard`: A beautiful card showing an item, price, and Add to Cart button.
- `QuantitySelector`: The (+ / -) button for choosing how many items to buy.
- `Rating`: Star ratings.
- `ImageGallery`: Thumbnail selectors for viewing product photos.
- `FilterPanel`: The sidebar for filtering by category or price.
- `CartDrawer`: A slide-out shopping cart.
- `PromoCode` / `Coupon`: Inputs for applying discounts.

## How to use (Beginner Friendly)

### Example: Product Card
```tsx
import { ProductCard } from "@cordlab/ui/ecommerce"
import { Badge } from "@cordlab/ui/elements"

export default function Shop() {
  return (
    <ProductCard 
      id="1"
      title="Wireless Headphones"
      price={299.99}
      imageSrc="/headphones.jpg"
      badge={<Badge>SALE</Badge>}
      onAddToCart={() => console.log("Added!")}
    />
  )
}
```

### Reusability Tips
- The `CartDrawer` is designed to be placed at the root of your application (like in your Navbar) so it can slide out over any page.
