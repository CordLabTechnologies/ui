import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';

export type tButtonVariant =
    | 'primary'
    | 'secondary'
    | 'destructive'
    | 'ghost'
    | 'outline';

export type tButtonSize = 'sm' | 'md' | 'lg';

export interface iButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: tButtonVariant;
    size?: tButtonSize;
    loading?: boolean;
    iconOnly?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    children?: ReactNode;
}

const iconOnlySizeClasses: Record<tButtonSize, string> = {
    sm: 'size-8',
    md: 'size-10',
    lg: 'size-12',
};

const variantClasses: Record<tButtonVariant, string> = {
    primary:
        'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] cursor-pointer',

    secondary:
        'bg-[var(--color-secondary)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary-hover)] cursor-pointer',

    destructive:
        'bg-[var(--color-destructive)] text-white hover:bg-[var(--color-destructive-hover)] cursor-pointer',

    ghost:
        'bg-transparent text-[var(--color-foreground)] hover:bg-[var(--color-secondary)] cursor-pointer',

    outline:
        'border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-foreground)] hover:bg-[var(--color-secondary)] cursor-pointer',
};

export const Button = forwardRef<HTMLButtonElement, iButtonProps>(
    (
        {
            variant = 'primary',
            size = 'md',
            loading = false,
            disabled = false,
            startIcon,
            endIcon,
            iconOnly,
            children,
            className,
            ...props
        },
        ref
    ) => {
        const sizeClasses: Record<tButtonSize, string> = {
            sm: 'h-8 px-3 text-sm',
            md: 'h-10 px-4 text-sm',
            lg: 'h-12 px-6 text-base',
        };

        const classes = [
            'inline-flex items-center justify-center gap-2',
            'rounded-[var(--radius-md)] font-medium',
            'transition-all active:scale-[0.98]',
            'focus:outline-none focus:ring-2 focus:ring-offset-2',
            'disabled:pointer-events-none disabled:opacity-50',
            variantClasses[variant],
            iconOnly ? iconOnlySizeClasses[size] : sizeClasses[size],
            className,
        ]
            .filter(Boolean)
            .join(' ');

        return (
            <button
                ref={ref}
                {...props}
                disabled={disabled || loading}
                aria-busy={loading || undefined}
                className={classes}
            >
                {loading ? (
                    <span
                        aria-hidden="true"
                        className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
                    />
                ) : (
                    startIcon
                )}

                {children}

                {!loading && endIcon}
            </button>
        );
    }
);
Button.displayName = 'Button';