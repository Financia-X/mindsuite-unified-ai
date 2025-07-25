import { MindSuiteLogo } from "./logo"
import { footerLinks } from "../../lib/data"

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0D001F] py-16">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-1">
            <MindSuiteLogo />
            <p className="mt-4 text-sm text-gray-400">One workspace. Every tool. Built for the future of work.</p>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-semibold text-white mb-4">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-white flex items-center gap-2">
                      <link.icon className="w-4 h-4 text-gray-500" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} MindSuite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
