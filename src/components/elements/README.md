# 🧱 Elements

Welcome to the **Elements** category! This folder contains the most fundamental building blocks of the CordLab UI kit. These are the primitive components you will use everywhere.

## Components Included

- `Button`: The standard clickable action element.
- `Input`, `Textarea`: For standard text entry.
- `Checkbox`, `RadioGroup`, `Select`, `Switch`, `Slider`: For user selections and toggles.
- `Badge`: Small visual labels for statuses.
- `Avatar`: User profile images.
- `Label`: Accessible labels for your form elements.

## How to use (Beginner Friendly)

Elements are designed to be extremely simple to use. Just import them and drop them into your JSX.

### Example: A Simple Form
```tsx
import { Input, Button, Label, Switch } from "@cordlab/ui/elements"

export default function MyForm() {
  return (
    <div className="flex flex-col gap-4 max-w-sm">
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="you@example.com" />
      </div>
      
      <div className="flex items-center gap-2">
        <Switch id="marketing" />
        <Label htmlFor="marketing">Receive marketing emails</Label>
      </div>

      <Button variant="primary">Submit</Button>
    </div>
  )
}
```

### Reusability Tips
- **Variants**: Components like `Button` and `Badge` have a `variant` prop (e.g., `variant="outline"` or `variant="destructive"`). Always use variants instead of manually overriding colors!
- **Accessibility**: Always pair an `Input` or `Checkbox` with a `Label` for screen readers.
