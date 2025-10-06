import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight">
              Frontend <span className="text-primary">Developer</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Crafting exceptional web experiences with <strong>7 years</strong> of expertise in 
              Angular, React, and Next.js
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hi, I'm Jesie Cabaneros. I transform ideas into powerful, scalable web applications 
              that users love. From enterprise Angular solutions to modern React experiences, 
              I bring passion and precision to every project.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="px-8 py-3">
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                View My Work
              </Button>
            </div>

            <div className="flex justify-center space-x-6 pt-4">
              <a
                href="https://github.com/jesiecabaneros"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/jesie-cabaneros-53a03916b/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:jccabaneros18@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
}