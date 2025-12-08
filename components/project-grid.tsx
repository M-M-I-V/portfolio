import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { FolderIcon } from "./folder-icon"

export default function ProjectGrid() {
  const secondaryProjects = [
    {
      title: "Breast Cancer Classification",
      role: "Team Lead & ML Engineer",
      desc: "Logistic Regression model achieving 98.25% accuracy in classifying benign vs malignant tumors.",
      tags: ["Machine Learning", "Scikit-Learn"],
    },
    {
      title: "SafeZone AI",
      role: "Project Manager & ML Engineer",
      desc: "3rd Place Hackathon Winner. Computer vision system for real-time PPE detection.",
      tags: ["Computer Vision", "Hackathon"],
    },
    {
      title: "Koha ILS Implementation",
      role: "SysAdmin",
      desc: "Deployed open-source library system on Linux Ubuntu. Managed network config and backups.",
      tags: ["Linux", "Open Source"],
    },
    {
      title: "IT Olympics - Java",
      role: "Participant",
      desc: "Competitive programming award demonstrating strong algorithmic problem solving.",
      tags: ["Java", "Algorithms"],
    },
  ]

  return (
    <section className="py-12 bg-gray-50 dark:bg-zinc-900 border-t border-gray-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-slate-200 mb-12">Engineering & Research</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {secondaryProjects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6 border border-gray-100 dark:border-zinc-700 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                  {project.role}
                </span>
                <FolderIcon type={project.tags[0]} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-slate-200 mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-slate-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}