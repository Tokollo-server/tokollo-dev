import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-all duration-300"
              asChild
            >
              <a href="mailto:tokollomokalodise021@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-muted-foreground/20 hover:border-primary hover:text-primary transition-all duration-300"
              asChild
            >
              <a href="tel:0646630512">
                📞 064 663 0512
              </a>
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/Tokollo-server" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/tokollo-mokalodise-92781623b/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
