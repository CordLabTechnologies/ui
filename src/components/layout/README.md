# 📐 Layout

Welcome to the **Layout** category! These components are responsible for the overall structure, spacing, and framing of your pages.

## Components Included

- `Card`: A flexible container with a header, body, and footer.
- `Sidebar`: A collapsible left-hand navigation pane.
- `AppModal` / `Sheet`: Slide-out or pop-up overlays for complex tasks.
- `SettingsLayout`: A two-column layout perfect for account settings.
- `Tabs`: Clickable tab panels to switch between views.
- `Resizable`: Draggable panels that users can resize.

## How to use (Beginner Friendly)

Layout components often act as "Wrappers". You put your other components *inside* of them.

### Example: Using a Card
```tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@cordlab/ui/layout"
import { Button } from "@cordlab/ui/elements"

export default function ProfileCard() {
  return (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      
      <CardContent>
        <p>This is where the main content goes!</p>
      </CardContent>
      
      <CardFooter>
        <Button>Save Changes</Button>
      </CardFooter>
    </Card>
  )
}
```

### Reusability Tips
- **Composition**: Notice how `Card` is split into `CardHeader`, `CardContent`, etc. This pattern allows you to arrange the pieces however you want without strict, inflexible props.
