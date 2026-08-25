import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from "../../elements/Input";

const meta = {
    title: 'Forms/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        required: { control: 'boolean' },
    },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Email Address',
        htmlFor: 'email-input',
    },
    render: (args) => (
        <div className="flex flex-col gap-2 w-64">
            <Label {...args} />
            <Input id="email-input" placeholder="john@example.com" />
        </div>
    )
};

export const Required: Story = {
    args: {
        children: 'Password',
        htmlFor: 'password-input',
        required: true,
    },
    render: (args) => (
        <div className="flex flex-col gap-2 w-64">
            <Label {...args} />
            <Input id="password-input" type="password" placeholder="Enter password" />
        </div>
    )
};
