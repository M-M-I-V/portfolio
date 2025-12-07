"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Check } from "lucide-react"
import { useState } from "react"

export default function Footer() {
  const [copied, setCopied] = useState(false)
  const email = "neiljaylacandazo@gmail.com"

  const copyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* CTA Section */}
        <div className="mb-16">
          <div className="max-w-3xl space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Ready to build scalable solutions?
              </h2>
              <p className="text-foreground/70 text-lg">
                Let's collaborate to create innovative products that make a difference.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={copyEmail} className="gap-2">
                {copied ? (
                  <>
                    <Check size={20} />
                    Email Copied!
                  </>
                ) : (
                  <>
                    <Mail size={20} />
                    Copy Email
                  </>
                )}
              </Button>
              <Link href="https://www.linkedin.com/in/neil-jay-lacandazo-644ba91b8/" target="_blank">
                <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto bg-transparent">
                  <Linkedin size={20} />
                  Connect on LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-border pt-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/M-M-I-V"
                    target="_blank"
                    className="text-foreground/70 hover:text-foreground transition-colors inline-flex gap-2 items-center"
                  >
                    <Github size={16} />
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/neil-jay-lacandazo-644ba91b8/"
                    target="_blank"
                    className="text-foreground/70 hover:text-foreground transition-colors inline-flex gap-2 items-center"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.datacamp.com/portfolio/njlacandazomcst"
                    target="_blank"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    DataCamp Profile
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Projects</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/M-M-I-V/clinic-frontend"
                    target="_blank"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    MCST eClinic
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/M-M-I-V/data-warehousing"
                    target="_blank"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    Data Warehouse
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://mcst.edu.ph"
                    target="_blank"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    MCST Website
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Tech Stack</h3>
              <p className="text-foreground/70 text-sm">Built with Next.js, React, Tailwind CSS & Shadcn UI.</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">© {currentYear} Neil Jay Lacandazo. All rights reserved.</p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/M-M-I-V"
                target="_blank"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Github size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/neil-jay-lacandazo-644ba91b8/"
                target="_blank"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
