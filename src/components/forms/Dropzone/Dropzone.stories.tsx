import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from './Dropzone';

const meta = {
    title: 'Forms/Dropzone',
    component: Dropzone,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Dropzone>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <div className="w-full max-w-lg mx-auto py-12">
            <Dropzone 
                onFileDrop={(files) => console.log('Dropped files:', files)}
            />
        </div>
    ),
};
