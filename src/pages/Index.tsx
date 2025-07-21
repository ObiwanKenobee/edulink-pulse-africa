import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import HowItWorks from "@/components/HowItWorks";
import Impact from "@/components/Impact";
import ForSchools from "@/components/ForSchools";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <Impact />
      <ForSchools />
      <Footer />
    </div>
  );
};

export default Index;
