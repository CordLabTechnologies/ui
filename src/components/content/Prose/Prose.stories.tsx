import type { Meta } from '@storybook/react';
import { Prose } from './Prose';

const meta = {
    title: 'Content/Prose',
    component: Prose,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Prose>;

export default meta;
type tStory = any;

const sampleHtml = `
<h1>A Beautiful Typography Component</h1>
<p>This is a demonstration of the <strong>Prose</strong> component. It automatically formats raw HTML content so it looks clean, readable, and matches our design system's aesthetic.</p>
<h2>Key Features</h2>
<ul>
    <li>Automatic styling for headings, paragraphs, and lists.</li>
    <li>Support for <a href="https://cordlab.com">links with hover states</a>.</li>
    <li>Inline <code>code formatting</code> and blockquotes.</li>
</ul>
<blockquote>
    "Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs
</blockquote>
<h3>Code Blocks</h3>
<pre><code>function helloWorld() {
  console.log("Hello, world!");
}</code></pre>
<p>It also handles images, thematic breaks, and more.</p>
<hr />
<p>End of demonstration.</p>
`;

export const Default: tStory = {
    args: {
        html: sampleHtml,
        className: "max-w-2xl mx-auto"
    }
};

export const WithChildren: tStory = {
    render: () => (
        <Prose className="max-w-2xl mx-auto">
            <h1>Using React Children</h1>
            <p>You can also pass standard React nodes instead of raw HTML.</p>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
            </ul>
        </Prose>
    )
};
