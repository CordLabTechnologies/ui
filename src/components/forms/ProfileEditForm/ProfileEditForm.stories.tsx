import type { Meta } from '@storybook/react';
import { ProfileEditForm } from './ProfileEditForm';

const meta = {
    title: 'App Shell/ProfileEditForm',
    component: ProfileEditForm,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileEditForm>;

export default meta;
type tStory = any;

export const Default: tStory = {
    args: {
        initialData: {
            name: "Alex Rivera",
            handle: "arivera_dev",
            bio: "Senior Frontend Engineer building beautiful things.",
            location: "San Francisco, CA",
            website: "https://alexrivera.dev",
            avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
        },
        className: "max-w-3xl mx-auto rounded-xl border border-[var(--color-border)] p-6 bg-[var(--color-background)] shadow-sm",
        onSave: (data: any) => console.log('Saved data:', data),
        onCancel: () => console.log('Cancel clicked')
    }
};

export const EmptyForm: tStory = {
    args: {
        className: "max-w-3xl mx-auto rounded-xl border border-[var(--color-border)] p-6 bg-[var(--color-background)] shadow-sm",
        onSave: (data: any) => alert(JSON.stringify(data, null, 2)),
    }
};
