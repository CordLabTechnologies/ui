import type { Meta, StoryObj } from '@storybook/react';
import { 
    Sidebar, 
    SidebarProvider, 
    SidebarHeader, 
    SidebarContent, 
    SidebarItem, 
    SidebarTrigger 
} from './Sidebar';
import { LayoutDashboard, Users, Settings, Mail } from 'lucide-react';

const meta = {
    title: 'Layout/Sidebar',
    component: SidebarProvider,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SidebarProvider>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <div className="h-[500px] border border-[var(--color-border)] rounded-md overflow-hidden">
            <SidebarProvider>
                <Sidebar>
                    <SidebarHeader className="py-2">
                        <div className="flex items-center gap-2 font-bold text-lg">
                            <div className="h-6 w-6 rounded bg-[var(--color-primary)]" />
                            <span className="group-data-[collapsed=true]:hidden">Acme Corp</span>
                        </div>
                    </SidebarHeader>
                    <SidebarContent className="mt-4 gap-1 flex flex-col">
                        <SidebarItem icon={<LayoutDashboard className="h-4 w-4" />} active>
                            Dashboard
                        </SidebarItem>
                        <SidebarItem icon={<Users className="h-4 w-4" />}>
                            Customers
                        </SidebarItem>
                        <SidebarItem icon={<Mail className="h-4 w-4" />}>
                            Messages
                        </SidebarItem>
                        <SidebarItem icon={<Settings className="h-4 w-4" />}>
                            Settings
                        </SidebarItem>
                    </SidebarContent>
                </Sidebar>
                <div className="flex-1 flex flex-col">
                    <header className="h-14 border-b border-[var(--color-border)] px-4 flex items-center">
                        <SidebarTrigger />
                        <span className="ml-4 font-medium">Dashboard Overview</span>
                    </header>
                    <main className="p-6">
                        <div className="border-2 border-dashed border-[var(--color-border)] rounded-lg h-full flex items-center justify-center text-[var(--color-muted-foreground)]">
                            Main Content Area
                        </div>
                    </main>
                </div>
            </SidebarProvider>
        </div>
    ),
};
