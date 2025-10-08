import { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Experience } from "./components/Experience";

export default function App() {
  useEffect(() => {
    // Set dark mode by default for night mode theme
    document.documentElement.classList.add('dark');
  }, []);


  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        {/* <Projects /> todo */}
        {/* make Projects component */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}