import { Heart, Mail, MessageCircle, Linkedin, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const quickLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "For Schools", href: "#schools" },
    { label: "For Parents", href: "#parents" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" }
  ];

  const resources = [
    { label: "Research Reports", href: "#research" },
    { label: "Case Studies", href: "#cases" },
    { label: "Implementation Guide", href: "#guide" },
    { label: "Support Center", href: "#support" },
    { label: "Developer API", href: "#api" }
  ];

  const company = [
    { label: "About Us", href: "#about" },
    { label: "Our Team", href: "#team" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
    { label: "Press Kit", href: "#press" }
  ];

  return (
    <footer className="bg-deep-blue text-primary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
              <p className="text-primary-foreground/80">
                Get the latest updates on EduLink Pulse, student stories, and educational insights from across Africa.
              </p>
            </div>
            
            <div className="flex gap-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold">EduLink Pulse</span>
            </div>
            
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Connecting purposeful futures across Africa. Empowering the next generation of leaders with technology, wellness, and community.
            </p>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-6 py-6">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-sm text-primary-foreground/60">
              © 2024 EduLink Pulse. All rights reserved. Built with ❤️ for Africa's future.
            </div>
            
            <div className="flex gap-6 text-sm md:justify-end">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Use
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <select className="bg-transparent text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="sw">SW</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact FAB */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="icon" className="w-14 h-14 rounded-full bg-gradient-primary shadow-warm hover:scale-110 transition-transform">
          <Mail className="w-6 h-6" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;