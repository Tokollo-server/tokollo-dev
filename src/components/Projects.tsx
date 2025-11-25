import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AI Dropshipping Platform",
    description: "Smart eCommerce platform with Shopify API integration, AI automation for product sourcing, pricing optimization, and OpenAI-powered customer service chatbot.",
    tags: ["MERN Stack", "Shopify API", "OpenAI"],
    link: "#",
    github: "https://github.com/Tokollo-server/ai-dropshipping"
  },
  {
    title: "CarInventory Web App",
    description: "Full-stack CRUD application for managing car inventory with JWT authentication and secure API routes. Built with responsive UI using Bootstrap.",
    tags: ["React.js", "Node.js", "MongoDB"],
    link: "#",
    github: "https://github.com/Tokollo-server/carInventory.git"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with API integration, city search functionality, and geolocation features. Designed with responsive layouts.",
    tags: ["React.js", "WeatherAPI", "CSS"],
    link: "#",
    github: "https://github.com/Tokollo-server/reactweather-app"
  },
  {
    title: "iTunes Search App",
    description: "Music search application using iTunes public API with dynamic search functionality and real-time API requests. Efficient state management.",
    tags: ["React.js", "iTunes API", "JavaScript"],
    link: "#",
    github: "https://github.com/Tokollo-server/iTunes-searchengine-api.git"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center mb-12 text-lg">
            Some of my recent work that I'm proud of
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-glow group"
              >
                <CardHeader>
                  <CardTitle className="font-display text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-muted-foreground/20 hover:border-primary hover:text-primary"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="flex-1 border-muted-foreground/20 hover:border-primary hover:text-primary"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
