"use client"

import { quotes } from "@/lib/data"
import * as motion from "motion/react-client"
import { Quote } from "lucide-react"
import { useEffect, useState } from "react"

const QuotesSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToQuote = (index: number) => {
    setCurrentQuote(index)
    setAutoPlay(false)
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Inspiring Words
          </h2>
          <p className="text-lg text-muted-foreground">
            Wisdom from great minds to fuel your creativity and innovation.
          </p>
        </motion.div>

        <motion.div
          key={currentQuote}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-card/50 backdrop-blur-xs border border-border/50 rounded-2xl p-8 md:p-12 mb-8 relative overflow-hidden"
        >
          <div className="absolute top-4 right-4 opacity-10">
            <Quote className="w-16 h-16" />
          </div>

          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-serif italic text-foreground mb-6">
              "{quotes[currentQuote].text}"
            </p>
            <p className="text-lg text-muted-foreground">
              — {quotes[currentQuote].author}
            </p>
          </div>
        </motion.div>

        <div className="flex justify-center gap-2">
          {quotes.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToQuote(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentQuote
                  ? "bg-primary w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex justify-center"
        >
          <button
            onClick={() => setAutoPlay(!autoPlay)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {autoPlay ? "Pause" : "Resume"} autoplay
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default QuotesSection
