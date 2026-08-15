export const DEVICE_TYPE = {
    MOBILE: "mobile",
    TABLET: "tablet",
    DESKTOP: "desktop",
} as const;

export type DeviceType =
    (typeof DEVICE_TYPE)[keyof typeof DEVICE_TYPE];

export const BREAKPOINTS = {
    MOBILE: 0,
    TABLET: 768,
    DESKTOP: 1024,
} as const;

export type Breakpoint =
    (typeof BREAKPOINTS)[keyof typeof BREAKPOINTS];