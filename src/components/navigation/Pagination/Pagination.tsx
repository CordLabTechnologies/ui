import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"

export interface iPaginationProps extends React.ComponentProps<"nav"> {}

export const Pagination = ({ className, ...props }: iPaginationProps) => (
  <nav
    role="navigation"
    aria-label="pagination"
    className={["mx-auto flex w-full justify-center", className].filter(Boolean).join(" ")}
    {...props}
  />
)
Pagination.displayName = "Pagination"

export const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={["flex flex-row items-center gap-1", className].filter(Boolean).join(" ")}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

export const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ className, ...props }, ref) => (
  <li ref={ref} className={className} {...props} />
))
PaginationItem.displayName = "PaginationItem"

export interface iPaginationLinkProps
  extends React.ComponentProps<"a"> {
  isActive?: boolean
  size?: "default" | "sm" | "lg"
}

export const PaginationLink = React.forwardRef<
  HTMLAnchorElement,
  iPaginationLinkProps
>(({ className, isActive, size = "default", ...props }, ref) => (
  <a
    ref={ref}
    aria-current={isActive ? "page" : undefined}
    className={[
      "inline-flex items-center justify-center rounded-[var(--radius-md)] text-sm font-medium transition-colors hover:bg-[var(--color-secondary)] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
      isActive ? "border border-[var(--color-border)] bg-[var(--color-secondary)]/50" : "bg-transparent",
      size === "default" && "h-10 w-10",
      size === "sm" && "h-8 w-8",
      size === "lg" && "h-12 w-12",
      className
    ].filter(Boolean).join(" ")}
    {...props}
  />
))
PaginationLink.displayName = "PaginationLink"

export const PaginationPrevious = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to previous page"
    size="default"
    className={["gap-1 pl-2.5 w-auto pr-4", className].filter(Boolean).join(" ")}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

export const PaginationNext = ({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) => (
  <PaginationLink
    aria-label="Go to next page"
    size="default"
    className={["gap-1 pr-2.5 w-auto pl-4", className].filter(Boolean).join(" ")}
    {...props}
  >
    <span>Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

export const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={["flex h-9 w-9 items-center justify-center", className].filter(Boolean).join(" ")}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4 text-[var(--color-muted-foreground)]" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"
