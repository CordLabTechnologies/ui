import * as React from "react"
import { useEditor, EditorContent, type Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Color } from '@tiptap/extension-color'
import { TextStyle } from '@tiptap/extension-text-style'
import {
  Bold,
  Italic,
  Strikethrough,
  Code,
  SquareCode,
  List,
  ListOrdered,
  Quote,
  Heading1,
  Heading2,
  Heading3,
  Undo,
  Redo,
  Palette
} from 'lucide-react'

const MenuBar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null
  }

  const buttons = [
    {
      icon: <Bold className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleBold().run(),
      isActive: editor.isActive('bold'),
      title: 'Bold',
    },
    {
      icon: <Italic className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleItalic().run(),
      isActive: editor.isActive('italic'),
      title: 'Italic',
    },
    {
      icon: <Strikethrough className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleStrike().run(),
      isActive: editor.isActive('strike'),
      title: 'Strikethrough',
    },
    {
      icon: <Code className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleCode().run(),
      isActive: editor.isActive('code'),
      title: 'Inline Code',
    },
    {
      icon: <SquareCode className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleCodeBlock().run(),
      isActive: editor.isActive('codeBlock'),
      title: 'Code Block',
    },
    { divider: true },
    {
      icon: <Heading1 className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      isActive: editor.isActive('heading', { level: 1 }),
      title: 'Heading 1',
    },
    {
      icon: <Heading2 className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      isActive: editor.isActive('heading', { level: 2 }),
      title: 'Heading 2',
    },
    {
      icon: <Heading3 className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      isActive: editor.isActive('heading', { level: 3 }),
      title: 'Heading 3',
    },
    { divider: true },
    {
      icon: <List className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleBulletList().run(),
      isActive: editor.isActive('bulletList'),
      title: 'Bullet List',
    },
    {
      icon: <ListOrdered className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleOrderedList().run(),
      isActive: editor.isActive('orderedList'),
      title: 'Ordered List',
    },
    {
      icon: <Quote className="h-4 w-4" />,
      onClick: () => editor.chain().focus().toggleBlockquote().run(),
      isActive: editor.isActive('blockquote'),
      title: 'Blockquote',
    },
    { divider: true },
    {
      icon: <Undo className="h-4 w-4" />,
      onClick: () => editor.chain().focus().undo().run(),
      disabled: !editor.can().undo(),
      title: 'Undo',
    },
    {
      icon: <Redo className="h-4 w-4" />,
      onClick: () => editor.chain().focus().redo().run(),
      disabled: !editor.can().redo(),
      title: 'Redo',
    },
  ]

  const colors = ["#000000", "#ef4444", "#f97316", "#eab308", "#22c55e", "#3b82f6", "#a855f7", "#ec4899"]

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-[var(--color-border)] bg-[var(--color-secondary)]/50 p-2">
      {buttons.map((btn, index) => {
        if (btn.divider) {
          return <div key={`divider-${index}`} className="mx-1 h-6 w-px bg-[var(--color-border)]" />
        }
        return (
          <button
            key={btn.title}
            type="button"
            onMouseDown={(e) => e.preventDefault()} // CRITICAL: prevents editor from losing focus
            onClick={btn.onClick}
            disabled={btn.disabled}
            className={[
              "flex h-8 w-8 items-center justify-center rounded-sm transition-colors",
              btn.isActive
                ? "bg-[var(--color-primary)] text-white"
                : "text-[var(--color-foreground)] hover:bg-[var(--color-secondary)]",
              btn.disabled && "opacity-50 cursor-not-allowed"
            ].filter(Boolean).join(" ")}
            title={btn.title}
          >
            {btn.icon}
          </button>
        )
      })}
      
      <div className="mx-1 h-6 w-px bg-[var(--color-border)]" />
      
      {/* Color Picker */}
      <div className="group relative flex items-center">
        <button
          type="button"
          onMouseDown={(e) => e.preventDefault()}
          className="flex h-8 w-8 items-center justify-center rounded-sm text-[var(--color-foreground)] hover:bg-[var(--color-secondary)] transition-colors"
          title="Text Color"
        >
          <Palette className="h-4 w-4" />
        </button>
        <div className="absolute top-full left-0 z-50 hidden pt-2 group-hover:block">
          <div className="flex gap-1 rounded-md border border-[var(--color-border)] bg-[var(--color-background)] p-2 shadow-md">
            {colors.map((c) => (
              <button
                key={c}
                type="button"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => editor.chain().focus().setColor(c).run()}
                className="h-5 w-5 rounded-full border border-[var(--color-border)] transition-transform hover:scale-110"
                style={{ backgroundColor: c }}
                title={c}
              />
            ))}
            <button
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => editor.chain().focus().unsetColor().run()}
              className="h-5 w-5 rounded-full border border-[var(--color-border)] bg-[var(--color-background)] flex items-center justify-center text-xs"
              title="Reset color"
            >
              ×
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export interface iRichTextEditorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  content?: string
  onChange?: (html: string) => void
  placeholder?: string
  readOnly?: boolean
}

