"use client"

import { useEffect, useState } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check system preference on mount
    if (typeof window !== "undefined") {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const savedTheme = localStorage.getItem("theme")

      if (savedTheme) {
        setIsDark(savedTheme === "dark")
      } else {
        setIsDark(prefersDark)
      }
    }
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (mounted && typeof window !== "undefined") {
      if (isDark) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    }
  }, [isDark, mounted])

  const toggleTheme = () => setIsDark(!isDark)

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer isDark={isDark} onToggleTheme={toggleTheme} />
    </div>
  )
}
