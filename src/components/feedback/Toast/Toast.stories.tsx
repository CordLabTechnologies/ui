import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './Toast';
import { Button } from "../../elements/Button";

const meta = {
    title: 'Feedback/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;

export const Default = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <ToastProvider>
            <Button onClick={() => setOpen(true)}>Show Toast</Button>
            <Toast open={open} onOpenChange={setOpen}>
                <div className="grid gap-1">
                    <ToastTitle>Scheduled: Catch up</ToastTitle>
                    <ToastDescription>Friday, February 10, 2023 at 5:57 PM</ToastDescription>
                </div>
                <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                <ToastClose />
            </Toast>
            <ToastViewport />
        </ToastProvider>
    );
};

export const Destructive = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <ToastProvider>
            <Button variant="destructive" onClick={() => setOpen(true)}>Show Destructive Toast</Button>
            <Toast variant="destructive" open={open} onOpenChange={setOpen}>
                <div className="grid gap-1">
                    <ToastTitle>Error</ToastTitle>
                    <ToastDescription>There was a problem with your request.</ToastDescription>
                </div>
                <ToastAction altText="Try again">Try again</ToastAction>
                <ToastClose />
            </Toast>
            <ToastViewport />
        </ToastProvider>
    );
};
