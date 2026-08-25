import * as React from "react"
import { Sidebar, SidebarProvider, SidebarContent, SidebarItem, SidebarHeader } from "../../components/layout/Sidebar"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "../../components/layout/Sheet"
import { UserMenu } from "../../components/navigation/UserMenu"
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "../../components/navigation/Breadcrumb"
import { StatCard } from "../../components/dashboard/StatCard"
import { ActivityFeed } from "../../components/dashboard/ActivityFeed"
import { DataTable } from "../../components/data-display/DataTable"
import { Button } from "../../components/elements/Button"
import { Input } from "../../components/elements/Input"
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  CreditCard,
  Bell,
  Search,
  ShoppingCart,
  ArrowUpRight,
  MessageSquare,
  Zap,
  Menu
} from "lucide-react"

export const SaaSDashboard = () => {
  const user = {
    name: "Alex Rivera",
    email: "alex@cordlab.com",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop"
  }

  // Mock data for DataTable
  const tableData = [
    { id: "1", customer: "Acme Corp", amount: "$3,200.00", status: "Paid", date: "Oct 24, 2023" },
    { id: "2", customer: "Globex Inc", amount: "$1,500.00", status: "Pending", date: "Oct 23, 2023" },
    { id: "3", customer: "Soylent Corp", amount: "$850.00", status: "Paid", date: "Oct 22, 2023" },
    { id: "4", customer: "Initech", amount: "$4,200.00", status: "Failed", date: "Oct 21, 2023" },
  ]
  const tableColumns = [
    { header: "Customer", accessorKey: "customer" },
    { header: "Amount", accessorKey: "amount" },
    { header: "Status", accessorKey: "status", cell: (info: any) => {
      const status = info.getValue()
      return (
        <span className={[
          "px-2 py-1 rounded-full text-xs font-medium",
          status === "Paid" ? "bg-green-100 text-green-700" :
          status === "Pending" ? "bg-yellow-100 text-yellow-700" :
          "bg-red-100 text-red-700"
        ].join(" ")}>
          {status}
        </span>
      )
    }},
    { header: "Date", accessorKey: "date" },
  ]

  const activities = [
    {
        id: 1,
        user: { name: "Alice Johnson" },
        action: "purchased",
        target: "Pro Plan",
        timestamp: "2 hours ago",
        icon: <ShoppingCart className="h-3.5 w-3.5 text-blue-500" />
    },
    {
        id: 2,
        user: { name: "Michael Chen" },
        action: "submitted a support ticket",
        timestamp: "4 hours ago",
        icon: <MessageSquare className="h-3.5 w-3.5 text-green-500" />
    }
  ]

  return (
    <SidebarProvider className="h-screen overflow-hidden bg-[var(--color-background)]">
      {/* Sidebar */}
      <Sidebar className="w-64 border-r border-[var(--color-border)] hidden md:flex">
        <SidebarHeader className="h-16 border-b border-[var(--color-border)] mb-4">
          <div className="flex items-center gap-2 text-xl font-bold tracking-tighter">
            <div className="h-8 w-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            CordLab UI
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarItem icon={<LayoutDashboard className="h-5 w-5" />} active>Overview</SidebarItem>
          <SidebarItem icon={<Users className="h-5 w-5" />}>Customers</SidebarItem>
          <SidebarItem icon={<CreditCard className="h-5 w-5" />}>Billing</SidebarItem>
          <SidebarItem icon={<Settings className="h-5 w-5" />}>Settings</SidebarItem>
        </SidebarContent>
      </Sidebar>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        
        {/* Top Header */}
        <header className="flex h-16 shrink-0 items-center justify-between border-b border-[var(--color-border)] px-6">
          <div className="flex items-center gap-4">
            
            {/* Mobile Sidebar Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <button className="md:hidden p-2 -ml-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)]">
                  <Menu className="h-5 w-5" />
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center gap-2 text-xl font-bold tracking-tighter p-4 border-b border-[var(--color-border)]">
                  <div className="h-8 w-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
                    <Zap className="h-5 w-5 text-white" />
                  </div>
                  CordLab UI
                </div>
                <SidebarContent className="mt-4">
                  <SidebarItem icon={<LayoutDashboard className="h-5 w-5" />} active>Overview</SidebarItem>
                  <SidebarItem icon={<Users className="h-5 w-5" />}>Customers</SidebarItem>
                  <SidebarItem icon={<CreditCard className="h-5 w-5" />}>Billing</SidebarItem>
                  <SidebarItem icon={<Settings className="h-5 w-5" />}>Settings</SidebarItem>
                </SidebarContent>
              </SheetContent>
            </Sheet>

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="#">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[var(--color-muted-foreground)]" />
              <Input type="search" placeholder="Search..." className="w-64 pl-9 rounded-full bg-[var(--color-secondary)] border-none focus-visible:ring-1" />
            </div>
            <button className="relative p-2 text-[var(--color-muted-foreground)] hover:text-[var(--color-foreground)] transition-colors">
              <Bell className="h-5 w-5" />
              <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[var(--color-background)]" />
            </button>
            <UserMenu user={user} />
          </div>
        </header>

        {/* Scrollable Main View */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[var(--color-foreground)] tracking-tight">Dashboard</h1>
              <p className="text-[var(--color-muted-foreground)] mt-1">Welcome back, Alex. Here's what's happening today.</p>
            </div>
            <Button variant="primary">
              Download Report <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <StatCard
              title="Total Revenue"
              value="$45,231.89"
              trendValue="+20.1% from last month"
              trendDirection="up"
            />
            <StatCard
              title="Subscriptions"
              value="+2350"
              trendValue="+180.1% from last month"
              trendDirection="up"
            />
            <StatCard
              title="Active Users"
              value="+12,234"
              trendValue="-19% from last month"
              trendDirection="down"
            />
            <StatCard
              title="Avg. MRR"
              value="$9,450"
              trendValue="+4% from last month"
              trendDirection="up"
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Main Table */}
            <div className="lg:col-span-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-sm">
              <div className="flex items-center justify-between p-6 pb-4">
                <h2 className="text-lg font-semibold text-[var(--color-foreground)]">Recent Transactions</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              <div className="px-6 pb-6">
                <DataTable data={tableData} columns={tableColumns} />
              </div>
            </div>

            {/* Activity Feed Sidebar */}
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-background)] shadow-sm p-6">
              <ActivityFeed title="Recent Activity" items={activities} />
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  )
}

SaaSDashboard.displayName = "SaaSDashboard"
