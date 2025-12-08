import { FolderOpen, Brain, Server, Code } from "lucide-react"

export function FolderIcon({ type }: { type: string }) {
  const iconProps = { size: 20, className: "text-blue-600 dark:text-blue-400" }

  switch (type) {
    case "Machine Learning":
      return <Brain {...iconProps} />
    case "Computer Vision":
      return <Brain {...iconProps} />
    case "Linux":
      return <Server {...iconProps} />
    case "Java":
      return <Code {...iconProps} />
    default:
      return <FolderOpen {...iconProps} />
  }
}