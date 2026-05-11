import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Users2, Construction, Rocket, Handshake } from 'lucide-react'
import ProgramDetailModal from './ProgramDetailModal'
import impactImg from '@/assets/somali_roots.png' // Using high quality root image for education
import alumniImg from '@/assets/somali_roots.png' 

const programs = [
  {
    title: 'Education Access',
    description: 'Scholarships and bursaries for deserving students across Africa to ensure financial barriers don\'t limit potential.',
    fullDetails: 'We provide comprehensive financial support that covers tuition, living expenses, and learning materials. Our focus is on talented students from low-income backgrounds who have been accepted into top-tier continental and international universities.',
    impact: [
      'Over 500 scholarships awarded to date',
      '95% graduation rate among beneficiaries',
      'Presence in 15 African countries',
      'Partnerships with 20+ global universities'
    ],
    icon: BookOpen,
    image: impactImg,
  },
  {
    title: 'Mentorship',
    description: 'Connecting scholars with global alumni professionals for guidance, career advice, and personal growth.',
    fullDetails: 'Our mentorship program pairs current scholarship recipients with successful GAI alumni working in various fields globally. This "paying it forward" model ensures that students receive practical industry insights and career guidance from those who walked the same path.',
    impact: [
      '1:1 dedicated mentorship for every scholar',
      'Monthly global professional webinars',
      'Career placement assistance',
      'Industry-specific peer networks'
    ],
    icon: Users2,
    image: alumniImg,
  },
  {
    title: 'School Infrastructure',
    description: 'Supporting partner schools with essential facilities, from libraries to digital learning labs.',
    fullDetails: 'We believe that the environment is "the third teacher." GAI invests in building modern science labs, digital libraries, and solar-powered classrooms in underserved rural schools to ensure that quality tools are available to every curious mind.',
    impact: [
      '12 digital labs established in 2023',
      'Solar energy solutions for 5 rural schools',
      'Donation of 10,000+ textbooks annually',
      'Training for 100+ local teachers'
    ],
    icon: Construction,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
  },
  {
    title: 'Skills Training',
    description: 'Equipping students with future-ready skills in technology, leadership, and entrepreneurship.',
    fullDetails: 'Beyond academic degrees, we prepare students for the fourth industrial revolution. Our intensives cover coding, financial literacy, and social entrepreneurship, empowering youth to create jobs rather than just seeking them.',
    impact: [
      '2,000+ graduates from coding intensives',
      '50+ student-led startups launched',
      'Leadership summits across 5 regions',
      'Certification in globally recognized skills'
    ],
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
  },
]

const WhatWeDo = () => {
  const [selectedProgram, setSelectedProgram] = React.useState<typeof programs[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
        {programs.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative flex flex-col h-full bg-white rounded-3xl p-6 border border-gai-teal/5 hover:border-gai-gold/20 transition-all hover:shadow-2xl overflow-hidden cursor-pointer"
            onClick={() => setSelectedProgram(program)}
          >
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-32 h-32 bg-gai-teal/5 rounded-full blur-2xl group-hover:bg-gai-gold/10 transition-colors" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gai-teal text-white flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <program.icon size={28} />
              </div>
              
              <h4 className="text-2xl font-bold mb-4 tracking-tight">{program.title}</h4>
              <p className="text-gai-teal/70 leading-relaxed text-sm">
                {program.description}
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gai-teal/5 flex justify-between items-center">
              <button className="text-sm font-bold uppercase tracking-widest text-gai-gold hover:text-gai-teal transition-colors flex items-center gap-2 group/btn">
                Learn More <Handshake size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <ProgramDetailModal 
        program={selectedProgram} 
        onClose={() => setSelectedProgram(null)} 
      />
    </>
  )
}

export default WhatWeDo
