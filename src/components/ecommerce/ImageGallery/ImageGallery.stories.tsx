import type { Meta } from '@storybook/react';
import { ImageGallery } from './ImageGallery';

const meta = {
    title: 'E-commerce/ImageGallery',
    component: ImageGallery,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ImageGallery>;

export default meta;
type tStory = any;

const shoeImages = [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
    'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&q=80',
    'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&q=80',
    'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80'
];

export const Default: tStory = {
    args: {
        images: shoeImages,
        altTexts: ['Red Nike Shoe', 'Black Nike Shoe', 'Green Nike Shoe', 'White Nike Shoe']
    },
    render: (args: any) => (
        <div className="w-full max-w-sm">
            <ImageGallery {...args} />
        </div>
    ),
};
