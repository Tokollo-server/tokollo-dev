const links = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Nav = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display font-bold text-foreground">Tokollo Mokalodise</span>
        <div className="flex items-center gap-6 text-sm">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior: "smooth" })}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
