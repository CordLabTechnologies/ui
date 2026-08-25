import * as React from "react"
import { FileIcon, FileText, Image as ImageIcon, FileArchive, Download, Trash2, X } from "lucide-react"

export interface iFilePreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  file: {
    name: string
    size: string // e.g., "2.4 MB"
    type: string // MIME type or generic "image", "pdf", "zip", etc.
    url?: string // Download/preview URL
    thumbnailUrl?: string // For images
  }
  onDownload?: () => void
  onDelete?: () => void
  onRemove?: () => void // e.g. X button top right for removing from upload list
  variant?: "list" | "grid"
}

export const FilePreview = React.forwardRef<HTMLDivElement, iFilePreviewProps>(
  (
    {
      className,
      file,
      onDownload,
      onDelete,
      onRemove,
      variant = "list",
      ...props
    },
    ref
  ) => {
    // Determine icon based on file type
    const getIcon = () => {
      const type = file.type.toLowerCase()
      if (type.includes("image")) return <ImageIcon className="h-6 w-6 text-blue-500" />
      if (type.includes("pdf")) return <FileText className="h-6 w-6 text-red-500" />
      if (type.includes("zip") || type.includes("rar") || type.includes("tar")) return <FileArchive className="h-6 w-6 text-yellow-500" />
      return <FileIcon className="h-6 w-6 text-slate-500" />
    }

    if (variant === "grid") {
      return (
        <div
          ref={ref}
          className={[
            "group relative flex flex-col items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] p-4 shadow-sm transition-all hover:border-[var(--color-primary)]",
            className
          ].filter(Boolean).join(" ")}
          {...props}
        >
          {onRemove && (
            <button
              onClick={onRemove}
              className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-100 text-red-600 opacity-0 transition-opacity group-hover:opacity-100 dark:bg-red-900/50"
              aria-label="Remove file"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
          
          <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-secondary)]">
            {file.thumbnailUrl ? (
              <img src={file.thumbnailUrl} alt={file.name} className="h-full w-full rounded-[var(--radius-md)] object-cover" />
            ) : (
              getIcon()
            )}
          </div>
          
          <div className="w-full text-center">
            <p className="truncate text-sm font-medium text-[var(--color-foreground)]" title={file.name}>
              {file.name}
            </p>
            <p className="text-xs text-[var(--color-muted-foreground)]">
              {file.size}
            </p>
          </div>

          {(onDownload || onDelete) && (
            <div className="absolute inset-0 flex items-center justify-center gap-2 rounded-[var(--radius-md)] bg-black/40 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              {onDownload && (
                <button onClick={onDownload} className="rounded-full bg-white p-2 text-black hover:bg-gray-200" aria-label="Download">
                  <Download className="h-4 w-4" />
                </button>
              )}
              {onDelete && (
                <button onClick={onDelete} className="rounded-full bg-red-500 p-2 text-white hover:bg-red-600" aria-label="Delete">
                  <Trash2 className="h-4 w-4" />
                </button>
              )}
            </div>
          )}
        </div>
      )
    }

    // List Variant (Default)
    return (
      <div
        ref={ref}
        className={[
          "group flex items-center justify-between rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] p-3 shadow-sm transition-colors hover:bg-[var(--color-secondary)]",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-slate-100 dark:bg-slate-800">
            {file.thumbnailUrl ? (
              <img src={file.thumbnailUrl} alt={file.name} className="h-full w-full rounded object-cover" />
            ) : (
              getIcon()
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-[var(--color-foreground)]" title={file.name}>
              {file.name}
            </p>
            <p className="text-xs text-[var(--color-muted-foreground)]">
              {file.size}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 pl-2">
          {onDownload && (
            <button
              onClick={onDownload}
              className="text-[var(--color-muted-foreground)] transition-colors hover:text-[var(--color-primary)]"
              aria-label="Download"
            >
              <Download className="h-4 w-4" />
            </button>
          )}
          {onDelete && (
            <button
              onClick={onDelete}
              className="text-[var(--color-muted-foreground)] transition-colors hover:text-red-500"
              aria-label="Delete"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          )}
          {onRemove && (
            <button
              onClick={onRemove}
              className="text-[var(--color-muted-foreground)] transition-colors hover:text-red-500"
              aria-label="Remove"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    )
  }
)

FilePreview.displayName = "FilePreview"
