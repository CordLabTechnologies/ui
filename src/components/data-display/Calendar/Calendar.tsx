import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { DayPicker } from "react-day-picker"

export type tCalendarProps = React.ComponentProps<typeof DayPicker>

export const Calendar = React.forwardRef<HTMLDivElement, tCalendarProps>(
  ({ className, classNames, showOutsideDays = true, ...props }, ref) => {
    return (
      <DayPicker
        showOutsideDays={showOutsideDays}
        className={["p-3", className].filter(Boolean).join(" ")}
        classNames={{
          months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
          month: "space-y-4",
          month_caption: "flex justify-center pt-1 relative items-center",
          caption_label: "text-sm font-medium",
          nav: "space-x-1 flex items-center absolute right-1 top-4",
          button_previous: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 flex items-center justify-center rounded-md hover:bg-[var(--color-secondary)]",
          button_next: "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 flex items-center justify-center rounded-md hover:bg-[var(--color-secondary)]",
          month_grid: "w-full border-collapse space-y-1",
          weekdays: "flex",
          weekday: "text-[var(--color-muted-foreground)] rounded-md w-9 font-normal text-[0.8rem]",
          week: "flex w-full mt-2",
          day: "text-center text-sm p-0 relative [&:has([aria-selected])]:bg-[var(--color-secondary)] first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
          day_button: "h-9 w-9 p-0 font-normal aria-selected:opacity-100 flex items-center justify-center rounded-md hover:bg-[var(--color-secondary)] transition-colors",
          selected: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary)] hover:text-white focus:bg-[var(--color-primary)] focus:text-white",
          today: "bg-[var(--color-secondary)] text-[var(--color-foreground)]",
          outside: "text-[var(--color-muted-foreground)] opacity-50",
          disabled: "text-[var(--color-muted-foreground)] opacity-50",
          range_middle: "aria-selected:bg-[var(--color-secondary)] aria-selected:text-[var(--color-foreground)]",
          hidden: "invisible",
          ...classNames,
        }}
        components={{
          Chevron: (props) => {
            if (props.orientation === 'left') {
              return <ChevronLeft className="h-4 w-4" />
            }
            return <ChevronRight className="h-4 w-4" />
          }
        }}
        {...props}
      />
    )
  }
)
Calendar.displayName = "Calendar"
