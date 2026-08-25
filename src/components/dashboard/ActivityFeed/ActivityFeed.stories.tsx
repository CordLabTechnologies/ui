import type { Meta } from '@storybook/react';
import { ActivityFeed } from './ActivityFeed';
import { ShoppingBag, MessageSquare, Heart } from 'lucide-react';

const meta = {
    title: 'Dashboard/ActivityFeed',
    component: ActivityFeed,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ActivityFeed>;

export default meta;
type tStory = any;

const mockActivities = [
    {
        id: 1,
        user: {
            name: "Alice Johnson",
            avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
        },
        action: "purchased",
        target: "Ergonomic Office Chair",
        timestamp: "2 hours ago",
        icon: <ShoppingBag className="h-3.5 w-3.5 text-blue-500" />
    },
    {
        id: 2,
        user: {
            name: "Michael Chen",
        },
        action: "commented on",
        target: "Q3 Roadmap Document",
        timestamp: "4 hours ago",
        icon: <MessageSquare className="h-3.5 w-3.5 text-green-500" />
    },
    {
        id: 3,
        user: {
            name: "Sarah Smith",
            avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
        },
        action: "liked your post",
        timestamp: "Yesterday at 4:30 PM",
        icon: <Heart className="h-3.5 w-3.5 text-red-500" />
    },
    {
        id: 4,
        user: {
            name: "David Kim",
        },
        action: "deployed version 2.4.1 to",
        target: "Production",
        timestamp: "Yesterday at 11:15 AM",
        // Using fallback avatar instead of icon
    }
];

export const Default: tStory = {
    args: {
        title: "Recent Activity",
        items: mockActivities,
        className: "w-full max-w-lg"
    }
};
