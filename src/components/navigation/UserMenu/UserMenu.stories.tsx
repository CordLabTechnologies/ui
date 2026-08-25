import type { Meta } from '@storybook/react';
import { UserMenu } from './UserMenu';

const meta = {
    title: 'App Shell/UserMenu',
    component: UserMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UserMenu>;

export default meta;
type tStory = any;

export const Default: tStory = {
    args: {
        user: {
            name: "Alice Johnson",
            email: "alice@example.com",
            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop"
        },
        onLogout: () => console.log('Logout clicked'),
        onSettings: () => console.log('Settings clicked'),
        onBilling: () => console.log('Billing clicked'),
        onProfile: () => console.log('Profile clicked')
    },
};

export const WithoutAvatarImage: tStory = {
    args: {
        user: {
            name: "John Doe",
            email: "john.doe@example.com",
        },
    },
};
