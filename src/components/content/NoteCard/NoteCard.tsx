import * as React from "react"
import { Pin, MoreVertical, Clock } from "lucide-react"

export interface iNoteCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  previewText?: string
  date: string
  isPinned?: boolean
  tags?: string[]
  color?: string
  onOptionsClick?: () => void
}

export const NoteCard = React.forwardRef<HTMLDivElement, iNoteCardProps>(
  (
    {
      className,
      title,
      previewText,
      date,
      isPinned = false,
      tags = [],
      color,
      onOptionsClick,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "group relative flex flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] p-4 shadow-sm transition-all hover:shadow-md bg-[var(--color-background)]",
          className
        ].filter(Boolean).join(" ")}
        style={color ? { borderTopColor: color, borderTopWidth: 4 } : undefined}
        {...props}
      >
        <div className="mb-2 flex items-start justify-between gap-4">
          <h3 className="line-clamp-1 flex-1 font-semibold text-[var(--color-foreground)]">
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-1 text-[var(--color-muted-foreground)]">
            {isPinned && <Pin className="h-4 w-4 fill-current text-[var(--color-primary)]" />}
            {onOptionsClick && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  onOptionsClick()
                }}
                className="rounded-full p-1 hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] transition-colors opacity-0 group-hover:opacity-100"
                aria-label="Note options"
              >
                <MoreVertical className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {previewText && (
          <p className="mb-4 line-clamp-3 flex-1 text-sm text-[var(--color-muted-foreground)]">
            {previewText}
          </p>
        )}

        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
          <div className="flex items-center gap-1.5 text-xs text-[var(--color-muted-foreground)]">
            <Clock className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[var(--color-secondary)] px-2 py-0.5 text-xs font-medium text-[var(--color-secondary-foreground)]"
                >
                  {tag}
                </span>
              ))}
              {tags.length > 2 && (
                <span className="rounded-full bg-[var(--color-secondary)] px-2 py-0.5 text-xs font-medium text-[var(--color-secondary-foreground)]">
                  +{tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)

NoteCard.displayName = "NoteCard"
