import React from 'react'
import Section from '@/components/layout/Section'
import ImpactStats from '@/features/impact/components/ImpactStats'
import StudentStoryCard from '@/features/impact/components/StudentStoryCard'
import { motion } from 'framer-motion'
import abdiImg from '@/assets/abdiwahab_story_v2_1778503962273.png'
import aminaImg from '@/assets/amina_story_somali_hijab_1778504425561.png'

const stories = [
  {
    name: 'Abdiwahab',
    location: 'Founder • Germany / Kenya',
    story: "My path from Garissa to Germany was paved by the generosity of scholarship programs. Now, as a founder of GAI, I am dedicated to building those same bridges for the next generation of African scholars. We aren't just giving back; we are creating a cycle of professional excellence and communal support.",
    image: abdiImg
  },
  {
    name: 'Amina',
    location: 'Founder • London / Somalia',
    story: "Having navigated the journey from Somalia to a tech career in London through international support, I know the power of opportunity. I co-founded GAI to ensure that my story isn't an exception. Through mentorship and resources, we are empowering young women in Africa to reach their highest global potential.",
    image: aminaImg
  }
]

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

      <Section alternate>
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gai-gold mb-4">Human Stories</h2>
          <h3 className="text-4xl md:text-6xl tracking-tight">The Faces of <span className="italic font-serif">Transformation</span></h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {stories.map(story => (
            <StudentStoryCard key={story.name} {...story} />
          ))}
        </div>
      </Section>

      <Section>
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
