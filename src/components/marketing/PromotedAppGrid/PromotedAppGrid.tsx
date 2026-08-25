import * as React from "react"
import { ExternalLink, Download } from "lucide-react"
import { Button } from "../../elements/Button"
import { Badge } from "../../elements/Badge"

export interface iPromotedApp {
  id: string
  name: string
  developer: string
  description: string
  icon: React.ReactNode
  url?: string
  badge?: string
  actionType?: "install" | "visit"
}

export interface iPromotedAppGridProps extends React.HTMLAttributes<HTMLDivElement> {
  apps: iPromotedApp[]
  title?: string
}

export const PromotedAppGrid = React.forwardRef<HTMLDivElement, iPromotedAppGridProps>(
  ({ className, apps, title = "Recommended Apps", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["w-full", className].filter(Boolean).join(" ")}
        {...props}
      >
        {title && (
          <h2 className="mb-6 text-xl font-bold tracking-tight text-[var(--color-foreground)]">
            {title}
          </h2>
        )}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <div
              key={app.id}
              className="flex flex-col justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] p-5 transition-shadow hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-secondary)] shadow-sm overflow-hidden">
                  {app.icon}
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold leading-none tracking-tight text-[var(--color-foreground)]">
                      {app.name}
                    </h3>
                    {app.badge && (
                      <Badge variant="secondary" className="px-1.5 py-0.5 text-[10px]">
                        {app.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-xs font-medium text-[var(--color-muted-foreground)]">
                    {app.developer}
                  </p>
                  <p className="mt-2 text-sm text-[var(--color-muted-foreground)] line-clamp-2">
                    {app.description}
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <a href={app.url || "#"} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="outline" className="w-full justify-center group">
                    {app.actionType === "install" ? (
                      <>
                        <Download className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                        Install App
                      </>
                    ) : (
                      <>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Site
                      </>
                    )}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
)
PromotedAppGrid.displayName = "PromotedAppGrid"
