import type { Meta } from '@storybook/react';
import { MarketingLanding } from './MarketingLanding';

const meta = {
    title: 'Templates/Marketing Landing',
    component: MarketingLanding,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MarketingLanding>;

export default meta;
type tStory = any;

export const FullView: tStory = {
    args: {}
};
