import type { Meta } from '@storybook/react';
import { QuantitySelector } from './QuantitySelector';
import { useState } from 'react';

const meta = {
    title: 'E-commerce/QuantitySelector',
    component: QuantitySelector,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof QuantitySelector>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => {
        const [value, setValue] = useState(1);
        return <QuantitySelector value={value} onChange={setValue} />;
    },
};

export const WithMaxLimit: tStory = {
    render: () => {
        const [value, setValue] = useState(4);
        return (
            <div className="flex flex-col items-center gap-2">
                <span className="text-sm text-[var(--color-muted-foreground)]">Max 5 items</span>
                <QuantitySelector value={value} onChange={setValue} max={5} />
            </div>
        );
    },
};
