import HeroSection from "@/components/HeroSection";
import PersonaSection from "@/components/PersonaSection";
import ToolsSection from "@/components/ToolsSection";
import AISection from "@/components/AISection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Built for Everyone Section */}
      <PersonaSection />
      
      {/* 70+ Tools Section */}
      <ToolsSection />
      
      {/* AI Features Section */}
      <AISection />
      
      {/* Demo Section */}
      <section id="demo-section" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            See MindSuite in{" "}
            <span className="bg-gradient-to-r from-electric-blue via-violet to-soft-pink bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the power of AI-driven productivity with interactive demos of our most popular tools.
          </p>
          
          {/* Demo placeholder - would contain interactive product mockups */}
          <div className="max-w-4xl mx-auto glass rounded-3xl p-8 border border-electric-blue/20">
            <div className="aspect-video bg-gradient-to-br from-electric-blue/10 to-violet/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 electric-gradient rounded-2xl flex items-center justify-center">
                  <span className="text-2xl">🎬</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Interactive Demo Coming Soon</h3>
                <p className="text-muted-foreground">Experience MindSuite's interface and features firsthand</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <PricingSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
