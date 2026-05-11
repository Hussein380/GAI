import React from 'react'
import Section from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { Building2, Handshake, Globe2 } from 'lucide-react'

const partners = [
  { name: 'Global Education Fund', type: 'NGO Partner', description: 'Co-funding infrastructure projects in rural Uganda.' },
  { name: 'East African Alumni network', type: 'Strategic Partner', description: 'Expanding our reach to graduates across the region.' },
  { name: 'Tech for Good initiative', type: 'Technology Partner', description: 'Providing digital literacy labs for partner schools.' }
]

const PartnersPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section className="pt-40">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gai-gold mb-6">Our Ecosystem</h2>
          <h3 className="text-6xl md:text-8xl tracking-tight mb-8">Better <span className="italic font-serif">Together</span>.</h3>
          <p className="text-2xl text-gai-teal/60 leading-relaxed">
            We collaborate with organisations that share our commitment to African education and sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map(partner => (
            <div key={partner.name} className="p-10 bg-white rounded-[3rem] border border-gai-teal/5 shadow-xl hover:border-gai-gold/20 transition-all">
              <div className="w-16 h-16 rounded-2xl bg-gai-teal/5 text-gai-gold flex items-center justify-center mb-6">
                <Building2 size={32} />
              </div>
              <h4 className="text-2xl font-bold mb-2 tracking-tight">{partner.name}</h4>
              <p className="text-sm font-bold text-gai-gold uppercase tracking-widest mb-6">{partner.type}</p>
              <p className="text-gai-teal/60 leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section alternate>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <h3 className="text-4xl md:text-6xl tracking-tighter mb-8 leading-none">Become a <span className="italic font-serif text-gai-gold">Partner</span>.</h3>
            <p className="text-xl text-white/70 leading-relaxed mb-10">
              Join our mission to transform lives through education. We offer various partnership models for corporations and NGOs.
            </p>
            <button className="bg-white text-gai-teal font-bold px-10 py-5 rounded-full hover:bg-gai-gold hover:text-white transition-all">
              Download Partnership Deck
            </button>
          </div>
          <div className="w-full md:w-1/2 p-1 bg-white/10 rounded-[3rem]">
             <div className="bg-gai-teal rounded-[2.9rem] p-10 border border-white/5">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gai-gold flex items-center justify-center text-white"><Handshake size={24} /></div>
                    <span className="text-2xl font-bold">Mutual Growth</span>
                </div>
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-12 h-12 rounded-full bg-gai-gold flex items-center justify-center text-white"><Globe2 size={24} /></div>
                    <span className="text-2xl font-bold">Global Presence</span>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </motion.div>
  )
}

export default PartnersPage
