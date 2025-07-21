import { AlertTriangle, Users, Wifi, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: Heart,
      title: "Mental Health & Isolation",
      description: "Students struggle with homesickness, anxiety, and limited emotional support systems in boarding environments.",
      stat: "67% report feeling isolated"
    },
    {
      icon: AlertTriangle,
      title: "Academic Pressure",
      description: "Overwhelming coursework without personalized guidance leaves many students behind.",
      stat: "45% struggle academically"
    },
    {
      icon: Wifi,
      title: "Limited Global Resources",
      description: "Poor internet connectivity restricts access to world-class educational content and opportunities.",
      stat: "Only 30% reliable connectivity"
    },
    {
      icon: Users,
      title: "Disconnected Families",
      description: "Parents lack insights into their children's wellbeing, academic progress, and daily experiences.",
      stat: "Weekly communication gaps"
    }
  ];

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Boarding Students Need 
            <span className="text-primary"> More Than Just Books</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Across Africa's boarding schools, students face unique challenges that traditional education fails to address.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <problem.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {problem.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {problem.description}
                </p>
                
                <div className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                  {problem.stat}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Story Section */}
        <div className="mt-20 bg-card rounded-3xl p-8 md:p-12 shadow-soft border border-border/50">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <blockquote className="text-2xl font-medium text-foreground mb-4 italic">
                "I felt so alone in my first year. No one knew when I was struggling, 
                and I didn't know how to ask for help."
              </blockquote>
              <cite className="text-muted-foreground">
                - Amara, Grade 11 Student from Lagos
              </cite>
            </div>
            
            <div className="text-center md:text-right">
              <div className="text-4xl font-bold text-primary mb-2">2.5M</div>
              <div className="text-muted-foreground">
                Boarding school students across Africa need better support systems
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;