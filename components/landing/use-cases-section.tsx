import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useCases } from "@/lib/data"

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Built for Every Ambition
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Whether you're scaling a startup or optimizing an enterprise, MindSuite has a solution for you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase) => (
            <Card
              key={useCase.audience}
              className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/50 hover:bg-secondary/50 hover:shadow-2xl hover:shadow-primary/10"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <useCase.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">{useCase.audience}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{useCase.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
