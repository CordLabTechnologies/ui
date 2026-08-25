import type { Meta, StoryObj } from '@storybook/react';
import { Combobox } from './Combobox';
import { useState } from 'react';

const meta = {
    title: 'Forms/Combobox',
    component: Combobox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Combobox>;

export default meta;
type tStory = any;

const frameworks = [
    {
        value: "next.js",
        label: "Next.js",
    },
    {
        value: "sveltekit",
        label: "SvelteKit",
    },
    {
        value: "nuxt.js",
        label: "Nuxt.js",
    },
    {
        value: "remix",
        label: "Remix",
    },
    {
        value: "astro",
        label: "Astro",
    },
];

export const Default: tStory = {
    render: () => {
        const [value, setValue] = useState("");
        return (
            <Combobox
                items={frameworks}
                value={value}
                onSelect={setValue}
                placeholder="Select framework..."
                searchPlaceholder="Search framework..."
            />
        );
    },
};
