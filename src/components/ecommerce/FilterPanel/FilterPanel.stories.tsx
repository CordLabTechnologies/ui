import type { Meta } from '@storybook/react';
import { FilterPanel } from './FilterPanel';
import { useState } from 'react';

const meta = {
    title: 'E-commerce/FilterPanel',
    component: FilterPanel,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof FilterPanel>;

export default meta;
type tStory = any;

const filterGroups = [
    {
        id: "category",
        title: "Category",
        defaultExpanded: true,
        options: [
            { label: "Sneakers", value: "sneakers", count: 124 },
            { label: "Running", value: "running", count: 42 },
            { label: "Basketball", value: "basketball", count: 18 },
        ]
    },
    {
        id: "brand",
        title: "Brand",
        defaultExpanded: true,
        options: [
            { label: "Nike", value: "nike", count: 84 },
            { label: "Adidas", value: "adidas", count: 56 },
            { label: "Puma", value: "puma", count: 32 },
        ]
    }
];

export const Default: tStory = {
    args: {
        groups: filterGroups,
    },
    render: (args: any) => {
        const [selected, setSelected] = useState<Record<string, string[]>>({});

        const handleFilterChange = (groupId: string, value: string, checked: boolean) => {
            setSelected(prev => {
                const groupSelected = prev[groupId] || [];
                if (checked) {
                    return { ...prev, [groupId]: [...groupSelected, value] };
                } else {
                    return { ...prev, [groupId]: groupSelected.filter(v => v !== value) };
                }
            });
        };

        return (
            <div className="w-full max-w-[250px] border border-[var(--color-border)] rounded-lg p-4 bg-[var(--color-background)] shadow-sm">
                <h3 className="font-bold text-lg mb-4">Filters</h3>
                <FilterPanel 
                    {...args} 
                    selectedValues={selected} 
                    onFilterChange={handleFilterChange} 
                />
            </div>
        );
    },
};
