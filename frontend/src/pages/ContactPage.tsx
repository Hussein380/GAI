import React from 'react'
import Section from '@/components/layout/Section'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Section className="pt-40">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <h2 className="text-sm font-bold uppercase tracking-[0.4em] text-gai-gold mb-6">Get in Touch</h2>
          <h3 className="text-6xl md:text-8xl tracking-tight mb-8">Contact <span className="italic font-serif">Us</span>.</h3>
          <p className="text-2xl text-gai-teal/60 leading-relaxed">
            Have questions? Want to learn more about our programmes? We are here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 max-w-7xl mx-auto">
          <div className="space-y-12">
            <div>
              <h4 className="text-3xl font-bold mb-8 tracking-tighter">Our Information</h4>
              <div className="space-y-8">
                <div className="flex items-center gap-6 p-6 bg-gai-white rounded-3xl group hover:bg-gai-teal hover:text-white transition-all cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gai-teal text-white flex items-center justify-center group-hover:bg-white group-hover:text-gai-teal shadow-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-40 mb-1">Email</div>
                    <div className="text-xl font-bold">hello@gai-africa.org</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6 p-6 bg-gai-white rounded-3xl group hover:bg-gai-teal hover:text-white transition-all cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gai-teal text-white flex items-center justify-center group-hover:bg-white group-hover:text-gai-teal shadow-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="text-sm font-bold uppercase tracking-widest opacity-40 mb-1">HQ Office</div>
                    <div className="text-xl font-bold">Nairobi, Kenya</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 bg-gai-gold rounded-[3rem] text-white">
                <p className="text-xl leading-relaxed mb-6 italic">"Join us in building a sustainable future for the next generation of African professionals."</p>
                <p className="font-bold uppercase tracking-widest text-sm">— Hassan, GAI Founder</p>
            </div>
          </div>

          <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-3xl border border-gai-teal/5">
            <form className="space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gai-teal/40 ml-2">Name</label>
                <input type="text" placeholder="Your Name" className="w-full bg-gai-white/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gai-gold outline-none text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gai-teal/40 ml-2">Email</label>
                <input type="email" placeholder="email@address.com" className="w-full bg-gai-white/50 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-gai-gold outline-none text-lg" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gai-teal/40 ml-2">Message</label>
                <textarea placeholder="How can we help?" rows={5} className="w-full bg-gai-white/50 border-none rounded-3xl px-6 py-4 focus:ring-2 focus:ring-gai-gold outline-none text-lg resize-none"></textarea>
              </div>
              <button className="w-full bg-gai-teal text-white font-bold text-xl py-6 rounded-full hover:bg-gai-teal-light shadow-2xl transition-all flex items-center justify-center gap-3">
                <Send size={24} /> Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>
    </motion.div>
  )
}

export default ContactPage
