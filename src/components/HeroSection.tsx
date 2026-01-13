"use client"

import * as motion from "motion/react-client"
import { Button } from "./ui/button"
import { ArrowRight, Sparkles, Code2, Palette } from "lucide-react"

const HeroSection = () => {
  return (
    <section className='relative min-h-[95vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20'>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              y: [0, 30, 0],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-l from-primary/15 to-accent/15 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Content */}
                <motion.div 
                initial={{
                    opacity: 0, 
                    y: 30
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut"
                }}
                className="text-center lg:text-left space-y-8"
                >
                    {/* Badge */}
                    <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary w-fit mx-auto lg:mx-0"
                    >
                        <Sparkles className="h-4 w-4" />
                        Welcome to Resonance
                    </motion.div>

                    <div>
                        <h1 className='text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent'>
                            Writing That <span className="text-primary italic">Resonates</span>
                        </h1>
                        <p className="font-sans text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                            Dive into insights on tech, design, and creativity. Thoughtful stories from a digital craftsman exploring the intersection of code and creativity.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        duration: 0.8,
                        delay: 0.3
                    }}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                    >
                        <Button size="lg" className="group bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300">
                            Read Latest Post 
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <Button size="lg" variant="outline" className="group hover:bg-primary/5 transition-all duration-300">
                            Explore Topics
                            <Code2 className="ml-2 h-4 w-4" />
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="grid grid-cols-3 gap-6 pt-8 lg:pt-4"
                    >
                        <div className="text-center lg:text-left">
                            <div className="text-3xl font-bold text-primary">100+</div>
                            <div className="text-sm text-muted-foreground">Articles</div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-3xl font-bold text-primary">50K+</div>
                            <div className="text-sm text-muted-foreground">Readers</div>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="text-3xl font-bold text-primary">15+</div>
                            <div className="text-sm text-muted-foreground">Topics</div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Content - Enhanced Visual */}
                <motion.div 
                initial={{
                    opacity: 0,
                    scale: 0.8,
                    rotateY: -20
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    rotateY: 0
                }}
                transition={{
                    duration: 0.9,
                    delay: 0.3,
                    ease: "easeOut"
                }}
                className="hidden lg:flex items-center justify-center perspective"
                >
                    <div className="relative w-full aspect-square max-w-lg">
                        {/* Gradient Background Orbs */}
                        <motion.div 
                            animate={{ 
                                y: [0, -30, 0],
                                rotate: [0, 10, 0]
                            }}
                            transition={{ duration: 6, repeat: Infinity }}
                            className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 rounded-3xl blur-2xl"
                        />
                        
                        {/* Card Container */}
                        <motion.div 
                            animate={{ 
                                y: [0, -20, 0],
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute inset-0 flex items-center justify-center p-8"
                        >
                            <div className="bg-background/60 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-primary/30 w-full h-full flex flex-col justify-center items-center space-y-8">
                                
                                {/* Main Stats Card */}
                                <div className="text-center space-y-3">
                                    <motion.div 
                                        animate={{ scale: [1, 1.1, 1] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="text-7xl font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent"
                                    >
                                        100+
                                    </motion.div>
                                    <div className="text-2xl font-serif font-semibold text-foreground">Inspiring Articles</div>
                                </div>

                                {/* Feature Icons */}
                                <div className="flex gap-6 justify-center">
                                    <motion.div 
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0.2 }}
                                        className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-primary/10 border border-primary/20"
                                    >
                                        <Code2 className="h-6 w-6 text-primary" />
                                        <span className="text-xs font-medium text-foreground">Tech</span>
                                    </motion.div>
                                    <motion.div 
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0.4 }}
                                        className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-secondary/10 border border-secondary/20"
                                    >
                                        <Palette className="h-6 w-6 text-secondary" />
                                        <span className="text-xs font-medium text-foreground">Design</span>
                                    </motion.div>
                                    <motion.div 
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
                                        className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-accent/10 border border-accent/20"
                                    >
                                        <Sparkles className="h-6 w-6 text-accent" />
                                        <span className="text-xs font-medium text-foreground">Ideas</span>
                                    </motion.div>
                                </div>

                                {/* Divider */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

                                {/* Stat Breakdown */}
                                <div className="w-full grid grid-cols-2 gap-4">
                                    <div className="text-center p-3 rounded-xl bg-primary/5">
                                        <div className="text-2xl font-bold text-primary">50K+</div>
                                        <div className="text-xs text-muted-foreground">Engaged Readers</div>
                                    </div>
                                    <div className="text-center p-3 rounded-xl bg-secondary/5">
                                        <div className="text-2xl font-bold text-secondary">15+</div>
                                        <div className="text-xs text-muted-foreground">Topics Covered</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
  )
}

export default HeroSection