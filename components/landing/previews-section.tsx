"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"

const previewData = [
  {
    value: "dev-suite",
    label: "Developer Suite",
    image: "/futuristic-dark-dashboard.png",
    alt: "Developer Suite Dashboard",
  },
  {
    value: "hr-suite",
    label: "HR Suite",
    image: "/hr-dashboard-preview.png",
    alt: "HR Suite Dashboard",
  },
  {
    value: "legal-suite",
    label: "Legal Suite",
    image: "/legal-dashboard-preview.png",
    alt: "Legal Suite Dashboard",
  },
]

export function PreviewsSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            See MindSuite in Action
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the seamless, intuitive interface that brings all your work together.
          </p>
        </div>
        <Tabs defaultValue={previewData[0].value} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            {previewData.map((item) => (
              <TabsTrigger key={item.value} value={item.value}>
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {previewData.map((item) => (
            <TabsContent key={item.value} value={item.value} className="mt-8">
              <div className="relative mx-auto h-auto w-full max-w-5xl rounded-lg border border-border/50 bg-card shadow-2xl shadow-primary/10">
                <div className="flex h-9 items-center gap-1.5 rounded-t-md bg-secondary px-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-muted"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-muted"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-muted"></div>
                </div>
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.alt}
                  width={1200}
                  height={750}
                  className="h-full w-full object-cover object-top p-2"
                />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
