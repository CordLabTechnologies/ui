import type { Meta, StoryObj } from '@storybook/react';
import { FormField, FormControl } from './FormField';
import { Input } from "../../elements/Input";
import { Textarea } from "../../elements/Textarea";

const meta = {
    title: 'Components/FormField',
    component: FormField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        error: { control: 'text' },
        required: { control: 'boolean' },
    },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Email',
        htmlFor: 'email',
        helperText: 'We will never share your email.',
        children: (
            <FormControl>
                <Input id="email" placeholder="john@example.com" />
            </FormControl>
        ),
    },
};

export const WithError: Story = {
    args: {
        label: 'Username',
        htmlFor: 'username',
        error: 'Username must be at least 4 characters.',
        required: true,
        children: (
            <FormControl>
                <Input id="username" placeholder="johndoe" error />
            </FormControl>
        ),
    },
};

export const WithTextarea: Story = {
    args: {
        label: 'Bio',
        htmlFor: 'bio',
        helperText: 'Tell us a little bit about yourself.',
        children: (
            <FormControl>
                <Textarea id="bio" placeholder="I am a software engineer..." />
            </FormControl>
        ),
    },
};
