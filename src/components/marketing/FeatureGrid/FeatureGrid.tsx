import * as React from "react"

export interface iFeatureGridItem {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
  content?: React.ReactNode
}

export interface iFeatureGridProps extends React.HTMLAttributes<HTMLDivElement> {
  features: iFeatureGridItem[]
}

export const FeatureGrid = React.forwardRef<HTMLDivElement, iFeatureGridProps>(
  ({ className, features, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {features.map((feature, index) => (
          <div
            key={index}
            className={[
              "group relative overflow-hidden rounded-3xl bg-[var(--color-secondary)] p-8 transition-all hover:shadow-md",
              feature.className
            ].filter(Boolean).join(" ")}
          >
            <div className="relative z-10 flex h-full flex-col">
              {feature.icon && (
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-background)] text-[var(--color-primary)] shadow-sm">
                  {feature.icon}
                </div>
              )}
              
              <h3 className="mb-2 text-xl font-semibold tracking-tight text-[var(--color-foreground)]">
                {feature.title}
              </h3>
              
              <p className="text-[var(--color-muted-foreground)]">
                {feature.description}
              </p>
              
              {feature.content && (
                <div className="mt-8 flex-1">
                  {feature.content}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
)
FeatureGrid.displayName = "FeatureGrid"
