import * as React from "react"

export interface iCountdownProps extends React.HTMLAttributes<HTMLDivElement> {
  targetDate: Date
  onComplete?: () => void
}

export const Countdown = React.forwardRef<HTMLDivElement, iCountdownProps>(
  ({ className, targetDate, onComplete, ...props }, ref) => {
    const [timeLeft, setTimeLeft] = React.useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    })

    React.useEffect(() => {
      const calculateTimeLeft = () => {
        const difference = +targetDate - +new Date()
        let newTimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

        if (difference > 0) {
          newTimeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          }
        } else {
          if (onComplete) onComplete()
        }

        return newTimeLeft
      }

      setTimeLeft(calculateTimeLeft())

      const timer = setInterval(() => {
        const remaining = calculateTimeLeft()
        setTimeLeft(remaining)
        
        if (Object.values(remaining).every(val => val === 0)) {
          clearInterval(timer)
        }
      }, 1000)

      return () => clearInterval(timer)
    }, [targetDate, onComplete])

    const pad = (num: number) => num.toString().padStart(2, '0')

    const TimeUnit = ({ value, label }: { value: number; label: string }) => (
      <div className="flex flex-col items-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-[var(--color-secondary)] border border-[var(--color-border)] shadow-sm">
          <span className="font-mono text-2xl font-bold text-[var(--color-foreground)]">
            {pad(value)}
          </span>
        </div>
        <span className="mt-2 text-xs font-medium uppercase tracking-widest text-[var(--color-muted-foreground)]">
          {label}
        </span>
      </div>
    )

    return (
      <div
        ref={ref}
        className={[
          "flex items-center gap-4",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="text-2xl font-bold text-[var(--color-muted)] pb-6">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span className="text-2xl font-bold text-[var(--color-muted)] pb-6">:</span>
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <span className="text-2xl font-bold text-[var(--color-muted)] pb-6">:</span>
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    )
  }
)
Countdown.displayName = "Countdown"
