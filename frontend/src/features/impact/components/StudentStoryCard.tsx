import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Quote } from 'lucide-react'

interface StudentStoryProps {
  name: string
  location: string
  story: string
  image: string
}

const StudentStoryCard: React.FC<StudentStoryProps> = ({ name, location, story, image }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-[2rem] lg:rounded-[3rem] overflow-hidden shadow-xl border border-gai-teal/5 flex flex-col h-full"
    >
      <div className="relative h-56 lg:h-64 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
        <div className="absolute top-4 right-4 lg:top-6 lg:right-6 bg-gai-gold text-white p-2 lg:p-3 rounded-2xl shadow-lg">
          <GraduationCap size={20} className="lg:w-6 lg:h-6" />
        </div>
      </div>
      <div className="p-8 lg:p-12 flex-grow flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-gai-teal/10 flex items-center justify-center text-gai-gold">
            <Quote size={20} fill="currentColor" />
          </div>
          <div>
            <h4 className="text-2xl font-bold tracking-tight">{name}</h4>
            <p className="text-sm font-bold uppercase tracking-widest text-gai-teal/40">{location}</p>
          </div>
        </div>
        <p className="text-gai-teal/70 leading-relaxed italic mb-8 flex-grow">
          "{story}"
        </p>
      </div>
    </motion.div>
  )
}

export default StudentStoryCard
