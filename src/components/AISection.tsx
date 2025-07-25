import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, Zap, Target, Workflow, Sparkles } from "lucide-react";

const aiFeatures = [
  {
    icon: Brain,
    title: "GPT-4o Integration",
    description: "Powered by the latest OpenAI models for superior understanding and generation",
    gradient: "from-electric-blue to-violet"
  },
  {
    icon: MessageSquare,
    title: "Personal AI Assistant",
    description: "Your intelligent companion across all tools, learning your preferences",
    gradient: "from-violet to-soft-pink"
  },
  {
    icon: Zap,
    title: "Auto-Fill & Suggestions",
    description: "Smart completion for forms, documents, and data entry tasks",
    gradient: "from-neon-green to-electric-blue"
  },
  {
    icon: Target,
    title: "Context-Aware Insights",
    description: "AI analyzes your work patterns to provide relevant recommendations",
    gradient: "from-soft-pink to-violet"
  },
  {
    icon: Workflow,
    title: "MindAgent Orchestration",
    description: "Multi-agent workflows that handle complex tasks automatically",
    gradient: "from-electric-blue to-neon-green"
  },
  {
    icon: Sparkles,
    title: "Intelligent Automation",
    description: "Smart workflows that adapt and improve with every interaction",
    gradient: "from-violet to-electric-blue"
  }
];

const AISection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 electric-gradient rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 cosmic-gradient rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-electric-blue/30 text-electric-blue">
            🤖 AI-Powered
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Where{" "}
            <span className="bg-gradient-to-r from-electric-blue via-violet to-soft-pink bg-clip-text text-transparent">
              AI Comes to Work
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Experience the future of productivity with advanced AI that understands context, 
            learns from your patterns, and automates intelligently.
          </p>
          
          {/* AI Models Badge */}
          <div className="inline-flex items-center space-x-4 p-4 glass rounded-2xl border border-electric-blue/20">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-neon-green rounded-full animate-pulse" />
              <span className="text-sm font-medium">Powered by GPT-4o</span>
            </div>
            <div className="w-px h-4 bg-glass-border" />
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-electric-blue rounded-full animate-pulse" />
              <span className="text-sm font-medium">Proprietary AI Models</span>
            </div>
          </div>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="glass hover-lift cursor-pointer group border-glass-border/20 hover:border-electric-blue/30 transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="mt-6 text-sm text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Explore feature →
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* MindAgent Spotlight */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-strong border-electric-blue/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 electric-gradient text-white">
                    ⚡ MindAgent
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Multi-Agent Workflow Orchestration
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Our revolutionary MindAgent system coordinates multiple AI agents to handle 
                    complex workflows automatically. From data analysis to report generation, 
                    watch as AI agents collaborate to complete your tasks.
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {[
                      "Intelligent task decomposition",
                      "Cross-tool data synchronization", 
                      "Adaptive workflow optimization",
                      "Real-time progress tracking"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-electric-blue rounded-full" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="electric-gradient hover:scale-105 transition-transform duration-300">
                    Experience MindAgent
                  </Button>
                </div>

                {/* Visual */}
                <div className="relative p-8 lg:p-12 flex items-center justify-center">
                  {/* Agent Network Visualization */}
                  <div className="relative w-64 h-64">
                    {/* Central Brain */}
                    <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-electric-blue to-violet rounded-full flex items-center justify-center animate-pulse-glow">
                      <Brain className="w-8 h-8 text-white" />
                    </div>

                    {/* Agent Nodes */}
                    {[
                      { icon: "📊", position: "top-0 left-1/2 -translate-x-1/2", delay: "0s" },
                      { icon: "📝", position: "top-1/4 right-0", delay: "0.5s" },
                      { icon: "🎯", position: "bottom-1/4 right-0", delay: "1s" },
                      { icon: "📈", position: "bottom-0 left-1/2 -translate-x-1/2", delay: "1.5s" },
                      { icon: "💡", position: "bottom-1/4 left-0", delay: "2s" },
                      { icon: "⚡", position: "top-1/4 left-0", delay: "2.5s" }
                    ].map((agent, index) => (
                      <div
                        key={index}
                        className={`absolute ${agent.position} transform w-12 h-12 glass rounded-full flex items-center justify-center border border-electric-blue/30 animate-float`}
                        style={{ animationDelay: agent.delay }}
                      >
                        <span className="text-lg">{agent.icon}</span>
                      </div>
                    ))}

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
                      <defs>
                        <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="hsl(var(--electric-blue))" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="hsl(var(--violet))" stopOpacity="0.1" />
                        </linearGradient>
                      </defs>
                      {/* Example connection lines - you can add more based on the positions */}
                      <line x1="50%" y1="50%" x2="50%" y2="10%" stroke="url(#connectionGradient)" strokeWidth="2" />
                      <line x1="50%" y1="50%" x2="90%" y2="25%" stroke="url(#connectionGradient)" strokeWidth="2" />
                      <line x1="50%" y1="50%" x2="90%" y2="75%" stroke="url(#connectionGradient)" strokeWidth="2" />
                      <line x1="50%" y1="50%" x2="50%" y2="90%" stroke="url(#connectionGradient)" strokeWidth="2" />
                      <line x1="50%" y1="50%" x2="10%" y2="75%" stroke="url(#connectionGradient)" strokeWidth="2" />
                      <line x1="50%" y1="50%" x2="10%" y2="25%" stroke="url(#connectionGradient)" strokeWidth="2" />
                    </svg>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AISection;