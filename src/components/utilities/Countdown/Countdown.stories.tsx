import type { Meta, StoryObj } from '@storybook/react';
import { Countdown } from './Countdown';

const meta = {
    title: 'Marketing/Countdown',
    component: Countdown,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Countdown>;

export default meta;
type tStory = any;

// Set target to 3 days from now
const target = new Date();
target.setDate(target.getDate() + 3);

export const Default: tStory = {
    render: () => (
        <div className="flex flex-col items-center gap-8 p-12 bg-[var(--color-secondary)]/30 rounded-3xl">
            <h3 className="text-2xl font-bold text-[var(--color-foreground)]">Sale ends in</h3>
            <Countdown targetDate={target} onComplete={() => console.log('Done!')} />
        </div>
    ),
};
