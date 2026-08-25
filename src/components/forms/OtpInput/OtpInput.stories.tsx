import type { Meta, StoryObj } from '@storybook/react';
import { OtpInput, OtpGroup, OtpSlot, OtpSeparator } from './OtpInput';
import { useState } from 'react';

const meta = {
    title: 'Forms/OtpInput',
    component: OtpInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof OtpInput>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => {
        const [value, setValue] = useState("");
        
        return (
            <div className="space-y-4">
                <OtpInput maxLength={6} value={value} onChange={setValue}>
                    <OtpGroup>
                        <OtpSlot index={0} />
                        <OtpSlot index={1} />
                        <OtpSlot index={2} />
                    </OtpGroup>
                    <OtpSeparator />
                    <OtpGroup>
                        <OtpSlot index={3} />
                        <OtpSlot index={4} />
                        <OtpSlot index={5} />
                    </OtpGroup>
                </OtpInput>
                <div className="text-center text-sm text-[var(--color-muted-foreground)]">
                    {value === "" ? (
                        <>Enter your one-time password.</>
                    ) : (
                        <>You entered: {value}</>
                    )}
                </div>
            </div>
        );
    },
};
