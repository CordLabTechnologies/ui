import type { Meta } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

const meta = {
    title: 'App Shell/ProfileCard',
    component: ProfileCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProfileCard>;

export default meta;
type tStory = any;

const mockUser = {
    name: "Alex Rivera",
    handle: "arivera_dev",
    bio: "Senior Frontend Engineer | UI/UX Enthusiast | Building beautiful tools for the web.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop",
    location: "San Francisco, CA",
    website: "https://alexrivera.dev",
    joinedDate: "October 2019",
    followingCount: 342,
    followersCount: 1205
};

export const DefaultView: tStory = {
    args: {
        user: mockUser,
        isFollowing: false,
        className: "max-w-2xl mx-auto"
    }
};

export const OwnProfile: tStory = {
    args: {
        user: {
            "name": "Alex Rivera",
            "handle": "alex-river2",
            "bio": "Senior Frontend Engineer | UI/UX Enthusiast | Building beautiful tools for the web.",
            "avatarUrl": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
            "bannerUrl": "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=1000&auto=format&fit=crop",
            "location": "Texas, USA",
            "website": "https://alexrivera.dev",
            "joinedDate": "October 2019",
            "followingCount": "137",
            "followersCount": "1253"
        },
        isOwnProfile: true,
        className: "max-w-2xl mx-auto"
    }
};

export const MinimalData: tStory = {
    args: {
        user: {
            name: "Jane Smith",
            handle: "janesmith",
        },
        className: "max-w-2xl mx-auto"
    }
};
