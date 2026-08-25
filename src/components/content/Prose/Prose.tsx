import * as React from "react"

export interface iProseProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  html?: string
}

export const Prose = React.forwardRef<HTMLDivElement, iProseProps>(
  ({ className, children, html, ...props }, ref) => {
    const baseClasses = [
      "prose prose-slate dark:prose-invert max-w-none",
      "prose-headings:font-semibold prose-headings:tracking-tight",
      "prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl",
      "prose-p:leading-relaxed",
      "prose-a:text-[var(--color-primary)] prose-a:no-underline hover:prose-a:underline",
      "prose-blockquote:border-l-[var(--color-primary)] prose-blockquote:bg-[var(--color-secondary)]/30 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:not-italic prose-blockquote:rounded-r",
      "prose-code:rounded prose-code:bg-[var(--color-secondary)] prose-code:px-1.5 prose-code:py-0.5 prose-code:font-mono prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
      "prose-pre:bg-[var(--color-secondary)] prose-pre:text-[var(--color-foreground)] prose-pre:border prose-pre:border-[var(--color-border)]",
      "prose-li:marker:text-[var(--color-muted-foreground)]",
      "prose-hr:border-[var(--color-border)]",
      "prose-img:rounded-[var(--radius-lg)] prose-img:border prose-img:border-[var(--color-border)]",
      className
    ].filter(Boolean).join(" ")

    if (html) {
      return (
        <div
          ref={ref}
          className={baseClasses}
          dangerouslySetInnerHTML={{ __html: html }}
          {...props}
        />
      )
    }

    return (
      <div ref={ref} className={baseClasses} {...props}>
        {children}
      </div>
    )
  }
)

Prose.displayName = "Prose"
