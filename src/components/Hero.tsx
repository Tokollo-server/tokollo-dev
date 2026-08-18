import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-[85vh] flex items-center px-6 pt-32 pb-20">
      <div className="max-w-5xl mx-auto w-full animate-fade-in">
        <p className="text-primary text-sm font-medium tracking-wide uppercase mb-6">
          Full-Stack Developer &amp; Machine Learning Intern @ FlyRank AI
        </p>

        <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 leading-tight max-w-4xl">
          I write the feature, then I write the trap that would prove it&apos;s cheating.
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl leading-relaxed">
          Building web applications and auditing machine learning data pipelines with the exact same
          question: what would make this wrong?
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300"
            onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          >
            See How I Proved It
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-muted-foreground/20 hover:border-primary hover:text-primary transition-all duration-300"
            asChild
          >
            <a href="https://github.com/Tokollo-server" target="_blank" rel="noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
