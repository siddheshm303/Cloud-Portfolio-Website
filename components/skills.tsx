"use client"

import { Cloud, Server, Code, Network } from "lucide-react"

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP"],
  },
  {
    title: "DevOps Tools",
    icon: Server,
    skills: ["Docker", "GitHub Actions", "CI/CD"],
  },
  {
    title: "Operating Systems",
    icon: Network,
    skills: ["Linux", "Windows Server"],
  },
  {
    title: "Networking",
    icon: Network,
    skills: ["VPC", "Security Groups", "Load Balancing"],
  },
  {
    title: "Full Stack Development",
    icon: Code,
    skills: ["React", "Node.js", "MongoDB", "PostgreSQL"],
  },
  {
    title: "AWS Services",
    icon: Cloud,
    skills: ["Lambda", "EC2", "S3", "RDS", "DynamoDB", "Cognito"],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="group glass-effect p-8 rounded-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-primary/5 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium hover:bg-primary/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
