import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Navigation from "@/components/Navigation"
import PersonaSection from "@/components/PersonaSection"
import ToolsSection from "@/components/ToolsSection"
import HowItWorksSection from "@/components/HowItWorksSection"
import AISection from "@/components/AISection"
import PricingSection from "@/components/PricingSection"
import Footer from "@/components/Footer"

const Section = ({ children, className, ...props }: any) => (
  <section
    className={`h-screen w-screen flex flex-col justify-center items-center ${className}`}
    {...props}
  >
    <div className="container mx-auto px-6 max-w-6xl">
      {children}
    </div>
  </section>
)

export function ScrollOverlay() {
  return (
    <>
      {/* Navigation - Fixed at top */}
      <div className="fixed top-0 left-0 z-50 w-full">
        <Navigation />
      </div>

      {/* Hero Section */}
      <Section className="text-center relative">
        <div className="space-y-12">
          {/* Command hint */}
          <div className="inline-flex items-center px-4 py-2 glass rounded-full border border-electric-blue/20 text-sm">
            <span className="text-electric-blue mr-2">⌘</span>
            <span className="text-muted-foreground">Cmd + K to start</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-foreground">One Suite.</span>
              <span className="block bg-gradient-to-r from-electric-blue via-violet to-soft-pink bg-clip-text text-transparent">
                Every Tool You Need.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Build, plan, write, sell, ship — faster than ever. MindSuite brings your docs, dashboards, agents, and ideas together in one powerful AI-first workspace.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="electric-gradient hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-2xl hover:shadow-electric-blue/50"
            >
              <Zap className="mr-2 h-5 w-5" />
              Join the Waitlist
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost"
              className="text-lg px-8 py-6 hover:bg-white/5 group"
            >
              <span className="mr-2">🧠</span>
              Explore the Suite
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </Section>

      {/* Built for Everyone Section */}
      <Section>
        <PersonaSection />
      </Section>

      {/* Tools Section */}
      <Section>
        <ToolsSection />
      </Section>

      {/* Final CTA Section */}
      <Section className="text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-electric-blue via-violet to-soft-pink bg-clip-text text-transparent">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of users who are working faster, smarter, and more creatively with MindSuite.
          </p>
          <Button 
            size="lg" 
            className="electric-gradient hover:scale-105 transition-all duration-300 text-xl px-12 py-8 shadow-2xl"
          >
            <Zap className="mr-2 h-6 w-6" />
            Start Your Free Trial
          </Button>
        </div>
      </Section>
    </>
  )
}