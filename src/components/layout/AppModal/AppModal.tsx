import * as React from "react"
import { useMediaQuery } from "../../../hooks/use-media-query"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../feedback/Dialog"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../Sheet"
import { Drawer } from "vaul"

type tAppModalPlacement = "center" | "top" | "bottom" | "left" | "right"

interface iAppModalProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  placement?: tAppModalPlacement
  children?: React.ReactNode
}

const AppModalContext = React.createContext<{
  isMobile: boolean
  placement: tAppModalPlacement
}>({
  isMobile: false,
  placement: "center",
})

export function AppModal({
  open,
  onOpenChange,
  placement = "center",
  children,
}: iAppModalProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")

  if (isMobile) {
    return (
      <AppModalContext.Provider value={{ isMobile, placement }}>
        <Drawer.Root open={open} onOpenChange={onOpenChange}>
          {children}
        </Drawer.Root>
      </AppModalContext.Provider>
    )
  }

  if (placement === "center") {
    return (
      <AppModalContext.Provider value={{ isMobile, placement }}>
        <Dialog open={open} onOpenChange={onOpenChange}>
          {children}
        </Dialog>
      </AppModalContext.Provider>
    )
  }

  return (
    <AppModalContext.Provider value={{ isMobile, placement }}>
      <Sheet open={open} onOpenChange={onOpenChange}>
        {children}
      </Sheet>
    </AppModalContext.Provider>
  )
}

export function AppModalTrigger({
  children,
  asChild,
  className,
}: {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}) {
  const { isMobile, placement } = React.useContext(AppModalContext)

  if (isMobile) {
    return <Drawer.Trigger asChild={asChild} className={className}>{children}</Drawer.Trigger>
  }
  if (placement === "center") {
    return <DialogTrigger asChild={asChild} className={className}>{children}</DialogTrigger>
  }
  return <SheetTrigger asChild={asChild} className={className}>{children}</SheetTrigger>
}

export function AppModalContent({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { isMobile, placement } = React.useContext(AppModalContext)

  if (isMobile) {
    return (
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-50 bg-black/40" />
        <Drawer.Content
          className={[
            "bg-[var(--color-background)] flex flex-col rounded-t-[10px] mt-24 max-h-[96%] fixed bottom-0 left-0 right-0 z-50",
            className,
          ].filter(Boolean).join(" ")}
        >
          <div className="p-4 bg-[var(--color-background)] rounded-t-[10px] flex-1 overflow-y-auto">
            <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8" />
            {children}
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    )
  }

  if (placement === "center") {
    return (
      <DialogContent className={["sm:max-w-[425px] max-h-[90vh] flex flex-col", className].filter(Boolean).join(" ")}>
        {children}
      </DialogContent>
    )
  }

  return (
    <SheetContent side={placement} className={["max-h-[100vh] flex flex-col", className].filter(Boolean).join(" ")}>
      {children}
    </SheetContent>
  )
}

export function AppModalHeader({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { isMobile, placement } = React.useContext(AppModalContext)

  if (isMobile) {
    return <div className={["grid gap-1.5 p-4 text-center sm:text-left shrink-0", className].filter(Boolean).join(" ")}>{children}</div>
  }
  if (placement === "center") {
    return <DialogHeader className={["shrink-0", className].filter(Boolean).join(" ")}>{children}</DialogHeader>
  }
  return <SheetHeader className={["shrink-0", className].filter(Boolean).join(" ")}>{children}</SheetHeader>
}

export function AppModalTitle({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { isMobile, placement } = React.useContext(AppModalContext)

  if (isMobile) {
    return <Drawer.Title className={["text-lg font-semibold leading-none tracking-tight", className].filter(Boolean).join(" ")}>{children}</Drawer.Title>
  }
  if (placement === "center") {
    return <DialogTitle className={className}>{children}</DialogTitle>
  }
  return <SheetTitle className={className}>{children}</SheetTitle>
}

export function AppModalDescription({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { isMobile, placement } = React.useContext(AppModalContext)

  if (isMobile) {
    return <Drawer.Description className={["text-sm text-[var(--color-muted-foreground,gray)]", className].filter(Boolean).join(" ")}>{children}</Drawer.Description>
  }
  if (placement === "center") {
    return <DialogDescription className={className}>{children}</DialogDescription>
  }
  return <SheetDescription className={className}>{children}</SheetDescription>
}

export function AppModalBody({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div className={["flex-1 overflow-y-auto py-4 min-h-0", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  )
}

export function AppModalFooter({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  const { isMobile } = React.useContext(AppModalContext)

  return (
    <div
      className={[
        "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2 shrink-0 pt-4",
        isMobile ? "mt-auto p-4" : "",
        className,
      ].filter(Boolean).join(" ")}
    >
      {children}
    </div>
  )
}
