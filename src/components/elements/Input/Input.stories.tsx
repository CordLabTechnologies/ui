import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta = {
    title: 'Forms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        error: { control: 'boolean' },
        disabled: { control: 'boolean' },
        readOnly: { control: 'boolean' },
        required: { control: 'boolean' },
    },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithLabel: Story = {
    render: (args) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Email
            </label>
            <Input id="email" placeholder="Email" {...args} />
        </div>
    ),
};

export const WithPlaceholder: Story = {
    args: {
        placeholder: 'Enter your text here...',
    },
};

export const WithHelperText: Story = {
    render: (args) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="email-2" className="text-sm font-medium leading-none">
                Email
            </label>
            <Input id="email-2" placeholder="Email" {...args} />
            <p className="text-sm text-gray-500">Enter your work email address.</p>
        </div>
    ),
};

export const Error: Story = {
    args: {
        placeholder: 'Error state...',
        error: true,
        defaultValue: 'Invalid input',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled input...',
        disabled: true,
        defaultValue: 'Cannot edit this',
    },
};

export const Readonly: Story = {
    args: {
        placeholder: 'Readonly input...',
        readOnly: true,
        defaultValue: 'Read only value',
    },
};

export const Required: Story = {
    render: (args) => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <label htmlFor="required-input" className="text-sm font-medium leading-none">
                Username <span className="text-red-500">*</span>
            </label>
            <Input id="required-input" placeholder="Username" required {...args} />
        </div>
    ),
};

export const WithStartIcon: Story = {
    args: {
        placeholder: 'Search...',
        startIcon: <span className="text-xs">🔍</span>,
    },
};

export const WithEndIcon: Story = {
    args: {
        placeholder: 'Clear text...',
        endIcon: <span className="text-xs cursor-pointer">✕</span>,
    },
};

export const Password: Story = {
    args: {
        type: 'password',
        placeholder: 'Enter password',
        defaultValue: 'secretpassword',
    },
};

export const Email: Story = {
    args: {
        type: 'email',
        placeholder: 'john@example.com',
    },
};

export const Number: Story = {
    args: {
        type: 'number',
        placeholder: '0',
    },
};

export const LongContent: Story = {
    args: {
        placeholder: 'Long content...',
        defaultValue: 'This is a very long text inside the input field that might overflow and cause the text to scroll horizontally when focused and typing.',
    },
};
