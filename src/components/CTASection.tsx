"use client"

import * as motion from "motion/react-client"
import { Button } from "./ui/button"
import { ArrowRight, Mail, Github } from "lucide-react"

const CTASection = () => {
  return (
    <section className='relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ 
            y: [0, -30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-l from-primary/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 12, repeat: Infinity, delay: 2 }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-secondary/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/10 via-secondary/10 to-transparent border border-primary/30 rounded-3xl p-12 md:p-16 text-center shadow-2xl"
        >
          {/* Heading */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-tight"
          >
            Ready to <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">Explore More?</span>
          </motion.h2>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Subscribe to get the latest articles delivered to your inbox, or follow along on social media for daily insights and updates.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/40">
                Subscribe Now
                <Mail className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" variant="outline" className="group">
                Follow on GitHub
                <Github className="ml-2 h-4 w-4 transition-transform group-hover:rotate-12" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-primary/20"
          >
            <div>
              <div className="text-2xl font-bold text-primary">2.5K</div>
              <div className="text-sm text-muted-foreground">Subscribers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-secondary">1K+</div>
              <div className="text-sm text-muted-foreground">Monthly Readers</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent">Weekly</div>
              <div className="text-sm text-muted-foreground">New Content</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
