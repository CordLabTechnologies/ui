import type { Meta } from '@storybook/react';
import { FilePreview } from './FilePreview';

const meta = {
    title: 'Media/FilePreview',
    component: FilePreview,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FilePreview>;

export default meta;
type tStory = any;

const pdfFile = {
    name: "Q3_Financial_Report.pdf",
    size: "4.2 MB",
    type: "application/pdf"
};

const imageFile = {
    name: "hero_background_final_v2.png",
    size: "12.8 MB",
    type: "image/png",
    thumbnailUrl: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=200&auto=format&fit=crop"
};

const zipFile = {
    name: "source_code_archive.zip",
    size: "145.2 MB",
    type: "application/zip"
};

export const ListVariant: tStory = {
    args: {
        variant: "list",
        file: pdfFile,
        className: "w-full max-w-sm",
        onDownload: () => alert("Downloading..."),
        onDelete: () => alert("Deleting...")
    }
};

export const GridVariant: tStory = {
    args: {
        variant: "grid",
        file: imageFile,
        className: "w-40 h-40",
        onDownload: () => alert("Downloading..."),
        onRemove: () => alert("Removing...")
    }
};

export const MultipleFilesList: tStory = {
    render: () => (
        <div className="flex flex-col gap-2 max-w-md">
            <FilePreview file={pdfFile} onDownload={() => {}} onRemove={() => {}} />
            <FilePreview file={imageFile} onDownload={() => {}} onRemove={() => {}} />
            <FilePreview file={zipFile} onDownload={() => {}} onRemove={() => {}} />
        </div>
    )
};

export const MultipleFilesGrid: tStory = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <FilePreview variant="grid" className="w-40 h-40" file={pdfFile} onDownload={() => {}} onDelete={() => {}} />
            <FilePreview variant="grid" className="w-40 h-40" file={imageFile} onDownload={() => {}} onDelete={() => {}} />
            <FilePreview variant="grid" className="w-40 h-40" file={zipFile} onDownload={() => {}} onDelete={() => {}} />
        </div>
    )
};
