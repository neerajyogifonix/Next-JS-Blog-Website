import * as motion from "motion/react-client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Download, Video, FileText, Code, Palette, ArrowRight } from "lucide-react"
import Link from "next/link"

export const forceStatic = true

export const metadata = {
  title: "Resources - Resonance",
  description: "Free resources, tools, and guides for developers and designers",
}

const resources = [
  {
    id: 1,
    title: "Web Development Starter Kit",
    description: "A comprehensive collection of boilerplates, templates, and configuration files to kickstart your next project.",
    type: "Template",
    icon: Code,
    downloads: "12.5k",
    category: "Development",
  },
  {
    id: 2,
    title: "Design System Guide",
    description: "Complete guide to building scalable design systems with practical examples and best practices.",
    type: "eBook",
    icon: BookOpen,
    downloads: "8.2k",
    category: "Design",
  },
  {
    id: 3,
    title: "UI Animation Masterclass",
    description: "Video series covering advanced animation techniques for modern web applications.",
    type: "Video",
    icon: Video,
    downloads: "15.7k",
    category: "Design",
  },
  {
    id: 4,
    title: "TypeScript Patterns Handbook",
    description: "Essential TypeScript patterns and best practices for building robust applications.",
    type: "eBook",
    icon: FileText,
    downloads: "10.3k",
    category: "Development",
  },
  {
    id: 5,
    title: "Color Palette Generator",
    description: "Generate beautiful, accessible color palettes for your design projects.",
    type: "Tool",
    icon: Palette,
    downloads: "20.1k",
    category: "Design",
  },
  {
    id: 6,
    title: "React Performance Checklist",
    description: "A comprehensive checklist to optimize your React applications for maximum performance.",
    type: "Guide",
    icon: FileText,
    downloads: "6.9k",
    category: "Development",
  },
]

const categories = ["All", "Development", "Design", "Tools", "Guides"]

export default function ResourcesPage() {
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
              Free Resources
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Curated collection of tools, guides, and templates to accelerate your creative workflow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-foreground mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Resources</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-foreground mb-2">100k+</div>
              <div className="text-sm text-muted-foreground">Downloads</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-foreground mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Categories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-foreground mb-2">Free</div>
              <div className="text-sm text-muted-foreground">Forever</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => {
              const Icon = resource.icon
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <Badge variant="secondary">{resource.type}</Badge>
                      </div>
                      <CardTitle className="text-xl font-serif">{resource.title}</CardTitle>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Download className="h-4 w-4" />
                          <span>{resource.downloads} downloads</span>
                        </div>
                        <Button variant="ghost" size="sm" className="gap-1">
                          Download
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Want More Resources?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to get notified when we release new tools, guides, and templates.
          </p>
          <Button size="lg" className="gap-2">
            Get Notified
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
