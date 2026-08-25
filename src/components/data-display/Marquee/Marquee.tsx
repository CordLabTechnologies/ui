import * as React from "react"

export interface iMarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
}

export const Marquee = React.forwardRef<HTMLDivElement, iMarqueeProps>(
  ({ className, pauseOnHover = false, direction = "left", speed = "normal", children, ...props }, ref) => {
    const speedClasses = {
      fast: "[--duration:10s]",
      normal: "[--duration:20s]",
      slow: "[--duration:40s]"
    }

    return (
      <div
        ref={ref}
        className={[
          "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)]",
          speedClasses[speed],
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <div
          className={[
            "flex shrink-0 justify-around [gap:var(--gap)] min-w-full",
            "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            direction === "right" && "[animation-direction:reverse]"
          ].filter(Boolean).join(" ")}
        >
          {children}
        </div>
        <div
          aria-hidden="true"
          className={[
            "flex shrink-0 justify-around [gap:var(--gap)] min-w-full",
            "animate-marquee",
            pauseOnHover && "group-hover:[animation-play-state:paused]",
            direction === "right" && "[animation-direction:reverse]"
          ].filter(Boolean).join(" ")}
        >
          {children}
        </div>
      </div>
    )
  }
)
Marquee.displayName = "Marquee"
