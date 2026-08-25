import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';

const meta = {
    title: 'Primitives/Tabs',
    component: Tabs,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <Tabs defaultValue="account" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="p-4 border rounded-[var(--radius-md)] mt-2">
                <h3 className="text-lg font-medium">Account Settings</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">Make changes to your account here.</p>
            </TabsContent>
            <TabsContent value="password" className="p-4 border rounded-[var(--radius-md)] mt-2">
                <h3 className="text-lg font-medium">Password</h3>
                <p className="text-sm text-[var(--color-muted-foreground)]">Change your password here.</p>
            </TabsContent>
        </Tabs>
    ),
};
