import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management and secure payment processing.",
    tags: ["React", "Node.js", "PostgreSQL"],
    link: "#",
    github: "#"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates, file sharing, and team analytics.",
    tags: ["TypeScript", "Firebase", "Tailwind"],
    link: "#",
    github: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Beautiful and responsive analytics dashboard with interactive charts and data visualization.",
    tags: ["React", "D3.js", "Express"],
    link: "#",
    github: "#"
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
