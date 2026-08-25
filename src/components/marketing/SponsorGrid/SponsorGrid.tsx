import * as React from "react"

export interface iSponsor {
  name: string
  logo: React.ReactNode
  url?: string
}

export interface iSponsorGridProps extends React.HTMLAttributes<HTMLDivElement> {
  sponsors: iSponsor[]
  title?: string
}

export const SponsorGrid = React.forwardRef<HTMLDivElement, iSponsorGridProps>(
  ({ className, sponsors, title, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["w-full py-12", className].filter(Boolean).join(" ")}
        {...props}
      >
        {title && (
          <p className="text-center text-sm font-semibold uppercase tracking-wider text-[var(--color-muted-foreground)] mb-8">
            {title}
          </p>
        )}
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-10 lg:grid-cols-5">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="col-span-1 flex items-center justify-center opacity-50 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2 rounded-md p-2"
                aria-label={`Visit ${sponsor.name}`}
              >
                {sponsor.logo}
              </a>
            ))}
          </div>
        </div>
      </div>
    )
  }
)
SponsorGrid.displayName = "SponsorGrid"
