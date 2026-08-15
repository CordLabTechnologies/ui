import { useEffect, useState } from "react";

import { BREAKPOINTS, DEVICE_TYPE, type DeviceType } from "../constants/device";

const getDeviceType = (width: number): DeviceType => {
    if (width < BREAKPOINTS.TABLET) {
        return DEVICE_TYPE.MOBILE;
    }

    if (width < BREAKPOINTS.DESKTOP) {
        return DEVICE_TYPE.TABLET;
    }

    return DEVICE_TYPE.DESKTOP;
};

export const useDevice = () => {
    const [deviceType, setDeviceType] = useState<DeviceType>(DEVICE_TYPE.DESKTOP,);

    useEffect(() => {
        const updateDeviceType = () => {
            setDeviceType(getDeviceType(window.innerWidth));
        };

        updateDeviceType();

        window.addEventListener('resize', updateDeviceType);

        return () => {
            window.removeEventListener('resize', updateDeviceType);
        };
    }, []);

    return {
        deviceType,
        isMobile: deviceType === DEVICE_TYPE.MOBILE,
        isTablet: deviceType === DEVICE_TYPE.TABLET,
        isDesktop: deviceType === DEVICE_TYPE.DESKTOP
    };
};