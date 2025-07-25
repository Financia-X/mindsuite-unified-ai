import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import workspaceMockup from "@/assets/3d-workspace.jpg";
import dashboardMockup from "@/assets/3d-dashboard.jpg";
import mobileMockup from "@/assets/3d-mobile.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current || !mockupRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / heroHeight, 1);
      
      // Parallax effect for mockups
      mockupRef.current.style.transform = `translateY(${progress * 50}px) rotateX(${progress * 10}deg)`;
      
      // Fade effect for text
      const textElements = heroRef.current.querySelectorAll('.hero-text');
      textElements.forEach((el) => {
        (el as HTMLElement).style.opacity = `${1 - progress * 0.5}`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTools = () => {
    document.getElementById('tools-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background/90">
      {/* Fallback 3D Background */}
      <div className="absolute inset-0 hero-3d-fallback" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-electric-blue/10 via-violet/5 to-soft-pink/10 opacity-60" />
      
      {/* Additional background effects */}
      <div className="absolute inset-0">
        {/* Animated gradient waves */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[150%] h-[150%] -top-1/4 -left-1/4 bg-gradient-radial from-electric-blue/5 via-transparent to-transparent animate-pulse-slow opacity-60" />
          <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-gradient-radial from-violet/3 via-transparent to-transparent animate-spin-very-slow" />
        </div>
        
        {/* Floating orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float-slow opacity-20"
            style={{
              left: `${15 + (i * 15)}%`,
              top: `${20 + (i * 10)}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + (i * 2)}s`
            }}
          >
            <div className="w-2 h-2 bg-electric-blue rounded-full blur-sm" />
          </div>
        ))}
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--electric-blue)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--electric-blue)) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-12">
          {/* Command hint */}
          <div className="hero-text inline-flex items-center px-4 py-2 glass rounded-full border border-electric-blue/20 text-sm">
            <span className="text-electric-blue mr-2">⌘</span>
            <span className="text-muted-foreground">Cmd + K to start</span>
          </div>

          {/* Main Headline */}
          <div className="hero-text space-y-6 max-w-6xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-foreground">One Suite.</span>
              <span className="block bg-gradient-to-r from-electric-blue via-violet to-soft-pink bg-clip-text text-transparent">
                Every Tool You Need.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Build, plan, write, sell, ship — faster than ever. MindSuite brings your docs, dashboards, agents, and ideas together in one powerful AI-first workspace.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="hero-text flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="electric-gradient hover:scale-105 transition-all duration-300 text-lg px-8 py-6 shadow-2xl hover:shadow-electric-blue/50"
            >
              <Zap className="mr-2 h-5 w-5" />
              Join the Waitlist
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost"
              onClick={scrollToTools}
              className="text-lg px-8 py-6 hover:bg-white/5 group"
            >
              <span className="mr-2">🧠</span>
              Explore the Suite
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* 3D Mockups */}
        <div ref={mockupRef} className="relative mt-24 perspective-1000">
          <div className="relative max-w-6xl mx-auto">
            {/* Main workspace mockup */}
            <div className="relative z-20 transform hover:scale-105 transition-transform duration-700">
              <img 
                src={workspaceMockup} 
                alt="MindSuite Workspace" 
                className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
            </div>
            
            {/* Floating side mockups */}
            <div className="absolute -left-32 top-32 z-10 transform -rotate-12 hover:rotate-0 transition-transform duration-700">
              <img 
                src={dashboardMockup} 
                alt="AI Dashboard" 
                className="w-80 h-auto rounded-2xl shadow-xl border border-white/10 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
            
            <div className="absolute -right-32 top-48 z-10 transform rotate-12 hover:rotate-0 transition-transform duration-700">
              <img 
                src={mobileMockup} 
                alt="Mobile App" 
                className="w-64 h-auto rounded-2xl shadow-xl border border-white/10 opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Glow effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-electric-blue/20 rounded-full blur-3xl opacity-30 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet/20 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-blue/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;