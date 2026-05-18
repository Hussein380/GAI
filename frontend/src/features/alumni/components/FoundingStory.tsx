import React from 'react'
import { motion } from 'framer-motion'
import foundingTeam from '@/assets/somali_roots.png'

// Preload founding story image instantly
const storyPreload = new Image()
storyPreload.src = foundingTeam

const FoundingStory = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative z-10 rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-2xl">
          <img src={foundingTeam} alt="GAI Founding Team" className="w-full h-auto transition-transform duration-700 hover:scale-105" />
        </div>
        <div className="absolute -bottom-10 -right-10 w-48 lg:w-64 h-48 lg:h-64 bg-gai-gold/20 rounded-full blur-3xl z-0" />
      </motion.div>

      <div>
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gai-gold mb-6">Our Roots</h2>
        <h3 className="text-4xl md:text-7xl mb-10 tracking-tighter leading-[0.9]">
          Founded by <span className="italic font-serif">Beneficiaries</span>, Led by Professionals.
        </h3>
        <div className="space-y-4 text-lg md:text-xl text-gai-teal/70 leading-relaxed">
          <p>
            Ten years ago, a group of international students from across Africa met in Turkey, united by a common thread: we were all recipients of full scholarships that changed our lives.
          </p>
          <p>
            Having benefited from the generosity of others, we made a pact to one day pay that opportunity forward. Today, we are professionals living and working globally, but our hearts remain committed to the next generation of African scholars.
          </p>
          <p className="font-bold text-gai-teal italic font-serif">
            "We are not just a charity; we are a cycle of empowerment that begun with us and continues with you."
          </p>
        </div>
        
        <div className="mt-8 flex items-center gap-6">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gai-gold mb-1">2024</div>
            <div className="text-[10px] uppercase tracking-widest text-gai-teal/40">Founded</div>
          </div>
          <div className="w-[1px] h-10 bg-gai-teal/10" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gai-gold mb-1">10+</div>
            <div className="text-[10px] uppercase tracking-widest text-gai-teal/40">Founders</div>
          </div>
          <div className="w-[1px] h-10 bg-gai-teal/10" />
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-gai-gold mb-1">Kenya</div>
            <div className="text-[10px] uppercase tracking-widest text-gai-teal/40">Registered</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoundingStory
