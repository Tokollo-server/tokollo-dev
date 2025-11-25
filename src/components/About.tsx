const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a passionate developer who loves turning complex problems into simple, beautiful, and intuitive solutions. 
              With a keen eye for design and a deep understanding of modern web technologies, I create experiences that users love.
            </p>
            
            <p>
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {['React', 'TypeScript', 'Node.js', 'Tailwind'].map((skill) => (
                <div 
                  key={skill}
                  className="p-4 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 text-center hover:scale-105"
                >
                  <span className="font-display font-semibold text-foreground">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
