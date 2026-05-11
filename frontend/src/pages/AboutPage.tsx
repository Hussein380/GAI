import React from 'react'
import Section from '@/components/layout/Section'
import FoundingStory from '@/features/alumni/components/FoundingStory'
import { motion } from 'framer-motion'

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section className="pt-24 md:pt-32">
        <FoundingStory />
      </Section>
      
      <Section alternate>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gai-gold mb-6">Our Mission</h2>
          <h3 className="text-4xl md:text-6xl mb-10 tracking-tighter">To provide sustainable <span className="italic font-serif">educational support</span> and mentorship to less privileged but talented students.</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 text-left">
            <div>
              <h4 className="text-2xl font-bold mb-4">The Vision</h4>
              <p className="text-gai-white/70 leading-relaxed">
                A world where every talented student in Africa has the resources and mentorship to fulfill their potential and contribute back to their community.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">The Impact</h4>
              <p className="text-gai-white/70 leading-relaxed">
                By creating a self-sustaining cycle of alumni donors, we ensure that our impact grows exponentially with every graduating class.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  )
}

export default AboutPage
