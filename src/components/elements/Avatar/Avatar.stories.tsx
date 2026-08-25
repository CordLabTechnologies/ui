import type { Meta, StoryObj } from '@storybook/react';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

const meta = {
    title: 'Primitives/Avatar',
    component: Avatar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
    ),
};

export const Fallback: tStory = {
    render: () => (
        <Avatar>
            <AvatarImage src="broken-link.jpg" alt="@john" />
            <AvatarFallback>JD</AvatarFallback>
        </Avatar>
    ),
};
