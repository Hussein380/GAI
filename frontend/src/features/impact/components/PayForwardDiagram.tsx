import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { GraduationCap, Briefcase, Coins, Heart } from 'lucide-react'

const steps = [
  {
    id: 'receive',
    title: 'Scholars Receive',
    description: 'deserving students get full funding and mentorship',
    icon: GraduationCap,
    color: '#085041',
  },
  {
    id: 'thrive',
    title: 'Scholars Thrive',
    description: 'Graduates become successful global professionals',
    icon: Briefcase,
    color: '#1D9E75',
  },
  {
    id: 'return',
    title: 'Alumni Return',
    description: 'Professionals join the GAI global network',
    icon: Heart,
    color: '#C8861A',
  },
  {
    id: 'fund',
    title: 'Cycle Funds',
    description: 'Alumni contributions fund the next generation',
    icon: Coins,
    color: '#085041',
  },
]

const PayForwardDiagram = () => {
  return (
    <div className="relative py-20 px-4 max-w-5xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="flex flex-col items-center text-center group"
          >
            {/* Step Icon Container */}
            <div className="relative mb-8">
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-24 h-24 rounded-[2rem] flex items-center justify-center text-white shadow-2xl relative z-10"
                style={{ backgroundColor: step.color }}
              >
                <step.icon size={40} />
              </motion.div>
              
              {/* Connecting Arrows for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-[2px] bg-gradient-to-r from-gai-teal/20 to-transparent -translate-y-1/2 z-0" />
              )}
            </div>

            <h4 className="text-xl font-bold mb-3 tracking-tight text-white">{step.title}</h4>
            <p className="text-white/60 text-sm leading-relaxed max-w-[180px]">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Decorative Connecting Path */}
      <svg className="absolute top-1/2 left-0 w-full hidden md:block opacity-10" style={{ height: '200px', transform: 'translateY(-50%)' }}>
        <motion.path
          d="M 120 100 Q 480 100 840 100"
          fill="transparent"
          stroke="#C8861A"
          strokeWidth="4"
          strokeDasharray="10 10"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}

export default PayForwardDiagram
