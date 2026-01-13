import { featuredPosts } from '@/lib/data'
import * as motion from "motion/react-client"
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

const FeaturedSection = () => {
    const posts = featuredPosts;
    
  return (
    <section className='relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden'>
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-secondary/20 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6
        }}
        viewport={{ once: true }}
        className='text-center mb-20'>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-sm font-medium text-secondary mb-6"
          >
            <Sparkles className="h-4 w-4" />
            Featured Stories
          </motion.div>
          <h2 className='text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 leading-tight'>
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className='text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed'>
            Curated thoughts and discoveries from the intersections of technology, design, and human experience.
          </p>
        </motion.div>

        {/* Posts Grid */}
        <div className='grid md:grid-cols-2 gap-8 lg:gap-10'>
          {posts.map((post, index) => 
          <motion.div key={index}
          initial={{
            opacity: 0,
            y: 30,
            scale: 0.95
          }}
          whileInView={{
            opacity: 1, 
            y: 0,
            scale: 1
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.15
          }}
          viewport={{ once: true }}
          className="h-full"
          >
            <Card className='group cursor-pointer overflow-hidden hover:shadow-2xl transition-all duration-300 border border-primary/10 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm hover:border-primary/30 h-full flex flex-col'>
              {/* Image Container */}
              <CardHeader className='p-0 relative overflow-hidden'>
                <div className='relative h-56 overflow-hidden'>
                  <motion.img 
                    src={post.image} 
                    alt={post.title} 
                    className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                  />
                  <motion.div 
                    className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent'
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className='absolute top-4 left-4 z-10'>
                    <Badge variant="secondary" className='bg-background/90 backdrop-blur-md border border-white/20 hover:bg-primary/90 transition-all duration-300'>{post.category}</Badge>
                  </div>
                </div>
              </CardHeader>

              {/* Content Container */}
              <CardContent className='flex-1 flex flex-col p-6'>
                {/* Meta Info */}
                <div className='flex items-center text-sm text-muted-foreground mb-4 gap-2'>
                  <Calendar className='h-4 w-4 text-primary'/>
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className='text-2xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2'>
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className='text-muted-foreground mb-6 flex-1 leading-relaxed line-clamp-3'>
                  {post.excerpt}
                </p>

                {/* CTA */}
                <motion.div 
                  className='flex gap-2 items-center text-primary font-medium group/cta'
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span>Read more</span>
                  <motion.div
                    animate={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className='h-4 w-4' />
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeaturedSection