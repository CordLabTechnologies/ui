export const COLORS = {
    primary: 'primary',
    secondary: 'secondary',
    destructive: 'destructive',
    success: 'success',
    warning: 'warning',
    info: 'info',

    background: 'background',
    foreground: 'foreground',
    muted: 'muted',
    border: 'border',
} as const;

export type ColorToken = (typeof COLORS)[keyof typeof COLORS];