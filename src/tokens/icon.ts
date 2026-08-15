export const ICON_SIZE = {
    xs: '0.75rem',
    sm: '1rem',
    md: '1.25rem',
    lg: '1.5rem',
    xl: '2rem',
} as const;

export type IconSize = keyof typeof ICON_SIZE;