import type { Meta, StoryObj } from '@storybook/react';
import { SwipeAction } from './SwipeAction';

const meta = {
    title: 'Components/SwipeAction',
    component: SwipeAction,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SwipeAction>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <div className="w-[350px]">
            <SwipeAction 
                onConfirm={() => console.log('Confirmed!')} 
            />
        </div>
    ),
};

export const CustomLabels: tStory = {
    render: () => (
        <div className="w-[350px]">
            <SwipeAction 
                label="Slide to Pay $12.50"
                successLabel="Payment Successful"
                onConfirm={() => console.log('Paid!')} 
                resetAfterSuccess
                successDuration={3000}
            />
        </div>
    ),
};
