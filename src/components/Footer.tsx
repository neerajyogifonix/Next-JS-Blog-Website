"use client"

import { navItems } from "@/lib/constants"
import Link from "next/link"
import * as motion from "motion/react-client"
import { Github, Linkedin, Twitter } from "lucide-react"

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
    <footer className="bg-muted/50 border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-serif font-bold text-foreground mb-4">
              Resonance
            </h3>
            <p className="text-sm text-muted-foreground">
              Thoughtful insights on technology, design, and creativity.
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="font-serif font-semibold text-foreground mb-4">
              Navigation
            </h4>
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div className="md:col-span-1">
            <h4 className="font-serif font-semibold text-foreground mb-4">
              Resources
            </h4>
            <nav className="flex flex-col space-y-2">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Blog
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Archive
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                RSS Feed
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h4 className="font-serif font-semibold text-foreground mb-4">
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
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    title={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-border/50 mb-8" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground"
        >
          <p>
            © {currentYear} Resonance. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors duration-300"
            >
              Sitemap
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
