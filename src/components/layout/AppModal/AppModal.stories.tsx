import type { Meta, StoryObj } from '@storybook/react';
import {
    AppModal,
    AppModalBody,
    AppModalContent,
    AppModalDescription,
    AppModalFooter,
    AppModalHeader,
    AppModalTitle,
    AppModalTrigger,
} from './AppModal';
import { Button } from "../../elements/Button";
import { Input } from "../../elements/Input";
import { Label } from "../../elements/Label";

const meta = {
    title: 'Components/AppModal',
    component: AppModal,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AppModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CenterDesktop: Story = {
    args: {
        placement: 'center',
    },
    render: (args) => (
        <AppModal {...args}>
            <AppModalTrigger asChild>
                <Button variant="outline">Open Center Modal (Dialog)</Button>
            </AppModalTrigger>
            <AppModalContent>
                <AppModalHeader>
                    <AppModalTitle>Edit Profile</AppModalTitle>
                    <AppModalDescription>
                        Make changes to your profile here. (Resize window to see mobile Drawer)
                    </AppModalDescription>
                </AppModalHeader>
                <AppModalBody>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Name
                            </Label>
                            <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />
                        </div>
                    </div>
                </AppModalBody>
                <AppModalFooter>
                    <Button type="submit">Save changes</Button>
                </AppModalFooter>
            </AppModalContent>
        </AppModal>
    ),
};

export const RightSidebar: Story = {
    args: {
        placement: 'right',
    },
    render: (args) => (
        <AppModal {...args}>
            <AppModalTrigger asChild>
                <Button variant="outline">Open Right Sidebar (Sheet)</Button>
            </AppModalTrigger>
            <AppModalContent>
                <AppModalHeader>
                    <AppModalTitle>Settings Panel</AppModalTitle>
                    <AppModalDescription>
                        Adjust your preferences. (Resize window to see mobile Drawer)
                    </AppModalDescription>
                </AppModalHeader>
                <AppModalBody>
                    {/* Simulating long content */}
                    <div className="space-y-4">
                        {Array.from({ length: 15 }).map((_, i) => (
                            <p key={i}>This is setting row number {i + 1} to demonstrate scrolling overflow.</p>
                        ))}
                    </div>
                </AppModalBody>
                <AppModalFooter>
                    <Button>Apply</Button>
                </AppModalFooter>
            </AppModalContent>
        </AppModal>
    ),
};
