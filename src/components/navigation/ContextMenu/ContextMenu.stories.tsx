import type { Meta, StoryObj } from '@storybook/react';
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
} from './ContextMenu';
import { useState } from 'react';

const meta = {
    title: 'Overlays/ContextMenu',
    component: ContextMenu,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ContextMenu>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => {
        const [showBookmarks, setShowBookmarks] = useState(true);
        const [showFullURLs, setShowFullURLs] = useState(false);
        const [person, setPerson] = useState("pedro");

        return (
            <ContextMenu>
                <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-[var(--color-border)] border-dashed text-sm">
                    Right click here
                </ContextMenuTrigger>
                <ContextMenuContent className="w-64">
                    <ContextMenuItem inset>
                        Back
                        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset disabled>
                        Forward
                        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset>
                        Reload
                        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuCheckboxItem
                        checked={showBookmarks}
                        onCheckedChange={setShowBookmarks}
                    >
                        Show Bookmarks Bar
                        <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                    </ContextMenuCheckboxItem>
                    <ContextMenuCheckboxItem
                        checked={showFullURLs}
                        onCheckedChange={setShowFullURLs}
                    >
                        Show Full URLs
                    </ContextMenuCheckboxItem>
                    <ContextMenuSeparator />
                    <ContextMenuLabel inset>People</ContextMenuLabel>
                    <ContextMenuSeparator />
                    <ContextMenuRadioGroup value={person} onValueChange={setPerson}>
                        <ContextMenuRadioItem value="pedro">
                            Pedro Duarte
                        </ContextMenuRadioItem>
                        <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                </ContextMenuContent>
            </ContextMenu>
        );
    },
};
