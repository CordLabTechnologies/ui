import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from './Alert';
import { Terminal } from 'lucide-react';

const meta = {
    title: 'Feedback/Alert',
    component: Alert,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <Alert className="max-w-md">
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
                You can add components and dependencies to your app using the cli.
            </AlertDescription>
        </Alert>
    ),
};

export const CustomIcon: tStory = {
    render: () => (
        <Alert className="max-w-md" icon={<Terminal className="h-4 w-4" />}>
            <AlertTitle>Terminal is running!</AlertTitle>
            <AlertDescription>
                Make sure to keep this window open while compiling.
            </AlertDescription>
        </Alert>
    ),
};

export const Destructive: tStory = {
    render: () => (
        <Alert variant="destructive" className="max-w-md">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
                Your session has expired. Please log in again.
            </AlertDescription>
        </Alert>
    ),
};

export const Success: tStory = {
    render: () => (
        <Alert variant="success" className="max-w-md">
            <AlertTitle>Payment Successful</AlertTitle>
            <AlertDescription>
                Your subscription has been renewed for another month.
            </AlertDescription>
        </Alert>
    ),
};

export const Warning: tStory = {
    render: () => (
        <Alert variant="warning" className="max-w-md">
            <AlertTitle>Approaching limits</AlertTitle>
            <AlertDescription>
                You have used 90% of your API quota for this month.
            </AlertDescription>
        </Alert>
    ),
};
