import * as React from "react"

export type tBadgeVariant = "default" | "secondary" | "destructive" | "outline"

export interface iBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: tBadgeVariant
}

export function Badge({ className, variant = "default", ...props }: iBadgeProps) {
    const variantClasses: Record<tBadgeVariant, string> = {
        default: "border-transparent bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover,var(--color-primary))]/80",
        secondary: "border-transparent bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary-hover,var(--color-secondary))]/80",
        destructive: "border-transparent bg-[var(--color-destructive)] text-white hover:bg-[var(--color-destructive-hover,var(--color-destructive))]/80",
        outline: "text-[var(--color-foreground)] border-[var(--color-border)]",
    }

    const classes = [
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2",
        variantClasses[variant],
        className
    ].filter(Boolean).join(" ")

    return (
        <div className={classes} {...props} />
    )
}
