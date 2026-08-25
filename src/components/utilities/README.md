# 🛠️ Utilities

Welcome to the **Utilities** category! These are small, highly-specialized helper components that provide niche functionality.

## Components Included

- `SwipeAction`: A wrapper that allows users to swipe left/right on mobile (e.g., swipe to delete an email).
- `ColorSwatch`: A visual selector for picking a color or gradient.
- `Countdown`: A timer component (e.g., "Sale ends in 02:14:59").
- `Command`: A specialized `<kbd>` wrapper or command palette interface.

## How to use (Beginner Friendly)

### Example: Countdown Timer
```tsx
import { Countdown } from "@cordlab/ui/utilities"

export default function FlashSale() {
  return (
    <div className="bg-red-500 text-white p-4 text-center rounded-lg">
      <h3 className="font-bold">Flash Sale Ends In:</h3>
      {/* Target date should be a future Date object */}
      <Countdown targetDate={new Date(Date.now() + 1000 * 60 * 60 * 24)} />
    </div>
  )
}
```

### Reusability Tips
- Use `SwipeAction` heavily if you are building a mobile-first application. It is excellent for lists (like a mobile inbox or todo list).
