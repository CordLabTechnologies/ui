import type { Meta, StoryObj } from '@storybook/react';
import { SponsorGrid } from './SponsorGrid';
import { Cloud, Database, Shield, Zap, Code } from 'lucide-react';

const meta = {
    title: 'Marketing/SponsorGrid',
    component: SponsorGrid,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SponsorGrid>;

export default meta;
type tStory = any;

const sponsors = [
    { name: "Cloudflare", logo: <Cloud className="h-10 w-10" /> },
    { name: "Supabase", logo: <Database className="h-10 w-10" /> },
    { name: "Auth0", logo: <Shield className="h-10 w-10" /> },
    { name: "Vercel", logo: <Zap className="h-10 w-10" /> },
    { name: "GitHub", logo: <Code className="h-10 w-10" /> },
];

export const Default: tStory = {
    render: () => (
        <SponsorGrid 
            title="Trusted by innovative teams worldwide"
            sponsors={sponsors} 
        />
    ),
};
