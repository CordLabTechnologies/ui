import * as React from "react"
import { Label } from "../../elements/Label"
import { Slot } from "@radix-ui/react-slot"

export interface iFormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode
  error?: string | boolean
  helperText?: React.ReactNode
  required?: boolean
  htmlFor?: string
}

const FormField = React.forwardRef<HTMLDivElement, iFormFieldProps>(
  ({ className, label, error, helperText, required, htmlFor, children, ...props }, ref) => {
    return (
      <div ref={ref} className={["grid gap-2", className].filter(Boolean).join(" ")} {...props}>
        {label && (
          <Label htmlFor={htmlFor} required={required} className={error ? "text-[var(--color-destructive)]" : ""}>
            {label}
          </Label>
        )}
        {children}
        {helperText && !error && (
          <p className="text-[0.8rem] text-[var(--color-muted-foreground,gray)]">{helperText}</p>
        )}
        {error && typeof error === "string" && (
          <p className="text-[0.8rem] font-medium text-[var(--color-destructive)]">{error}</p>
        )}
      </div>
    )
  }
)
FormField.displayName = "FormField"

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  return <Slot ref={ref} {...props} />
})
FormControl.displayName = "FormControl"

export { FormField, FormControl }
