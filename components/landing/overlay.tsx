import type React from "react"
import { Button } from "../ui/button"
import { useCases, howItWorksSteps, aiFeatures } from "../../lib/data"
import { ArrowRight } from "lucide-react"
import { MindSuiteLogo } from "./logo"
import { Footer } from "./footer"
import { Badge } from "../ui/badge"
import { cn } from "../../lib/utils"

const Section = ({
  children,
  className = "",
  ...props
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => (
  <section className={`w-full p-8 flex justify-center text-center flex-col items-center ${className}`} {...props}>
    <div className="w-full max-w-screen-xl">{children}</div>
  </section>
)

const Pill = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-block px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-900/50 rounded-full mb-4 border border-cyan-500/30">
    {children}
  </div>
)

export function Overlay() {
  return (
    <div className="text-white w-full">
      <div className="sticky top-0 left-0 z-50 w-full px-8 py-4 bg-[#0D001F]/80 backdrop-blur-lg border-b border-white/10">
        <div className="flex justify-between items-center max-w-screen-xl mx-auto">
          <MindSuiteLogo />
          <Button className="bg-white/5 border border-white/20 text-white rounded-lg px-5 py-2 text-sm font-semibold hover:bg-white/10 transition-colors">
            Join the Waitlist
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <Section className="h-screen min-h-[800px]">
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tight text-white">
          One AI Workspace.
          <br />
          Infinite Productivity.
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
          Build, plan, write, sell, ship — faster than ever. MindSuite brings your docs, dashboards, agents, and ideas
          together in one powerful AI-first workspace.
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <Button
            size="lg"
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-purple-500/50 transition-all duration-300 rounded-lg px-8 py-3 text-base font-semibold"
          >
            Join the Waitlist
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white/30 text-gray-200 hover:bg-white/10 hover:text-white transition-colors rounded-lg px-8 py-3 text-base font-semibold"
          >
            Explore the Suite
          </Button>
        </div>
      </Section>

      {/* Built for Everyone Section */}
      <Section className="min-h-screen py-24">
        <Pill>One Suite. Every Tool You Need.</Pill>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient bg-gradient-to-r from-white to-gray-400">One Suite. </span>
          <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-500">Every Tool You Need.</span>
        </h2>
        <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto mb-12">
          From solo founders and students to Fortune 500 executives — MindSuite boosts productivity at every level.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {useCases.map((useCase) => (
            <div
              key={useCase.audience}
              className="bg-[#11072C] border border-white/10 rounded-2xl p-6 text-left flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center",
                    useCase.gradient,
                  )}
                >
                  <useCase.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{useCase.audience}</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{useCase.description}</p>
              <div className="flex flex-wrap gap-2">
                {useCase.tools.map((tool) => (
                  <Badge
                    key={tool}
                    variant="secondary"
                    className="bg-[#211447] text-gray-300 text-xs border border-purple-500/20"
                  >
                    {tool}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Button variant="link" className="mt-12 text-cyan-400 text-lg">
          Explore All 70+ Tools <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </Section>

      {/* Where AI Comes to Work Section */}
      <Section className="min-h-screen py-24 relative">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <div className="w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>
        <Pill>AI-Powered</Pill>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient bg-gradient-to-r from-white to-gray-400">Where </span>
          <span className="text-gradient bg-gradient-to-r from-cyan-400 to-purple-500">AI Comes to Work</span>
        </h2>
        <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto mb-12">
          Experience the future of productivity with advanced AI that understands context, learns from your patterns,
          and automates intelligently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {aiFeatures.map((feature) => (
            <div key={feature.title} className="bg-[#11072C] border border-white/10 rounded-2xl p-6 text-left">
              <div className="flex items-start gap-4">
                <div
                  className={cn(
                    "w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0 mt-1",
                    feature.gradient,
                  )}
                >
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Other sections remain the same */}
      <Section className="min-h-screen py-24">
        <Pill>How It Works</Pill>
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-gradient bg-gradient-to-r from-pink-500 to-purple-500">Simple. </span>
          <span className="text-gradient bg-gradient-to-r from-white to-gray-400">Powerful. </span>
          <span className="text-gradient bg-gradient-to-r from-cyan-400 to-blue-500">Unified.</span>
        </h2>
        <p className="text-lg text-gray-400 mt-2 max-w-3xl mx-auto mb-16">
          Getting started with MindSuite is effortless. Here's how you go from signup to supercharged productivity.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {howItWorksSteps.map((step, index) => (
            <div key={step.title} className="bg-[#11072C] border border-white/10 rounded-2xl p-6 text-left relative">
              <div className="absolute top-4 right-4 text-3xl font-bold text-white/10">{index + 1}</div>
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  )
}
