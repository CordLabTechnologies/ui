import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export interface iImageGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[]
  altTexts?: string[]
}

export const ImageGallery = React.forwardRef<HTMLDivElement, iImageGalleryProps>(
  ({ className, images, altTexts = [], ...props }, ref) => {
    const [activeIndex, setActiveIndex] = React.useState(0)

    const handlePrevious = () => {
      setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    const handleNext = () => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    if (!images || images.length === 0) {
      return null
    }

    return (
      <div
        ref={ref}
        className={["flex flex-col gap-4", className].filter(Boolean).join(" ")}
        {...props}
      >
        <div className="relative aspect-square overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-secondary)]/30 border border-[var(--color-border)]">
          <img
            src={images[activeIndex]}
            alt={altTexts[activeIndex] || `Image ${activeIndex + 1}`}
            className="h-full w-full object-cover transition-opacity duration-300"
          />
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black shadow-sm backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-black shadow-sm backdrop-blur-sm transition-transform hover:scale-110 active:scale-95"
                aria-label="Next image"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
        
        {images.length > 1 && (
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={[
                  "relative aspect-square w-20 shrink-0 overflow-hidden rounded-[var(--radius-md)] border-2 transition-colors",
                  activeIndex === index
                    ? "border-[var(--color-primary)]"
                    : "border-transparent hover:border-[var(--color-border)]"
                ].filter(Boolean).join(" ")}
              >
                <img
                  src={image}
                  alt={altTexts[index] || `Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    )
  }
)
ImageGallery.displayName = "ImageGallery"
