import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { Button } from "../../elements/Button"
import { Calendar } from "../../data-display/Calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../feedback/Popover"

export interface iDatePickerProps {
  date?: Date
  onSelect?: (date: Date | undefined) => void
  placeholder?: string
  className?: string
}

export const DatePicker = React.forwardRef<HTMLButtonElement, iDatePickerProps>(
  ({ date, onSelect, placeholder = "Pick a date", className }, ref) => {
    const [open, setOpen] = React.useState(false)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant={"outline"}
            className={[
              "w-[240px] justify-start text-left font-normal",
              !date && "text-[var(--color-muted-foreground)]",
              className
            ].filter(Boolean).join(" ")}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>{placeholder}</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              onSelect?.(selectedDate)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    )
  }
)
DatePicker.displayName = "DatePicker"
