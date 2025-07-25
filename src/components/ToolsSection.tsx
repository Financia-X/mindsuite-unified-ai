import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  PenTool, 
  CheckSquare, 
  BarChart3, 
  FileBarChart, 
  Target, 
  StickyNote, 
  Calendar, 
  ClipboardList, 
  GraduationCap,
  ListTodo,
  FileCheck,
  TrendingUp,
  MessageSquare,
  Database,
  DollarSign,
  Users,
  Award,
  Clock,
  UserPlus,
  Gift,
  Building,
  UserCheck,
  Mail,
  Scale,
  Shield,
  FileX,
  AlertTriangle,
  Gavel,
  FileSearch,
  Settings,
  CreditCard,
  PhoneCall,
  UserSearch,
  Home,
  Briefcase,
  BarChart2,
  Folder,
  Eye,
  BookOpen,
  School,
  Heart,
  Stethoscope,
  User,
  Cloud,
  MessageCircle,
  Code,
  Play,
  Bug,
  Rocket,
  Activity,
  Zap,
  Globe,
  Monitor,
  Lock,
  Terminal,
  GitBranch,
  Receipt,
  Calculator,
  Lightbulb
} from "lucide-react";

const toolCategories = [
  {
    id: "core",
    name: "Core Tools",
    description: "Essential productivity tools for everyone",
    tools: [
      { name: "DocuMind", description: "Document parsing, Q&A, summarization", icon: FileText },
      { name: "SignMind", description: "AI-powered digital signatures", icon: PenTool },
      { name: "TrackIt", description: "Smart task tracking & follow-ups", icon: CheckSquare },
      { name: "InsightMind", description: "Dashboards & KPIs", icon: BarChart3 },
      { name: "ReportMind", description: "Report generation", icon: FileBarChart },
      { name: "FocusMind", description: "Pomodoro, goal setting", icon: Target },
      { name: "NoteMind", description: "Smart notes & collaboration", icon: StickyNote },
      { name: "CalMind", description: "Calendar sync & reminders", icon: Calendar },
      { name: "SurveyMind", description: "Forms & surveys", icon: ClipboardList },
      { name: "TestMind", description: "Quiz & practice test generation", icon: GraduationCap },
      { name: "TaskMind", description: "Personal to-do tracker", icon: ListTodo },
      { name: "ProposalMind", description: "Proposal + RFP drafts", icon: FileCheck },
      { name: "GrowthMind", description: "A/B testing + analytics", icon: TrendingUp },
      { name: "FeedbackMind", description: "Sentiment extraction", icon: MessageSquare },
      { name: "DataMind", description: "File-based data extraction", icon: Database }
    ]
  },
  {
    id: "hr",
    name: "HR Suite",
    description: "Complete human resources management",
    tools: [
      { name: "PayrollMind", description: "Salary & compliance", icon: DollarSign },
      { name: "EmployeeMind", description: "Database, info management", icon: Users },
      { name: "PerformanceMind", description: "Appraisals & metrics", icon: Award },
      { name: "TimeMind", description: "Attendance & scheduling", icon: Clock },
      { name: "RecruitMind", description: "JD & resume filtering", icon: UserPlus },
      { name: "OnboardMind", description: "New hire journeys", icon: Gift },
      { name: "BenefitMind", description: "Benefits management", icon: Building },
      { name: "WorkplaceMind", description: "Culture & policy AI", icon: UserCheck },
      { name: "InterviewMind", description: "AI interview grader & OA tool", icon: UserSearch },
      { name: "MailMind", description: "AI HR mail generator", icon: Mail }
    ]
  },
  {
    id: "legal",
    name: "Legal Suite",
    description: "Comprehensive legal workflow management",
    tools: [
      { name: "LitigMind", description: "Case & litigation management", icon: Scale },
      { name: "IPMind", description: "IP and trademark workflows", icon: Shield },
      { name: "PolicyMind", description: "Contracts + legal docs", icon: FileX },
      { name: "ComplianceMind", description: "Regulatory AI", icon: AlertTriangle },
      { name: "AuditMind", description: "Legal & finance audits", icon: Gavel },
      { name: "BoardMind", description: "Board documentation", icon: FileSearch },
      { name: "RiskMind", description: "Risk analysis + ESG", icon: Settings }
    ]
  },
  {
    id: "sales",
    name: "Sales & Marketing Suite",
    description: "Drive revenue with AI-powered sales tools",
    tools: [
      { name: "CRMMind", description: "AI CRM", icon: CreditCard },
      { name: "EngageMind", description: "Campaign management", icon: PhoneCall },
      { name: "SalesMind", description: "Pipelines & forecasts", icon: TrendingUp },
      { name: "LeadMind", description: "Prospect discovery", icon: UserSearch },
      { name: "SupportMind", description: "Ticket resolution", icon: MessageCircle }
    ]
  },
  {
    id: "realestate",
    name: "Real Estate Suite",
    description: "Property management and real estate workflows",
    tools: [
      { name: "EstateMind", description: "Property documents", icon: Home },
      { name: "PropertyMind", description: "Listings management", icon: Briefcase },
      { name: "TradeMind", description: "Asset exchange", icon: BarChart2 },
      { name: "AuditMind", description: "Compliance reviews", icon: Folder }
    ]
  },
  {
    id: "executive",
    name: "CXO & PM Suite",
    description: "Executive-level insights and project management",
    tools: [
      { name: "PredictMind", description: "Forecasts & analysis", icon: Eye },
      { name: "ProjectMind", description: "Project boards + OKRs", icon: Briefcase },
      { name: "BenchMind", description: "Team visibility", icon: Users },
      { name: "InsightMind", description: "Executive dashboards", icon: BarChart3 }
    ]
  },
  {
    id: "education",
    name: "Education Suite",
    description: "Tools for educators and educational institutions",
    tools: [
      { name: "EduMind", description: "Timetable + course AI", icon: BookOpen },
      { name: "ClassMind", description: "Classroom planner", icon: School },
      { name: "TestMind", description: "Test creation & feedback", icon: GraduationCap }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare Suite",
    description: "Medical practice and patient management",
    tools: [
      { name: "HealthMind", description: "Patient reports", icon: Heart },
      { name: "MedicalMind", description: "Record summarization", icon: Stethoscope },
      { name: "PatientMind", description: "Portal + engagement", icon: User }
    ]
  },
  {
    id: "dev",
    name: "Developer Suite",
    description: "Complete development workflow automation",
    tools: [
      { name: "CloudMind", description: "Infrastructure management", icon: Cloud },
      { name: "CollabMind", description: "Team communications", icon: MessageCircle },
      { name: "RepoMind", description: "Git sync + documentation", icon: GitBranch },
      { name: "BuildMind", description: "CI/CD automation", icon: Play },
      { name: "BugMind", description: "Issue tracker", icon: Bug },
      { name: "DeployMind", description: "Rollouts & status", icon: Rocket },
      { name: "DevOpsMind", description: "Operations dashboards", icon: Activity },
      { name: "CodeMind", description: "LLM code generator", icon: Code },
      { name: "APIMind", description: "API builder", icon: Zap },
      { name: "APITrackMind", description: "API logs & tracing", icon: Globe },
      { name: "SecurityMind", description: "Scan & patch", icon: Lock },
      { name: "ScriptMind", description: "Bash/script generation AI", icon: Terminal },
      { name: "VersionMind", description: "Version diff & control", icon: GitBranch }
    ]
  },
  {
    id: "business",
    name: "MSME & Business Tools",
    description: "Essential tools for small and medium enterprises",
    tools: [
      { name: "InvoiceMind", description: "Invoicing", icon: Receipt },
      { name: "TaxMind", description: "Tax filing", icon: Calculator },
      { name: "BizMind", description: "AI suggestions for MSMEs", icon: Lightbulb }
    ]
  }
];

const ToolsSection = () => {
  return (
    <section id="tools-section" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-electric-blue/30 text-electric-blue">
            70+ AI-Powered Tools
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            One Suite.{" "}
            <span className="bg-gradient-to-r from-electric-blue via-violet to-soft-pink bg-clip-text text-transparent">
              Every Tool You Need.
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            Explore our comprehensive collection of AI-powered tools, organized by category and role.
          </p>
        </div>

        {/* Tools Tabs */}
        <Tabs defaultValue="core" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 lg:grid-cols-10 mb-12 glass border-glass-border/20">
            {toolCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="text-xs data-[state=active]:electric-gradient data-[state=active]:text-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {toolCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="space-y-8">
              {/* Category Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground">
                  {category.description}
                </p>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.tools.map((tool, index) => {
                  const IconComponent = tool.icon;
                  return (
                    <Card 
                      key={index}
                      className="glass hover-lift cursor-pointer group border-glass-border/20 hover:border-electric-blue/30 transition-all duration-300"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg electric-gradient p-2 group-hover:scale-110 transition-transform duration-300">
                            <IconComponent className="w-full h-full text-white" />
                          </div>
                          <CardTitle className="text-sm font-semibold text-foreground">
                            {tool.name}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {tool.description}
                        </p>
                        <div className="mt-3 text-xs text-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Learn more →
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Bottom Stats */}
        <div className="text-center mt-16 space-y-6">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-electric-blue">70+</div>
              <div className="text-sm text-muted-foreground">Total Tools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-neon-green">10</div>
              <div className="text-sm text-muted-foreground">Specialized Suites</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-soft-pink">100%</div>
              <div className="text-sm text-muted-foreground">AI-Powered</div>
            </div>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each tool is powered by advanced AI models including GPT-4o and our proprietary algorithms, 
            designed to understand context and deliver intelligent automation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;