import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectGrid() {
  const projects = [
    {
      id: 1,
      title: "Breast Cancer ML",
      description: "Classification model achieving 98.25% accuracy using Logistic Regression.",
      tags: ["Python", "Scikit-Learn", "Machine Learning"],
      highlights: "98.25% Accuracy",
      links: [{ label: "GitHub", href: "#" }],
    },
    {
      id: 2,
      title: "SafeZone AI",
      description: "Hackathon project leveraging Computer Vision for safety monitoring.",
      tags: ["Python", "Computer Vision", "OpenCV"],
      highlights: "3rd Place Winner",
      links: [{ label: "GitHub", href: "#" }],
    },
    {
      id: 3,
      title: "Koha ILS Implementation",
      description: "Library management system with Linux System Administration.",
      tags: ["Linux", "Open Source", "System Admin"],
      highlights: "Open Source",
      links: [{ label: "GitHub", href: "#" }],
    },
    {
      id: 4,
      title: "IT Olympics Java",
      description: "Algorithm competition project showcasing competitive programming skills.",
      tags: ["Java", "Algorithms", "Competitive Programming"],
      highlights: "Runner-Up",
      links: [{ label: "GitHub", href: "#" }],
    },
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Engineering & Research</h2>
          <p className="text-foreground/70 text-lg">Showcasing breadth and academic excellence</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group rounded-xl border border-border bg-card hover:border-accent/50 hover:shadow-lg transition-all duration-300 p-6"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-primary font-semibold text-xs uppercase tracking-wider mt-2">
                    {project.highlights}
                  </p>
                </div>

                <p className="text-foreground/70 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-4">
                  {project.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-accent hover:text-accent/80 transition-colors"
                    >
                      <Github size={14} />
                      {link.label}
                      <ExternalLink size={12} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
