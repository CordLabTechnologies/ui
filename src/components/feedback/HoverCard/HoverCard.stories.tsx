import type { Meta, StoryObj } from '@storybook/react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './HoverCard';
import { Button } from "../../elements/Button";
import { Avatar, AvatarFallback, AvatarImage } from "../../elements/Avatar";
import { CalendarDays } from 'lucide-react';

const meta = {
    title: 'Overlays/HoverCard',
    component: HoverCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <HoverCard>
            <HoverCardTrigger asChild>
                <Button variant="ghost">@nextjs</Button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                    <Avatar>
                        <AvatarImage src="https://github.com/vercel.png" />
                        <AvatarFallback>VC</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                        <h4 className="text-sm font-semibold">@nextjs</h4>
                        <p className="text-sm text-[var(--color-muted-foreground)]">
                            The React Framework – created and maintained by @vercel.
                        </p>
                        <div className="flex items-center pt-2 text-xs text-[var(--color-muted-foreground)] opacity-70">
                            <CalendarDays className="mr-2 h-4 w-4" />
                            Joined December 2021
                        </div>
                    </div>
                </div>
            </HoverCardContent>
        </HoverCard>
    ),
};
