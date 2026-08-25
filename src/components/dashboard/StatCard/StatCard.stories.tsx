import type { Meta } from '@storybook/react';
import { StatCard } from './StatCard';
import { DollarSign, Users, Activity, CreditCard } from 'lucide-react';

const meta = {
    title: 'Dashboard/StatCard',
    component: StatCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof StatCard>;

export default meta;
type tStory = any;

export const Default: tStory = {
    args: {
        title: "Total Revenue",
        value: "$45,231.89",
        trendValue: "+20.1% from last month",
        trendDirection: "up",
        icon: <DollarSign className="h-4 w-4" />,
        className: "w-full max-w-sm"
    }
};

export const DashboardGrid: tStory = {
    render: () => (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 max-w-6xl">
            <StatCard
                title="Total Revenue"
                value="$45,231.89"
                trendValue="+20.1%"
                trendDirection="up"
                icon={<DollarSign className="h-4 w-4" />}
                description="Compared to last month"
            />
            <StatCard
                title="Subscriptions"
                value="+2350"
                trendValue="+180.1%"
                trendDirection="up"
                icon={<Users className="h-4 w-4" />}
                description="Compared to last month"
            />
            <StatCard
                title="Sales"
                value="+12,234"
                trendValue="-19%"
                trendDirection="down"
                icon={<CreditCard className="h-4 w-4" />}
                description="Compared to last month"
            />
            <StatCard
                title="Active Now"
                value="+573"
                trendValue="+201"
                trendDirection="up"
                icon={<Activity className="h-4 w-4" />}
                description="Since last hour"
            />
        </div>
    )
};
