import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function FeaturedProjects() {
  const projects = [
    {
      id: 1,
      title: "MCST eClinic",
      subtitle: "The Full-Stack Showpiece",
      description:
        "A secure patient management system replacing manual workflows for the college health office. Features role-based access and real-time analytics.",
      tags: ["Next.js", "React", "Tailwind CSS", "Shadcn UI", "Spring Boot", "MySQL", "HIPAA-compliant"],
      links: [
        { label: "Frontend", href: "https://github.com/M-M-I-V/clinic-frontend" },
        { label: "Backend", href: "https://github.com/M-M-I-V/clinic-backend" },
      ],
      image: "/dashboard.png",
    },
    {
      id: 2,
      title: "Healthcare Data Warehouse",
      subtitle: "The Data Engineering Showpiece",
      description:
        "Consolidated disparate hospital systems into a unified Star Schema warehouse, optimizing query performance for patient outcome analysis.",
      tags: ["Python", "Pandas", "Numpy", "SQLAlchemy", "ETL", "MySQL", "Data Modeling"],
      links: [{ label: "GitHub", href: "https://github.com/M-M-I-V/data-warehousing" }],
      image: "/erd.png",
    },
    {
      id: 3,
      title: "MCST Official Website",
      subtitle: 'The "Live" Product',
      description:
        "Lead Implementer for the college's official digital presence. Focused on accessibility, SEO, and maintainable architecture.",
      tags: ["Next.js", "React", "Tailwind CSS", "SEO", "Accessibility"],
      links: [{ label: "Visit Site", href: "https://mcst.edu.ph" }],
      image: "/mcst-website.png",
    },
  ]

  return (
    <section id="work" className="py-12 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Deployed Solutions & Major Projects</h2>
          <p className="text-foreground/70 text-lg">Separating school work from production-grade solutions</p>
        </div>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              {/* Image */}
              <div className={`rounded-xl overflow-hidden bg-muted h-full ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className={`space-y-4 ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div>
                  <p className="text-primary font-semibold text-sm uppercase tracking-wide">{project.subtitle}</p>
                  <h3 className="text-3xl font-bold text-foreground mt-2">{project.title}</h3>
                </div>

                <p className="text-foreground/70 text-lg leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 pt-4">
                  {project.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors"
                    >
                      <Github size={16} />
                      {link.label}
                      <ExternalLink size={14} />
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
