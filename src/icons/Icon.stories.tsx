import type { Meta, StoryObj } from '@storybook/react-vite';

import { Icon } from './Icon';

const meta = {
    title: 'Foundations/Icon',
    component: Icon,
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M12 5v14M5 12h14" />
            </svg>
        ),
    },
};

export const Large: Story = {
    args: {
        size: 'xl',
        children: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M12 5v14M5 12h14" />
            </svg>
        ),
    },
};