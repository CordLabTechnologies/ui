import type { Meta } from '@storybook/react';
import { SaaSDashboard } from './SaaSDashboard';

const meta = {
    title: 'Templates/SaaS Dashboard',
    component: SaaSDashboard,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SaaSDashboard>;

export default meta;
type tStory = any;

export const FullView: tStory = {
    args: {}
};
