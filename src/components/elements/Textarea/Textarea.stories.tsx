import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Label } from "../../elements/Label";

const meta = {
    title: 'Forms/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        error: { control: 'boolean' },
        disabled: { control: 'boolean' },
    },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'Type your message here.',
    },
};

export const WithLabel: Story = {
    render: (args) => (
        <div className="grid w-full max-w-sm gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea placeholder="Type your message here." id="message" {...args} />
        </div>
    )
};

export const Error: Story = {
    args: {
        placeholder: 'Error state...',
        error: true,
        defaultValue: 'Invalid input message.',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled textarea...',
        disabled: true,
        defaultValue: 'You cannot edit this message.',
    },
};
