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
    fullDetails: 'We aim to provide comprehensive financial support that covers tuition, living expenses, and learning materials. Our focus is on supporting talented students from underserved backgrounds to help them access top-tier continental and international universities.',
    impact: [
      'Establish scholarship funds for our first cohorts',
      'Partner with key regional and global universities',
      'Provide full tuition and living expenses for selected scholars',
      'Ensure high graduation and retention rates'
    ],
    icon: BookOpen,
    image: impactImg,
  },
  {
    title: 'Mentorship',
    description: 'Connecting scholars with global alumni professionals for guidance, career advice, and personal growth.',
    fullDetails: 'Our mentorship initiative is designed to pair current scholarship recipients with successful African alumni working in various fields globally. This "paying it forward" model ensures that students receive practical industry insights and career guidance.',
    impact: [
      'Match every supported scholar with a dedicated industry mentor',
      'Host regular online professional development webinars',
      'Facilitate career guidance and transition assistance',
      'Build industry-specific global peer networks'
    ],
    icon: Users2,
    image: alumniImg,
  },
  {
    title: 'School Infrastructure',
    description: 'Supporting partner schools with essential facilities, from libraries to digital learning labs.',
    fullDetails: 'We seek to support partner schools by assisting with essential learning facilities, modern science kits, and digital tools, ensuring that quality learning environments are available to every curious mind.',
    impact: [
      'Support local partner schools with basic tech equipment and books',
      'Collaborate on solar-powered classroom solutions in rural areas',
      'Establish modern digital learning spaces in underserved regions',
      'Provide training resources for local community teachers'
    ],
    icon: Construction,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80',
  },
  {
    title: 'Skills Training',
    description: 'Equipping students with future-ready skills in technology, leadership, and entrepreneurship.',
    fullDetails: 'Beyond traditional academic degrees, we aim to prepare students for the modern workspace by offering practical workshops covering essential technology skills, financial literacy, and entrepreneurship.',
    impact: [
      'Roll out basic coding and technology training workshops',
      'Mentor students on leadership and launching community projects',
      'Organize soft-skills and workspace preparation summits',
      'Help students work toward globally recognized skill certifications'
    ],
    icon: Rocket,
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80',
  },
]

const WhatWeDo = () => {
  const [selectedProgram, setSelectedProgram] = React.useState<typeof programs[0] | null>(null)

  React.useEffect(() => {
    // Preload all program images in background to make them appear instantly in the detail modal
    programs.forEach((program) => {
      if (program.image) {
        const img = new Image()
        img.src = program.image
      }
    })
    // Preload fallback image
    const fallbackImg = new Image()
    fallbackImg.src = 'https://images.unsplash.com/photo-1524178232363-1fb28f74b573?auto=format&fit=crop&q=80'
  }, [])

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
