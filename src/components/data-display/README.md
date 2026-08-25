# 📊 Data Display

Welcome to the **Data Display** category! These components are built to handle and present large amounts of information beautifully.

## Components Included

- `DataTable`: Highly advanced, sortable, and filterable tables.
- `Table`: Basic HTML tables with our clean styling.
- `Accordion`: Collapsible sections (perfect for FAQs).
- `Carousel` / `Marquee`: Auto-scrolling or swipable lists of items.
- `Chart`: Data visualization.
- `Calendar`: For picking dates or viewing events.

## How to use (Beginner Friendly)

### Example: Accordion
```tsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@cordlab/ui/data-display"

export default function FAQ() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

### Reusability Tips
- **DataTable vs Table**: If you just have 5 static rows of data, use `Table`. If you need pagination, sorting, and dynamic data fetching, use `DataTable`!
