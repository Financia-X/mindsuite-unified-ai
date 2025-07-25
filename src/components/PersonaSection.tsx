import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Code, 
  Briefcase, 
  GraduationCap, 
  Scale, 
  TrendingUp, 
  Heart, 
  Home,
  Calculator,
  Building,
  UserCheck,
  BookOpen
} from "lucide-react";

const personas = [
  {
    title: "CXOs & Executives",
    icon: Briefcase,
    description: "Strategic dashboards, forecasting, and executive analytics",
    tools: ["PredictMind", "InsightMind", "BenchMind", "ProjectMind"],
    gradient: "from-electric-blue to-violet"
  },
  {
    title: "Product Managers",
    icon: TrendingUp,
    description: "Project tracking, user feedback, and growth analytics",
    tools: ["ProjectMind", "FeedbackMind", "GrowthMind", "InsightMind"],
    gradient: "from-violet to-soft-pink"
  },
  {
    title: "Developers",
    icon: Code,
    description: "Code generation, CI/CD, API management, and collaboration",
    tools: ["CodeMind", "APIMind", "CloudMind", "RepoMind"],
    gradient: "from-neon-green to-electric-blue"
  },
  {
    title: "HR Teams",
    icon: Users,
    description: "Employee management, payroll, performance, and recruitment",
    tools: ["PayrollMind", "RecruitMind", "PerformanceMind", "OnboardMind"],
    gradient: "from-soft-pink to-violet"
  },
  {
    title: "Sales Teams",
    icon: TrendingUp,
    description: "CRM, lead generation, pipeline management, and forecasting",
    tools: ["CRMMind", "LeadMind", "SalesMind", "EngageMind"],
    gradient: "from-electric-blue to-neon-green"
  },
  {
    title: "Legal Teams",
    icon: Scale,
    description: "Case management, contracts, compliance, and documentation",
    tools: ["LitigMind", "PolicyMind", "ComplianceMind", "AuditMind"],
    gradient: "from-violet to-electric-blue"
  },
  {
    title: "Students",
    icon: GraduationCap,
    description: "Note-taking, test preparation, scheduling, and collaboration",
    tools: ["NoteMind", "TestMind", "CalMind", "FocusMind"],
    gradient: "from-neon-green to-soft-pink"
  },
  {
    title: "Real Estate",
    icon: Home,
    description: "Property management, listings, trading, and compliance",
    tools: ["EstateMind", "PropertyMind", "TradeMind", "AuditMind"],
    gradient: "from-soft-pink to-electric-blue"
  },
  {
    title: "Auditors",
    icon: Calculator,
    description: "Financial audits, compliance reviews, and risk analysis",
    tools: ["AuditMind", "ComplianceMind", "RiskMind", "ReportMind"],
    gradient: "from-violet to-neon-green"
  },
  {
    title: "Educators",
    icon: BookOpen,
    description: "Course planning, timetables, classroom management, and testing",
    tools: ["EduMind", "ClassMind", "TestMind", "SurveyMind"],
    gradient: "from-electric-blue to-soft-pink"
  },
  {
    title: "Healthcare",
    icon: Heart,
    description: "Patient records, medical reports, and healthcare management",
    tools: ["HealthMind", "MedicalMind", "PatientMind", "ReportMind"],
    gradient: "from-neon-green to-violet"
  },
  {
    title: "MSMEs",
    icon: Building,
    description: "Business tools, invoicing, tax filing, and growth insights",
    tools: ["BizMind", "InvoiceMind", "TaxMind", "GrowthMind"],
    gradient: "from-soft-pink to-neon-green"
  }
];

const PersonaSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Choose Your Suite
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            One Suite. Every Tool You Need.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            From solo founders and students to Fortune 500 executives — MindSuite boosts productivity at every level.
          </p>
        </div>

        {/* Personas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {personas.map((persona, index) => {
            const IconComponent = persona.icon;
            return (
              <Card 
                key={index} 
                className="bg-card/50 hover:bg-card/80 hover-lift cursor-pointer group border border-border/20 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  {/* Icon with Gradient */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${persona.gradient} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-full h-full text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-2 text-foreground">
                    {persona.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {persona.description}
                  </p>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1">
                    {persona.tools.slice(0, 3).map((tool, toolIndex) => (
                      <Badge 
                        key={toolIndex} 
                        variant="secondary" 
                        className="text-xs bg-surface-elevated border-glass-border/30 text-muted-foreground hover:text-electric-blue transition-colors"
                      >
                        {tool}
                      </Badge>
                    ))}
                    {persona.tools.length > 3 && (
                      <Badge 
                        variant="secondary" 
                        className="text-xs bg-surface-elevated border-glass-border/30 text-muted-foreground"
                      >
                        +{persona.tools.length - 3}
                      </Badge>
                    )}
                  </div>

                  {/* Hover Indicator */}
                  <div className="mt-4 text-xs text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Click to explore tools →
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Don't see your role? MindSuite's modular design adapts to any workflow.
          </p>
          <button className="text-electric-blue hover:text-electric-blue-glow font-medium transition-colors">
            Explore All 70+ Tools →
          </button>
        </div>
      </div>
    </section>
  );
};

export default PersonaSection;