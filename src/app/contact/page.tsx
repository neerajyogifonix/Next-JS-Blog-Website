import * as motion from "motion/react-client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export const forceStatic = true

export const metadata = {
  title: "Contact - Resonance",
  description: "Get in touch with us",
}

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "hello@resonance.com",
      href: "mailto:hello@resonance.com",
    },
    {
      icon: Phone,
      title: "Phone",
      description: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      description: "San Francisco, California",
      href: "#",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 leading-tight">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a question or want to collaborate? We'd love to hear from you. Reach out and
              let's start a conversation.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 bg-card/50 backdrop-blur-xs">
                <CardContent className="pt-8">
                  <form className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="What's this about?"
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        placeholder="Your message here..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder:text-muted-foreground resize-none"
                      ></textarea>
                    </div>

                    <Button className="w-full group">
                      Send Message
                      <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                  Other Ways to Connect
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Prefer a different way to get in touch? You can also reach us through these channels.
                </p>
              </div>

              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <motion.a
                    key={index}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-card/50 transition-colors duration-300 group cursor-pointer"
                  >
                    <div className="mt-1">
                      <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-foreground mb-1">
                        {method.title}
                      </h3>
                      <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {method.description}
                      </p>
                    </div>
                  </motion.a>
                )
              })}

              {/* Social Links */}
              <div className="pt-8 border-t border-border/50">
                <h3 className="font-serif font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <p className="text-muted-foreground mb-4">
                  Stay updated with our latest posts and insights on social media.
                </p>
                <div className="flex gap-4">
                  {["Twitter", "LinkedIn", "GitHub"].map((social, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-lg bg-card/50 hover:bg-card transition-colors duration-300 text-sm font-medium text-foreground"
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* FAQ Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-serif font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "How do you handle collaboration inquiries?",
                  a: "We review all partnership opportunities and get back within 5-7 business days with our thoughts.",
                },
                {
                  q: "Can I submit guest posts?",
                  a: "Yes! We welcome thoughtful guest contributions. Please send your pitch with a brief outline.",
                },
                {
                  q: "How often do you publish new content?",
                  a: "We publish new insights 2-3 times per week across various topics.",
                },
                {
                  q: "Do you offer consulting services?",
                  a: "We're available for select consulting projects. Reach out with details about your needs.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card/50 backdrop-blur-xs border border-border/50 rounded-lg p-6"
                >
                  <h3 className="font-serif font-semibold text-foreground mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
