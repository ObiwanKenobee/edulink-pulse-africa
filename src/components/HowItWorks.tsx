import { ArrowRight, UserPlus, Heart, Cloud, Users, BarChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Student Registration",
      description: "Students receive their EduBand during school registration and complete initial setup",
      details: ["Personalized health baseline", "Learning preferences", "Emergency contacts"]
    },
    {
      icon: Heart,
      title: "Daily Check-ins",
      description: "Students engage with daily wellness checks, lessons, and reflection activities",
      details: ["Morning mood tracking", "Interactive lessons", "Evening reflections"]
    },
    {
      icon: Cloud,
      title: "Data Synchronization",
      description: "Information syncs to the cloud via PulseDock when internet is available",
      details: ["Weekly sync cycles", "Offline capability", "Secure data transfer"]
    },
    {
      icon: Users,
      title: "Family Updates",
      description: "Parents receive meaningful insights about their child's wellbeing and progress",
      details: ["Weekly wellness reports", "Academic summaries", "Milestone celebrations"]
    },
    {
      icon: BarChart,
      title: "School Insights",
      description: "Schools gain aggregated insights to improve student support and outcomes",
      details: ["Population health trends", "Academic performance patterns", "Early intervention alerts"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A seamless journey from dormitory to classroom to home, connecting every part of a student's life.
          </p>
        </div>
        
        {/* Steps Flow */}
        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
          
          <div className="grid lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30">
                  <CardContent className="p-6 text-center">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 mt-4 group-hover:scale-110 transition-transform">
                      <step.icon className="w-8 h-8 text-primary-foreground" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Details */}
                    <ul className="space-y-1 text-xs">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Arrow (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-20 -right-4 w-8 h-8 items-center justify-center">
                    <ArrowRight className="w-5 h-5 text-primary/60" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Visual Journey */}
        <div className="mt-20 bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            A Day in the Life
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="group">
              <div className="w-12 h-12 bg-warm/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-warm/30 transition-colors">
                <span className="text-2xl">🌅</span>
              </div>
              <h4 className="font-semibold text-foreground mb-1">Morning</h4>
              <p className="text-sm text-muted-foreground">Wellness check-in via EduBand</p>
            </div>
            
            <div className="group">
              <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-accent/30 transition-colors">
                <span className="text-2xl">📚</span>
              </div>
              <h4 className="font-semibold text-foreground mb-1">Classroom</h4>
              <p className="text-sm text-muted-foreground">AI-powered learning on PulseDock</p>
            </div>
            
            <div className="group">
              <div className="w-12 h-12 bg-earth/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-earth/30 transition-colors">
                <span className="text-2xl">🌙</span>
              </div>
              <h4 className="font-semibold text-foreground mb-1">Evening</h4>
              <p className="text-sm text-muted-foreground">Reflection and progress sync</p>
            </div>
            
            <div className="group">
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/30 transition-colors">
                <span className="text-2xl">📱</span>
              </div>
              <h4 className="font-semibold text-foreground mb-1">Home</h4>
              <p className="text-sm text-muted-foreground">Parents receive weekly updates</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;