import { Play, Quote, Heart, Star, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Impact = () => {
  const testimonials = [
    {
      quote: "I felt like I was finally being heard. EduLink helped me connect with counselors when I needed support most.",
      author: "Kemi A.",
      location: "Lagos, Nigeria",
      grade: "Grade 12",
      avatar: "👩🏾‍🎓"
    },
    {
      quote: "My mum knew how I was doing before I could even say it. The weekly reports brought us closer together.",
      author: "David M.",
      location: "Nairobi, Kenya",
      grade: "Grade 10",
      avatar: "👨🏿‍🎓"
    },
    {
      quote: "The AI tutor helped me understand mathematics in a way my teachers couldn't. My grades improved by 40%.",
      author: "Amina S.",
      location: "Accra, Ghana",
      grade: "Grade 11",
      avatar: "👩🏽‍🎓"
    }
  ];

  const metrics = [
    {
      value: "85%",
      label: "Reduction in anxiety levels",
      icon: Heart,
      color: "text-warm"
    },
    {
      value: "92%",
      label: "Parent satisfaction rate",
      icon: Star,
      color: "text-primary"
    },
    {
      value: "78%",
      label: "Academic improvement",
      icon: TrendingUp,
      color: "text-accent"
    }
  ];

  const schools = [
    "Hillcrest International School, Nigeria",
    "Peponi School, Kenya", 
    "Ghana International School, Ghana",
    "Crawford International, South Africa"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Real Stories. Real Change.
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Impact & Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From pilot schools across Africa, hear directly from students, parents, and educators about the transformation EduLink Pulse brings.
          </p>
        </div>
        
        {/* Video Section */}
        <div className="relative mb-16">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Documentary: "Connected Futures"
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Follow three students across Kenya, Ghana, and Nigeria as they experience their first year with EduLink Pulse.
            </p>
            
            <Button variant="hero" size="xl" className="bg-background/20 backdrop-blur-sm hover:bg-background/30">
              <Play className="w-6 h-6" />
              Watch Documentary (12 min)
            </Button>
          </div>
        </div>
        
        {/* Student Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/40 mb-4" />
                
                <blockquote className="text-lg font-medium text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{testimonial.avatar}</span>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.grade} • {testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Impact Metrics */}
        <div className="bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50 mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Data-Backed Results
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <metric.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <div className={`text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.value}
                </div>
                
                <div className="text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50 text-center">
            <p className="text-muted-foreground mb-4">
              Based on 18-month study across 45 schools
            </p>
            <Button variant="outline" size="sm">
              View Full Research Report
            </Button>
          </div>
        </div>
        
        {/* Pilot Schools */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Trusted by Leading Schools
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {schools.map((school, index) => (
              <div key={index} className="bg-card rounded-xl p-4 border border-border/50 hover:border-primary/30 transition-colors">
                <div className="text-sm font-medium text-foreground text-center">
                  {school}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-muted-foreground mt-8">
            + 150 more schools across 12 African countries
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impact;