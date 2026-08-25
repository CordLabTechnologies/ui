# @cordlab/ui

A comprehensive, reusable React UI component library and template system for CordLab projects.

## Overview

CordLab UI provides 76+ meticulously crafted, highly customizable, and fully responsive React components and templates. 
The library is categorized into foundational elements and domain-specific templates to accelerate development across various project types.

### Key Features
- **76+ Components & Templates**: Everything from simple buttons to full e-commerce storefronts.
- **Fully Responsive**: Mobile-first approach with built-in Hamburger menus, Bottom Sheets, and adapting layouts.
- **High-Contrast SaaS Aesthetic**: Designed with the modern "Zinc/Slate" aesthetic, utilizing the `Outfit` font and avoiding generic placeholder styles.
- **Domain Categories**: Pre-built sections for Marketing, SaaS Dashboards, and E-commerce.
- **Accessible & Tested**: Built on top of robust primitive hooks and fully tested via Vitest and Storybook.

## Installation

Install the package via npm:

```bash
npm install @cordlab/ui
```

**Requirements:**
- React 19+
- React DOM 19+
- Tailwind CSS 4+

## Usage

Import the global stylesheet once in your application root (e.g., `main.tsx` or `App.tsx`):

```tsx
import '@cordlab/ui/styles.css';
```

Then, import components directly from the package:

```tsx
import { Button, StatCard, SidebarProvider } from '@cordlab/ui';

function App() {
  return (
    <SidebarProvider>
      <div className="p-4">
        <StatCard title="Total Revenue" value="$45,231" trend="+20.1%" trendDirection="up" />
        <Button className="mt-4" onClick={() => console.log('Clicked')}>
          Continue
        </Button>
      </div>
    </SidebarProvider>
  );
}
```

*Note: Many complex layout templates (like Dashboards) require the `SidebarProvider` to function correctly. Always wrap your app root if you plan to use dashboard components.*

## Library Structure

The components are grouped into logical domains for better discoverability:

- **Elements**: Core UI primitives (`Button`, `Input`, `Avatar`, `Badge`, `Checkbox`, `Select`, `Slider`, etc.)
- **Feedback**: Alerts, Dialogs, Tooltips, Toasts, Skeletons, and Progress bars.
- **Layout**: Structural components (`Card`, `Sheet`, `Sidebar`, `AppModal`, `Tabs`, `SettingsLayout`).
- **Data Display**: Tables, DataTables, Charts, Carousels, Calendars, and Accordions.
- **Navigation**: Breadcrumbs, DropdownMenus, ContextMenus, Pagination, and Steppers.
- **Dashboard**: specialized components for SaaS (`StatCard`, `ActivityFeed`, `Timeline`, `ProfileCard`).
- **E-commerce**: Storefront components (`ProductCard`, `CartDrawer`, `FilterPanel`, `PromoCode`).
- **Marketing**: Landing page sections (`Hero`, `Pricing`, `FeatureGrid`, `SponsorGrid`).
- **Content**: Rich text editors, Note cards, and prose formatting.
- **Templates**: Full-page, plug-and-play layouts (`SaaSDashboard`, `EcommerceStorefront`, `MarketingLanding`).

## Development & Storybook

To view the interactive component documentation locally:

```bash
npm run storybook
```

To run unit tests:

```bash
npm run test
```

To build the library for production:

```bash
npm run build
```

## License

ISC