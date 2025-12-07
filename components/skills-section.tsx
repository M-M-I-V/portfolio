import { Code2, Database, Brain, GitBranch, Cpu } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      icon: Code2,
      skills: ["React", "Next.js", "Tailwind CSS", "Vite", "Shadcn UI", "TypeScript"],
    },
    {
      category: "Backend",
      icon: Cpu,
      skills: ["Java (Spring Boot)", "Python (FastAPI)", "Node.js", "MySQL", "PostgreSQL"],
    },
    {
      category: "Data Engineering",
      icon: Database,
      skills: ["SQL", "Python (Numpy, Pandas)", "Snowflake", "Spark", "Data Modelling", "Airflow"],
    },
    {
      category: "Machine Learning",
      icon: Brain,
      skills: ["Python", "Scikit-Learn", "MLxtend", "Numpy", "Pandas", "Seaborn", "Matplotlib", "Joblib"],
    },
    {
      category: "DevOps & Tools",
      icon: GitBranch,
      skills: ["Docker", "Git", "GitHub", "GitHub Actions", "Linux", "Postman", "Slack"],
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technical Arsenal</h2>
          <p className="text-foreground/70 text-lg">Keywords and technologies optimized for ATS</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <div key={category.category} className="space-y-4">
                <div className="flex items-center gap-3">
                  <IconComponent className="w-6 h-6 text-primary shrink-0" />
                  <h3 className="text-xl font-bold text-primary">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}