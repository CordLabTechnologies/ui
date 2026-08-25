import type { Meta } from '@storybook/react';
import { NoteCard } from './NoteCard';

const meta = {
    title: 'Content/NoteCard',
    component: NoteCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof NoteCard>;

export default meta;
type tStory = any;

export const Default: tStory = {
    args: {
        title: 'Meeting Notes: Project X',
        previewText: 'Discussed the upcoming milestones for Q3. We need to focus on user retention and improving the onboarding flow...',
        date: 'Oct 24, 2023',
        tags: ['meeting', 'q3', 'planning'],
        className: 'w-full max-w-sm',
        onOptionsClick: () => alert('Options clicked!')
    },
};

export const PinnedWithColor: tStory = {
    args: {
        title: 'Weekly Groceries',
        previewText: 'Milk, Eggs, Bread, Bananas, Coffee beans (dark roast), Chicken breast, Rice, Pasta sauce...',
        date: 'Today, 9:00 AM',
        isPinned: true,
        color: '#f59e0b', // Amber-500
        className: 'w-full max-w-sm',
    },
};
