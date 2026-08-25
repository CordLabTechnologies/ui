import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta = {
    title: 'Forms/Slider',
    component: Slider,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <div className="w-[300px]">
            <Slider defaultValue={[33]} max={100} step={1} />
        </div>
    ),
};
