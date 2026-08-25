import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "../../navigation/DropdownMenu"
import { Avatar, AvatarFallback, AvatarImage } from "../../elements/Avatar"
import { LogOut, Settings, User as UserIcon, CreditCard } from "lucide-react"

export interface iUserMenuProps {
  user: {
    name: string
    email: string
    avatarUrl?: string
  }
  onLogout?: () => void
  onSettings?: () => void
  onBilling?: () => void
  onProfile?: () => void
}

export const UserMenu = ({
  user,
  onLogout,
  onSettings,
  onBilling,
  onProfile,
}: iUserMenuProps) => {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .substring(0, 2)
    .toUpperCase()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 rounded-full outline-none ring-offset-[var(--color-background)] transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2"
          aria-label="User Menu"
        >
          <Avatar>
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none text-[var(--color-foreground)]">
              {user.name}
            </p>
            <p className="text-xs leading-none text-[var(--color-muted-foreground)]">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={onProfile}>
          <UserIcon className="mr-2 h-4 w-4 text-[var(--color-muted-foreground)]" />
          <span>Profile</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={onBilling}>
          <CreditCard className="mr-2 h-4 w-4 text-[var(--color-muted-foreground)]" />
          <span>Billing</span>
        </DropdownMenuItem>
        
        <DropdownMenuItem onClick={onSettings}>
          <Settings className="mr-2 h-4 w-4 text-[var(--color-muted-foreground)]" />
          <span>Settings</span>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem onClick={onLogout} className="text-[var(--color-destructive)] focus:bg-[var(--color-destructive)] focus:text-white">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

UserMenu.displayName = "UserMenu"
