import type { Meta, StoryObj } from '@storybook/react';
import { Marquee } from './Marquee';
import { Badge } from "../../elements/Badge";

const meta = {
    title: 'Marketing/Marquee',
    component: Marquee,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Marquee>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <Marquee className="bg-[var(--color-secondary)] rounded-[var(--radius-md)]">
            <span className="font-bold">BLACK FRIDAY SALE</span>
            <span>•</span>
            <span>GET 50% OFF ALL ANNUAL PLANS</span>
            <span>•</span>
            <span className="font-bold">USE CODE: SUMMER50</span>
            <span>•</span>
            <span>HURRY, ENDS SOON</span>
            <span>•</span>
        </Marquee>
    ),
};

export const Logos: tStory = {
    render: () => (
        <Marquee pauseOnHover speed="slow" className="py-8">
            <Badge variant="outline" className="h-12 px-6 text-lg">Acme Corp</Badge>
            <Badge variant="outline" className="h-12 px-6 text-lg">Globex</Badge>
            <Badge variant="outline" className="h-12 px-6 text-lg">Soylent</Badge>
            <Badge variant="outline" className="h-12 px-6 text-lg">Initech</Badge>
            <Badge variant="outline" className="h-12 px-6 text-lg">Umbrella</Badge>
        </Marquee>
    ),
};
