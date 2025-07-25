import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { pricingPlans } from "@/lib/data"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Flexible Plans for Everyone
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose the perfect plan for your needs. Start for free, no credit card required.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.title}
              className={`flex flex-col border-border/50 bg-card transition-all ${
                plan.mostPopular ? "border-primary/80 ring-2 ring-primary/50" : ""
              }`}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{plan.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="pt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                   {plan.features.map((feature, index) => (
                     <li key={index} className={`flex items-start gap-2 text-sm ${feature.included ? 'text-muted-foreground' : 'text-muted-foreground/50 line-through'}`}>
                       <Check className={`h-4 w-4 flex-shrink-0 mt-1 ${feature.included ? 'text-primary' : 'text-muted-foreground/30'}`} />
                       <span>{feature.text}</span>
                     </li>
                   ))}
                </ul>
              </CardContent>
              <CardFooter>
                 <Button
                   className={`w-full ${
                     plan.mostPopular
                       ? "bg-primary text-primary-foreground shadow hover:bg-primary/90"
                       : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                   }`}
                 >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
