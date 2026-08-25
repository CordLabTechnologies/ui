import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { useState } from 'react';

const meta = {
    title: 'Forms/DatePicker',
    component: DatePicker,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DatePicker>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => {
        const [date, setDate] = useState<Date | undefined>(new Date());
        return (
            <DatePicker date={date} onSelect={setDate} />
        );
    },
};
