import type { Meta } from '@storybook/react';
import { ColorSwatch } from './ColorSwatch';

const meta = {
    title: 'Utilities/ColorSwatch',
    component: ColorSwatch,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ColorSwatch>;

export default meta;
type tStory = any;

export const SolidColors: tStory = {
    render: () => (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl">
            <ColorSwatch name="Primary Blue" value="#3b82f6" />
            <ColorSwatch name="Indigo" value="#6366f1" />
            <ColorSwatch name="Violet" value="#8b5cf6" />
            <ColorSwatch name="Fuchsia" value="#d946ef" />
            <ColorSwatch name="Rose" value="#f43f5e" />
            <ColorSwatch name="Amber" value="#f59e0b" />
            <ColorSwatch name="Emerald" value="#10b981" />
            <ColorSwatch name="Cyan" value="#06b6d4" />
        </div>
    )
};

export const Gradients: tStory = {
    render: () => (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
            {/* The user's requested mesh-like gradient */}
            <ColorSwatch 
                name="Deep Mesh (Requested)" 
                value="radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)" 
                isGradient 
            />
            {/* A simpler approximation of the image provided */}
            <ColorSwatch 
                name="Twilight Blur" 
                value="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
                isGradient 
            />
            <ColorSwatch 
                name="Ocean" 
                value="linear-gradient(135deg, #2AFADF 10%, #4C83FF 100%)" 
                isGradient 
            />
            <ColorSwatch 
                name="Sunset" 
                value="linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)" 
                isGradient 
            />
            <ColorSwatch 
                name="Berry" 
                value="linear-gradient(to top, #c471f5 0%, #fa71cd 100%)" 
                isGradient 
            />
            <ColorSwatch 
                name="Forest" 
                value="linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)" 
                isGradient 
            />
            <ColorSwatch 
                name="Midnight" 
                value="linear-gradient(to right, #434343 0%, black 100%)" 
                isGradient 
            />
            <ColorSwatch 
                name="Peach" 
                value="linear-gradient(120deg, #f6d365 0%, #fda085 100%)" 
                isGradient 
            />
            <ColorSwatch 
                name="Skyline" 
                value="linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)" 
                isGradient 
            />
        </div>
    )
};

export const TailwindClasses: tStory = {
    render: () => (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl">
            <ColorSwatch 
                name="Cosmic" 
                value="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" 
                isGradient 
            />
            <ColorSwatch 
                name="Hyper" 
                value="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" 
                isGradient 
            />
            <ColorSwatch 
                name="Aurora" 
                value="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" 
                isGradient 
            />
            <ColorSwatch 
                name="Lava" 
                value="bg-gradient-to-r from-orange-400 to-rose-400" 
                isGradient 
            />
        </div>
    )
};
