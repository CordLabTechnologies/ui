# 🧭 Navigation

Welcome to the **Navigation** category! These components help users move around your application and find what they need.

## Components Included

- `DropdownMenu`: A menu that drops down when clicking a button.
- `ContextMenu`: A menu that appears on right-click.
- `UserMenu`: A specialized dropdown for user profiles (logout, settings).
- `Breadcrumb`: Shows the user's current location (Home > Category > Item).
- `Pagination`: Page numbers for navigating long lists.
- `Stepper`: A wizard-like progress tracker (Step 1 -> Step 2 -> Step 3).

## How to use (Beginner Friendly)

### Example: Breadcrumbs
```tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@cordlab/ui/navigation"

export default function PageHeader() {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>Current Page</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
```

### Reusability Tips
- **Dropdowns vs Selects**: Use `DropdownMenu` for *actions* (like "Edit" or "Delete"). Use `Select` (from the `elements` folder) for *choosing a value* in a form.
