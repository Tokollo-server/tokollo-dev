import { Moon, Sun, Download } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import cvAsset from "@/assets/cv.pdf.asset.json";

const links = [
  { label: "Work", id: "work" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Nav = () => {
  const { theme, toggleTheme } = useTheme();

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
          <a
            href={cvAsset.url}
            download="CV_Tokollo_Mokalodise.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <Download className="w-4 h-4" />
            CV
          </a>
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-md border border-border bg-card text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
