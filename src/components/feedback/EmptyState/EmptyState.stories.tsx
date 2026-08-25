import type { Meta } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { ShoppingBag, SearchX, Frown } from 'lucide-react';

const meta = {
    title: 'E-commerce/EmptyState',
    component: EmptyState,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof EmptyState>;

export default meta;
type tStory = any;

export const CartEmpty: tStory = {
    args: {
        icon: <ShoppingBag className="h-8 w-8" />,
        title: 'Your cart is empty',
        description: 'Looks like you haven\'t added any items to your cart yet. Start exploring our latest products!',
        actionText: 'Browse Products',
    },
    render: (args: any) => (
        <div className="max-w-md mx-auto">
            <EmptyState {...args} onAction={() => alert('Browsing products!')} />
        </div>
    )
};

export const NoResults: tStory = {
    args: {
        icon: <SearchX className="h-8 w-8" />,
        title: 'No results found',
        description: 'We couldn\'t find anything matching your search. Try adjusting your filters or search terms.',
        actionText: 'Clear Filters',
    },
    render: (args: any) => (
        <div className="max-w-md mx-auto">
            <EmptyState {...args} onAction={() => alert('Filters cleared!')} />
        </div>
    )
};
