import * as React from "react"
import { Checkbox } from "../../elements/Checkbox"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../../data-display/Accordion"

export interface iFilterOption {
  label: string
  value: string
  count?: number
}

export interface iFilterGroup {
  id: string
  title: string
  options: iFilterOption[]
  defaultExpanded?: boolean
}

export interface iFilterPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  groups: iFilterGroup[]
  selectedValues?: Record<string, string[]>
  onFilterChange?: (groupId: string, value: string, checked: boolean) => void
}

export const FilterPanel = React.forwardRef<HTMLDivElement, iFilterPanelProps>(
  ({ className, groups, selectedValues = {}, onFilterChange, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={["w-full min-w-[200px] flex flex-col gap-2", className].filter(Boolean).join(" ")}
        {...props}
      >
        <Accordion type="multiple" defaultValue={groups.filter(g => g.defaultExpanded).map(g => g.id)}>
          {groups.map((group) => (
            <AccordionItem key={group.id} value={group.id}>
              <AccordionTrigger className="py-3 text-sm font-semibold">
                {group.title}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-2 pt-1 pb-2">
                  {group.options.map((option) => {
                    const isChecked = selectedValues[group.id]?.includes(option.value) || false
                    return (
                      <div key={option.value} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`${group.id}-${option.value}`}
                            checked={isChecked}
                            onCheckedChange={(checked) => {
                              onFilterChange?.(group.id, option.value, checked as boolean)
                            }}
                          />
                          <label
                            htmlFor={`${group.id}-${option.value}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                          >
                            {option.label}
                          </label>
                        </div>
                        {option.count !== undefined && (
                          <span className="text-xs text-[var(--color-muted-foreground)]">
                            {option.count}
                          </span>
                        )}
                      </div>
                    )
                  })}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }
)
FilterPanel.displayName = "FilterPanel"
