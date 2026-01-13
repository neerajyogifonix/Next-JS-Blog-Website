import FeaturedSection from '@/components/FeaturedSection'
import HeroSection from '@/components/HeroSection'
import CategoriesSection from '@/components/CategoriesSection'
import QuotesSection from '@/components/QuotesSection'
import NewsletterSection from '@/components/NewsletterSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import React from 'react'

export const forceStatic = true

function page() {
  return (
    <div className='min-h-screen bg-background'>
      <main>
        <HeroSection />
        <FeaturedSection />
        <CategoriesSection />
        <QuotesSection />
        <CTASection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}

export default page