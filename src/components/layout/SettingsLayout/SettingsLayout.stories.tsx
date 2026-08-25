import type { Meta } from '@storybook/react';
import { SettingsLayout } from './SettingsLayout';
import { User, Bell, Palette, Shield } from 'lucide-react';
import { Button } from "../../elements/Button";
import { Input } from "../../elements/Input";
import { Label } from "../../elements/Label";

const meta = {
    title: 'App Shell/SettingsLayout',
    component: SettingsLayout,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SettingsLayout>;

export default meta;
type tStory = any;

const navItems = [
    { title: "Profile", href: "/settings/profile", icon: <User />, isActive: true },
    { title: "Account", href: "/settings/account", icon: <Shield /> },
    { title: "Appearance", href: "/settings/appearance", icon: <Palette /> },
    { title: "Notifications", href: "/settings/notifications", icon: <Bell /> },
];

export const ProfileSettings: tStory = {
    args: {
        title: "Settings",
        description: "Manage your account settings and set e-mail preferences.",
        navItems,
        className: "w-full max-w-6xl mx-auto p-4 md:p-10",
        children: (
            <div className="space-y-6">
                <div>
                    <h3 className="text-lg font-medium text-[var(--color-foreground)]">Profile</h3>
                    <p className="text-sm text-[var(--color-muted-foreground)]">
                        This is how others will see you on the site.
                    </p>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="cordlab" />
                        <p className="text-[0.8rem] text-[var(--color-muted-foreground)]">
                            This is your public display name. It can be your real name or a pseudonym.
                        </p>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" />
                        <p className="text-[0.8rem] text-[var(--color-muted-foreground)]">
                            You can manage verified email addresses in your email settings.
                        </p>
                    </div>
                    <Button>Update profile</Button>
                </div>
            </div>
        )
    },
};
