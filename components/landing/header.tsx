"use client"
import { Button } from "@/components/ui/button"
import { MindSuiteLogo } from "@/components/landing/logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <MindSuiteLogo />
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a href="#use-cases" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
            Use Cases
          </a>
          <a href="#tools" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
            Tools
          </a>
          <a href="#pricing" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#company" className="font-medium text-muted-foreground transition-colors hover:text-foreground">
            Company
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden text-foreground sm:block">
            Log In
          </Button>
          <Button className="bg-primary text-primary-foreground shadow hover:bg-primary/90">Try Mindsuite Free</Button>
        </div>
      </div>
    </header>
  )
}
