import { forwardRef, type TextareaHTMLAttributes } from 'react';

export interface iTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, iTextareaProps>(
    ({ className, error, disabled, ...props }, ref) => {
        const baseClasses = [
            'flex min-h-[80px] w-full rounded-[var(--radius-md)] border px-3 py-2 text-sm transition-colors',
            'bg-[var(--color-background)] text-[var(--color-foreground)] placeholder:text-gray-400',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:cursor-not-allowed disabled:opacity-50',
            error
                ? 'border-[var(--color-destructive)] focus:ring-[var(--color-destructive)]'
                : 'border-[var(--color-border)] focus:ring-[var(--color-primary)]',
            className
        ].filter(Boolean).join(' ');

        return (
            <textarea
                {...props}
                ref={ref}
                disabled={disabled}
                className={baseClasses}
                aria-invalid={!!error}
            />
        );
    }
);

Textarea.displayName = "Textarea";
