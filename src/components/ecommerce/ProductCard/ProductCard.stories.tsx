import type { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const meta = {
    title: 'E-commerce/ProductCard',
    component: ProductCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type tStory = any;

export const Default: tStory = {
    args: {
        imageSrc: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60',
        title: 'Nike Air Max 270',
        description: 'Men\'s Running Shoes featuring the biggest heel Air unit yet.',
        price: 150,
        originalPrice: 180,
        badgeText: 'Sale',
    },
    render: (args: any) => (
        <div className="max-w-xs">
            <ProductCard {...args} />
        </div>
    ),
};

export const FoodDelivery: tStory = {
    args: {
        imageSrc: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop&q=60',
        title: 'Classic Cheeseburger',
        description: 'Double beef patty, cheddar, lettuce, tomato, house sauce.',
        price: 12.99,
        actionText: 'Add to Order',
    },
    render: (args: any) => (
        <div className="max-w-xs">
            <ProductCard {...args} />
        </div>
    ),
};
