import { BrainCircuit } from "lucide-react"

export function MindSuiteLogo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
        <BrainCircuit className="h-5 w-5 text-white" />
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-white leading-tight">MindSuite</span>
        <span className="text-xs text-cyan-400 leading-tight">Where AI Meets Productivity</span>
      </div>
    </a>
  )
}
