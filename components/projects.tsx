"use client"

import { ExternalLink, Code2 } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Serverless Notes App with Authentication",
    description:
      "A fully serverless application for creating, reading, updating, and deleting notes with secure authentication.",
    stack: ["AWS Lambda", "Python (boto3)", "Cognito", "DynamoDB", "API Gateway", "React", "Amplify"],
    features: [
      "Serverless CRUD operations",
      "Cognito authentication & authorization",
      "Amplify CI/CD deployment",
      "Real-time sync",
    ],
    thumbnail: "https://i.postimg.cc/gkQJ4qpV/Note-AWS-Diagram.png",
    blogUrl:
      "https://dev.to/siddhesmm303/building-a-serverless-notes-app-with-aws-amplify-cognito-lambda-dynamodb-api-gateway-23o1",
    githubUrl: "https://github.com/siddheshm303/Notes-AWS-Frontend",
  },
  {
    id: 2,
    title: "Full-Stack App with Automated DevOps Pipeline",
    description:
      "Complete full-stack application with automated CI/CD pipeline, multi-container orchestration, and reverse proxy routing.",
    stack: ["AWS EC2", "Docker", "Docker Compose", "PostgreSQL", "React", "Spring Boot", "GitHub Actions", "Nginx"],
    features: [
      "CI/CD pipeline with <60 sec deploys",
      "Reverse proxy routing with Nginx",
      "Multi-container orchestration",
      "Automated testing & deployment",
    ],
    thumbnail: "https://i.postimg.cc/WzQvm8Zd/CI-CD.png",
    blogUrl:
      "https://medium.com/@siddheshm303/mastering-devops-deploying-a-full-stack-app-on-aws-with-docker-and-github-ci-cd-319a26bc2078",
    githubUrl: "https://github.com/siddheshm303/courses-backend-iitb",
  },
  {
    id: 3,
    title: "AWS Cloud Cost Optimizer",
    description:
      "Automated tool for optimizing AWS cloud costs by identifying and removing stale resources with least-privilege IAM policies.",
    stack: ["AWS Lambda", "boto3", "EventBridge", "IAM", "EC2", "EBS", "Python"],
    features: [
      "Automated EBS snapshot deletion",
      "Least-privilege IAM policies",
      "Weekly scheduled cleanup",
      "Cost analysis reports",
    ],
    thumbnail: "https://i.postimg.cc/jjXRVypn/AWS-Cost-Optimization.jpg",
    blogUrl: "https://devops-project1.hashnode.dev/automating-aws-cost-optimization-with-lambda",
    githubUrl: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-card/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-600 rounded-full" />
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-effect rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <a
                    href={project.blogUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full group"
                  >
                    <img
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <ExternalLink className="w-8 h-8 text-white" />
                    </div>
                  </a>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">Key Features</h4>
                      <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <span className="text-primary mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-sm uppercase tracking-wide text-primary mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 flex-wrap">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <Code2 className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    <a
                      href={project.blogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-all duration-300 ${
                        !project.githubUrl ? "md:flex-none md:flex-1" : ""
                      }`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Read Blog
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
