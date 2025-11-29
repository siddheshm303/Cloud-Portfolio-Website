"use client"

import Link from "next/link"
import { Moon, Sun } from "lucide-react"

interface FooterProps {
  isDark: boolean
  onToggleTheme: () => void
}

export default function Footer({ isDark, onToggleTheme }: FooterProps) {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            >
              Siddhesh.
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Cloud & DevOps Engineer | Building scalable cloud infrastructure
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Theme Toggle */}
          <div className="flex items-center justify-between md:justify-end gap-4">
            <p className="text-sm text-muted-foreground">Theme</p>
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-border hover:bg-border/80 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© {currentYear} Siddhesh Mulik. All rights reserved.</p>
            <p className="text-sm text-muted-foreground">Designed & Built with ❤️ for cloud enthusiasts</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
