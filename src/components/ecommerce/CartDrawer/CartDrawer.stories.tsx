import type { Meta } from '@storybook/react';
import { CartDrawer, type iCartItem } from './CartDrawer';
import { useState } from 'react';

const meta = {
    title: 'E-commerce/CartDrawer',
    component: CartDrawer,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CartDrawer>;

export default meta;
type tStory = any;

const initialItems: iCartItem[] = [
    {
        id: '1',
        name: 'Nike Air Max 270',
        price: 150,
        quantity: 1,
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&q=80'
    },
    {
        id: '2',
        name: 'Adidas Ultraboost',
        price: 180,
        quantity: 2,
        image: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200&q=80'
    }
];

export const Default: tStory = {
    render: () => {
        const [items, setItems] = useState<iCartItem[]>(initialItems);

        const handleUpdateQuantity = (id: string, quantity: number) => {
            setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
        };

        const handleRemoveItem = (id: string) => {
            setItems(items.filter(item => item.id !== id));
        };

        return (
            <CartDrawer
                items={items}
                onUpdateQuantity={handleUpdateQuantity}
                onRemoveItem={handleRemoveItem}
                onCheckout={() => alert('Proceeding to checkout!')}
            />
        );
    },
};

export const Empty: tStory = {
    render: () => (
        <CartDrawer items={[]} />
    ),
};
