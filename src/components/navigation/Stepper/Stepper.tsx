import * as React from "react"
import { Check } from "lucide-react"

export interface iStep {
  title: string
  description?: string
  icon?: React.ReactNode
}

export interface iStepperProps extends React.HTMLAttributes<HTMLDivElement> {
  steps: iStep[]
  activeStep: number
  orientation?: "horizontal" | "vertical"
}

export const Stepper = React.forwardRef<HTMLDivElement, iStepperProps>(
  ({ className, steps, activeStep, orientation = "horizontal", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "flex w-full",
          orientation === "horizontal" ? "flex-row items-center justify-between" : "flex-col gap-4",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {steps.map((step, index) => {
          const isCompleted = index < activeStep
          const isActive = index === activeStep

          return (
            <div
              key={index}
              className={[
                "group relative flex",
                orientation === "horizontal" ? "flex-1 items-center" : "flex-row gap-4"
              ].filter(Boolean).join(" ")}
            >
              <div
                className={[
                  "flex items-center justify-center shrink-0 rounded-full border-2 transition-colors",
                  orientation === "horizontal" ? "h-10 w-10 z-10 bg-[var(--color-background)]" : "h-10 w-10",
                  isActive
                    ? "border-[var(--color-primary)] text-[var(--color-primary)]"
                    : isCompleted
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-[var(--color-border)] text-[var(--color-muted-foreground)]"
                ].filter(Boolean).join(" ")}
              >
                {isCompleted ? (
                  <Check className="h-5 w-5" />
                ) : step.icon ? (
                  step.icon
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>

              {/* Line Connector for Horizontal */}
              {orientation === "horizontal" && index < steps.length - 1 && (
                <div
                  className={[
                    "absolute top-1/2 left-[2.5rem] -translate-y-1/2 h-[2px] w-[calc(100%-3rem)] transition-colors",
                    isCompleted ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"
                  ].filter(Boolean).join(" ")}
                />
              )}

              {/* Line Connector for Vertical */}
              {orientation === "vertical" && index < steps.length - 1 && (
                <div
                  className={[
                    "absolute left-5 top-10 -ml-[1px] h-[calc(100%+1rem)] w-[2px] transition-colors",
                    isCompleted ? "bg-[var(--color-primary)]" : "bg-[var(--color-border)]"
                  ].filter(Boolean).join(" ")}
                />
              )}

              <div
                className={[
                  "flex flex-col",
                  orientation === "horizontal" ? "absolute top-12 left-1/2 -translate-x-1/2 text-center w-max" : "justify-center pb-8"
                ].filter(Boolean).join(" ")}
              >
                <span
                  className={[
                    "text-sm font-semibold tracking-tight",
                    isActive || isCompleted ? "text-[var(--color-foreground)]" : "text-[var(--color-muted-foreground)]"
                  ].filter(Boolean).join(" ")}
                >
                  {step.title}
                </span>
                {step.description && (
                  <span className="text-xs text-[var(--color-muted-foreground)] max-w-[150px]">
                    {step.description}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }
)
Stepper.displayName = "Stepper"
