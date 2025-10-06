import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export function Skills() {
  const mainSkills = [
    { name: "Angular", level: 95, years: "7 years" },
    { name: "React", level: 90, years: "3 years" },
    { name: "Next.js", level: 85, years: "3 years" },
    { name: "TypeScript", level: 90, years: "6 years" },
    { name: "JavaScript", level: 95, years: "7 years" },
  ];

  const technologies = [
    "HTML5", "CSS3", "SCSS/Sass", "Tailwind CSS", "Bootstrap",
    "RxJS", "NgRx", "Redux", "Zustand", "React Query",
    "Jest", "Cypress", "Testing Library", "Karma", "Protractor",
    "Webpack", "Vite", "ESBuild", "npm", "Yarn", "pnpm",
    "Git", "Docker", "CI/CD", "Node.js", "Express.js",
    "GraphQL", "RESTful APIs", "Figma", "Adobe XD",
    "Agile & Scrum", "Jira", "Confluence", "Slack", "Trello", "Notion",
    "VSCode", "WebStorm", "Postman", "WordPress", "PHP", "Vercel", "Netlify"
  ];

  const expertise = [
    {
      category: "Frontend Frameworks",
      skills: ["Angular 2-17", "React 16-18", "Next.js 12-14", "Vue.js"]
    },
    {
      category: "State Management",
      skills: ["NgRx", "Redux Toolkit", "Zustand", "Context API"]
    },
    {
      category: "Testing & Quality",
      skills: ["Jest", "Cypress", "Testing Library", "Storybook", "ESLint"]
    },
    {
      category: "Build Tools",
      skills: ["Webpack", "Vite", "Angular CLI", "Create React App", "Nx"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive knowledge across the modern frontend development stack
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Core Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {mainSkills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.years}</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="grid gap-6">
            {expertise.map((area) => (
              <Card key={area.category}>
                <CardHeader>
                  <CardTitle className="text-lg">{area.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {area.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Additional Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="outline">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}