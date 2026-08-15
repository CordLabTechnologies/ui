# @cordlab/ui

A reusable React UI component library for CordLab projects.

The purpose of this library is to provide reusable, consistent, and maintainable UI components that can be shared across multiple projects instead of rebuilding the same components repeatedly.

## Why CordLab UI?

Instead of creating the same UI components separately in every project:

```text
Project A → create Button
Project B → create Button again
Project C → create Button again
```

we build the component once and share it:

```text
                 @cordlab/ui
                     │
          ┌──────────┼──────────┐
          ↓          ↓          ↓
       Project A  Project B  Project C
```

This provides:

- Consistent UI across projects
- Less duplicated code
- Faster development
- Centralized design tokens
- Reusable components
- Shared responsive behavior
- Easier maintenance

## Installation

Install the package using npm:

```bash
npm install @cordlab/ui
```

The library requires:

- React 19+
- React DOM 19+

## Usage

Import components directly from the package:

```tsx
import { Button } from '@cordlab/ui';

function App() {
  return (
    <Button onClick={() => console.log('Clicked')}>
      Continue
    </Button>
  );
}
```

## Styling

Import the library stylesheet in your application:

```tsx
import '@cordlab/ui/styles.css';
```

For example:

```tsx
import { Button } from '@cordlab/ui';
import '@cordlab/ui/styles.css';

export default function App() {
  return (
    <Button>
      Continue
    </Button>
  );
}
```

## Components

### Button

The `Button` component provides a reusable button implementation with support for common UI states and configurations.

Supported functionality includes:

- Different variants
- Different sizes
- Disabled state
- Loading state
- Start icons
- End icons
- Icon-only buttons
- Custom styling

Example:

```tsx
import { Button } from '@cordlab/ui';

<Button>
  Continue
</Button>
```

## Icons

Icons can be used independently from other components:

```tsx
import { Icon } from '@cordlab/ui';

<Icon name="check" />
```

The icon system provides consistent icon sizing and styling across the library.

## Design Tokens

CordLab UI uses shared design tokens for common UI values, including:

- Colors
- Spacing
- Typography
- Border radius
- Shadows
- Icon sizes

The purpose of design tokens is to provide a single source of truth for the visual language of the library.

Instead of allowing every component to define its own values:

```text
Button → custom blue
Card   → another blue
Modal  → another blue
```

components can use shared design tokens:

```text
                 Design Tokens
                      │
          ┌───────────┼───────────┐
          ↓           ↓           ↓
        Button       Card        Modal
```

This makes the design system easier to maintain and evolve.

## Responsive Design

The library provides a shared device-type definition:

```text
Mobile
Tablet
Desktop
```

These device types act as a common source of truth for responsive behavior across reusable components.

The library also provides the `useDevice` hook for components that need to respond to the current device type.

## Storybook

Storybook is used to develop, document, and visually test components in isolation.

Start Storybook locally:

```bash
npm run storybook
```

Build the Storybook application:

```bash
npm run build-storybook
```

Storybook allows components to be developed independently from the applications that consume them.

## Testing

Unit tests use Vitest and Testing Library.

Run unit tests:

```bash
npm test
```

Run Storybook component tests:

```bash
npm run test:storybook
```

## Building

Build the production package:

```bash
npm run build
```

The build generates the JavaScript, CSS, and TypeScript declaration files required by consuming applications:

```text
dist/
├── cordlab-ui.js
├── cordlab-ui.cjs
├── cordlab-ui.css
└── types/
```

## Project Structure

The source code is organized around reusable library concepts:

```text
src/
├── components/
│   └── Button/
├── constants/
│   └── device.ts
├── hooks/
│   └── useDevice.ts
├── icons/
├── styles/
├── tokens/
└── index.ts
```

### `components/`

Contains reusable UI components.

Each component should have its own directory and public `index.ts` file.

Example:

```text
components/
└── Button/
    ├── Button.tsx
    ├── Button.stories.tsx
    ├── Button.test.tsx
    └── index.ts
```

### `constants/`

Contains shared constants that act as sources of truth across the library.

For example:

```text
constants/device.ts
```

defines the supported device types.

### `hooks/`

Contains reusable React hooks that provide shared behavior across components.

### `icons/`

Contains the reusable icon system.

### `styles/`

Contains global styles and CSS used by the component library.

### `tokens/`

Contains shared design tokens such as:

- Colors
- Spacing
- Typography
- Radius
- Shadows
- Icon sizes

### `index.ts`

The root public entry point of the library.

Consumers should import public components from the package root:

```tsx
import { Button, Icon } from '@cordlab/ui';
```

rather than depending on internal file paths.

## Public API

The package root is the public API of the library.

Preferred:

```tsx
import { Button, Icon } from '@cordlab/ui';
```

Avoid importing internal build files or source paths:

```tsx
// Avoid
import Button from '@cordlab/ui/dist/...';
```

Keeping consumers dependent on the public API allows the internal implementation and project structure to evolve without unnecessarily breaking consuming projects.

## Development

Clone the repository:

```bash
git clone https://github.com/CordLabTechnologies/ui.git
```

Move into the project:

```bash
cd ui
```

Install dependencies:

```bash
npm install
```

Start the development environment:

```bash
npm run dev
```

Start Storybook:

```bash
npm run storybook
```

Run unit tests:

```bash
npm test
```


Build the library:

```bash
npm run build
```

## Package

The library is published to npm as:

```text
@cordlab/ui
```

Install the latest published version:

```bash
npm install @cordlab/ui
```

## Release Workflow

Before publishing a new version, verify the package:

```bash
npm test
npm run build
npm pack --dry-run
```

After verifying the package contents, update the package version and publish the new release.

## License

ISC