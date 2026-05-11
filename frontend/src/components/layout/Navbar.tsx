import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Landmark } from 'lucide-react'

import NavDropdown from './NavDropdown'

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Programmes', path: '/programmes' },
    { name: 'Impact', path: '/impact' },
  ]

  const joinOptions = [
    { name: 'Become a Member', path: '/join' },
    { name: 'Give / Donate', path: '/donate' },
    { name: 'Apply for Support', path: '/apply' },
  ]

  return (
    <nav className="fixed w-full z-50 bg-gai-white/95 backdrop-blur-md border-b border-gai-teal/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-3 group relative z-10">
            <div className="w-10 h-10 bg-gai-teal rounded-xl flex items-center justify-center text-white shadow-lg group-hover:bg-gai-gold transition-colors">
              <Landmark size={22} />
            </div>
            <span className="font-sans font-bold text-2xl tracking-tighter text-gai-teal">GAI</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-bold tracking-wide uppercase hover:text-gai-gold transition-colors ${
                  location.pathname === link.path ? 'text-gai-gold' : 'text-gai-teal'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <NavDropdown 
              label="Join the Cycle" 
              items={joinOptions} 
              active={['/join', '/donate', '/apply'].includes(location.pathname)}
            />
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gai-teal">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gai-white border-b border-gai-teal/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg font-bold text-gai-teal py-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gai-teal/10">
                <p className="text-xs font-bold text-gai-gold uppercase tracking-widest mb-4">Join the Cycle</p>
                {joinOptions.map((option) => (
                  <Link
                    key={option.name}
                    to={option.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-lg font-bold text-gai-teal py-3"
                  >
                    {option.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
