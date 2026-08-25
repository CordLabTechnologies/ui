import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';
import { Button } from "../../elements/Button";
import { Badge } from "../../elements/Badge";
import { ArrowRight } from 'lucide-react';

const meta = {
    title: 'Marketing/Hero',
    component: Hero,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type tStory = any;

export const Centered: tStory = {
    render: () => (
        <Hero
            badge={
                <Badge variant="secondary" className="rounded-full px-4 py-1 text-sm">
                    ✨ Version 2.0 is now live
                </Badge>
            }
            title={
                <>
                    Data to enrich your <br className="hidden sm:block" />
                    <span className="text-[var(--color-primary)]">online business</span>
                </>
            }
            description="Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."
            primaryAction={<Button size="lg">Get started</Button>}
            secondaryAction={
                <Button variant="outline" size="lg" className="group">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
            }
        />
    ),
};

export const LeftAlignedWithImage: tStory = {
    render: () => (
        <Hero
            alignment="left"
            badge={
                <Badge variant="outline" className="rounded-full border-[var(--color-primary)] text-[var(--color-primary)]">
                    New Release
                </Badge>
            }
            title="A better way to ship your projects"
            description="Esse id magna consectetur fugiat non dolor in ad laboris magna laborum ea consequat. Nisi irure aliquip nisi adipisicing veniam voluptate id. In veniam incididunt ex veniam adipisicing sit."
            primaryAction={<Button size="lg">Start free trial</Button>}
            secondaryAction={<Button variant="outline" size="lg">View documentation</Button>}
            image={
                <div className="w-full max-w-lg rounded-xl bg-[var(--color-secondary)] border border-[var(--color-border)] shadow-xl h-64 md:h-96 flex items-center justify-center text-[var(--color-muted-foreground)]">
                    Product Screenshot/Graphic
                </div>
            }
        />
    ),
};
