import * as React from "react"
import { Button } from "../../elements/Button"
import { Input } from "../../elements/Input"
import { Label } from "../../elements/Label"
import { Avatar, AvatarFallback, AvatarImage } from "../../elements/Avatar"
import { Upload } from "lucide-react"

export interface iProfileEditFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  initialData?: {
    name?: string
    handle?: string
    bio?: string
    location?: string
    website?: string
    avatarUrl?: string
  }
  onSave?: (data: any) => void
  onCancel?: () => void
}

export const ProfileEditForm = React.forwardRef<HTMLFormElement, iProfileEditFormProps>(
  ({ className, initialData, onSave, onCancel, ...props }, ref) => {
    return (
      <form
        ref={ref}
        className={["space-y-8", className].filter(Boolean).join(" ")}
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.currentTarget)
          const data = Object.fromEntries(formData.entries())
          onSave?.(data)
        }}
        {...props}
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
          {/* Avatar Upload Section */}
          <div className="flex flex-col items-center gap-3 sm:w-1/4">
            <div className="relative group">
              <Avatar className="h-24 w-24">
                <AvatarImage src={initialData?.avatarUrl} />
                <AvatarFallback className="text-xl">
                  {initialData?.name?.charAt(0) || "U"}
                </AvatarFallback>
              </Avatar>
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/60 opacity-0 transition-opacity group-hover:opacity-100 cursor-pointer">
                <Upload className="h-6 w-6 text-white" />
              </div>
            </div>
            <p className="text-xs text-[var(--color-muted-foreground)] text-center">
              Click avatar to change
            </p>
          </div>

          {/* Form Fields Section */}
          <div className="flex-1 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Display Name</Label>
                <Input
                  id="name"
                  name="name"
                  defaultValue={initialData?.name}
                  placeholder="e.g. Alex Rivera"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="handle">Username</Label>
                <Input
                  id="handle"
                  name="handle"
                  defaultValue={initialData?.handle}
                  placeholder="e.g. arivera_dev"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <textarea
                id="bio"
                name="bio"
                defaultValue={initialData?.bio}
                rows={4}
                className="flex w-full rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-2 text-sm ring-offset-[var(--color-background)] placeholder:text-[var(--color-muted-foreground)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Tell us a little bit about yourself"
              />
              <p className="text-[0.8rem] text-[var(--color-muted-foreground)]">
                You can @mention other users and organizations.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  name="location"
                  defaultValue={initialData?.location}
                  placeholder="e.g. San Francisco, CA"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  name="website"
                  type="url"
                  defaultValue={initialData?.website}
                  placeholder="https://example.com"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 border-t border-[var(--color-border)] pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
        </div>
      </form>
    )
  }
)

ProfileEditForm.displayName = "ProfileEditForm"
