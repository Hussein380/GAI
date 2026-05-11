import React from 'react'
import Section from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { UserPlus, Mail, Globe, MapPin } from 'lucide-react'

const JoinUsPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call or Formspree submission
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Membership Application Data:', data);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <Section className="pt-40">
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-xl mx-auto bg-white rounded-[4rem] shadow-3xl p-12 md:p-20 border border-gai-teal/5 text-center"
        >
          <div className="w-24 h-24 bg-gai-gold rounded-full flex items-center justify-center mx-auto mb-8 text-white">
            <UserPlus size={40} />
          </div>
          <h3 className="text-3xl font-bold mb-4">Application Received!</h3>
          <p className="text-gai-teal/60 mb-8">
            Thank you for your interest in joining GAI. Our administration team will review your story and get back to you shortly via email.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-gai-teal text-white px-8 py-4 rounded-full font-bold hover:bg-gai-teal-light transition-all"
          >
            Submit Another Application
          </button>
        </motion.div>
      </Section>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section className="pt-40">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gai-gold mb-6">Membership</h2>
          <h3 className="text-6xl md:text-8xl tracking-tight mb-8">Join the <span className="italic font-serif">Global</span> Network.</h3>
          <p className="text-2xl text-gai-teal/60 leading-relaxed">
            Become a part of a lifelong commitment to paying it forward. Whether you are an alum or a supporter, there is a place for you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-[4rem] shadow-3xl p-12 md:p-20 border border-gai-teal/5">
          <form 
            className="space-y-8"
            onSubmit={handleSubmit}
          >
            {/* Hidden recipient logic (ready for Formspree/EmailJS) */}
            <input type="hidden" name="_to" value="abdul.hudh@gmail.com" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gai-teal/40 ml-2">Full Name</label>
                <input required name="name" type="text" placeholder="John Doe" className="w-full bg-gai-white/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gai-gold outline-none text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gai-teal/40 ml-2">Email Address</label>
                <input required name="email" type="email" placeholder="john@example.com" className="w-full bg-gai-white/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gai-gold outline-none text-lg" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-gai-teal/40 ml-2">Location/City</label>
              <div className="relative">
                <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-gai-teal/20" size={20} />
                <input name="location" type="text" placeholder="Nairobi, Kenya" className="w-full bg-gai-white/50 border-none rounded-2xl pl-14 pr-6 py-4 focus:ring-2 focus:ring-gai-gold outline-none text-lg" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-widest text-gai-teal/40 ml-2">Your Story / Motivation</label>
              <textarea name="story" placeholder="Tell us why you want to join GAI..." rows={5} className="w-full bg-gai-white/50 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-gai-gold outline-none text-lg resize-none"></textarea>
            </div>

            <button 
              disabled={isSubmitting}
              type="submit" 
              className="w-full bg-gai-teal text-white font-bold text-xl py-6 rounded-full hover:bg-gai-teal-light shadow-2xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-wait"
            >
              {isSubmitting ? 'Submitting...' : <><UserPlus size={24} /> Submit Membership Application</>}
            </button>
            <p className="text-center text-sm text-gai-teal/40">
              By submitting, you agree to our membership terms and community guidelines.
            </p>
          </form>
        </div>
      </Section>
    </motion.div>
  )
}

export default JoinUsPage
