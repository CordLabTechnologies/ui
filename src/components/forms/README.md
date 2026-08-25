# 📋 Forms

Welcome to the **Forms** category! This folder contains complex input components that go beyond standard HTML inputs.

## Components Included

- `FormField`: A wrapper that handles Labels, Inputs, and Error messages all in one place.
- `DatePicker`: A pop-up calendar for selecting dates.
- `Combobox`: A searchable dropdown select menu.
- `OtpInput`: One-Time Password inputs (the boxes you type 6-digit SMS codes into).
- `Dropzone`: Drag-and-drop file upload areas.
- `ProfileEditForm`: A fully pre-built form for editing user profiles.

## How to use (Beginner Friendly)

### Example: FormField
`FormField` is incredibly powerful because it automatically links the label, input, and error messages together for accessibility.

```tsx
import { FormField } from "@cordlab/ui/forms"
import { Input } from "@cordlab/ui/elements"

export default function Signup() {
  return (
    <FormField 
      label="Username" 
      error="Username is already taken."
    >
      <Input placeholder="Enter a username" />
    </FormField>
  )
}
```

### Reusability Tips
- When building large forms (like signups or checkout), always wrap your `Input` or `Select` components inside a `FormField` to ensure consistent spacing and error handling.
