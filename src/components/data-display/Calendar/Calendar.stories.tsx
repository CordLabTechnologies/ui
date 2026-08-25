import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import { useState } from 'react';

const meta = {
    title: 'Components/Calendar',
    component: Calendar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());
        return (
            <div className="border border-[var(--color-border)] rounded-md">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                />
            </div>
        );
    },
};
