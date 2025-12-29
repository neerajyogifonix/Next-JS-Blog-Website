import * as motion from "motion/react-client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Lightbulb, Palette, Zap } from "lucide-react"

export const forceStatic = true

export const metadata = {
  title: "About - Resonance",
  description: "Learn more about Resonance and its creator",
}

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Thoughtful",
      description: "Every piece is carefully crafted to provide genuine value and insight.",
    },
    {
      icon: Palette,
      title: "Creative",
      description: "We celebrate innovation and the intersection of design and technology.",
    },
    {
      icon: Zap,
      title: "Impactful",
      description: "Our goal is to inspire action and create lasting impressions.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
              About Resonance
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A space dedicated to thoughtful writing about technology, design, and the creative process.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-serif font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                Resonance is a modern blog dedicated to exploring the intersection of technology,
                design, and human creativity. We believe that thoughtful storytelling can inspire
                innovation and foster meaningful conversations.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our mission is to share insights, discoveries, and reflections that help you think
                differently about the digital world and your place within it. Whether you're a
                designer, developer, entrepreneur, or creative thinker, we hope you'll find
                something here that resonates with you.
              </p>
              <Button className="group">
                Explore Our Content
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="w-80 h-80 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl absolute -top-10 -right-10" />
              <div className="w-96 h-96 bg-linear-to-tl from-secondary/30 to-primary/30 rounded-2xl transform -rotate-6 shadow-2xl flex items-center justify-center">
                <div className="text-center text-foreground">
                  <Lightbulb className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="font-serif text-lg font-semibold">
                    Inspiring thoughtful writing
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12">
              Our Core Values
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="border-0 bg-card/50 backdrop-blur-xs hover:shadow-lg transition-all duration-300">
                      <CardContent className="pt-8">
                        <Icon className="h-12 w-12 text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {value.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-card/50 backdrop-blur-xs border border-border/50 rounded-2xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-6 text-center">
              Meet the Creator
            </h2>
            <div className="max-w-2xl mx-auto">
              <div className="w-32 h-32 bg-linear-to-br from-primary/20 to-secondary/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Palette className="h-16 w-16 text-primary opacity-50" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-2">
                Digital Craftsman
              </h3>
              <p className="text-center text-muted-foreground mb-4">
                A designer and developer passionate about creating meaningful digital experiences
                and sharing knowledge with the community.
              </p>
              <p className="text-center text-muted-foreground">
                When not writing or designing, you can find them exploring new technologies,
                sketching ideas, or enjoying a good cup of coffee.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
