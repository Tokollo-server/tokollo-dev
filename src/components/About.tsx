import { ExternalLink } from "lucide-react";

const CERT_URL =
  "https://www.linkedin.com/in/tokollo-mokalodise/details/certifications/";

const certifications = [
  { label: "Anthropic AI Fluency", href: CERT_URL },
  { label: "Model Context Protocol", href: CERT_URL },
  { label: "Claude Code 101", href: CERT_URL },
  { label: "Stellenbosch Web Dev Bootcamp", href: null },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-10 tracking-tight">
          About &amp; Verified Certifications
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I am a full-stack developer and machine learning intern based in South Africa,
              focusing on MERN stack development, Python, and data pipeline verification. My
              background includes web development experience at Stellenbosch University and machine
              learning engineering at FlyRank AI.
            </p>
            <p>
              I emphasize proof over assertion&mdash;whether that means verifying SQL data contracts
              against target leakage or isolating how prompt structures change LLM code generation
              outputs.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-display font-semibold mb-4 text-foreground">
              Verified Certifications
            </h3>
            <ul className="space-y-3 text-sm">
              {certifications.map((c) => (
                <li key={c.label}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-foreground hover:text-primary transition-colors"
                    >
                      {c.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-muted-foreground">{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
