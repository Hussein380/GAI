import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'

interface ProgramDetailModalProps {
  program: {
    title: string
    description: string
    fullDetails: string
    impact: string[]
    icon: React.ElementType
    image?: string
  } | null
  onClose: () => void
}

const ProgramDetailModal: React.FC<ProgramDetailModalProps> = ({ program, onClose }) => {
  if (!program) return null

  return (
    <AnimatePresence>
      {program && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gai-teal/40 backdrop-blur-xl"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl bg-white rounded-[3rem] overflow-hidden shadow-3xl"
          >
            <button 
              onClick={onClose}
              className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-gai-white flex items-center justify-center text-gai-teal hover:bg-gai-gold hover:text-white transition-all shadow-lg"
            >
              <X size={24} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-full relative overflow-hidden">
                <img 
                  src={program.image || 'https://images.unsplash.com/photo-1524178232363-1fb28f74b573?auto=format&fit=crop&q=80'} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gai-teal/80 to-transparent" />
                <div className="absolute bottom-10 left-10 text-white">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-4">
                    <program.icon size={32} />
                  </div>
                  <h3 className="text-4xl font-bold tracking-tight">{program.title}</h3>
                </div>
              </div>

              <div className="p-8 md:p-12 lg:p-16 overflow-y-auto max-h-[70vh] md:max-h-[90vh]">
                <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-gai-gold mb-6">Program Overview</h4>
                <div className="space-y-6 text-gai-teal/80 leading-relaxed text-lg mb-10">
                  <p>{program.description}</p>
                  <p>{program.fullDetails}</p>
                </div>

                <div className="mb-10">
                  <h4 className="text-sm font-bold uppercase tracking-[0.3em] text-gai-gold mb-6">Key Impact Goals</h4>
                  <div className="space-y-4">
                    {program.impact.map((goal, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="text-gai-gold shrink-0 mt-1" size={20} />
                        <span className="text-gai-teal/70">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-gai-teal/5">
                  <h4 className="text-xl font-bold mb-6">Interested in this program?</h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      to="/join" 
                      onClick={onClose}
                      className="bg-gai-teal text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gai-teal-light transition-all shadow-xl"
                    >
                      Join as a Member <ArrowRight size={20} />
                    </Link>
                    <a 
                      href="https://wa.me/254717417326" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="border-2 border-gai-teal/10 text-gai-teal px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gai-teal/5 transition-all"
                    >
                      Enquire via WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default ProgramDetailModal
