export default function ExperienceTimeline() {
  const experiences = [
    {
      year: "2025 - Present",
      title: "Multiple Roles",
      items: [
        "Second Runner-Up (Project Manager & ML Engineer) @ PMAX-EMAX Hackathon",
        "Team Lead & ML Engineer @ Classifying Malignant and Benign Breast Tumors",
        "Project Manager & ETL Engineer @ Healthcare Patient Outcome Data Warehouse",
        "Team Lead & Full-Stack Developer @ Patient Record Management System",
      ],
    },
    {
      year: "2024",
      title: "Development & Certification",
      items: [
        "Student Developer (Lead Implementer @ MCST Official Website)",
        "DataCamp Certification (Associate Data Engineer)",
        "Participant @ IT Olympics",
      ],
    },
    {
      year: "2023",
      title: "Education & Leadership",
      items: ["Enrolled in B.S. Information Systems @ MCST", "Auditor @ Association of Information Systems Students"],
    },
  ]

  return (
    <section id="experience" className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Experience Timeline</h2>
          <p className="text-foreground/70 text-lg">Professional progression and leadership roles</p>
        </div>

        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-accent to-primary/50 rounded-full"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="pl-8 md:pl-24 relative">
              {/* Timeline node */}
              <div className="absolute left-0 md:-left-4 top-2 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">{exp.year}</h3>
                <h4 className="text-lg font-semibold text-primary">{exp.title}</h4>
                <ul className="space-y-2 mt-4">
                  {exp.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-foreground/80 flex gap-3">
                      <span className="text-accent font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
