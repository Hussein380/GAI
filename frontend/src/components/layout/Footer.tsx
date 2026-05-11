import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gai-teal text-gai-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-white font-sans">Global Alumni Initiatives</h3>
            <p className="text-gai-white/70 max-w-md mb-8 leading-relaxed">
              Founded by scholarship beneficiaries to expand access to quality education across Africa. We mobilise a global network to pay opportunity forward.
            </p>
            <div className="flex space-x-4 mb-8">
              <a href="https://facebook.com/globalalumniinitiatives" target="_blank" rel="noopener noreferrer" className="hover:text-gai-gold transition-colors"><Facebook size={20} /></a>
              <a href="https://twitter.com/GAI_Initiatives" target="_blank" rel="noopener noreferrer" className="hover:text-gai-gold transition-colors"><Twitter size={20} /></a>
              <a href="https://instagram.com/globalalumniinitiatives" target="_blank" rel="noopener noreferrer" className="hover:text-gai-gold transition-colors"><Instagram size={20} /></a>
              <a href="https://linkedin.com/company/global-alumni-initiatives" target="_blank" rel="noopener noreferrer" className="hover:text-gai-gold transition-colors"><Linkedin size={20} /></a>
            </div>
            <div className="space-y-4 text-gai-white/70">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-xs">📞</span>
                </div>
                <div>
                  <span className="block text-[10px] uppercase tracking-widest opacity-50">Official Enquiries</span>
                  <a href="tel:+254717417326" className="hover:text-gai-gold transition-colors font-medium">+254 717 417 326</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                  <span className="text-xs">📞</span>
                </div>
                <a href="tel:+254748825371" className="hover:text-gai-gold transition-colors">+254 748 825 371</a>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Organisation</h4>
            <ul className="space-y-4 text-gai-white/70">
              <li><Link to="/about" className="hover:text-gai-gold transition-colors">About Us</Link></li>
              <li><Link to="/programmes" className="hover:text-gai-gold transition-colors">What We Do</Link></li>
              <li><Link to="/impact" className="hover:text-gai-gold transition-colors">Our Impact</Link></li>
              <li><Link to="/contact" className="hover:text-gai-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-wider text-sm">Join the Cycle</h4>
            <ul className="space-y-4 text-gai-white/70">
              <li><Link to="/join" className="hover:text-gai-gold transition-colors">Become a Member</Link></li>
              <li><Link to="/donate" className="hover:text-gai-gold transition-colors">Give / Donate</Link></li>
              <li><Link to="/apply" className="hover:text-gai-gold transition-colors">Apply for Support</Link></li>
              <li><Link to="/partners" className="hover:text-gai-gold transition-colors">Partners</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gai-white/40">
          <p>© 2025 Global Alumni Initiatives (GAI). All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gai-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gai-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
