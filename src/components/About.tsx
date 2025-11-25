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
              Junior Web Developer skilled in the MERN stack (MongoDB, Express.js, React.js, Node.js) with hands-on 
              experience building responsive web applications and REST APIs. Graduate of Stellenbosch University Web 
              Development Bootcamp with a strong foundation in JavaScript, Git/GitHub, and modern frontend design.
            </p>
            
            <p>
              Passionate about problem-solving, continuous learning, and contributing to collaborative development teams. 
              Currently expanding skills in React Native for mobile app development.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Bootstrap', 'Shopify API', 'OpenAI'].map((skill) => (
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
