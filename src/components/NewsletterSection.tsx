"use client"

import * as motion from "motion/react-client"
import { Button } from "./ui/button"
import { Mail, ArrowRight } from "lucide-react"

const NewsletterSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-r from-primary/10 via-transparent to-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Stay in the Loop
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get notified when we publish new insights. No spam, just thoughtful content delivered to your inbox.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 backdrop-blur-xs border border-border/50 rounded-2xl p-8 md:p-12"
        >
          <form className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full pl-12 pr-4 py-3 rounded-lg bg-background border border-border/50 focus:border-primary focus:outline-none transition-colors duration-300 text-foreground placeholder:text-muted-foreground"
              />
            </div>
            <Button className="group sm:w-auto">
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm text-muted-foreground text-center"
          >
            We respect your privacy. Unsubscribe at any time. For details, see our{" "}
            <a href="#" className="text-primary hover:underline transition-colors duration-300">
              Privacy Policy
            </a>
            .
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default NewsletterSection
