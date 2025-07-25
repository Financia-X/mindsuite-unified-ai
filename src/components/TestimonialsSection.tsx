import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "HR Director",
    company: "TechFlow Inc.",
    avatar: "👩‍💼",
    rating: 5,
    content: "MindSuite transformed our HR operations completely. PayrollMind and RecruitMind saved us 20+ hours per week. The AI suggestions for candidate screening are incredibly accurate.",
    highlight: "Saved 20+ hours per week"
  },
  {
    name: "Marcus Rodriguez",
    role: "Indie Developer",
    company: "CodeCraft Studios",
    avatar: "👨‍💻",
    rating: 5,
    content: "As a solo developer, having CodeMind, APIMind, and DeployMind in one platform is a game-changer. I shipped my last project 40% faster than usual.",
    highlight: "40% faster project delivery"
  },
  {
    name: "Emily Foster",
    role: "Startup Founder",
    company: "GreenTech Innovations",
    avatar: "👩‍🚀",
    rating: 5,
    content: "MindSuite is like having a full team of specialists. From business planning with BizMind to investor presentations with ProposalMind - it's all there.",
    highlight: "Like having a full team"
  },
  {
    name: "Dr. Michael Park",
    role: "Professor",
    company: "Stanford University",
    avatar: "👨‍🏫",
    rating: 5,
    content: "EduMind and TestMind revolutionized how I create courses and assessments. My students love the interactive quizzes, and I save hours on grading.",
    highlight: "Revolutionized course creation"
  },
  {
    name: "Lisa Thompson",
    role: "Real Estate Broker",
    company: "Premium Properties",
    avatar: "👩‍💼",
    rating: 5,
    content: "PropertyMind helps me manage listings across multiple platforms seamlessly. The AI-generated property descriptions are spot-on and save me tons of time.",
    highlight: "Seamless multi-platform management"
  },
  {
    name: "Alex Kim",
    role: "Legal Counsel",
    company: "Morrison & Associates",
    avatar: "👨‍⚖️",
    rating: 5,
    content: "LitigMind and PolicyMind streamlined our case management. Document analysis that used to take hours now takes minutes. Incredible efficiency boost.",
    highlight: "Hours to minutes document analysis"
  }
];

const stats = [
  { value: "98%", label: "User Satisfaction" },
  { value: "45%", label: "Average Time Saved" },
  { value: "1M+", label: "Tasks Automated" },
  { value: "150+", label: "Countries" }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 electric-gradient rounded-full opacity-5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 cosmic-gradient rounded-full opacity-5 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 border-electric-blue/30 text-electric-blue">
            🗣️ Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Loved by{" "}
            <span className="bg-gradient-to-r from-electric-blue via-violet to-soft-pink bg-clip-text text-transparent">
              Professionals
            </span>{" "}
            Worldwide
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            See how MindSuite is transforming workflows across industries and roles.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-blue to-violet bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass hover-lift cursor-pointer group border-glass-border/20 hover:border-electric-blue/30 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 opacity-20">
                <Quote className="w-8 h-8 text-electric-blue" />
              </div>

              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Highlight */}
                <div className="mb-6">
                  <Badge variant="secondary" className="electric-gradient text-white text-xs">
                    ⚡ {testimonial.highlight}
                  </Badge>
                </div>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="glass-strong border-electric-blue/30 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                {/* Content */}
                <div className="p-8 lg:p-12">
                  <Badge className="mb-4 neon-gradient text-white">
                    🎥 Video Stories
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                    Watch Real Users Share Their Success Stories
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    From startup founders to Fortune 500 executives, hear how MindSuite 
                    is changing the way people work and boosting productivity across every industry.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-neon-green rounded-full" />
                      <span className="text-sm text-muted-foreground">Unscripted, real experiences</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-electric-blue rounded-full" />
                      <span className="text-sm text-muted-foreground">Measurable productivity gains</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-soft-pink rounded-full" />
                      <span className="text-sm text-muted-foreground">Cross-industry success stories</span>
                    </div>
                  </div>

                  <button className="text-electric-blue hover:text-electric-blue-glow font-medium transition-colors">
                    Watch Video Testimonials →
                  </button>
                </div>

                {/* Visual */}
                <div className="relative p-8 lg:p-12 flex items-center justify-center bg-gradient-to-br from-electric-blue/10 to-violet/10">
                  {/* Video Preview Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { emoji: "👩‍💼", title: "HR Director", company: "TechFlow" },
                      { emoji: "👨‍💻", title: "Developer", company: "CodeCraft" },
                      { emoji: "👩‍🚀", title: "Founder", company: "GreenTech" },
                      { emoji: "👨‍🏫", title: "Professor", company: "Stanford" }
                    ].map((video, index) => (
                      <div 
                        key={index}
                        className="glass p-4 rounded-xl hover-lift cursor-pointer group border border-electric-blue/20"
                      >
                        <div className="text-center">
                          <div className="text-2xl mb-2">{video.emoji}</div>
                          <div className="text-xs font-medium text-foreground">{video.title}</div>
                          <div className="text-xs text-muted-foreground">{video.company}</div>
                          <div className="mt-2 w-8 h-8 mx-auto electric-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <span className="text-white text-xs">▶</span>
                          </div>
                        </div>
                      </div>
                    ))}
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

export default TestimonialsSection;