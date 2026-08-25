import type { Meta, StoryObj } from '@storybook/react';
import { Coupon } from './Coupon';

const meta = {
    title: 'Marketing/Coupon',
    component: Coupon,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Coupon>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <div className="w-full max-w-sm">
            <Coupon 
                code="WELCOME20" 
                discount="20% OFF"
                description="Valid on your first order"
            />
        </div>
    ),
};
