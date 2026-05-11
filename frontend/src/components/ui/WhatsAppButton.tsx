import React from 'react'
import { MessageSquare } from 'lucide-react'
import { motion } from 'framer-motion'

const WhatsAppButton = () => {
  const phoneNumber = '254717417326'
  const message = 'Hello GAI, I would like to learn more about your initiatives.'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#128C7E] transition-colors group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageSquare size={32} />
      <span className="absolute right-full mr-4 bg-white text-gai-teal px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Chat with us
      </span>
    </motion.a>
  )
}

export default WhatsAppButton
