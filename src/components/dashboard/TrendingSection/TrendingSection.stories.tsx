import type { Meta } from '@storybook/react';
import { TrendingSection } from './TrendingSection';

const meta = {
    title: 'Dashboard/TrendingSection',
    component: TrendingSection,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TrendingSection>;

export default meta;
type tStory = any;

const mockTopics = [
    { id: 1, title: "#React19", subtitle: "24.5K Posts", trend: "up" as const, score: "+15%" },
    { id: 2, title: "Design Systems", subtitle: "12.1K Posts", trend: "up" as const, score: "+8%" },
    { id: 3, title: "Tailwind v4", subtitle: "Tech & Programming", trend: "flat" as const },
    { id: 4, title: "Next.js App Router", subtitle: "8.2K Posts", trend: "down" as const, score: "-3%" },
];

export const SocialTrending: tStory = {
    args: {
        title: "Trending Topics",
        items: mockTopics,
        className: "w-full max-w-sm",
        onViewAll: () => alert("Viewing all trends...")
    }
};

const mockProducts = [
    { id: 'p1', title: "Wireless Noise-Cancelling Headphones", subtitle: "Electronics", trend: "up" as const, score: "4.8 ★" },
    { id: 'p2', title: "Ergonomic Office Chair", subtitle: "Furniture", trend: "up" as const, score: "4.5 ★" },
    { id: 'p3', title: "Mechanical Keyboard", subtitle: "Accessories", trend: "flat" as const, score: "4.2 ★" },
];

export const ProductTrending: tStory = {
    args: {
        title: "Hot Products",
        items: mockProducts,
        className: "w-full max-w-md",
    }
};
