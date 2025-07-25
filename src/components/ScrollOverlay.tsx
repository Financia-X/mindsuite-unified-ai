import React from "react"

const Section = ({ children, className = "", ...props }: { children: React.ReactNode, className?: string }) => (
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
        <nav className="p-6">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">MindSuite</div>
            <button className="bg-white/10 text-white backdrop-blur-lg border border-white/20 px-6 py-2 rounded-lg hover:bg-white/20 transition-all">
              Get Started
            </button>
          </div>
        </nav>
      </div>

      {/* Hero Section */}
      <Section className="text-center relative">
        <div className="space-y-12">
          {/* Command hint */}
          <div className="inline-flex items-center px-4 py-2 bg-white/5 rounded-full border border-blue-500/20 text-sm backdrop-blur-lg">
            <span className="text-blue-400 mr-2">⌘</span>
            <span className="text-gray-300">Cmd + K to start</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-white">One Suite.</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Every Tool You Need.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Build, plan, write, sell, ship — faster than ever. MindSuite brings your docs, dashboards, agents, and ideas together in one powerful AI-first workspace.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-all duration-300 text-lg px-8 py-6 rounded-lg text-white font-semibold shadow-2xl">
              ⚡ Join the Waitlist
            </button>
            
            <button className="text-lg px-8 py-6 hover:bg-white/5 group bg-transparent border border-white/20 rounded-lg text-white transition-all">
              <span className="mr-2">🧠</span>
              Explore the Suite
              <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
            </button>
          </div>
        </div>
      </Section>

      {/* Built for Everyone Section */}
      <Section>
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Built for Every Ambition
          </h2>
          <p className="text-lg text-gray-400">From solo founders to enterprise teams, MindSuite adapts to you.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { title: "Entrepreneurs", description: "Build your startup with AI-powered tools", icon: "🚀" },
              { title: "Content Creators", description: "Create engaging content at scale", icon: "✨" },
              { title: "Developers", description: "Code faster with intelligent assistance", icon: "💻" },
              { title: "Marketers", description: "Drive growth with data-driven insights", icon: "📈" },
              { title: "Students", description: "Learn and research more effectively", icon: "🎓" },
              { title: "Teams", description: "Collaborate seamlessly across projects", icon: "👥" }
            ].map((persona) => (
              <div
                key={persona.title}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-lg transition-all duration-300 hover:border-purple-400/50 hover:-translate-y-2"
              >
                <div className="text-3xl mb-4">{persona.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{persona.title}</h3>
                <p className="text-gray-400">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Tools Section */}
      <Section>
        <div className="text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-yellow-500 bg-clip-text text-transparent">
            One Suite. Every Tool.
          </h2>
          <p className="text-lg text-gray-400">An entire ecosystem of AI-powered tools at your fingertips.</p>
          
          <div className="space-y-8 mt-12">
            {[
              { 
                name: "Content & Writing", 
                tools: ["Blog Writer", "Social Media", "Copywriting", "Email Marketing", "SEO Tools", "Research", "Translation", "Summarizer"]
              },
              { 
                name: "Development & Code", 
                tools: ["Code Generator", "API Builder", "Database Design", "Testing", "Documentation", "Debugging", "Architecture", "DevOps"]
              },
              { 
                name: "Business & Analytics", 
                tools: ["Strategy Planning", "Market Research", "Financial Models", "Presentations", "Reports", "Dashboards", "Automation", "CRM"]
              }
            ].map((category) => (
              <div key={category.name} className="text-left">
                <h3 className="text-2xl font-semibold text-white mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-gray-200 hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className="text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Join thousands of users who are working faster, smarter, and more creatively with MindSuite.
          </p>
          <button className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:scale-105 transition-all duration-300 text-xl px-12 py-8 rounded-lg text-white font-semibold shadow-2xl">
            ⚡ Start Your Free Trial
          </button>
        </div>
      </Section>
    </>
  )
}