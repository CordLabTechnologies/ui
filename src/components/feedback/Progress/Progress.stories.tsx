import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta = {
    title: 'Feedback/Progress',
    component: Progress,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Progress>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <div className="w-[300px]">
            <Progress value={33} />
        </div>
    ),
};
