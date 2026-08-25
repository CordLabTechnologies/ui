import * as React from "react"
import { Skeleton } from "../../feedback/Skeleton"

export type tAdSize = "leaderboard" | "mediumRectangle" | "skyscraper" | "mobileBanner"

export interface iAdPlacementProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: tAdSize
  adUnitPath?: string
  isLoaded?: boolean
}

export const AdPlacement = React.forwardRef<HTMLDivElement, iAdPlacementProps>(
  ({ className, size = "mediumRectangle", isLoaded = false, adUnitPath, children, ...props }, ref) => {
    
    // IAB Standard Ad Sizes
    const sizeClasses: Record<tAdSize, string> = {
      leaderboard: "w-[728px] h-[90px] hidden md:flex",
      mediumRectangle: "w-[300px] h-[250px]",
      skyscraper: "w-[160px] h-[600px] hidden lg:flex",
      mobileBanner: "w-[320px] h-[50px] md:hidden",
    }

    return (
      <div
        className="flex flex-col items-center justify-center my-4"
        aria-label="Advertisement"
      >
        <span className="text-[10px] uppercase tracking-wider text-[var(--color-muted-foreground)] mb-1 opacity-50">
          Advertisement
        </span>
        <div
          ref={ref}
          className={[
            "relative flex items-center justify-center bg-[var(--color-secondary)]/50 border border-[var(--color-border)] overflow-hidden rounded-sm",
            sizeClasses[size],
            className
          ].filter(Boolean).join(" ")}
          {...props}
        >
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <Skeleton className="w-full h-full rounded-none" />
            </div>
          )}
          
          <div className={[
            "relative z-10 w-full h-full flex items-center justify-center transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          ].filter(Boolean).join(" ")}>
            {children}
          </div>
        </div>
      </div>
    )
  }
)
AdPlacement.displayName = "AdPlacement"
