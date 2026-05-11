import React from 'react'
import Section from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { Users, Send, CheckCircle } from 'lucide-react'

const ApplyPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
    }, 2000)
  }

  if (submitted) {
    return (
      <Section className="pt-40 min-h-[80vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white p-16 rounded-[3rem] shadow-2xl max-w-2xl border border-gai-teal/5"
        >
          <div className="w-24 h-24 bg-gai-teal/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-gai-teal" size={48} />
          </div>
          <h2 className="text-4xl font-bold text-gai-teal mb-6">Application Received</h2>
          <p className="text-xl text-gai-teal/60 leading-relaxed mb-10">
            Thank you for applying to volunteer with GAI. Your profile has been sent to our coordination team. 
            We will contact you at abdul.hudh@gmail.com to discuss how your skills can best support the vision.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-gai-gold text-gai-teal px-12 py-5 rounded-full font-bold hover:bg-gai-teal hover:text-white transition-colors shadow-lg"
          >
            Return Home
          </button>
        </motion.div>
      </Section>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section className="pt-40 bg-gai-white">
        <div className="max-w-4xl mx-auto py-12 px-6 bg-white rounded-[3rem] shadow-2xl border border-gai-teal/5">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-gai-teal/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="text-gai-teal" size={32} />
            </div>
            <h1 className="text-5xl font-bold text-gai-teal mb-4">Volunteer Your <span className="italic font-serif">Support</span></h1>
            <p className="text-xl text-gai-teal/60">Join our global network of professionals and mentors dedicated to African excellence.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gai-teal/60 uppercase tracking-widest ml-4">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="Amina Hassan"
                className="w-full px-8 py-5 rounded-2xl bg-gai-white border-none focus:ring-2 focus:ring-gai-teal transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gai-teal/60 uppercase tracking-widest ml-4">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="amina@example.com"
                className="w-full px-8 py-5 rounded-2xl bg-gai-white border-none focus:ring-2 focus:ring-gai-teal transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gai-teal/60 uppercase tracking-widest ml-4">Current Country</label>
              <input 
                required
                type="text" 
                placeholder="United Kingdom"
                className="w-full px-8 py-5 rounded-2xl bg-gai-white border-none focus:ring-2 focus:ring-gai-teal transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gai-teal/60 uppercase tracking-widest ml-4">Volunteer Role</label>
              <select className="w-full px-8 py-5 rounded-2xl bg-gai-white border-none focus:ring-2 focus:ring-gai-teal transition-all">
                <option>Mentor / Career Coach</option>
                <option>Programme Coordinator</option>
                <option>Technical Advisor</option>
                <option>Event Organizer</option>
                <option>Other</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gai-teal/60 uppercase tracking-widest ml-4">Brief Bio & Skills</label>
              <textarea 
                required
                rows={4}
                placeholder="Share your expertise and how you'd like to contribute..."
                className="w-full px-8 py-5 rounded-2xl bg-gai-white border-none focus:ring-2 focus:ring-gai-teal transition-all resize-none"
              />
            </div>

            <div className="md:col-span-2 mt-8">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gai-gold text-gai-teal py-6 rounded-2xl font-bold text-xl hover:bg-gai-teal hover:text-white transition-all shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Submitting...</span>
                ) : (
                  <>
                    <Send size={24} />
                    <span>Apply to Volunteer</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </Section>
    </motion.div>
  )
}

export default ApplyPage
