import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Brain, 
  Twitter, 
  Github, 
  MessageCircle, 
  Mail, 
  Globe,
  FileText,
  Users,
  Code,
  HelpCircle,
  Shield,
  Zap
} from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { name: "Features", href: "#", icon: Zap },
      { name: "Pricing", href: "#pricing-section", icon: null },
      { name: "Documentation", href: "#", icon: FileText },
      { name: "API Reference", href: "#", icon: Code },
      { name: "Changelog", href: "#", icon: null },
      { name: "Roadmap", href: "#", icon: null }
    ]
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "#", icon: Users },
      { name: "Careers", href: "#", icon: null },
      { name: "Press Kit", href: "#", icon: null },
      { name: "Blog", href: "#", icon: null },
      { name: "Contact", href: "#", icon: Mail }
    ]
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "#", icon: HelpCircle },
      { name: "Community", href: "#", icon: MessageCircle },
      { name: "Discord", href: "#", icon: MessageCircle },
      { name: "GitHub", href: "#", icon: Github },
      { name: "Status", href: "#", icon: null }
    ]
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "#", icon: Shield },
      { name: "Terms of Service", href: "#", icon: null },
      { name: "Cookie Policy", href: "#", icon: null },
      { name: "GDPR", href: "#", icon: null },
      { name: "Security", href: "#", icon: Shield }
    ]
  }
];

const socialLinks = [
  { name: "Twitter", href: "#", icon: Twitter },
  { name: "GitHub", href: "#", icon: Github },
  { name: "Discord", href: "#", icon: MessageCircle },
  { name: "LinkedIn", href: "#", icon: Users }
];

const Footer = () => {
  return (
    <footer className="relative py-24 mt-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-electric-blue/50 to-transparent" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 electric-gradient rounded-full opacity-5 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 cosmic-gradient rounded-full opacity-5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 electric-gradient rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">MindSuite</h3>
                <p className="text-sm text-electric-blue">Where AI Meets Productivity</p>
              </div>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              One workspace. Every tool. Built for the future of work.
            </p>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map((section, index) => (
                <div key={index}>
                  <h4 className="font-semibold text-foreground mb-4">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a 
                          href={link.href}
                          className="flex items-center space-x-2 text-muted-foreground hover:text-electric-blue transition-colors duration-200 group"
                        >
                          {link.icon && (
                            <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                          )}
                          <span>{link.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Separator className="bg-glass-border/30" />

        {/* Bottom Section */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
            <p>© 2024 MindSuite. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <a href="#" className="hover:text-electric-blue transition-colors">Privacy</a>
              <span>•</span>
              <a href="#" className="hover:text-electric-blue transition-colors">Terms</a>
              <span>•</span>
              <a href="#" className="hover:text-electric-blue transition-colors">Security</a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 glass rounded-full flex items-center justify-center border border-glass-border/30 hover:border-electric-blue/50 hover:bg-electric-blue/10 transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5 text-muted-foreground group-hover:text-electric-blue transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;