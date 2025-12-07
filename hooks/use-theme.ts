"use client"

import { useEffect, useState } from "react"

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark" | "system">("system")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme") as "light" | "dark" | "system" | null
    if (stored) {
      setTheme(stored)
      applyTheme(stored)
    } else {
      // Apply system theme on first load
      applyTheme("system")
    }
  }, [])

  const applyTheme = (t: "light" | "dark" | "system") => {
    const html = document.documentElement
    let isDark = false

    if (t === "system") {
      isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    } else {
      isDark = t === "dark"
    }

    if (isDark) {
      html.classList.add("dark")
    } else {
      html.classList.remove("dark")
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    applyTheme(newTheme)
  }

  return { theme, toggleTheme, mounted }
}
