import * as React from "react"
import { ChevronRight } from "lucide-react"

export interface iSwipeActionProps extends React.HTMLAttributes<HTMLDivElement> {
  onConfirm: () => void
  label?: string
  successLabel?: string
  resetAfterSuccess?: boolean
  successDuration?: number
}

export const SwipeAction = React.forwardRef<HTMLDivElement, iSwipeActionProps>(
  (
    {
      className,
      onConfirm,
      label = "Slide to confirm",
      successLabel = "Confirmed",
      resetAfterSuccess = false,
      successDuration = 2000,
      ...props
    },
    ref
  ) => {
    const [isDragging, setIsDragging] = React.useState(false)
    const [progress, setProgress] = React.useState(0)
    const [isConfirmed, setIsConfirmed] = React.useState(false)
    
    const containerRef = React.useRef<HTMLDivElement>(null)
    const thumbRef = React.useRef<HTMLDivElement>(null)
    const startX = React.useRef(0)

    const handleStart = React.useCallback(
      (clientX: number) => {
        if (isConfirmed) return
        setIsDragging(true)
        startX.current = clientX
      },
      [isConfirmed]
    )

    const handleMove = React.useCallback(
      (clientX: number) => {
        if (!isDragging || !containerRef.current || !thumbRef.current) return

        const containerRect = containerRef.current.getBoundingClientRect()
        const thumbRect = thumbRef.current.getBoundingClientRect()
        
        const maxScroll = containerRect.width - thumbRect.width - 8 // 8px for padding/margin
        let delta = clientX - startX.current

        if (delta < 0) delta = 0
        if (delta > maxScroll) delta = maxScroll

        const newProgress = delta / maxScroll
        setProgress(newProgress)

        if (newProgress >= 1) {
          setIsDragging(false)
          setIsConfirmed(true)
          onConfirm()

          if (resetAfterSuccess) {
            setTimeout(() => {
              setIsConfirmed(false)
              setProgress(0)
            }, successDuration)
          }
        }
      },
      [isDragging, onConfirm, resetAfterSuccess, successDuration]
    )

    const handleEnd = React.useCallback(() => {
      if (!isDragging) return
      setIsDragging(false)
      
      if (progress < 1) {
        setProgress(0)
      }
    }, [isDragging, progress])

    // Mouse events
    React.useEffect(() => {
      const onMouseMove = (e: MouseEvent) => handleMove(e.clientX)
      const onMouseUp = handleEnd

      if (isDragging) {
        window.addEventListener("mousemove", onMouseMove)
        window.addEventListener("mouseup", onMouseUp)
      } else {
        window.removeEventListener("mousemove", onMouseMove)
        window.removeEventListener("mouseup", onMouseUp)
      }

      return () => {
        window.removeEventListener("mousemove", onMouseMove)
        window.removeEventListener("mouseup", onMouseUp)
      }
    }, [isDragging, handleMove, handleEnd])

    // Touch events
    React.useEffect(() => {
      const onTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX)
      const onTouchEnd = handleEnd

      if (isDragging) {
        window.addEventListener("touchmove", onTouchMove, { passive: false })
        window.addEventListener("touchend", onTouchEnd)
      } else {
        window.removeEventListener("touchmove", onTouchMove)
        window.removeEventListener("touchend", onTouchEnd)
      }

      return () => {
        window.removeEventListener("touchmove", onTouchMove)
        window.removeEventListener("touchend", onTouchEnd)
      }
    }, [isDragging, handleMove, handleEnd])

    return (
      <div
        ref={ref || containerRef}
        className={[
          "relative h-14 w-full max-w-sm overflow-hidden rounded-full p-1",
          isConfirmed ? "bg-[var(--color-primary)]" : "bg-[var(--color-secondary)]/80 backdrop-blur-sm",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {/* Background Text */}
        <div 
          className={[
            "absolute inset-0 flex items-center justify-center font-medium transition-opacity duration-300",
            isConfirmed ? "text-white" : "text-[var(--color-muted-foreground)]",
          ].filter(Boolean).join(" ")}
        >
          {isConfirmed ? successLabel : label}
        </div>

        {/* Progress Background */}
        <div 
          className="absolute inset-0 bg-[var(--color-primary)]/10 transition-transform duration-75"
          style={{ 
            transformOrigin: "left",
            transform: `scaleX(${progress})`,
            opacity: isConfirmed ? 0 : 1
          }}
        />

        {/* Thumb */}
        <div
          ref={thumbRef}
          onMouseDown={(e) => handleStart(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          className={[
            "absolute top-1 bottom-1 flex aspect-square items-center justify-center rounded-full bg-white shadow-sm transition-transform hover:scale-105 active:scale-95",
            isDragging ? "cursor-grabbing duration-75" : "cursor-grab duration-300",
            isConfirmed ? "opacity-0 duration-300" : "opacity-100"
          ].filter(Boolean).join(" ")}
          style={{
            transform: `translateX(calc(${progress} * (100cqw - 100%)))`,
            left: "4px"
          }}
        >
          <ChevronRight className="h-5 w-5 text-[var(--color-primary)]" />
        </div>
      </div>
    )
  }
)
SwipeAction.displayName = "SwipeAction"
