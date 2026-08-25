# 📈 Dashboard

Welcome to the **Dashboard** category! These components are tailored for SaaS analytics, admin panels, and user portals.

## Components Included

- `StatCard`: A small card showing a single metric (e.g., "Revenue $1,000" with a green arrow).
- `ActivityFeed`: A chronological list of events (e.g., "John logged in 2 hrs ago").
- `Timeline`: A vertical timeline of steps.
- `TrendingSection`: A list of top-performing items.
- `ProfileCard`: A detailed card showing user account info.

## How to use (Beginner Friendly)

### Example: Stat Card Grid
Dashboards almost always start with a grid of stats at the top.

```tsx
import { StatCard } from "@cordlab/ui/dashboard"

export default function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <StatCard title="Revenue" value="$45,000" trendValue="+12%" trendDirection="up" />
      <StatCard title="Users" value="1,204" trendValue="+5%" trendDirection="up" />
      <StatCard title="Churn" value="2.1%" trendValue="-1%" trendDirection="down" />
    </div>
  )
}
```

### Reusability Tips
- `StatCard` handles the styling for green/red arrows automatically based on the `trendDirection` prop!
