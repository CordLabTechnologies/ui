import * as React from "react"
import { UploadCloud } from "lucide-react"

export interface iDropzoneProps extends React.HTMLAttributes<HTMLDivElement> {
  onFileDrop?: (files: File[]) => void
  accept?: string
  maxSize?: number
  multiple?: boolean
}

export const Dropzone = React.forwardRef<HTMLDivElement, iDropzoneProps>(
  ({ className, onFileDrop, accept, maxSize, multiple = true, ...props }, ref) => {
    const [isDragging, setIsDragging] = React.useState(false)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleDragOver = React.useCallback((e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(true)
    }, [])

    const handleDragLeave = React.useCallback((e: React.DragEvent) => {
      e.preventDefault()
      e.stopPropagation()
      setIsDragging(false)
    }, [])

    const handleDrop = React.useCallback(
      (e: React.DragEvent) => {
        e.preventDefault()
        e.stopPropagation()
        setIsDragging(false)

        const files = Array.from(e.dataTransfer.files)
        if (onFileDrop) {
          onFileDrop(files)
        }
      },
      [onFileDrop]
    )

    const handleFileInput = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && onFileDrop) {
          onFileDrop(Array.from(e.target.files))
        }
      },
      [onFileDrop]
    )

    return (
      <div
        ref={ref}
        className={[
          "relative flex flex-col items-center justify-center rounded-xl border-2 border-dashed p-12 text-center transition-colors",
          isDragging
            ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5"
            : "border-[var(--color-border)] bg-[var(--color-background)] hover:bg-[var(--color-secondary)]",
          "cursor-pointer",
          className
        ].filter(Boolean).join(" ")}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        {...props}
      >
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          onChange={handleFileInput}
          accept={accept}
          multiple={multiple}
        />
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary)]">
          <UploadCloud className="h-6 w-6" />
        </div>
        <div className="mt-4 flex flex-col gap-1">
          <p className="text-sm font-semibold text-[var(--color-foreground)]">
            Click to upload <span className="font-normal text-[var(--color-muted-foreground)]">or drag and drop</span>
          </p>
          <p className="text-xs text-[var(--color-muted-foreground)]">
            SVG, PNG, JPG or GIF (max. 800x400px)
          </p>
        </div>
      </div>
    )
  }
)
Dropzone.displayName = "Dropzone"
