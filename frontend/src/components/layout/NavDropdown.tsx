import React from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

interface DropdownItem {
  name: string
  path: string
}

interface NavDropdownProps {
  label: string
  items: DropdownItem[]
  active?: boolean
}

const NavDropdown = ({ label, items, active }: NavDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`flex items-center space-x-1 text-sm font-bold tracking-wide uppercase transition-colors px-6 py-2 rounded-full ${
          active || isOpen ? 'bg-gai-teal text-white' : 'text-gai-teal hover:text-gai-gold'
        }`}
      >
        <span>{label}</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gai-teal/5 overflow-hidden py-2 z-[60]"
          >
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="block px-6 py-3 text-sm font-bold text-gai-teal hover:bg-gai-teal/5 hover:text-gai-gold transition-all"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default NavDropdown
