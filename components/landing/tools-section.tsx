"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toolCategories } from "@/lib/data"

export function ToolsSection() {
  return (
    <section id="tools" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            One Suite. Every Tool You Need.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore our categorized tools, designed to integrate seamlessly into your workflow.
          </p>
        </div>
        <Tabs defaultValue={toolCategories[0].name} className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
            {toolCategories.map((category) => (
              <TabsTrigger key={category.name} value={category.name}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
          {toolCategories.map((category) => (
            <TabsContent key={category.name} value={category.name} className="mt-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {category.tools.map((tool) => (
                  <Card
                    key={tool.name}
                    className="group flex flex-col justify-between border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
                  >
                    <CardContent className="p-6">
                      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <tool.icon className="h-5 w-5" />
                      </div>
                      <h3 className="font-semibold text-foreground">{tool.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{tool.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
