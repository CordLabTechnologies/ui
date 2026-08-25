import * as React from "react"

export interface iSettingsNavItem {
  title: string
  href: string
  isActive?: boolean
  icon?: React.ReactNode
}

export interface iSettingsLayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  navItems: iSettingsNavItem[]
  onNavChange?: (href: string) => void
  children: React.ReactNode
}

export const SettingsLayout = React.forwardRef<HTMLDivElement, iSettingsLayoutProps>(
  (
    {
      className,
      title,
      description,
      navItems,
      onNavChange,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={["flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0", className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      >
        <aside className="lg:w-1/5">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-foreground)]">
              {title}
            </h2>
            {description && (
              <p className="text-sm text-[var(--color-muted-foreground)]">
                {description}
              </p>
            )}
          </div>
          <nav className="flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (onNavChange) {
                    e.preventDefault()
                    onNavChange(item.href)
                  }
                }}
                className={[
                  "inline-flex items-center whitespace-nowrap rounded-[var(--radius-md)] px-4 py-2 text-sm font-medium transition-colors hover:bg-[var(--color-secondary)] hover:text-[var(--color-foreground)] no-underline",
                  item.isActive
                    ? "bg-[var(--color-secondary)] text-[var(--color-foreground)] shadow-sm"
                    : "text-[var(--color-muted-foreground)]",
                  "justify-start"
                ].filter(Boolean).join(" ")}
              >
                {item.icon && <span className="mr-2 h-4 w-4">{item.icon}</span>}
                {item.title}
              </a>
            ))}
          </nav>
        </aside>
        
        <div className="hidden lg:block w-px bg-[var(--color-border)] min-h-[500px]" />
        
        <div className="block lg:hidden h-px w-full bg-[var(--color-border)]" />
        
        <div className="flex-1 lg:max-w-2xl">{children}</div>
      </div>
    )
  }
)

SettingsLayout.displayName = "SettingsLayout"
