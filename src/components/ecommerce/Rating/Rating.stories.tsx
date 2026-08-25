import type { Meta } from '@storybook/react';
import { Rating } from './Rating';
import { useState } from 'react';

const meta = {
    title: 'E-commerce/Rating',
    component: Rating,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Rating>;

export default meta;
type tStory = any;

export const Interactive: tStory = {
    render: () => {
        const [rating, setRating] = useState(3);
        return <Rating value={rating} onChange={setRating} />;
    },
};

export const ReadOnlyWithFractions: tStory = {
    render: () => (
        <div className="flex flex-col gap-4">
            <Rating value={4.5} readOnly size="lg" />
            <Rating value={3.8} readOnly />
            <Rating value={2.2} readOnly size="sm" />
        </div>
    ),
};
