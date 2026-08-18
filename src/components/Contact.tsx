const Contact = () => {
  return (
    <footer id="contact" className="py-12 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Tokollo Mokalodise &mdash; Full-Stack Developer &amp; ML Intern
        </p>
        <div className="flex gap-6 text-sm">
          <a
            href="mailto:tokollomokalodise021@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/Tokollo-server"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tokollo-mokalodise-92781623b/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