export const RichTextEditor = React.forwardRef<HTMLDivElement, iRichTextEditorProps>(
  ({ className, content = '', onChange, readOnly = false, ...props }, ref) => {
    const editor = useEditor({
      extensions: [
        StarterKit,
        TextStyle,
        Color
      ],
      content,
      editable: !readOnly,
      onUpdate: ({ editor }) => {
        onChange?.(editor.getHTML())
      },
      editorProps: {
        attributes: {
          class: 'prose prose-slate dark:prose-invert max-w-none focus:outline-none min-h-[150px] p-4 prose-p:my-1 prose-headings:my-2 prose-ul:my-1 prose-ol:my-1',
        },
      },
    })

    // Cleanup on unmount
    React.useEffect(() => {
      return () => {
        editor?.destroy()
      }
    }, [editor])

    return (
      <div
        ref={ref}
        className={[
          "flex flex-col overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] focus-within:ring-2 focus-within:ring-[var(--color-primary)] focus-within:ring-offset-2",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {!readOnly && <MenuBar editor={editor} />}
        {/* We use the Prose styles from our previous component to ensure the editor content matches the read-only output */}
        <EditorContent editor={editor} className="[&>.ProseMirror]:prose [&>.ProseMirror]:prose-slate [&>.ProseMirror]:dark:prose-invert [&>.ProseMirror]:max-w-none [&>.ProseMirror]:focus:outline-none [&>.ProseMirror]:min-h-[150px] [&>.ProseMirror]:p-4 [&>.ProseMirror]:prose-headings:font-semibold [&>.ProseMirror]:prose-headings:tracking-tight [&>.ProseMirror]:prose-h1:text-4xl [&>.ProseMirror]:prose-h2:text-3xl [&>.ProseMirror]:prose-h3:text-2xl [&>.ProseMirror]:prose-p:leading-relaxed [&>.ProseMirror]:prose-p:my-1 [&>.ProseMirror]:prose-headings:my-2 [&>.ProseMirror]:prose-ul:my-1 [&>.ProseMirror]:prose-ol:my-1 [&>.ProseMirror]:prose-a:text-[var(--color-primary)] [&>.ProseMirror]:prose-blockquote:border-l-[var(--color-primary)] [&>.ProseMirror]:prose-blockquote:bg-[var(--color-secondary)]/30 [&>.ProseMirror]:prose-blockquote:py-1 [&>.ProseMirror]:prose-blockquote:px-4 [&>.ProseMirror]:prose-blockquote:not-italic [&>.ProseMirror]:prose-blockquote:rounded-r [&>.ProseMirror]:prose-code:rounded [&>.ProseMirror]:prose-code:bg-[var(--color-secondary)] [&>.ProseMirror]:prose-code:px-1.5 [&>.ProseMirror]:prose-code:py-0.5 [&>.ProseMirror]:prose-pre:bg-[var(--color-secondary)] [&>.ProseMirror]:prose-pre:text-[var(--color-foreground)] [&>.ProseMirror]:prose-pre:border [&>.ProseMirror]:prose-pre:border-[var(--color-border)]" />
      </div>
    )
  }
)

RichTextEditor.displayName = "RichTextEditor"
