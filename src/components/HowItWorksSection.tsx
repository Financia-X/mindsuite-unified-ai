import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogIn, Grid3X3, Zap, CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: LogIn,
      title: "Unified Login",
      description: "One account gives you access to all 70+ AI tools across every industry and role.",
      color: "electric-blue"
    },
    {
      icon: Grid3X3,
      title: "Choose Your Tools",
      description: "Select from organized suites or browse individual tools that match your workflow needs.",
      color: "violet"
    },
    {
      icon: Zap,
      title: "Connect & Integrate",
      description: "Link your existing data sources and let AI understand your context for smarter automation.",
      color: "neon-green"
    },
    {
      icon: CheckCircle,
      title: "Get Work Done",
      description: "Experience seamless productivity with AI-powered tools that learn and adapt to your style.",
      color: "soft-pink"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-electric-blue/30 text-electric-blue">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-blue via-violet to-soft-pink bg-clip-text text-transparent">
              Simple.
            </span>{" "}
            Powerful.{" "}
            <span className="text-electric-blue">
              Unified.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Getting started with MindSuite is effortless. Here's how you go from signup to supercharged productivity.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Card 
                key={index}
                className="glass hover-lift cursor-pointer group border-glass-border/20 hover:border-electric-blue/30 transition-all duration-300 relative overflow-hidden"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-electric-blue/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-electric-blue">{index + 1}</span>
                </div>

                <CardContent className="p-6 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl electric-gradient p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-electric-blue transition-colors duration-300">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>

                {/* Connecting Line (except for last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-electric-blue/50 to-transparent"></div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 border border-electric-blue/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to transform your workflow?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of professionals who've already supercharged their productivity with MindSuite.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-lg text-primary-foreground font-medium hover:scale-105 transition-transform duration-300">
                Join the Waitlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;