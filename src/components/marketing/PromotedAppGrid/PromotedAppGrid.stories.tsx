import type { Meta, StoryObj } from '@storybook/react';
import { PromotedAppGrid } from './PromotedAppGrid';

const meta = {
    title: 'Marketing/PromotedAppGrid',
    component: PromotedAppGrid,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PromotedAppGrid>;

export default meta;
type tStory = any;

const mockApps = [
    {
        id: "1",
        name: "Linear",
        developer: "Linear Orbit, Inc.",
        description: "A better way to build products. Meet the new standard for modern software development.",
        icon: <div className="bg-zinc-900 text-white w-full h-full flex items-center justify-center font-bold text-xl">L</div>,
        badge: "Featured",
        actionType: "visit" as const
    },
    {
        id: "2",
        name: "Figma",
        developer: "Figma, Inc.",
        description: "The collaborative interface design tool. Design, prototype, and gather feedback all in one place.",
        icon: <div className="bg-pink-500 text-white w-full h-full flex items-center justify-center font-bold text-xl">F</div>,
        actionType: "install" as const
    },
    {
        id: "3",
        name: "Raycast",
        developer: "Raycast Technologies",
        description: "Supercharged productivity for Mac. Control your tools with a few keystrokes.",
        icon: <div className="bg-red-500 text-white w-full h-full flex items-center justify-center font-bold text-xl">R</div>,
        badge: "Top Rated",
        actionType: "install" as const
    },
];

export const Default: tStory = {
    render: () => (
        <PromotedAppGrid apps={mockApps} />
    ),
};
