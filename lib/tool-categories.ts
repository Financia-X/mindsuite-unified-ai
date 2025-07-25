import {
  Code,
  Users,
  BarChart3,
  FileText,
  Brain,
  Briefcase,
  Calculator,
  Globe,
  Shield,
  Zap,
  Database,
  MessageSquare,
  Calendar,
  Mail,
  Image,
  Video,
  Music,
  PenTool,
  Search,
  Cloud
} from "lucide-react"

export const toolCategories = [
  {
    name: "Productivity",
    tools: [
      { name: "TaskMind", description: "AI-powered task management and prioritization", icon: Calendar },
      { name: "NoteMind", description: "Smart note-taking with auto-organization", icon: FileText },
      { name: "EmailMind", description: "Intelligent email drafting and management", icon: Mail },
      { name: "ScheduleMind", description: "Automated calendar optimization", icon: Calendar },
    ]
  },
  {
    name: "Development",
    tools: [
      { name: "CodeMind", description: "AI code generation and optimization", icon: Code },
      { name: "APIMind", description: "Smart API design and documentation", icon: Database },
      { name: "CloudMind", description: "Automated cloud infrastructure management", icon: Cloud },
      { name: "DebugMind", description: "Intelligent bug detection and fixes", icon: Search },
    ]
  },
  {
    name: "Analytics",
    tools: [
      { name: "DataMind", description: "Advanced data analysis and insights", icon: BarChart3 },
      { name: "PredictMind", description: "Predictive analytics and forecasting", icon: Brain },
      { name: "InsightMind", description: "Business intelligence and reporting", icon: Search },
      { name: "MetricMind", description: "KPI tracking and performance analysis", icon: BarChart3 },
    ]
  },
  {
    name: "Content",
    tools: [
      { name: "WriteMind", description: "AI content creation and editing", icon: PenTool },
      { name: "DesignMind", description: "Automated graphic design generation", icon: Image },
      { name: "VideoMind", description: "AI video editing and production", icon: Video },
      { name: "AudioMind", description: "Smart audio processing and enhancement", icon: Music },
    ]
  },
  {
    name: "Business",
    tools: [
      { name: "CRMMind", description: "Intelligent customer relationship management", icon: Users },
      { name: "SalesMind", description: "AI-powered sales optimization", icon: Briefcase },
      { name: "FinanceMind", description: "Automated financial analysis", icon: Calculator },
      { name: "ComplianceMind", description: "Regulatory compliance monitoring", icon: Shield },
    ]
  }
]