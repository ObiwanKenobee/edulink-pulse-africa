import { Building, BarChart3, Users, Shield, Download, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ForSchools = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Real-time analytics on student wellbeing, academic performance, and engagement patterns",
      features: ["Population health trends", "Academic performance analytics", "Early intervention alerts", "Custom reporting dashboards"]
    },
    {
      icon: Users,
      title: "Enhanced Student Support",
      description: "AI-powered tools help teachers identify students who need additional support",
      features: ["Mood tracking alerts", "Learning gap identification", "Personalized intervention recommendations", "Peer support matching"]
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Built with privacy and safety at the core, meeting international education standards",
      features: ["GDPR compliant", "FERPA aligned", "SOC 2 certified", "End-to-end encryption"]
    }
  ];

  const implementation = [
    {
      phase: "Phase 1: Pilot",
      duration: "Month 1-2",
      details: ["20-50 students", "Core team training", "Initial setup", "Data baseline"]
    },
    {
      phase: "Phase 2: Scale",
      duration: "Month 3-4", 
      details: ["Full grade rollout", "Teacher integration", "Parent onboarding", "System optimization"]
    },
    {
      phase: "Phase 3: Full Integration",
      duration: "Month 5-6",
      details: ["School-wide deployment", "Advanced analytics", "Custom workflows", "Continuous support"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            For Schools & Governments
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Partner with EduLink Pulse to
            <span className="text-primary"> Modernize Your Boarding Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform student outcomes with comprehensive insights, AI-powered support, and evidence-based interventions.
          </p>
        </div>
        
        {/* Value Propositions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground mb-6">
                  {benefit.description}
                </p>
                
                <ul className="space-y-2">
                  {benefit.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Implementation Timeline */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50 mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            School Onboarding Journey
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {implementation.map((phase, index) => (
              <div key={index} className="relative">
                {/* Phase Number */}
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {index + 1}
                </div>
                
                <h4 className="text-xl font-semibold text-foreground mb-2">
                  {phase.phase}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {phase.duration}
                </p>
                
                <ul className="space-y-2">
                  {phase.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
                
                {/* Connector Line */}
                {index < implementation.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-4 w-8 h-px bg-border"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Government Section */}
        <div className="bg-accent/10 rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                National Education Strategy Alignment
              </h3>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">SDG 4:</span>
                    <span className="text-muted-foreground ml-2">Quality Education for All</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Digital Transformation:</span>
                    <span className="text-muted-foreground ml-2">EdTech Integration</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Mental Health:</span>
                    <span className="text-muted-foreground ml-2">Student Wellbeing Focus</span>
                  </div>
                </li>
              </ul>
              
              <Button variant="accent" size="lg">
                Request Government Partnership
              </Button>
            </div>
            
            <div className="text-center">
              <Building className="w-24 h-24 text-accent mx-auto mb-6" />
              <div className="text-4xl font-bold text-accent mb-2">12</div>
              <div className="text-muted-foreground">Countries with active partnerships</div>
            </div>
          </div>
        </div>
        
        {/* Resources */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Get Started Today
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button variant="hero" size="xl" className="group">
              <Download className="w-5 h-5" />
              Download School Guide
            </Button>
            
            <Button variant="outline" size="xl">
              Schedule Demo
            </Button>
          </div>
          
          <p className="text-muted-foreground mt-6">
            Implementation support available in English, French, and Swahili
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForSchools;