"use client";

import { navItems } from "@/lib/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeTogggle from "./ThemeTogggle";
import * as motion from "motion/react-client";

function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-background/50 backdrop-blur-xl border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with animation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <h1 className="text-2xl font-serif font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:from-secondary hover:to-primary transition-all duration-300">
              Resonance
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
              className="flex items-center space-x-1"
            >
              {navItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Link
                      className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                      }`}
                      href={item.href}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-underline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ThemeTogggle />
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
