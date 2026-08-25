import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

const OtpInput = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={[
      "flex items-center gap-2 has-[:disabled]:opacity-50",
      containerClassName
    ].filter(Boolean).join(" ")}
    className={["disabled:cursor-not-allowed", className].filter(Boolean).join(" ")}
    {...props}
  />
))
OtpInput.displayName = "OtpInput"

const OtpGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={["flex items-center", className].filter(Boolean).join(" ")} {...props} />
))
OtpGroup.displayName = "OtpGroup"

const OtpSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <div
      ref={ref}
      className={[
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-[var(--color-border)] text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-[var(--color-primary)] ring-offset-[var(--color-background)]",
        className
      ].filter(Boolean).join(" ")}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-4 w-px animate-caret-blink bg-[var(--color-foreground)] duration-1000" />
        </div>
      )}
    </div>
  )
})
OtpSlot.displayName = "OtpSlot"

const OtpSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <div ref={ref} role="separator" {...props}>
    <Dot />
  </div>
))
OtpSeparator.displayName = "OtpSeparator"

export { OtpInput, OtpGroup, OtpSlot, OtpSeparator }
