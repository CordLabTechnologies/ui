import * as React from "react"
import { ChevronRight, MoreHorizontal } from "lucide-react"

export interface iBreadcrumbProps extends React.HTMLAttributes<HTMLElement> {}

export const Breadcrumb = React.forwardRef<HTMLElement, iBreadcrumbProps>(
  ({ className, ...props }, ref) => (
    <nav ref={ref} aria-label="breadcrumb" className={className} {...props} />
  )
)
Breadcrumb.displayName = "Breadcrumb"

export const BreadcrumbList = React.forwardRef<
  HTMLOListElement,
  React.OlHTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={[
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-[var(--color-muted-foreground)] sm:gap-2.5",
      className
    ].filter(Boolean).join(" ")}
    {...props}
  />
))
BreadcrumbList.displayName = "BreadcrumbList"

export const BreadcrumbItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li
    ref={ref}
    className={["inline-flex items-center gap-1.5", className].filter(Boolean).join(" ")}
    {...props}
  />
))
BreadcrumbItem.displayName = "BreadcrumbItem"

export const BreadcrumbLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    asChild?: boolean
  }
>(({ className, ...props }, ref) => {
  return (
    <a
      ref={ref}
      className={["transition-colors hover:text-[var(--color-foreground)] cursor-pointer", className].filter(Boolean).join(" ")}
      {...props}
    />
  )
})
BreadcrumbLink.displayName = "BreadcrumbLink"

export const BreadcrumbPage = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={["font-normal text-[var(--color-foreground)]", className].filter(Boolean).join(" ")}
    {...props}
  />
))
BreadcrumbPage.displayName = "BreadcrumbPage"

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLLIElement>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={["[&>svg]:size-3.5", className].filter(Boolean).join(" ")}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
)
BreadcrumbSeparator.displayName = "BreadcrumbSeparator"

export const BreadcrumbEllipsis = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={["flex h-9 w-9 items-center justify-center", className].filter(Boolean).join(" ")}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More</span>
  </span>
)
BreadcrumbEllipsis.displayName = "BreadcrumbElipssis"
