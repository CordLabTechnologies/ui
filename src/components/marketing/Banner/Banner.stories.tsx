import type { Meta, StoryObj } from '@storybook/react';
import { Banner } from './Banner';

const meta = {
    title: 'Marketing/Banner',
    component: Banner,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Banner>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <Banner onClose={() => console.log('closed')}>
            We just launched a new feature! Check out our new dashboard components.
        </Banner>
    ),
};

export const Promotional: tStory = {
    render: () => (
        <Banner variant="promotional" onClose={() => console.log('closed')}>
            Get 50% off all annual plans during our Summer Sale.
        </Banner>
    ),
};

export const Warning: tStory = {
    render: () => (
        <Banner variant="warning" onClose={() => console.log('closed')}>
            We are currently experiencing degraded performance in US-East.
        </Banner>
    ),
};
