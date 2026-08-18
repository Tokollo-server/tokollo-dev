import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <About />
      </main>
      <Contact />
    </div>
  );
};

export default Index;
