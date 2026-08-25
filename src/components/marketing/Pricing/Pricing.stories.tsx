import type { Meta, StoryObj } from '@storybook/react';
import { Pricing } from './Pricing';

const meta = {
    title: 'Marketing/Pricing',
    component: Pricing,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Pricing>;

export default meta;
type tStory = any;

const tiers = [
    {
        name: 'Hobby',
        id: 'tier-hobby',
        href: '#',
        priceMonthly: '$15',
        description: 'The essentials to provide your best work for clients.',
        features: [
            { name: '5 products' },
            { name: 'Up to 1,000 subscribers' },
            { name: 'Basic analytics' },
            { name: '48-hour support response time' },
        ],
    },
    {
        name: 'Freelancer',
        id: 'tier-freelancer',
        href: '#',
        priceMonthly: '$30',
        description: 'The essentials to provide your best work for clients.',
        features: [
            { name: '5 products' },
            { name: 'Up to 1,000 subscribers' },
            { name: 'Basic analytics' },
            { name: '48-hour support response time' },
        ],
        mostPopular: true,
    },
    {
        name: 'Startup',
        id: 'tier-startup',
        href: '#',
        priceMonthly: '$60',
        description: 'A plan that scales with your rapidly growing business.',
        features: [
            { name: '25 products' },
            { name: 'Up to 10,000 subscribers' },
            { name: 'Advanced analytics' },
            { name: '24-hour support response time' },
        ],
    },
];

export const Default: tStory = {
    render: () => (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-[var(--color-secondary)]/30 rounded-3xl">
            <div className="mx-auto max-w-7xl text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-[var(--color-foreground)] sm:text-4xl">
                    Pricing plans for teams of all sizes
                </h2>
                <p className="mt-4 text-lg text-[var(--color-muted-foreground)]">
                    Choose an affordable plan that's packed with the best features for engaging your audience.
                </p>
            </div>
            <Pricing tiers={tiers} />
        </div>
    ),
};
