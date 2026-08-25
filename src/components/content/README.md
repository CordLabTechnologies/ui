# 📝 Content

Welcome to the **Content** category! These components are focused on rendering long-form text, blogs, and rich text editing.

## Components Included

- `Prose`: A wrapper that automatically styles raw Markdown or HTML (adds perfect spacing, typography, and bullet styles).
- `RichTextEditor`: A fully functional WYSIWYG editor (bold, italic, lists) built on Tiptap.
- `NoteCard`: A stylized card specifically for text notes or comments.

## How to use (Beginner Friendly)

### Example: Rich Text Editor
```tsx
import { RichTextEditor } from "@cordlab/ui/content"

export default function WriteBlog() {
  return (
    <div className="max-w-2xl mx-auto mt-10">
      <RichTextEditor 
        content="<p>Start writing your post here...</p>" 
        onChange={(html) => console.log("User typed:", html)}
      />
    </div>
  )
}
```

### Reusability Tips
- **Prose**: If you are fetching a blog post from a CMS that returns raw HTML, just wrap it in `<Prose dangerouslySetInnerHTML={{ __html: post }} />` and it will automatically look beautiful!
