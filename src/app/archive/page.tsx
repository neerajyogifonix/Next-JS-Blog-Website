import * as motion from "motion/react-client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Archive as ArchiveIcon, TrendingUp } from "lucide-react"
import Link from "next/link"

export const forceStatic = true

export const metadata = {
  title: "Archive - Resonance",
  description: "Browse our complete archive of articles organized by date",
}

const archiveData = [
  {
    year: 2025,
    months: [
      {
        name: "December",
        posts: [
          { title: "The Future of Web Development", date: "Dec 15", category: "Technology", readTime: "8 min" },
          { title: "Mastering Modern Design Systems", date: "Dec 10", category: "Design", readTime: "12 min" },
          { title: "AI in Creative Workflows", date: "Dec 5", category: "Innovation", readTime: "10 min" },
        ],
      },
      {
        name: "November",
        posts: [
          { title: "Building Accessible Web Applications", date: "Nov 28", category: "Development", readTime: "15 min" },
          { title: "The Art of Minimalist UI", date: "Nov 20", category: "Design", readTime: "7 min" },
          { title: "Performance Optimization Techniques", date: "Nov 15", category: "Technology", readTime: "11 min" },
          { title: "Understanding Web Components", date: "Nov 8", category: "Development", readTime: "9 min" },
        ],
      },
      {
        name: "October",
        posts: [
          { title: "Responsive Design in 2025", date: "Oct 25", category: "Design", readTime: "10 min" },
          { title: "State Management Patterns", date: "Oct 18", category: "Development", readTime: "13 min" },
          { title: "CSS Grid vs Flexbox", date: "Oct 10", category: "CSS", readTime: "8 min" },
          { title: "JAMstack Architecture Guide", date: "Oct 5", category: "Architecture", readTime: "12 min" },
        ],
      },
    ],
  },
  {
    year: 2024,
    months: [
      {
        name: "December",
        posts: [
          { title: "Year in Review: Tech Trends 2024", date: "Dec 20", category: "Review", readTime: "15 min" },
          { title: "Advanced React Patterns", date: "Dec 12", category: "React", readTime: "14 min" },
        ],
      },
      {
        name: "November",
        posts: [
          { title: "TypeScript Best Practices", date: "Nov 25", category: "TypeScript", readTime: "10 min" },
          { title: "Modern Authentication Methods", date: "Nov 18", category: "Security", readTime: "11 min" },
          { title: "Building Design Tokens", date: "Nov 5", category: "Design", readTime: "9 min" },
        ],
      },
    ],
  },
]

const popularTags = [
  "React", "TypeScript", "Design", "Performance", "Accessibility", 
  "CSS", "JavaScript", "UI/UX", "Architecture", "Testing"
]

export default function ArchivePage() {
  const totalPosts = archiveData.reduce(
    (acc, year) => acc + year.months.reduce((sum, month) => sum + month.posts.length, 0),
    0
  )

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
              <ArchiveIcon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
              Article Archive
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Browse our complete collection of {totalPosts} articles organized by date.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Archive Content */}
          <div className="lg:col-span-3">
            {archiveData.map((yearData, yearIndex) => (
              <motion.div
                key={yearData.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: yearIndex * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-4xl font-serif font-bold text-foreground mb-8 flex items-center gap-3">
                  {yearData.year}
                  <Badge variant="outline" className="text-base">
                    {yearData.months.reduce((sum, month) => sum + month.posts.length, 0)} posts
                  </Badge>
                </h2>

                {yearData.months.map((month, monthIndex) => (
                  <div key={month.name} className="mb-8">
                    <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                      {month.name}
                    </h3>
                    <div className="space-y-3">
                      {month.posts.map((post, postIndex) => (
                        <Card
                          key={postIndex}
                          className="hover:shadow-md transition-shadow duration-300 group cursor-pointer"
                        >
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                                  {post.title}
                                </h4>
                                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    <span>{post.date}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{post.readTime}</span>
                                  </div>
                                  <Badge variant="secondary" className="text-xs">
                                    {post.category}
                                  </Badge>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Popular Tags */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    Popular Tags
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Archive Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-foreground">{totalPosts}</div>
                    <div className="text-sm text-muted-foreground">Total Articles</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">
                      {archiveData.reduce((acc, year) => acc + year.months.length, 0)}
                    </div>
                    <div className="text-sm text-muted-foreground">Months Active</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-foreground">{archiveData.length}</div>
                    <div className="text-sm text-muted-foreground">Years Publishing</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
