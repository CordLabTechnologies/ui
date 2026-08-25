import * as React from "react"
import { Button } from "../../elements/Button"

export interface iHeroProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  badge?: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  primaryAction?: React.ReactNode
  secondaryAction?: React.ReactNode
  image?: React.ReactNode
  alignment?: "left" | "center"
}

export const Hero = React.forwardRef<HTMLDivElement, iHeroProps>(
  ({ className, badge, title, description, primaryAction, secondaryAction, image, alignment = "center", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "relative overflow-hidden bg-[var(--color-background)] px-6 py-24 sm:py-32 lg:px-8",
          alignment === "left" && image ? "lg:flex lg:items-center lg:gap-x-10" : "",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <div className={[
          "mx-auto max-w-2xl",
          alignment === "center" ? "text-center" : "lg:mx-0 lg:flex-auto"
        ].filter(Boolean).join(" ")}>
          {badge && (
            <div className={[
              "mb-8 flex",
              alignment === "center" ? "justify-center" : "justify-start"
            ].filter(Boolean).join(" ")}>
              {badge}
            </div>
          )}
          
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-foreground)] sm:text-6xl">
            {title}
          </h1>
          
          <p className="mt-6 text-lg leading-8 text-[var(--color-muted-foreground)]">
            {description}
          </p>
          
          {(primaryAction || secondaryAction) && (
            <div className={[
              "mt-10 flex items-center gap-x-6",
              alignment === "center" ? "justify-center" : "justify-start"
            ].filter(Boolean).join(" ")}>
              {primaryAction}
              {secondaryAction}
            </div>
          )}
        </div>
        
        {image && alignment === "left" && (
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
            {image}
          </div>
        )}
        
        {image && alignment === "center" && (
          <div className="mt-16 sm:mt-24 w-full flex justify-center">
            {image}
          </div>
        )}
      </div>
    )
  }
)
Hero.displayName = "Hero"
