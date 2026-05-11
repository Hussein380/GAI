import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  alternate?: boolean
}

const Section: React.FC<SectionProps> = ({ children, className, id, alternate }) => {
  return (
    <section 
      id={id} 
      className={cn(
        "py-24 px-4 md:py-32",
        alternate ? "bg-gai-teal text-white" : "bg-gai-white text-gai-teal",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default Section
