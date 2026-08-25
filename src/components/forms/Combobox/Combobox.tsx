import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "../../elements/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../../utilities/Command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../feedback/Popover"

export interface iComboboxItem {
  value: string
  label: string
}

export interface iComboboxProps {
  items: iComboboxItem[]
  value?: string
  onSelect?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyText?: string
  className?: string
}

export const Combobox = React.forwardRef<HTMLButtonElement, iComboboxProps>(
  ({ items, value, onSelect, placeholder = "Select item...", searchPlaceholder = "Search...", emptyText = "No item found.", className }, ref) => {
    const [open, setOpen] = React.useState(false)

    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className={["w-[200px] justify-between", className].filter(Boolean).join(" ")}
          >
            {value
              ? items.find((item) => item.value === value)?.label
              : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder={searchPlaceholder} />
            <CommandList>
              <CommandEmpty>{emptyText}</CommandEmpty>
              <CommandGroup>
                {items.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      onSelect?.(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={[
                        "mr-2 h-4 w-4",
                        value === item.value ? "opacity-100" : "opacity-0"
                      ].filter(Boolean).join(" ")}
                    />
                    {item.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    )
  }
)
Combobox.displayName = "Combobox"
