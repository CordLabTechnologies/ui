import * as React from "react"
import { Menu } from "lucide-react"

const SidebarContext = React.createContext<{
  isCollapsed: boolean
  setIsCollapsed: (value: boolean) => void
} | null>(null)

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}

export interface iSidebarProviderProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultCollapsed?: boolean
}

export const SidebarProvider = React.forwardRef<HTMLDivElement, iSidebarProviderProps>(
  ({ className, defaultCollapsed = false, children, ...props }, ref) => {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

    return (
      <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
        <div
          ref={ref}
          className={["flex min-h-screen w-full flex-col md:flex-row", className].filter(Boolean).join(" ")}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    )
  }
)
SidebarProvider.displayName = "SidebarProvider"

export const Sidebar = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const { isCollapsed } = useSidebar()

    return (
      <aside
        ref={ref}
        data-collapsed={isCollapsed}
        className={[
          "group flex flex-col gap-4 border-r border-[var(--color-border)] bg-[var(--color-secondary)]/30 py-4 transition-[width] duration-300",
          isCollapsed ? "w-[70px]" : "w-[240px]",
          "hidden md:flex",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {children}
      </aside>
    )
  }
)
Sidebar.displayName = "Sidebar"

export const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    const { isCollapsed } = useSidebar()
    return (
      <div
        ref={ref}
        className={[
          "flex items-center px-4",
          isCollapsed ? "justify-center px-2" : "justify-start",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      />
    )
  }
)
SidebarHeader.displayName = "SidebarHeader"

export const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={["flex-1 overflow-y-auto overflow-x-hidden px-3", className].filter(Boolean).join(" ")}
      {...props}
    />
  )
)
SidebarContent.displayName = "SidebarContent"

export const SidebarItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { icon?: React.ReactNode, active?: boolean }>(
  ({ className, icon, active, children, ...props }, ref) => {
    const { isCollapsed } = useSidebar()
    return (
      <div
        ref={ref}
        className={[
          "flex cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)]",
          active ? "bg-[var(--color-secondary)] text-[var(--color-foreground)]" : "text-[var(--color-muted-foreground)]",
          isCollapsed ? "justify-center" : "justify-start",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {icon && (
          <div className={["flex shrink-0 items-center justify-center", isCollapsed ? "mr-0" : "mr-3"].filter(Boolean).join(" ")}>
            {icon}
          </div>
        )}
        {!isCollapsed && <span className="truncate">{children}</span>}
      </div>
    )
  }
)
SidebarItem.displayName = "SidebarItem"

export const SidebarTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    const { isCollapsed, setIsCollapsed } = useSidebar()
    return (
      <button
        ref={ref}
        onClick={() => setIsCollapsed(!isCollapsed)}
        className={[
          "inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-primary)]",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        <Menu className="h-4 w-4" />
        <span className="sr-only">Toggle Sidebar</span>
      </button>
    )
  }
)
SidebarTrigger.displayName = "SidebarTrigger"
