import React from 'react'
import Section from '@/components/layout/Section'
import ImpactStats from '@/features/impact/components/ImpactStats'
import { motion } from 'framer-motion'

const ImpactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section className="pt-40">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gai-gold mb-6">Our Impact</h2>
          <h3 className="text-6xl md:text-8xl tracking-tight mb-8">Measurable <span className="italic font-serif">Change</span>.</h3>
          <p className="text-2xl text-gai-teal/60 leading-relaxed">
            From individual lives to entire communities, we track every milestone in our mission to empower the next generation.
          </p>
        </div>
        <ImpactStats />
      </Section>



      <Section>
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gai-gold mb-4">Supported Projects</h2>
          <h3 className="text-4xl md:text-6xl tracking-tight">Concrete <span className="italic font-serif">Milestones</span></h3>
        </div>
        <div className="grid grid-cols-1 max-w-4xl mx-auto">
          {/* Uganda Orphanage */}
          <div className="bg-white rounded-[3rem] p-12 border border-gai-teal/5 shadow-xl hover:shadow-2xl transition-all group">
            <div className="w-16 h-16 bg-gai-teal/5 text-gai-teal rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              <span className="text-2xl font-bold">01</span>
            </div>
            <h4 className="text-3xl font-bold mb-4 tracking-tight">Uganda Orphanage & School</h4>
            <p className="text-sm font-bold text-gai-gold uppercase tracking-widest mb-6">Bombo Region, Uganda</p>
            <div className="space-y-4 text-gai-teal/70 leading-relaxed mb-8">
              <p>In collaboration with our partners Africa Friendship Association, this project features an orphanage and the Sweet Walley Primary & Islamic Nursery School, approved by the Ministry of Education.</p>
              <p>We are educating <strong className="text-gai-teal font-bold">220 children</strong> (including 123 orphans) with full accommodation support. We continue to invest in expanding our capacity and resources.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-gai-teal/5 px-4 py-2 rounded-full text-sm font-bold text-gai-teal">220 Children</span>
              <span className="bg-gai-teal/5 px-4 py-2 rounded-full text-sm font-bold text-gai-teal">Africa Friendship Association</span>
            </div>
          </div>
        </div>
      </Section>

      <Section alternate>
        <div className="bg-gai-teal rounded-[4rem] p-16 text-white text-center">
          <h4 className="text-3xl md:text-5xl font-bold mb-8 tracking-tighter">Download Our Annual Report</h4>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 leading-relaxed">
            Transparency is at our core. Read about our financial allocation, student progress, and global expansion plans.
          </p>
          <button 
            onClick={() => alert('The 2026 Global Alumni Initiatives Annual Report has not been uploaded yet. Please check back soon or join our mailing list for updates.')}
            className="bg-gai-gold text-gai-teal font-bold px-12 py-6 rounded-full hover:bg-white transition-all shadow-2xl"
          >
            Download 2026 Report (PDF)
          </button>
        </div>
      </Section>
    </motion.div>
  )
}

export default ImpactPage
