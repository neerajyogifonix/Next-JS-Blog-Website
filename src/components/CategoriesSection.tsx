"use client"

import { categories } from "@/lib/data"
import * as motion from "motion/react-client"
import { Card, CardContent, CardHeader } from "./ui/card"

const CategoriesSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Explore Categories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover topics that inspire and inform our collective understanding.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {categories.map((category, index) => (
            <motion.div key={index} variants={item}>
              <Card className="group cursor-pointer border-0 bg-card/50 backdrop-blur-xs hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="text-primary"
                      dangerouslySetInnerHTML={{ __html: category.icon }}
                    ></div>
                    <span className="text-sm font-semibold text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    Explore {category.count} articles in this category
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CategoriesSection
