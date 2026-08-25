import { forwardRef, type ComponentPropsWithoutRef, type ElementRef } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';

export interface iLabelProps extends ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {
    required?: boolean;
}

export const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, iLabelProps>(
    ({ className, required, children, ...props }, ref) => {
        const classes = [
            'text-sm font-medium leading-none',
            'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
            className,
        ].filter(Boolean).join(' ');

        return (
            <LabelPrimitive.Root ref={ref} className={classes} {...props}>
                {children}
                {required && <span className="text-red-500 ml-1">*</span>}
            </LabelPrimitive.Root>
        );
    }
);

Label.displayName = LabelPrimitive.Root.displayName;
