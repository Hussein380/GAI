import React from 'react'
import Section from '@/components/layout/Section'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Send, CheckCircle } from 'lucide-react'

const DonatePage = () => {
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
          <div className="w-24 h-24 bg-gai-gold/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="text-gai-gold" size={48} />
          </div>
          <h2 className="text-4xl font-bold text-gai-teal mb-6">Generosity Received</h2>
          <p className="text-xl text-gai-teal/60 leading-relaxed mb-10">
            Thank you for your interest in giving to GAI. Your information has been sent to our founders. 
            An administrator will reach out to you at abdul.hudh@gmail.com to discuss the impact of your contribution.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="bg-gai-teal text-white px-12 py-5 rounded-full font-bold hover:bg-gai-gold transition-colors"
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
            <div className="w-16 h-16 bg-gai-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Heart className="text-gai-gold" size={32} />
            </div>
            <h1 className="text-5xl font-bold text-gai-teal mb-4">Invest in Future <span className="italic font-serif">Leaders</span></h1>
            <p className="text-xl text-gai-teal/60">While our payment system is being finalized, please provide your details and our team will contact you to facilitate your contribution.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-gai-teal/60 uppercase tracking-widest ml-4">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="John Doe"
                className="w-full px-8 py-5 rounded-2xl bg-gai-white border-none focus:ring-2 focus:ring-gai-gold transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gai-teal/60 uppercase tracking-widest ml-4">Email Address</label>
              <input 
                required
                type="email" 
                placeholder="john@example.com"
                className="w-full px-8 py-5 rounded-2xl bg-gai-white border-none focus:ring-2 focus:ring-gai-gold transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gai-teal/60 uppercase tracking-widest ml-4">Phone Number</label>
              <input 
                required
                type="tel" 
                placeholder="+254..."
                className="w-full px-8 py-5 rounded-2xl bg-gai-white border-none focus:ring-2 focus:ring-gai-gold transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gai-teal/60 uppercase tracking-widest ml-4">Contribution Interest</label>
              <select className="w-full px-8 py-5 rounded-2xl bg-gai-white border-none focus:ring-2 focus:ring-gai-gold transition-all">
                <option>One-time Donation</option>
                <option>Monthly Support</option>
                <option>Scholarship Endowment</option>
                <option>Corporate Partnership</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-gai-teal/60 uppercase tracking-widest ml-4">Message (Optional)</label>
              <textarea 
                rows={4}
                placeholder="Tell us about the impact you'd like to make..."
                className="w-full px-8 py-5 rounded-2xl bg-gai-white border-none focus:ring-2 focus:ring-gai-gold transition-all resize-none"
              />
            </div>

            <div className="md:col-span-2 mt-8">
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gai-teal text-white py-6 rounded-2xl font-bold text-xl hover:bg-gai-gold transition-all shadow-xl flex items-center justify-center space-x-3 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Processing...</span>
                ) : (
                  <>
                    <Send size={24} />
                    <span>Send Information</span>
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

export default DonatePage
