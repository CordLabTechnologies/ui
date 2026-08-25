import type { Meta } from '@storybook/react';
import { VideoPlayer } from './VideoPlayer';

const meta = {
    title: 'Media/VideoPlayer',
    component: VideoPlayer,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof VideoPlayer>;

export default meta;
type tStory = any;

export const Default: tStory = {
    args: {
        // Sample public domain video (Big Buck Bunny snippet)
        src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1000&auto=format&fit=crop",
        className: "w-full max-w-3xl aspect-video mx-auto"
    }
};
