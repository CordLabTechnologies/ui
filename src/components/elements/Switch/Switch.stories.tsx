import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';
import { Label } from "../../elements/Label";

const meta = {
    title: 'Forms/Switch',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        disabled: { control: 'boolean' },
    },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
};

export const WithLabel: Story = {
    render: (args) => (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" {...args} />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
        </div>
    ),
};

export const Disabled: Story = {
    args: {
        disabled: true,
    },
    render: (args) => (
        <div className="flex items-center space-x-2">
            <Switch id="airplane-mode-disabled" {...args} />
            <Label htmlFor="airplane-mode-disabled">Airplane Mode</Label>
        </div>
    ),
};
