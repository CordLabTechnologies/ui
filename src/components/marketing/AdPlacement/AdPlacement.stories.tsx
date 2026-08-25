import type { Meta, StoryObj } from '@storybook/react';
import { AdPlacement } from './AdPlacement';
import { useEffect, useState } from 'react';

const meta = {
    title: 'Marketing/AdPlacement',
    component: AdPlacement,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AdPlacement>;

export default meta;
type tStory = any;

const SimulatedAd = ({ children }: { children: React.ReactNode }) => {
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
        const timer = setTimeout(() => setLoaded(true), 1500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AdPlacement isLoaded={loaded} size="mediumRectangle">
            <div className="bg-[var(--color-primary)] w-full h-full flex items-center justify-center text-white text-xl font-bold">
                {children}
            </div>
        </AdPlacement>
    );
};

export const Default: tStory = {
    render: () => (
        <SimulatedAd>
            Special Offer!
        </SimulatedAd>
    ),
};

export const Leaderboard: tStory = {
    render: () => (
        <AdPlacement isLoaded size="leaderboard">
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-hover)] w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                Summer Sale - 50% Off Everything
            </div>
        </AdPlacement>
    ),
};

export const MobileBanner: tStory = {
    render: () => (
        <AdPlacement isLoaded size="mobileBanner" className="md:flex">
            <div className="bg-black w-full h-full flex items-center justify-center text-white text-sm font-bold">
                Download Our App
            </div>
        </AdPlacement>
    ),
};
