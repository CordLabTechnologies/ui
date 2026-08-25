import type { Meta } from '@storybook/react';
import { PromoCode } from './PromoCode';

const meta = {
    title: 'E-commerce/PromoCode',
    component: PromoCode,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof PromoCode>;

export default meta;
type tStory = any;

export const Default: tStory = {
    render: () => (
        <PromoCode 
            onSubmit={async (code) => {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 1000));
                return code.toUpperCase() === 'DISCOUNT20';
            }}
            errorMessage="Invalid code. Try DISCOUNT20"
        />
    )
};
