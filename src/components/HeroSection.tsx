import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroCube from "@/assets/hero-cube.jpg";

const HeroSection = () => {
  const scrollToDemo = () => {
    document.getElementById('demo-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient opacity-10" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-electric-blue rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 glass rounded-full border border-electric-blue/20">
              <span className="text-sm font-medium text-electric-blue">🧠 Where AI Meets Productivity</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block bg-gradient-to-r from-electric-blue via-violet to-soft-pink bg-clip-text text-transparent">
                  70+ AI Tools.
                </span>
                <span className="block">One Workspace.</span>
                <span className="block text-electric-blue">
                  Superpowers for Every Role.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-medium">
                The unified AI platform that transforms how you work across every industry and role.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="electric-gradient hover:scale-105 transition-transform duration-300 text-lg px-8 py-6 shadow-lg hover:shadow-electric">
                Explore MindSuite
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                onClick={scrollToDemo}
                className="glass border-electric-blue/30 hover:border-electric-blue/50 text-lg px-8 py-6 hover:bg-electric-blue/10 backdrop-blur-xl"
              >
                <Play className="mr-2 h-5 w-5" />
                See Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-electric-blue">70+</div>
                <div className="text-sm text-muted-foreground">AI Tools</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-neon-green">12</div>
                <div className="text-sm text-muted-foreground">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-soft-pink">1M+</div>
                <div className="text-sm text-muted-foreground">Users</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative perspective-1000 flex justify-center">
            <div className="relative">
              {/* 3D Cube Container */}
              <div className="cube-3d relative mx-auto" style={{ width: '200px', height: '200px' }}>
                <div className="cube-face glass"></div>
                <div className="cube-face glass"></div>
                <div className="cube-face glass"></div>
                <div className="cube-face glass"></div>
                <div className="cube-face glass"></div>
                <div className="cube-face glass"></div>
              </div>
              
              {/* Hero Image Overlay */}
              <img 
                src={heroCube} 
                alt="MindSuite 3D Workspace" 
                className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-80 mix-blend-screen"
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl animate-glow" style={{ boxShadow: 'var(--shadow-electric)' }} />
            </div>

            {/* Floating Tool Icons */}
            <div className="absolute inset-0">
              {['📝', '📊', '🎯', '💡', '⚡', '🔮'].map((icon, i) => (
                <div
                  key={i}
                  className="absolute text-2xl animate-float"
                  style={{
                    left: `${20 + (i % 3) * 30}%`,
                    top: `${20 + Math.floor(i / 3) * 40}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                >
                  <div className="glass p-3 rounded-full border border-electric-blue/20">
                    {icon}
                  </div>
                </div>
              ))}
            </div>
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