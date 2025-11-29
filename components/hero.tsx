"use client"

import { useState, useEffect } from "react"
import { Download, ExternalLink, Linkedin, Github, Twitter } from "lucide-react"

const roles = [
  "Cloud Engineer",
  "Junior DevOps Engineer",
  "Cloud Support Engineer",
  "System Administrator",
  "IT Infrastructure Engineer",
]

export default function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.slice(0, displayedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRoleIndex])

  const handleResumeClick = () => {
    window.open("https://drive.google.com/drive/folders/1lcnzkSOCZLDlJPKB-9gK7ziTo7wt92Zs?usp=sharing", "_blank")
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <div className="animate-fade-in-up opacity-0 delay-100 mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Open to Opportunities
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Siddhesh Mulik
            </span>
          </h1>

          <p className="text-xl sm:text-2xl mb-6 text-muted-foreground min-h-8">
            <span className="font-semibold text-foreground">{displayedText}</span>
            <span className="ml-1 animate-blink">|</span>
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Fresher pursuing MSc IT, specializing in Cloud Computing. Experienced with AWS, Azure, GCP, DevOps tools,
            and MERN stack development. Looking for Cloud & DevOps opportunities.
          </p>

          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://www.linkedin.com/in/siddhesh-mulik/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap bg-foreground text-background px-2 py-1 rounded">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/siddheshm303"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
              <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap bg-foreground text-background px-2 py-1 rounded">
                GitHub
              </span>
            </a>
            <a
              href="https://x.com/Siddhesh81239"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
              <span className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs whitespace-nowrap bg-foreground text-background px-2 py-1 rounded">
                Twitter
              </span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 glow-effect"
            >
              View My Projects
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
            <button
              onClick={handleResumeClick}
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300"
            >
              Download Resume
              <Download className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  )
}
