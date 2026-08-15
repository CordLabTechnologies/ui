import type { CSSProperties, ReactNode } from 'react';

import { ICON_SIZE, type IconSize } from '../tokens';

export interface IconProps {
    size?: IconSize;
    color?: string;
    className?: string;
    children: ReactNode;
}

export function Icon({
    size = 'md',
    color = 'currentColor',
    className,
    children,
}: IconProps) {
    const style: CSSProperties = {
        width: ICON_SIZE[size],
        height: ICON_SIZE[size],
        color,
    };

    return (
        <span
            aria-hidden="true"
            className={[
                'inline-flex shrink-0 items-center justify-center',
                className,
            ]
                .filter(Boolean)
                .join(' ')}
            style={style}
        >
            {children}
        </span>
    );
}