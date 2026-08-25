import type { Meta } from '@storybook/react';
import { EcommerceStorefront } from './EcommerceStorefront';

const meta = {
    title: 'Templates/E-commerce Storefront',
    component: EcommerceStorefront,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof EcommerceStorefront>;

export default meta;
type tStory = any;

export const FullView: tStory = {
    args: {}
};
