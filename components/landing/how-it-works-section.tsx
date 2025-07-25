import { CheckCircle, Zap, Link, Rocket } from "lucide-react"

const steps = [
  {
    icon: CheckCircle,
    title: "Unified Login",
    description: "One account gives you access to the entire suite. No more juggling passwords.",
  },
  {
    icon: Zap,
    title: "Choose Your Tools",
    description: "Select from over 70+ modular tools or pick a pre-built suite for your role.",
  },
  {
    icon: Link,
    title: "Connect Your Data",
    description: "Securely integrate your existing apps and data sources in just a few clicks.",
  },
  {
    icon: Rocket,
    title: "Get Work Done",
    description: "Let AI automate tasks, provide insights, and accelerate your productivity.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            How Mindsuite Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A simple, powerful platform designed to get you productive in minutes.
          </p>
        </div>
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="absolute left-0 top-1/2 hidden h-px w-full -translate-y-1/2 bg-border md:block"></div>
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-8 border-background bg-primary text-primary-foreground">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
