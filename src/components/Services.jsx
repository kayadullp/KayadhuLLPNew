import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { servicesData } from '../data/services';

const Services = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="services" className="bg-slate-50 dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden">
      {/* Spinning Gradient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-[200vw] h-[200vw] md:w-[150vw] md:h-[150vw] flex-shrink-0 opacity-40 dark:opacity-30"
          style={{
            background: 'conic-gradient(from 0deg, #14b8a6, #1e3a8a, #14b8a6, #1e3a8a, #14b8a6)',
            filter: 'blur(80px)'
          }}
        />
      </div>

      <div className="section-container relative z-10">
        <div className="text-center mb-10 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-teal font-semibold tracking-wide uppercase text-sm mb-2"
          >
            Our Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Comprehensive Financial Services
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600 dark:text-slate-400 px-2"
          >
            We offer a full spectrum of chartered accountancy services designed to address the unique challenges of modern businesses.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                variants={itemVariants}
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className="group relative overflow-hidden p-6 md:p-8 bg-slate-50 dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-brand-teal/50 dark:hover:border-brand-teal/50 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)] hover:-translate-y-1 lg:hover:-translate-y-2 active:scale-[0.98] hover:bg-gradient-to-br hover:from-white hover:to-brand-teal/5 dark:hover:from-slate-800 dark:hover:to-brand-teal/10 z-10 cursor-pointer flex flex-col h-full touch-manipulation"
              >
                {/* Glow effect that follows top-right corner on hover */}
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-brand-teal/10 dark:bg-brand-teal/20 blur-3xl rounded-full opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="relative z-10 w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-slate-900 rounded-xl flex items-center justify-center mb-5 md:mb-6 shadow-sm transition-all duration-500 lg:group-hover:scale-110 lg:group-hover:rotate-3 lg:group-hover:shadow-brand-teal/20 lg:group-hover:shadow-lg dark:lg:group-hover:bg-slate-900/80">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-brand-blue dark:text-brand-teal transition-transform duration-500 lg:group-hover:scale-110" />
                </div>
                <h4 className="relative z-10 text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-2 md:mb-3 transition-colors duration-300 group-hover:text-brand-blue dark:group-hover:text-brand-teal">
                  {service.title}
                </h4>
                <p className="relative z-10 text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed transition-colors duration-300 flex-grow">
                  {service.description}
                </p>
                <div className="relative z-10 mt-5 md:mt-6 flex items-center text-brand-teal font-medium text-sm lg:group-hover:translate-x-1 transition-transform duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;