"use client"

import { GraduationCap, Zap, Code } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Bio */}
          <div className="animate-slide-in-left">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Hi, I'm Siddhesh! I'm a fresher completing my Cloud Computing specialization with hands-on experience in
              AWS, Azure, and GCP. I'm passionate about building scalable infrastructure and automating cloud workflows.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              My journey in cloud computing has equipped me with practical skills in DevOps tools, containerization,
              CI/CD pipelines, and full-stack development. I'm actively seeking entry-level Cloud and DevOps roles to
              contribute my technical expertise and grow professionally.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Education</h3>
                  <p className="text-muted-foreground">MSc IT - Pursuing (Expected 2026)</p>
                  <p className="text-muted-foreground text-sm">Specialization: Cloud Computing</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <GraduationCap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Previous Degree</h3>
                  <p className="text-muted-foreground">BSc IT - Completed 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Traits */}
          <div className="space-y-4 animate-slide-in-right">
            <div className="glass-effect p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Quick Learner</h3>
              </div>
              <p className="text-muted-foreground">
                Rapidly adapt to new technologies and cloud platforms, picking up new tools and frameworks efficiently.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-2">
                <Code className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Automation Enthusiast</h3>
              </div>
              <p className="text-muted-foreground">
                Strong interest in cloud automation, CI/CD pipelines, and infrastructure as code to streamline
                workflows.
              </p>
            </div>

            <div className="glass-effect p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="font-semibold text-lg">Hands-on Experience</h3>
              </div>
              <p className="text-muted-foreground">
                Built multiple projects on AWS, Azure, and GCP, gaining practical experience in real-world cloud
                scenarios.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
