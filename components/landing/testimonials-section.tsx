import { Card, CardContent } from "@/components/ui/card"
import { testimonials } from "@/lib/data"

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Loved by Professionals Worldwide
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear what our users have to say about their productivity transformation.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <p className="mb-6 text-foreground">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatarUrl || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
