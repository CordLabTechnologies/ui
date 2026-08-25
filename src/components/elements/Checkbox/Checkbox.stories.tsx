import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { Label } from "../../elements/Label";

const meta = {
    title: 'Forms/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
    },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithLabel: Story = {
    render: (args) => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms" {...args} />
            <Label htmlFor="terms">Accept terms and conditions</Label>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (args) => (
        <div className="flex items-center space-x-2">
            <Checkbox id="terms-disabled" {...args} />
            <Label htmlFor="terms-disabled">Accept terms and conditions</Label>
        </div>
    ),
};
