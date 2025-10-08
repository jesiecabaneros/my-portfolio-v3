import { Briefcase } from "lucide-react";
import { Card, CardContent } from "./ui/card";

export function Experience() {
  const highlights = [
    {
      icon: Briefcase,
      title: "Front-end Developer",
      company: "Hypersense Software",
      duration: "May. 2022 - Sep. 2025",
      description: [
        "Collaborated with a team to create responsive web applications using Angular and Next.js, enhancing user experience and engagement.",
        "Developed and maintained reusable code libraries for future use, reducing development time for new projects.",
        "Worked closely with designers to translate UI/UX wireframes into high- quality code, ensuring a seamless transition from design to implementation.",
        "Participated in code reviews and contributed to team knowledge sharing, fostering a culture of continuous improvement and learning.",
      ],
    },
    {
      icon: Briefcase,
      title: "Front-end Developer",
      company: "Hyperstacks Inc.",
      duration: "Jul. 2018 - May. 2022",
      description: [
       "Produced websites compatible with multiple browsers.",
       "Consulted with customers to gather requirements and discuss design choices.",
       "Developed designs to meet specific requirements such as quick-loading sites with particular layouts.",
       "Designed and updated layouts to meet usability and performance requirements.",
       "Developed landing pages, dashboards and online applications using wordpress, Angular 4 and others.",
       "Completed full redesigns of existing websites to improve navigation, enhance visuals and strengthen search engine rankings."
      ],
    },
    {
      icon: Briefcase,
      title: "INTERNSHIP - Web Developer",
      company: "Syntactics Inc.",
      duration: "Nov. 2017 - Feb. 2018",
      description: [
        "Modified existing website to correct coding errors, upgrade interfaces and improve overall performance.",
        "Convert PSD to HTML to fully responsive wordpress website.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">My Experience</h2>
        </div>

        <div className="grid  gap-12 items-center">
          {/* <div className="space-y-6">
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
          </div> */}

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
                      <h4 className="text-md mb-2">
                        {highlight.company} - {highlight.duration}
                      </h4>
                      <ul className="text-muted-foreground mt-2">
                        {highlight.description.map((desc, i) => (
                          <li className="mb-1" key={i}>{desc}</li>
                        ))}
                      </ul>
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
