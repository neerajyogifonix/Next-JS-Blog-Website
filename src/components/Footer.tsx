"use client"

import { navItems } from "@/lib/constants"
import Link from "next/link"
import * as motion from "motion/react-client"
import { Github, Linkedin, Twitter, Heart } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socials = [
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com",
    },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-background via-background/80 to-muted/50 border-t border-primary/10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-primary/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-12 mb-12"
        >
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h3 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Resonance
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thoughtful insights on technology, design, and creativity. Exploring the intersection of code and human experience.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="font-serif font-semibold text-foreground mb-4 text-lg">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Resources */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="font-serif font-semibold text-foreground mb-4 text-lg">
              Resources
            </h4>
            <nav className="flex flex-col space-y-3">
              {[
                { name: "Blog", href: "#" },
                { name: "Archive", href: "#" },
                { name: "RSS Feed", href: "#" },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </a>
                </motion.div>
              ))}
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <h4 className="font-serif font-semibold text-foreground mb-4 text-lg">
              Connect
            </h4>
            <div className="flex gap-4">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ 
                      scale: 1.2,
                      backgroundColor: "var(--primary)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 rounded-lg bg-primary/10 text-muted-foreground hover:text-primary-foreground transition-all duration-300 border border-primary/20 hover:border-primary"
                    title={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-gradient-to-r from-transparent via-primary/50 to-transparent mb-8" 
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground"
        >
          <p className="flex items-center gap-2">
            © {currentYear} Resonance. Made with <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}><Heart className="h-4 w-4 text-primary" /></motion.span>
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            {[
              { name: "Privacy Policy", href: "#" },
              { name: "Terms of Service", href: "#" },
              { name: "Sitemap", href: "#" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ color: "var(--primary)" }}
                className="hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
