const certifications = [
  "Anthropic AI Fluency",
  "Model Context Protocol (MCP)",
  "Claude Code 101",
  "Stellenbosch Web Dev Bootcamp",
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10">About &amp; Background</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a full-stack developer and machine learning intern based in South Africa, focusing
              on MERN stack development, Python, and data pipeline verification. My background
              includes web development experience at Stellenbosch University and machine learning
              engineering at FlyRank AI.
            </p>
            <p>
              I emphasize proof over assertion&mdash;whether that means verifying SQL data contracts
              against target leakage or isolating how prompt structures change LLM code generation
              outputs.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display font-semibold mb-4 text-foreground">Certifications</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {certifications.map((c) => (
                <li key={c}>&bull; {c}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
