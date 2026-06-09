import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppButton = () => {
  // Replace with actual WhatsApp number
  const whatsappNumber = "9665560571";
  const message = encodeURIComponent("Hello! I would like to inquire about your services.");

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 bg-[#25D366] hover:bg-[#1ebd57] text-white rounded-full shadow-[0_4px_14px_0_rgba(37,211,102,0.39)] hover:shadow-[0_10px_25px_rgba(37,211,102,0.6)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
      <span className="absolute right-full mr-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-lg border border-slate-100 dark:border-slate-700 pointer-events-none group-hover:translate-x-0 translate-x-2">
        Chat with us
      </span>
    </motion.a>
  );
};

export default WhatsAppButton;
