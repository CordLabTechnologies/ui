import type { Meta, StoryObj } from '@storybook/react';
import { FeatureGrid } from './FeatureGrid';
import { Zap, Shield, Smartphone, Globe, Layers } from 'lucide-react';

const meta = {
    title: 'Layout/FeatureGrid',
    component: FeatureGrid,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FeatureGrid>;

export default meta;
type tStory = any;

const features = [
    {
        title: "Lightning Fast",
        description: "Built on modern web technologies for maximum performance.",
        icon: <Zap className="h-6 w-6" />,
        className: "md:col-span-2 md:row-span-2",
        content: <div className="h-32 w-full rounded-xl bg-[var(--color-background)]/50 border border-[var(--color-border)] border-dashed mt-4 flex items-center justify-center text-[var(--color-muted-foreground)]">Interactive Graphic</div>
    },
    {
        title: "Bank-grade Security",
        description: "Your data is encrypted at rest and in transit.",
        icon: <Shield className="h-6 w-6" />
    },
    {
        title: "Mobile First",
        description: "Responsive design that works on any device.",
        icon: <Smartphone className="h-6 w-6" />
    },
    {
        title: "Global CDN",
        description: "Content delivered fast, anywhere in the world.",
        icon: <Globe className="h-6 w-6" />,
        className: "md:col-span-2"
    },
    {
        title: "Easy Integrations",
        description: "Connect with your favorite tools in seconds.",
        icon: <Layers className="h-6 w-6" />
    }
];

export const Default: tStory = {
    render: () => (
        <div className="py-12">
            <div className="text-center mb-12 max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
                    Everything you need
                </h2>
                <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
                    All the features to build your next big project faster than ever.
                </p>
            </div>
            <FeatureGrid features={features} />
        </div>
    ),
};
