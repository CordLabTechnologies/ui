# 🚀 Marketing

Welcome to the **Marketing** category! These components are built specifically for creating high-converting landing pages and promotional sites.

## Components Included

- `Hero`: The massive, stunning banner at the top of your landing page.
- `FeatureGrid`: A beautiful grid for highlighting your product's key features with icons.
- `Pricing`: Highly customizable subscription tiers.
- `SponsorGrid`: A logo carousel to display companies that use your product.
- `Banner`: Thin, dismissible top-bar alerts (e.g., "Black Friday Sale!").
- `PromotedAppGrid` / `AdPlacement`: Specialized cards for cross-promoting other products.

## How to use (Beginner Friendly)

### Example: Hero Section
```tsx
import { Hero } from "@cordlab/ui/marketing"
import { Button } from "@cordlab/ui/elements"

export default function LandingPage() {
  return (
    <Hero 
      title="Build beautiful software."
      description="CordLab UI is the ultimate component library."
      primaryAction={<Button variant="primary">Get Started</Button>}
      badge="VERSION 2.0"
    />
  )
}
```

### Reusability Tips
- Keep your `Hero` titles concise and action-oriented. Use the `badge` prop to highlight new features or sales.
