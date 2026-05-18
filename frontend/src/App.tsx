import { Routes, Route, Link } from 'react-router-dom'
import MainLayout from '@/components/layout/MainLayout'
import Section from '@/components/layout/Section'
import impactHero from '@/assets/hero.png'
import ImpactStats from '@/features/impact/components/ImpactStats'
import WhatWeDo from '@/features/impact/components/WhatWeDo'
import PayForwardDiagram from '@/features/impact/components/PayForwardDiagram'
import AboutPage from '@/pages/AboutPage'
import ProgrammesPage from '@/pages/ProgrammesPage'
import ImpactPage from '@/pages/ImpactPage'
import JoinUsPage from '@/pages/JoinUsPage'
import DonatePage from '@/pages/DonatePage'
import ApplyPage from '@/pages/ApplyPage'
import ContactPage from '@/pages/ContactPage'
import { motion } from 'framer-motion'

// Preload critical above-the-fold hero image instantly
const heroPreload = new Image()
heroPreload.src = impactHero

const HomePage = () => (
  <>
    <section className="relative h-screen flex items-start pt-20 md:pt-24 overflow-hidden">
      {/* Background Cinematic Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={impactHero} 
          className="w-full h-full object-cover scale-105" 
          alt="African students in education"
          loading="eager"
          decoding="sync"
          {...{ fetchPriority: 'high' } as any}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gai-white via-gai-white/80 to-transparent md:via-gai-white/60" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block px-4 py-1.5 mb-2 md:mb-4 text-[10px] md:text-sm font-bold tracking-widest text-white uppercase bg-gai-gold rounded-full shadow-lg"
          >
            A Registered Kenyan CBO
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-8xl mb-2 md:mb-4 leading-[0.9] lg:leading-[0.85] tracking-tighter"
          >
            Expanding <span className="text-gai-gold italic font-serif">Access</span> to Quality Education
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm md:text-xl lg:text-2xl text-gai-teal/80 max-w-2xl leading-relaxed mb-6 md:mb-8"
          >
            Mobilising a global network of scholarship beneficiaries to pay their opportunity forward and empower Africa's next generation.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-4 md:gap-6"
          >
            <Link 
              to="/join"
              className="w-full sm:w-auto text-center bg-gai-teal text-white px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-lg hover:bg-gai-teal-light shadow-2xl transition-all hover:-translate-y-1 block"
            >
              Join as a Member
            </Link>
            <Link 
              to="/about"
              className="w-full sm:w-auto text-center bg-white border border-gai-teal/10 px-8 md:px-12 py-4 md:py-6 rounded-full font-bold text-base md:text-lg hover:shadow-xl transition-all shadow-sm block text-gai-teal"
            >
              Read Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>

    <Section>
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gai-gold mb-4">Our Scale</h2>
        <h3 className="text-4xl md:text-6xl tracking-tight">The Impact of <span className="italic font-serif">Giving Back</span></h3>
      </div>
      <ImpactStats />
    </Section>

    <Section alternate>
      <div className="mb-16">
        <div className="max-w-3xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gai-gold mb-4">Our Programmes</h2>
          <h3 className="text-4xl md:text-6xl mb-6 tracking-tighter leading-tight font-bold">A Holistic Approach to <span className="italic font-serif">Empowerment</span></h3>
          <p className="text-lg md:text-xl text-gai-white/70 leading-relaxed mb-10 max-w-2xl">
            We don't just provide funding. We provide a community, a roadmap, and a lifelong network for African scholars.
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-4 mb-12">
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gai-gold flex-shrink-0" />
              <p className="text-base text-gai-white/90 font-medium">Sustainable Funding</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gai-gold flex-shrink-0" />
              <p className="text-base text-gai-white/90 font-medium">Global Mentorship</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5 h-5 rounded-full bg-gai-gold flex-shrink-0" />
              <p className="text-base text-gai-white/90 font-medium">Infrastructure Support</p>
            </div>
          </div>
        </div>
        <WhatWeDo />
      </div>
    </Section>

    <Section>
      <div className="text-center mb-20">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-gai-gold mb-4">Our Model</h2>
        <h3 className="text-4xl md:text-6xl tracking-tight max-w-3xl mx-auto">A Self-Sustaining Cycle of <span className="italic font-serif">Generosity</span></h3>
      </div>
      
      <div className="bg-gai-teal rounded-[3rem] md:rounded-[4rem] shadow-3xl overflow-hidden py-10 px-4 md:px-0">
        <PayForwardDiagram />
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="p-8 bg-gai-white rounded-3xl border border-gai-teal/5">
          <h4 className="text-xl font-bold mb-4">Continuity</h4>
          <p className="text-gai-teal/70">Every scholar supported is a future alum who will support the next student.</p>
        </div>
        <div className="p-8 bg-gai-white rounded-3xl border border-gai-teal/5">
          <h4 className="text-xl font-bold mb-4">Ubuntu</h4>
          <p className="text-gai-teal/70">"I am because we are." Our network is rooted in African community values.</p>
        </div>
        <div className="p-8 bg-gai-white rounded-3xl border border-gai-teal/5">
          <h4 className="text-xl font-bold mb-4">Transparency</h4>
          <p className="text-gai-teal/70">We ensure that 100% of alumni contributions go directly to student bursaries.</p>
        </div>
      </div>
    </Section>
  </>
)

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programmes" element={<ProgrammesPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/join" element={<JoinUsPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </MainLayout>
  )
}

export default App
