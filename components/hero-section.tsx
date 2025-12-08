"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-slate-200 tracking-tight leading-tight">
                  Bridging Full-Stack Dev, <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-700 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Data Engineering</span> & ML.
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-gray-600 dark:text-slate-400 max-w-lg">
                  Junior IS Student & Associate Data Engineer. Building production-grade digital infrastructure for Mandaluyong College of Science and Technology.
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" onClick={() => scrollToSection("work")} className="gap-2">
                View My Work
                <ArrowRight size={20} />
              </Button>
              <Link href="https://github.com/M-M-I-V" target="_blank">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-transparent">
                  <Github size={20} />
                  GitHub Profile
                </Button>
              </Link>
            </div>

            {/* Certification Badge */}
            <div className="inline-block">
              <div className="bg-accent/10 border border-accent/20 rounded-full px-4 py-2 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm font-medium text-foreground">DataCamp Certified</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:flex justify-center items-center">
            <div className="relative w-lg h-128 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <Image
                src="/profile.jpg"
                alt="Neil Jay Lacandazo - Full-Stack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}