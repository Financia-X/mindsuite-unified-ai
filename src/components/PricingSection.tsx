import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Zap, Crown, Users, Building } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    price: "0",
    period: "forever",
    description: "Perfect for students and individuals getting started",
    icon: Star,
    gradient: "from-muted to-muted",
    buttonVariant: "outline" as const,
    buttonText: "Get Started Free",
    popular: false,
    features: [
      "5 Core Tools Access",
      "10 AI Queries/month",
      "Basic Templates",
      "Community Support",
      "1 Workspace"
    ],
    limitations: [
      "Limited file uploads",
      "Basic integrations only"
    ]
  },
  {
    name: "Pro",
    price: "29",
    period: "per month",
    description: "For professionals and power users",
    icon: Zap,
    gradient: "from-electric-blue to-violet",
    buttonVariant: "default" as const,
    buttonText: "Start Pro Trial",
    popular: true,
    features: [
      "All 70+ Tools Access",
      "Unlimited AI Queries",
      "Advanced Templates",
      "Priority Support",
      "5 Workspaces",
      "MindAgent Workflows",
      "Custom Integrations",
      "Advanced Analytics",
      "API Access"
    ]
  },
  {
    name: "Team",
    price: "99",
    period: "per month",
    description: "For small businesses and growing teams",
    icon: Users,
    gradient: "from-neon-green to-electric-blue",
    buttonVariant: "default" as const,
    buttonText: "Start Team Trial",
    popular: false,
    features: [
      "Everything in Pro",
      "Up to 25 Team Members",
      "Team Collaboration Tools",
      "Admin Dashboard",
      "Role-based Permissions",
      "Shared Workspaces",
      "Team Analytics",
      "SSO Integration",
      "Custom Branding"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "For large organizations with custom needs",
    icon: Building,
    gradient: "from-soft-pink to-violet",
    buttonVariant: "outline" as const,
    buttonText: "Contact Sales",
    popular: false,
    features: [
      "Everything in Team",
      "Unlimited Team Members",
      "Custom Tool Development",
      "Dedicated Support",
      "On-premise Deployment",
      "Custom AI Training",
      "Advanced Security",
      "SLA Guarantees",
      "Migration Support"
    ]
  }
];

const specialOffers = [
  {
    title: "Education & Non-Profit",
    discount: "50% Off",
    description: "Special pricing for educational institutions and non-profit organizations",
    gradient: "from-neon-green to-soft-pink"
  },
  {
    title: "Lifetime License",
    discount: "Limited Time",
    description: "One-time payment for lifetime access. Only 100 licenses available.",
    gradient: "from-electric-blue to-violet"
  }
];

const PricingSection = () => {
  return (
    <section id="pricing-section" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/5 w-72 h-72 neon-gradient rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-72 h-72 cosmic-gradient rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-electric-blue/30 text-electric-blue">
            💼 Pricing Plans
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Choose Your{" "}
            <span className="bg-gradient-to-r from-electric-blue via-violet to-soft-pink bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Start free and scale as you grow. All plans include AI-powered tools and premium support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
          {pricingPlans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <Card 
                key={index}
                className={`relative glass hover-lift cursor-pointer group border-glass-border/20 hover:border-electric-blue/30 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-electric-blue/30 border-electric-blue/50' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="electric-gradient text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${plan.gradient} p-3 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Plan Name */}
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </CardTitle>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price === "Custom" ? "" : "$"}{plan.price}
                    </span>
                    {plan.price !== "Custom" && (
                      <span className="text-muted-foreground ml-1">/{plan.period}</span>
                    )}
                    {plan.price === "Custom" && (
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full electric-gradient flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                    
                    {/* Limitations */}
                    {plan.limitations && plan.limitations.map((limitation, limitIndex) => (
                      <div key={limitIndex} className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                          <span className="text-xs text-muted-foreground">—</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{limitation}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button 
                    variant={plan.buttonVariant}
                    className={`w-full ${
                      plan.buttonVariant === "default" 
                        ? "electric-gradient hover:scale-105" 
                        : "glass border-electric-blue/30 hover:border-electric-blue/50 hover:bg-electric-blue/10"
                    } transition-all duration-300`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Special Offers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {specialOffers.map((offer, index) => (
            <Card key={index} className="glass hover-lift cursor-pointer group border-glass-border/20 hover:border-electric-blue/30 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-foreground">
                    {offer.title}
                  </h3>
                  <Badge className={`bg-gradient-to-r ${offer.gradient} text-white`}>
                    {offer.discount}
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  {offer.description}
                </p>
                <Button variant="outline" className="glass border-electric-blue/30 hover:border-electric-blue/50 hover:bg-electric-blue/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="electric-gradient hover:scale-105 transition-transform duration-300">
              Start Your Free Trial
            </Button>
            <Button size="lg" variant="outline" className="glass border-electric-blue/30 hover:border-electric-blue/50 hover:bg-electric-blue/10">
              Compare All Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;