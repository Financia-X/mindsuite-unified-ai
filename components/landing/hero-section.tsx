"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40">
      <div className="container mx-auto max-w-5xl px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          70+ AI Tools. One Workspace.
          <br />
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Superpowers for Every Role.
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-[700px] text-lg text-muted-foreground md:text-xl">
          MindSuite unifies every workflow with intelligent tools, helping you work faster, smarter, and more creatively
          than ever before.
        </p>
        <div className="mt-8">
          <Button size="lg" className="group bg-primary text-primary-foreground shadow-lg hover:bg-primary/90">
            Try Mindsuite Free
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
      <div className="relative mt-16 md:mt-24">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
        <div className="container mx-auto max-w-5xl px-4 md:px-6">
          <div className="relative mx-auto h-auto w-full max-w-4xl rounded-lg border border-border/50 bg-card shadow-2xl shadow-primary/10">
            <div className="flex h-9 items-center gap-1.5 rounded-t-md bg-secondary px-4">
              <div className="h-2.5 w-2.5 rounded-full bg-muted"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-muted"></div>
              <div className="h-2.5 w-2.5 rounded-full bg-muted"></div>
            </div>
            <img
              src="/futuristic-dark-dashboard.png"
              alt="MindSuite Dashboard"
              width={1200}
              height={750}
              className="h-full w-full object-cover object-top p-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
