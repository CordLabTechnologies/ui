import * as React from "react"
import { Check } from "lucide-react"
import { Button } from "../../elements/Button"
import { Badge } from "../../elements/Badge"

export interface iPricingFeature {
  name: string
  included?: boolean
}

export interface iPricingTier {
  name: string
  id: string
  href: string
  priceMonthly: string
  priceYearly?: string
  description: string
  features: iPricingFeature[]
  mostPopular?: boolean
  ctaText?: string
}

export interface iPricingProps extends React.HTMLAttributes<HTMLDivElement> {
  tiers: iPricingTier[]
  billingCycle?: "monthly" | "yearly"
}

export const Pricing = React.forwardRef<HTMLDivElement, iPricingProps>(
  ({ className, tiers, billingCycle = "monthly", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={[
          "isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-7xl",
          tiers.length === 2 ? "lg:grid-cols-2 lg:max-w-4xl" : "lg:grid-cols-3",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {tiers.map((tier) => (
          <div
            key={tier.id}
            className={[
              tier.mostPopular ? "ring-2 ring-[var(--color-primary)]" : "ring-1 ring-[var(--color-border)]",
              "rounded-3xl p-8 xl:p-10 bg-[var(--color-background)] flex flex-col justify-between shadow-sm relative"
            ].filter(Boolean).join(" ")}
          >
            {tier.mostPopular && (
              <div className="absolute top-0 right-0 -mt-3 mr-6">
                <Badge className="px-3 rounded-full uppercase tracking-wider text-xs">
                  Most Popular
                </Badge>
              </div>
            )}
            
            <div>
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className="text-lg font-semibold leading-8 text-[var(--color-foreground)]"
                >
                  {tier.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--color-muted-foreground)] h-12">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-[var(--color-foreground)]">
                  {billingCycle === "monthly" ? tier.priceMonthly : tier.priceYearly || tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-[var(--color-muted-foreground)]">
                  /month
                </span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-[var(--color-muted-foreground)]"
              >
                {tier.features.map((feature) => (
                  <li key={feature.name} className="flex gap-x-3">
                    {feature.included !== false ? (
                      <Check
                        className="h-6 w-5 flex-none text-[var(--color-primary)]"
                        aria-hidden="true"
                      />
                    ) : (
                      <div className="h-6 w-5 flex-none" />
                    )}
                    <span className={feature.included === false ? "opacity-50" : ""}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a
              href={tier.href}
              aria-describedby={tier.id}
              className="mt-8 block w-full"
            >
              <Button
                variant={tier.mostPopular ? "primary" : "outline"}
                className="w-full"
              >
                {tier.ctaText || "Get started"}
              </Button>
            </a>
          </div>
        ))}
      </div>
    )
  }
)
Pricing.displayName = "Pricing"
