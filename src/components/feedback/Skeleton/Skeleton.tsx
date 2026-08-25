import * as React from "react"

export interface iSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

function Skeleton({ className, ...props }: iSkeletonProps) {
  return (
    <div
      className={["animate-pulse rounded-[var(--radius-md)] bg-[var(--color-muted)]/50", className].filter(Boolean).join(" ")}
      {...props}
    />
  )
}

export { Skeleton }
