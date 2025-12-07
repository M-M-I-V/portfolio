"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Moon, Sun } from "lucide-react"
import { useTheme } from "@/hooks/use-theme"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme, mounted } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "border-b border-border bg-background/95 backdrop-blur-sm" : "bg-background"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/" className="font-bold text-xl text-foreground">
              NeilJayLacandazo<span className="text-primary">.dev</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("work")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Work
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              Experience
            </button>
          </nav>

          {/* Actions */}
          <div className="shrink-0 flex items-center gap-2">
            {mounted && (
              <Button variant="ghost" size="sm" onClick={toggleTheme} className="gap-2" aria-label="Toggle theme">
                {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
              </Button>
            )}
            <a href="/resume.pdf" download>
              <Button variant="default" size="sm" className="gap-2">
                <Download size={16} />
                <span className="hidden sm:inline">Resume</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
