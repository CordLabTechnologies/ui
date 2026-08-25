import type { Meta } from '@storybook/react';
import { RichTextEditor } from './RichTextEditor';

const meta = {
    title: 'Content/RichTextEditor',
    component: RichTextEditor,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof RichTextEditor>;

export default meta;
type tStory = any;

const initialContent = `
  <h2>Welcome to the Rich Text Editor!</h2>
  <p>This editor uses <strong>Tiptap</strong> under the hood, integrated perfectly with our custom design system.</p>
  <ul>
    <li>It supports bold, italic, and strikethrough.</li>
    <li>It supports lists (bulleted and numbered).</li>
    <li>It even supports <code>inline code</code> and blockquotes:</li>
  </ul>
  <blockquote>
    "The best way to predict the future is to invent it."
  </blockquote>
`;

export const Default: tStory = {
    args: {
        content: initialContent,
        onChange: (html: string) => console.log('Editor content changed:', html),
        className: "max-w-3xl"
    },
};

export const Empty: tStory = {
    args: {
        className: "max-w-3xl"
    },
};
