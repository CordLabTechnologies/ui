import type { Meta, StoryObj } from '@storybook/react-vite';

import { Button } from './Button';
import { Children } from 'react';

const meta = {
    title: 'Forms/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'destructive', 'ghost', 'outline'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        loading: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Continue',
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        children: 'Cancel',
        variant: 'secondary',
    },
};

export const Destructive: Story = {
    args: {
        children: 'Delete',
        variant: 'destructive',
    },
};

export const Ghost: Story = {
    args: {
        children: 'More Info',
        variant: 'ghost',
    },
};

export const Outline: Story = {
    args: {
        children: 'View Details',
        variant: 'outline',
    },
};

export const Loading: Story = {
    args: {
        children: 'Saving',
        loading: true,
    },
};

export const Disabled: Story = {
    args: {
        children: 'Continue',
        disabled: true,
    },
};


export const WithStartIcon: Story = {
    args: {
        children: 'Add candidate',
        startIcon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-4"
                aria-hidden="true"
            >
                <path d="M12 5v14M5 12h14" />
            </svg>
        ),
    },
};

export const WithEndIcon: Story = {
    args: {
        children: 'Continue',
        endIcon: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-4"
                aria-hidden="true"
            >
                <path d="m9 18 6-6-6-6" />
            </svg>
        ),
    },
};

export const IconOnly: Story = {
    args: {
        iconOnly: true,
        size: 'md',
        'aria-label': 'Add candidate',
        children: (
            <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="size-5"
            >
                <path d="M12 5v14M5 12h14" />
            </svg>
        ),
    },
};
