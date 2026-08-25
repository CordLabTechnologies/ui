import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import { useState } from 'react';
import { Button } from "../../elements/Button";
import { ShoppingCart, CreditCard, CheckCircle2 } from 'lucide-react';

const meta = {
    title: 'Components/Stepper',
    component: Stepper,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type tStory = any;

const steps = [
    { title: "Shopping Cart", description: "Review your items" },
    { title: "Payment Details", description: "Enter billing info" },
    { title: "Order Complete", description: "Thank you for shopping" },
];

const iconSteps = [
    { title: "Cart", icon: <ShoppingCart className="h-4 w-4" /> },
    { title: "Payment", icon: <CreditCard className="h-4 w-4" /> },
    { title: "Done", icon: <CheckCircle2 className="h-4 w-4" /> },
];

export const Horizontal: tStory = {
    render: () => {
        const [activeStep, setActiveStep] = useState(1);

        return (
            <div className="w-full max-w-3xl space-y-16">
                <Stepper steps={steps} activeStep={activeStep} />
                
                <div className="flex justify-end gap-4">
                    <Button 
                        variant="outline" 
                        onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                        disabled={activeStep === 0}
                    >
                        Back
                    </Button>
                    <Button 
                        onClick={() => setActiveStep(prev => Math.min(steps.length, prev + 1))}
                        disabled={activeStep === steps.length}
                    >
                        Next Step
                    </Button>
                </div>
            </div>
        );
    },
};

export const WithIcons: tStory = {
    render: () => (
        <div className="w-full max-w-3xl pb-12">
            <Stepper steps={iconSteps} activeStep={2} />
        </div>
    ),
};

export const Vertical: tStory = {
    render: () => (
        <div className="w-full max-w-sm">
            <Stepper steps={steps} activeStep={1} orientation="vertical" />
        </div>
    ),
};
