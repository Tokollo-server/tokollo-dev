import { Terminal, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const terminalOutput = `catalog_total_rows: 331437      decay_positive_count: 42299.0
active_content_rows: 68837      active_decay_prevalence_pct: 61.45%
corr_raw_leaked_active: -0.185  corr_leaked_ratio_active: -0.3622
rule_agreement_pct: 100.0%`;

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
    {children}
  </span>
);

const Projects = () => {
  return (
    <section id="work" className="py-20 px-6 bg-card/30">
      <div className="max-w-5xl mx-auto space-y-8">
        <h2 className="text-3xl md:text-4xl font-display font-bold mb-12">Case Studies &amp; Proof</h2>

        <article className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              ML &amp; Data Engineering
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              Rule Agreement: 100.0%
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold mb-4">
            Search Intelligence Data Contract &mdash; Leakage Diagnostics &amp; Auditing
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Audited a 9.8M-row GSC/GA4 performance dataset across 55 active clients to predict 30-day
            forward organic decay (T+1). Proved that standard linear correlation metrics fail to catch
            target leakage on heavy-tailed distributions because decay is a step-function threshold
            (&le; 80%). Implemented a deterministic rule-agreement check across 68,837 active rows
            that isolated exact target contamination with 100.0% accuracy.
          </p>

          <div className="rounded-lg border border-border bg-background overflow-hidden mb-6">
            <div className="flex items-center gap-2 px-4 py-2 border-b border-border text-xs text-muted-foreground">
              <Terminal className="w-4 h-4 text-primary" />
              DuckDB Output &mdash; Section 3.2: COMPLETE FEATURE MATRIX &amp; LEAKAGE AUDIT
            </div>
            <pre className="p-4 text-xs md:text-sm overflow-x-auto text-foreground/90 font-mono">
              {terminalOutput}
            </pre>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Tag>DuckDB</Tag>
              <Tag>SQL</Tag>
              <Tag>Data Contracts</Tag>
              <Tag>ML Validation</Tag>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-muted-foreground/20 hover:border-primary hover:text-primary"
              asChild
            >
              <a href="https://colab.research.google.com" target="_blank" rel="noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                View Notebook Audit (Colab)
              </a>
            </Button>
          </div>
        </article>

        <article className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Prompt Engineering / AI Development
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              6-Stage Isolation Experiment
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold mb-4">
            Backend Auth Code Generation &mdash; 6-Stage Prompt Engineering Experiment
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Built JWT authentication middleware for a Node/Express app across six isolated prompt
            versions (role assignment, context, few-shot examples, structural rules, step
            decomposition) to measure what actually changes model output. Discovered that adding
            business motivation caused the model to silently introduce unrequested account-lockout
            logic, and that a few-shot example altered error payload structures across the board while
            correctly preserving security status codes.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Tag>Node.js</Tag>
              <Tag>Express</Tag>
              <Tag>JWT</Tag>
              <Tag>Mongoose</Tag>
              <Tag>Prompt Engineering</Tag>
            </div>
            <span className="text-xs text-muted-foreground">
              Experiment Documentation Available On Request
            </span>
          </div>
        </article>

        <article className="rounded-xl border border-border bg-card p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs uppercase tracking-wide text-muted-foreground">
              Full-Stack Web Development
            </span>
            <span className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20">
              Production MERN Stack
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-display font-bold mb-4">
            Car Inventory Management System &mdash; Full-Stack CRUD Application
          </h3>

          <p className="text-muted-foreground leading-relaxed mb-6">
            Built a responsive full-stack inventory application enabling users to query, register,
            update, and remove vehicle entries. Implemented JWT authentication and protected Express
            API routes to ensure state persistence and secure database operations against a MongoDB
            cluster.
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              <Tag>MongoDB</Tag>
              <Tag>Express.js</Tag>
              <Tag>React.js</Tag>
              <Tag>Node.js</Tag>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="border-muted-foreground/20 hover:border-primary hover:text-primary"
              asChild
            >
              <a href="https://github.com/Tokollo-server/carInventory.git" target="_blank" rel="noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View GitHub Repo
              </a>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
