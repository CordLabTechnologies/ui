import type { Meta, StoryObj } from '@storybook/react';
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from './Resizable';

const meta = {
    title: 'Layout/Resizable',
    component: ResizablePanelGroup,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ResizablePanelGroup>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <ResizablePanelGroup
            orientation="horizontal"
            className="max-w-md rounded-lg border border-[var(--color-border)]"
        >
            <ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6 bg-[var(--color-secondary)]/30">
                    <span className="font-semibold text-sm">One</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6 bg-[var(--color-secondary)]/10">
                    <span className="font-semibold text-sm">Two</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};

export const Vertical: tStory = {
    render: () => (
        <ResizablePanelGroup
            orientation="vertical"
            className="min-h-[200px] max-w-md rounded-lg border border-[var(--color-border)]"
        >
            <ResizablePanel defaultSize={25}>
                <div className="flex h-full items-center justify-center p-6 bg-[var(--color-secondary)]/30">
                    <span className="font-semibold text-sm">Header</span>
                </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={75}>
                <div className="flex h-full items-center justify-center p-6 bg-[var(--color-secondary)]/10">
                    <span className="font-semibold text-sm">Content</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};

export const WithHandleIcon: tStory = {
    render: () => (
        <ResizablePanelGroup
            orientation="horizontal"
            className="max-w-md rounded-lg border border-[var(--color-border)]"
        >
            <ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6 bg-[var(--color-secondary)]/30">
                    <span className="font-semibold text-sm">Sidebar</span>
                </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
                <div className="flex h-[200px] items-center justify-center p-6 bg-[var(--color-secondary)]/10">
                    <span className="font-semibold text-sm">Main</span>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    ),
};
