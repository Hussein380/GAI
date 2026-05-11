import React from 'react'
import Section from '@/components/layout/Section'
import WhatWeDo from '@/features/impact/components/WhatWeDo'
import { motion } from 'framer-motion'

const ProgrammesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section className="pt-40">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gai-gold mb-6">Our Work</h2>
          <h3 className="text-6xl md:text-8xl tracking-tight mb-8">What We <span className="italic font-serif">Do</span>.</h3>
          <p className="text-2xl text-gai-teal/60 leading-relaxed">
            Our initiatives are designed to span the entire educational journey—from the classroom to the boardroom.
          </p>
        </div>
        <WhatWeDo />
      </Section>

      <Section alternate>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h4 className="text-3xl font-bold mb-6">Sustainable Impact</h4>
            <p className="text-xl text-gai-white/70 leading-relaxed mb-8">
              We focus on long-term sustainability by partnering with local communities and creating a self-sufficient funding loop through our global alumni network.
            </p>
            <ul className="space-y-4">
              {['Digital Literacy Labs', 'Vocational Training Paths', 'Leadership Retreats', 'Community Outreach'].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-gai-gold" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-12 border border-white/10">
            <h5 className="text-2xl font-bold mb-4">Interested in Partnering?</h5>
            <p className="text-gai-white/60 mb-8">
              We are always looking for collaborators who share our vision for African education.
            </p>
            <button className="bg-gai-gold text-gai-teal font-bold px-10 py-5 rounded-full hover:bg-white transition-colors">
              Contact Our Team
            </button>
          </div>
        </div>
      </Section>
    </motion.div>
  )
}

export default ProgrammesPage
