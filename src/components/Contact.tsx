import cvAsset from "@/assets/cv.pdf.asset.json";

const links = [
  { label: "Email", href: "mailto:tokollomokalodise021@gmail.com", external: false, download: false },
  { label: "GitHub", href: "https://github.com/Tokollo-server", external: true, download: false },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tokollo-mokalodise/",
    external: true,
    download: false,
  },
  { label: "Download CV", href: cvAsset.url, external: false, download: true },
];



const Contact = () => {
  return (
    <footer id="contact" className="py-12 px-6 border-t border-border bg-card">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Tokollo Mokalodise &mdash; Full-Stack Developer &amp; ML Intern
        </p>
        <div className="flex gap-6 text-sm">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
              {...(l.download ? { download: "CV_Tokollo_Mokalodise.pdf" } : {})}

              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Contact;
