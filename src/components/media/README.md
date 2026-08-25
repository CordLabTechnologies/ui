# 🎬 Media

Welcome to the **Media** category! These components handle rich media like video and file management.

## Components Included

- `VideoPlayer`: A fully custom HTML5 video player with sleek floating controls, speed adjustments, and fullscreen support.
- `FilePreview`: An elegant component for displaying file uploads (shows PDF, Image, or Zip icons automatically based on file type).

## How to use (Beginner Friendly)

### Example: Video Player
```tsx
import { VideoPlayer } from "@cordlab/ui/media"

export default function ProductDemo() {
  return (
    <VideoPlayer 
      src="https://example.com/demo.mp4" 
      poster="/thumbnail.jpg" 
      className="w-full max-w-2xl"
    />
  )
}
```

### Reusability Tips
- `FilePreview` supports two `variant`s: `"list"` (great for email attachments) and `"grid"` (great for image galleries).
