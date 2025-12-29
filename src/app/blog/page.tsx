import * as motion from "motion/react-client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import Link from "next/link"

export const forceStatic = true

export const metadata = {
  title: "Blog - Resonance",
  description: "Explore all our articles on technology, design, and innovation",
}

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Exploring emerging trends and technologies that are shaping the future of web development in 2025 and beyond.",
    category: "Technology",
    author: "John Doe",
    date: "Dec 15, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "Mastering Modern Design Systems",
    excerpt: "A comprehensive guide to building scalable and maintainable design systems for modern applications.",
    category: "Design",
    author: "Jane Smith",
    date: "Dec 10, 2025",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
  },
  {
    id: 3,
    title: "AI in Creative Workflows",
    excerpt: "How artificial intelligence is transforming creative processes and enhancing human creativity.",
    category: "Innovation",
    author: "Mike Johnson",
    date: "Dec 5, 2025",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    id: 4,
    title: "Building Accessible Web Applications",
    excerpt: "Best practices and techniques for creating inclusive web experiences that work for everyone.",
    category: "Development",
    author: "Sarah Williams",
    date: "Nov 28, 2025",
    readTime: "15 min read",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
  },
  {
    id: 5,
    title: "The Art of Minimalist UI",
    excerpt: "Understanding the principles of minimalist design and how to apply them effectively.",
    category: "Design",
    author: "Emma Davis",
    date: "Nov 20, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
  },
  {
    id: 6,
    title: "Performance Optimization Techniques",
    excerpt: "Deep dive into modern techniques for optimizing web application performance.",
    category: "Technology",
    author: "Alex Chen",
    date: "Nov 15, 2025",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  },
]

export default function BlogPage() {
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
              All Articles
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Dive into our collection of in-depth articles covering technology, design, and creative innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4">{post.category}</Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-serif group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription>{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{post.date}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1">
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Never Miss an Update
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Subscribe to our newsletter for weekly insights and updates.
          </p>
          <Button size="lg" className="gap-2">
            Subscribe Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
