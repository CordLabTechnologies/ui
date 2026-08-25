import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';
import { Check, Package, Truck, Box } from 'lucide-react';

const meta = {
    title: 'Components/Timeline',
    component: Timeline,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type tStory = any;

const items = [
    {
        id: "1",
        title: "Order Placed",
        description: "Your order #4592 has been placed successfully.",
        date: "Today, 10:45 AM",
        icon: <Check className="h-4 w-4" />,
        isActive: true,
    },
    {
        id: "2",
        title: "Processing",
        description: "We are preparing your items for shipment.",
        date: "Today, 11:30 AM",
        icon: <Package className="h-4 w-4" />,
        isActive: true,
    },
    {
        id: "3",
        title: "Shipped",
        description: "Your package is on the way.",
        date: "Tomorrow, 8:00 AM",
        icon: <Truck className="h-4 w-4" />,
    },
    {
        id: "4",
        title: "Delivered",
        description: "Package dropped off at front porch.",
        date: "Expected Friday",
        icon: <Box className="h-4 w-4" />,
    },
];

export const Default: tStory = {
    render: () => (
        <div className="w-full max-w-md p-6">
            <h3 className="text-lg font-bold mb-6">Tracking Details</h3>
            <Timeline items={items} />
        </div>
    ),
};
