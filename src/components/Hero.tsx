import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Heart, Brain, Wifi } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-foreground/20 via-transparent to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm text-primary-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Empowering 50,000+ students across Africa
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              EduLink 
              <span className="bg-gradient-to-r from-warm to-background bg-clip-text text-transparent">
                Pulse
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
              The Smart Companion for Africa's Boarding School Students
            </p>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl">
              Empowering students with wellness, connection, and guided learning—on campus and beyond. 
              Built for Africa, designed for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                See How It Works
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button variant="outline" size="xl" className="bg-background/10 backdrop-blur-sm border-primary-foreground/20 text-primary-foreground hover:bg-background/20">
                <Play className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-foreground">150+</div>
                <div className="text-sm text-primary-foreground/70">Schools Connected</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-foreground">50K+</div>
                <div className="text-sm text-primary-foreground/70">Students Supported</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary-foreground">85%</div>
                <div className="text-sm text-primary-foreground/70">Wellness Improvement</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-warm/30 to-accent/30 rounded-3xl blur-2xl"></div>
            <div className="relative bg-background/10 backdrop-blur-sm rounded-3xl p-6 border border-primary-foreground/20">
              <img 
                src={heroImage} 
                alt="Students using EduLink Pulse devices in boarding school" 
                className="w-full h-auto rounded-2xl shadow-soft"
              />
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-warm text-primary-foreground p-3 rounded-2xl shadow-warm">
                <Brain className="w-6 h-6" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground p-3 rounded-2xl shadow-soft">
                <Wifi className="w-6 h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full animate-bounce mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;