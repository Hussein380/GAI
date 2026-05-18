import React from 'react'
import { motion } from 'framer-motion'
import { Users, GraduationCap, Globe2, HeartHandshake } from 'lucide-react'

const stats = [
  { label: 'Students Supported', value: '50', icon: GraduationCap },
  { label: 'Global Members', value: '100', icon: Users },
  { label: 'Countries Reached', value: '9', icon: Globe2 },
  { label: 'Partner Orgs', value: '1', icon: HeartHandshake },
]

const ImpactStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gai-gold/5 rounded-3xl blur-xl group-hover:bg-gai-gold/10 transition-colors" />
          <div className="relative p-8 text-center bg-white/50 backdrop-blur-sm rounded-3xl border border-gai-teal/5 hover:border-gai-gold/20 transition-all hover:-translate-y-2 shadow-sm">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-6 rounded-2xl bg-gai-teal/5 text-gai-gold">
              <stat.icon size={24} />
            </div>
            <div className="text-4xl font-sans font-bold text-gai-teal mb-2 tracking-tighter">
              {stat.value}
            </div>
            <div className="text-sm font-bold uppercase tracking-widest text-gai-teal/50">
              {stat.label}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default ImpactStats
