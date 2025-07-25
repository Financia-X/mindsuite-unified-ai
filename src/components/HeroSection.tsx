import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { useEffect, useRef } from "react";
import heroLaptop from "@/assets/hero-laptop.jpg";
import heroPhone from "@/assets/hero-phone.jpg";
import heroTablet from "@/assets/hero-tablet.jpg";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current.offsetHeight;
      const progress = Math.min(scrollY / (heroHeight * 0.8), 1);
      
      // Advanced parallax effects for each device
      if (laptopRef.current) {
        laptopRef.current.style.transform = `
          translateY(${progress * 60}px) 
          rotateX(${progress * 8}deg) 
          rotateY(${progress * -5}deg)
          scale(${1 + progress * 0.1})
        `;
      }
      
      if (phoneRef.current) {
        phoneRef.current.style.transform = `
          translateY(${progress * 40}px) 
          rotateZ(${progress * 10}deg)
          translateX(${progress * 20}px)
        `;
      }
      
      if (tabletRef.current) {
        tabletRef.current.style.transform = `
          translateY(${progress * 50}px) 
          rotateX(${progress * -6}deg)
          translateX(${progress * -15}px)
        `;
      }
      
      // Sophisticated fade and scale for text
      const textElements = heroRef.current.querySelectorAll('.hero-text');
      textElements.forEach((el, index) => {
        const delay = index * 0.1;
        const elementProgress = Math.max(0, progress - delay);
        (el as HTMLElement).style.opacity = `${Math.max(0, 1 - elementProgress * 0.7)}`;
        (el as HTMLElement).style.transform = `scale(${1 - elementProgress * 0.05})`;
      });
    };

    // Smooth scroll setup
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial animation trigger
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in-up, .scale-in').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTools = () => {
    document.getElementById('tools-section')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section ref={heroRef} className="hero-container relative min-h-screen flex items-center justify-center">
      {/* Minimal 3D Background */}
      <div className="absolute inset-0">
        {/* Subtle floating elements using only 3 colors */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-10 animate-float"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
              animationDelay: `${i * 2}s`
            }}
          >
            <div className="w-12 h-12 bg-brand-primary/20 rounded-xl backdrop-blur-sm border border-brand-secondary/10 transform rotate-45" />
          </div>
        ))}
        
        {/* Clean gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-16">
          {/* Logo */}
          <div className="hero-text fade-in-up">
            <img 
              src="/lovable-uploads/772ac6f8-ea55-427c-8f75-d0924988b739.png" 
              alt="MindSuite" 
              className="h-12 mx-auto mb-8"
            />
          </div>

          {/* Main Headline - Simplified */}
          <div className="hero-text fade-in-up space-y-8 max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
              <span className="block text-brand-secondary">70+ AI Tools.</span>
              <span className="block text-brand-secondary">One Workspace.</span>
              <span className="block bg-gradient-to-r from-brand-primary to-brand-primary/70 bg-clip-text text-transparent">
                Superpowers for Every Role.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Unified AI workspace that transforms how teams build, plan, write, sell, and ship. Professional tools designed for real productivity.
            </p>
          </div>

          {/* CTA Buttons - Clean design */}
          <div className="hero-text fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="gradient-primary text-lg px-10 py-6 font-semibold"
            >
              <Zap className="mr-3 h-5 w-5" />
              Try MindSuite Free
            </Button>
            
            <Button 
              size="lg" 
              variant="ghost"
              onClick={scrollToTools}
              className="text-lg px-10 py-6 hover:bg-brand-primary/10 group font-semibold border border-brand-accent/20"
            >
              Explore the Suite
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Professional 3D Mockups with Advanced Parallax */}
        <div className="relative mt-32 perspective-1500">
          <div className="relative max-w-7xl mx-auto">
            {/* Main laptop mockup - center stage */}
            <div 
              ref={laptopRef}
              className="hero-parallax relative z-30 scale-in"
            >
              <img 
                src={heroLaptop} 
                alt="MindSuite Workspace" 
                className="w-full max-w-4xl mx-auto h-auto rounded-2xl shadow-2xl border border-brand-secondary/10"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/10 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating phone mockup */}
            <div 
              ref={phoneRef}
              className="hero-parallax absolute -right-16 md:-right-32 top-20 z-20 scale-in animate-float-delayed"
            >
              <img 
                src={heroPhone} 
                alt="Mobile App" 
                className="w-48 md:w-64 h-auto rounded-2xl shadow-xl border border-brand-secondary/10 opacity-90"
              />
            </div>
            
            {/* Floating tablet mockup */}
            <div 
              ref={tabletRef}
              className="hero-parallax absolute -left-16 md:-left-32 top-32 z-20 scale-in animate-float-slow"
            >
              <img 
                src={heroTablet} 
                alt="AI Dashboard" 
                className="w-56 md:w-72 h-auto rounded-2xl shadow-xl border border-brand-secondary/10 opacity-90"
              />
            </div>
          </div>

          {/* Professional glow effect */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl opacity-60" />
          </div>
        </div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce opacity-60">
        <div className="w-6 h-10 border-2 border-brand-primary/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-brand-primary/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;