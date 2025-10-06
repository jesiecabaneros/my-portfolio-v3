import { Code2, Users, Zap } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "7+ Years Experience",
      description: "Deep expertise in modern frontend frameworks and best practices"
    },
    // {
    //   icon: Users,
    //   title: "Team Leadership",
    //   description: "Led cross-functional teams and mentored junior developers"
    // },
    {
      icon: Zap,
      title: "Performance Focused",
      description: "Optimized applications serving millions of users"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate about building scalable, maintainable, and user-centric web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              With over 7 years in frontend development, I've had the privilege of working on 
              diverse projects spanning from startup MVPs to enterprise-scale applications. 
              My journey began with Angular, where I mastered component architecture and 
              dependency injection patterns.
            </p>
            <p className="text-lg leading-relaxed">
              As the ecosystem evolved, I embraced React and Next.js, becoming proficient in 
              modern hooks, state management, and server-side rendering. I believe in writing 
              clean, testable code and staying current with the latest industry trends and 
              best practices.
            </p>
            <p className="text-lg leading-relaxed">
              Beyond coding, I'm passionate about team collaboration, code reviews, and 
              sharing knowledge. I've mentored junior developers and led technical initiatives 
              that improved development workflows and application performance.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="border-border">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <highlight.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg mb-2">{highlight.title}</h3>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}