import * as motion from "motion/react-client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Award, Sparkles } from "lucide-react"
import Link from "next/link"

export const forceStatic = true

export const metadata = {
  title: "Projects - Resonance",
  description: "Explore our portfolio of creative projects and experiments",
}

const projects = [
  {
    id: 1,
    title: "Quantum UI Framework",
    description: "A next-generation UI framework built with performance and accessibility at its core. Features advanced animation capabilities and dark mode support.",
    tags: ["React", "TypeScript", "Tailwind"],
    featured: true,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Neural Design System",
    description: "An AI-powered design system that adapts to user preferences and generates consistent UI components automatically.",
    tags: ["AI", "Design", "Figma"],
    featured: true,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Code Canvas",
    description: "Interactive code playground with real-time collaboration features. Built for modern web developers.",
    tags: ["Next.js", "WebSockets", "Monaco"],
    featured: false,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Pixel Perfect",
    description: "A Chrome extension that helps developers achieve pixel-perfect designs by overlaying design mockups.",
    tags: ["Chrome API", "JavaScript", "CSS"],
    featured: false,
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Markdown Pro",
    description: "Advanced markdown editor with live preview, syntax highlighting, and export capabilities.",
    tags: ["React", "Markdown", "CodeMirror"],
    featured: false,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Data Visualizer",
    description: "Beautiful and interactive data visualization library for modern web applications.",
    tags: ["D3.js", "SVG", "Canvas"],
    featured: false,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    demoUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
              Our Projects
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of creative experiments, open-source contributions, and innovative solutions we've built.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-serif font-bold text-foreground">Featured Projects</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 right-4 gap-1">
                      <Award className="h-3 w-3" />
                      Featured
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif">{project.title}</CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button variant="default" size="sm" className="gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Github className="h-4 w-4" />
                        View Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8">More Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="gap-1 flex-1">
                        <ExternalLink className="h-3 w-3" />
                        Demo
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-1 flex-1">
                        <Github className="h-3 w-3" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
