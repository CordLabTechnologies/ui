# 💬 Feedback

Welcome to the **Feedback** category! These components are crucial for communicating state, success, errors, or loading status to the user.

## Components Included

- `Toast`: Small pop-up notifications (e.g., "Saved successfully!").
- `Alert`: Static inline warnings or information boxes.
- `Dialog`: Modal windows that force user interaction.
- `Skeleton`: Animated placeholder blocks to show while data is loading.
- `Progress`: Loading bars.
- `Tooltip` / `HoverCard`: Small contextual popups when hovering over elements.
- `EmptyState`: Beautiful placeholders for when there is no data to show.

## How to use (Beginner Friendly)

### Example: Loading State
Whenever you fetch data from an API, show a `Skeleton` so the page doesn't look broken.

```tsx
import { Skeleton } from "@cordlab/ui/feedback"

export default function LoadingProfile() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  )
}
```

### Reusability Tips
- **Toasts**: Toasts are triggered via a function call (usually a hook like `useToast`), not just by rendering a component.
- **EmptyStates**: Always use an `EmptyState` instead of just rendering nothing when a list or table is empty!
