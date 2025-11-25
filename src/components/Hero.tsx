import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center animate-fade-in">
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-primary/20 bg-primary/5">
          <span className="text-primary text-sm font-medium">Available for new projects</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
          Creative Developer
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences through elegant code and thoughtful design
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get in touch
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-muted-foreground/20 hover:border-primary hover:text-primary transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View my work
          </Button>
        </div>

        <div className="animate-bounce mt-12">
          <ArrowDown className="mx-auto text-muted-foreground w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
