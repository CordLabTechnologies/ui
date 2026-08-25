import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "../../elements/Avatar"
import { Button } from "../../elements/Button"
import { MapPin, Link as LinkIcon, Calendar } from "lucide-react"

export interface iProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  user: {
    name: string
    handle: string
    bio?: string
    avatarUrl?: string
    bannerUrl?: string
    location?: string
    website?: string
    joinedDate?: string
    followingCount?: number
    followersCount?: number
  }
  isFollowing?: boolean
  isOwnProfile?: boolean
  onFollowToggle?: () => void
  onEditProfile?: () => void
}

export const ProfileCard = React.forwardRef<HTMLDivElement, iProfileCardProps>(
  (
    {
      className,
      user,
      isFollowing = false,
      isOwnProfile = false,
      onFollowToggle,
      onEditProfile,
      ...props
    },
    ref
  ) => {
    const initials = user.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase()

    return (
      <div
        ref={ref}
        className={[
          "overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-background)] shadow-sm",
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {/* Banner */}
        <div className="h-32 w-full bg-[var(--color-secondary)] sm:h-48 relative">
          {user.bannerUrl ? (
            <img
              src={user.bannerUrl}
              alt="Profile banner"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 opacity-80" />
          )}
        </div>

        {/* Content */}
        <div className="px-4 pb-4 sm:px-6 sm:pb-6">
          <div className="relative flex justify-between">
            {/* Avatar - overlaps banner */}
            <div className="-mt-12 sm:-mt-16 rounded-full border-4 border-[var(--color-background)] bg-[var(--color-background)] p-0.5">
              <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
                <AvatarImage src={user.avatarUrl} alt={user.name} className="object-cover" />
                <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
              </Avatar>
            </div>

            {/* Actions */}
            <div className="mt-4 flex gap-2">
              {isOwnProfile ? (
                <Button variant="outline" size="sm" onClick={onEditProfile}>
                  Edit Profile
                </Button>
              ) : (
                <Button
                  variant={isFollowing ? "outline" : "primary"}
                  size="sm"
                  onClick={onFollowToggle}
                >
                  {isFollowing ? "Following" : "Follow"}
                </Button>
              )}
            </div>
          </div>

          <div className="mt-2">
            <h1 className="text-xl font-bold text-[var(--color-foreground)] sm:text-2xl">
              {user.name}
            </h1>
            <p className="text-sm text-[var(--color-muted-foreground)]">@{user.handle}</p>
          </div>

          {user.bio && (
            <p className="mt-4 text-[var(--color-foreground)]">
              {user.bio}
            </p>
          )}

          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--color-muted-foreground)]">
            {user.location && (
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                <span>{user.location}</span>
              </div>
            )}
            {user.website && (
              <div className="flex items-center gap-1">
                <LinkIcon className="h-4 w-4" />
                <a href={user.website} className="text-[var(--color-primary)] hover:underline" target="_blank" rel="noopener noreferrer">
                  {new URL(user.website).hostname.replace('www.', '')}
                </a>
              </div>
            )}
            {user.joinedDate && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>Joined {user.joinedDate}</span>
              </div>
            )}
          </div>

          {(user.followingCount !== undefined || user.followersCount !== undefined) && (
            <div className="mt-4 flex gap-4 text-sm">
              {user.followingCount !== undefined && (
                <div className="flex gap-1 hover:underline cursor-pointer">
                  <span className="font-semibold text-[var(--color-foreground)]">{user.followingCount.toLocaleString()}</span>
                  <span className="text-[var(--color-muted-foreground)]">Following</span>
                </div>
              )}
              {user.followersCount !== undefined && (
                <div className="flex gap-1 hover:underline cursor-pointer">
                  <span className="font-semibold text-[var(--color-foreground)]">{user.followersCount.toLocaleString()}</span>
                  <span className="text-[var(--color-muted-foreground)]">Followers</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)

ProfileCard.displayName = "ProfileCard"
