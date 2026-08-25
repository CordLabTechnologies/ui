import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";

export interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, iInputProps>(
    ({ className, error, startIcon, endIcon, disabled, ...props }, ref) => {
        const baseClasses = [
            'flex w-full rounded-[var(--radius-md)] border px-3 py-2 text-sm transition-colors',
            'bg-[var(--color-background)] text-[var(--color-foreground)] placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error 
                ? 'border-[var(--color-destructive)] focus:ring-[var(--color-destructive)]' 
                : 'border-[var(--color-border)] focus:ring-[var(--color-primary)]',
            startIcon ? 'pl-10' : '',
            endIcon ? 'pr-10' : '',
            className
        ].filter(Boolean).join(' ');

        if (!startIcon && !endIcon) {
            return (
                <input
                    {...props}
                    ref={ref}
                    disabled={disabled}
                    className={baseClasses}
                    aria-invalid={!!error}
                />
            );
        }

        return (
            <div className="relative w-full inline-flex items-center">
                {startIcon && (
                    <div className="pointer-events-none absolute left-3 text-gray-500">
                        {startIcon}
                    </div>
                )}
                <input
                    {...props}
                    ref={ref}
                    disabled={disabled}
                    className={baseClasses}
                    aria-invalid={!!error}
                />
                {endIcon && (
                    <div className="pointer-events-none absolute right-3 text-gray-500">
                        {endIcon}
                    </div>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";