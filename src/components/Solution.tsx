import { Smartphone, Tablet, Heart, Brain, Wifi, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import edubandImage from "@/assets/eduband-product.jpg";
import pulsedockImage from "@/assets/pulsedock-tablet.jpg";

const Solution = () => {
  const features = [
    {
      icon: Smartphone,
      title: "EduBand Wearable",
      description: "Smart health monitoring, mood tracking, and daily schedules",
      image: edubandImage,
      highlights: ["24/7 wellness monitoring", "Mood check-ins", "Smart notifications"]
    },
    {
      icon: Tablet,
      title: "PulseDock Hub",
      description: "Interactive learning platform with AI-powered personalization",
      image: pulsedockImage,
      highlights: ["Offline-first design", "AI tutoring", "Group collaboration"]
    },
    {
      icon: Heart,
      title: "HomeConnect App",
      description: "Keep parents connected with weekly insights and updates",
      image: "",
      highlights: ["Weekly wellness reports", "Academic progress", "Direct messaging"]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: "AI-Powered Learning",
      description: "Adapts to each student's learning style and pace"
    },
    {
      icon: Wifi,
      title: "Offline-First Design",
      description: "Works without internet, syncs when connected"
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description: "GDPR compliant with school-approved data handling"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            The Complete Solution
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The Smart Boarding Companion,
            <span className="text-primary"> Built for Africa</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three integrated components that work together to support every aspect of a student's boarding school journey.
          </p>
        </div>
        
        {/* Main Products */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                {feature.image ? (
                  <div className="aspect-square bg-gradient-soft p-8 flex items-center justify-center">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full max-w-xs h-auto object-contain group-hover:scale-105 transition-transform"
                    />
                  </div>
                ) : (
                  <div className="aspect-square bg-gradient-primary flex items-center justify-center">
                    <feature.icon className="w-20 h-20 text-primary-foreground" />
                  </div>
                )}
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Key Benefits */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Built with Cultural Intelligence & School Approval in Mind
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Technical Specs */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-earth-light/20 rounded-2xl p-6">
            <h4 className="text-xl font-semibold text-foreground mb-4">Technical Features</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Solar-powered with 7-day battery life
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Works offline, syncs when connected
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                Multi-language support (English, French, Swahili)
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                GDPR compliant data protection
              </li>
            </ul>
          </div>
          
          <div className="bg-accent/10 rounded-2xl p-6">
            <h4 className="text-xl font-semibold text-foreground mb-4">Impact Metrics</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-bold text-primary">85%</div>
                <div className="text-sm text-muted-foreground">Improved wellbeing</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">92%</div>
                <div className="text-sm text-muted-foreground">Parent satisfaction</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">78%</div>
                <div className="text-sm text-muted-foreground">Better academic performance</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent">96%</div>
                <div className="text-sm text-muted-foreground">School approval rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;