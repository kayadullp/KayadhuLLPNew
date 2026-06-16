import React from 'react';
import { ArrowRight, ShieldCheck, TrendingUp, Users, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-slate-900 z-0">
        <motion.div 
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-brand-blue/5 dark:bg-brand-blue/20 blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-brand-teal/10 dark:bg-brand-teal/20 blur-3xl"
        ></motion.div>
      </div>

      <div className="section-container relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 mb-8"
        >
          <ShieldCheck className="w-4 h-4 text-brand-teal" />
          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Trusted Compliance Partner</span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6 leading-tight"
        >
          Streamlining Compliance & Taxation For Patrons - <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-teal">
            Making Your Journey Easy
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed"
        >
          Kayadu Consulting LLP provides reliable business registration, tax compliance, GST, legal certification, and digital signature services tailored to support startups, businesses, and growing enterprises with accuracy and efficiency. We combine traditional trust with modern technological efficiency to drive your business forward.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <a
            href="#contact"
            className="group px-8 py-4 bg-brand-teal text-white rounded-full font-semibold hover:bg-brand-teal/90 transition-all flex items-center shadow-lg shadow-brand-teal/20"
          >
            Get a Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full font-semibold border border-slate-200 dark:border-slate-700 hover:border-brand-teal dark:hover:border-brand-teal transition-all shadow-sm"
          >
            Explore Services
          </a>
        </motion.div>

        {/* Quick Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mt-20 max-w-4xl mx-auto"
        >
          {[
            { label: 'Years Experience', value: '3+', icon: TrendingUp },
            { label: 'Businesses Served', value: '500+', icon: Users },
            { label: 'Entity Formed', value: '1K+', icon: ShieldCheck }
          ].map((stat, i) => {
             const Icon = stat.icon || ShieldCheck;
             return (
              <div key={i} className="group flex flex-col items-center p-4 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-100 dark:border-slate-700/50 hover:border-brand-teal/50 dark:hover:border-brand-teal/50 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.15)] dark:hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)] hover:-translate-y-2 relative overflow-hidden z-10">
                <div className="absolute -right-10 -top-10 w-24 h-24 bg-brand-teal/10 dark:bg-brand-teal/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                <Icon className="relative z-10 w-8 h-8 text-brand-teal mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]" />
                <span className="relative z-10 text-3xl font-bold text-slate-900 dark:text-white mb-1 transition-colors duration-300">{stat.value}</span>
                <span className="relative z-10 text-sm font-medium text-slate-500 dark:text-slate-400 text-center transition-colors duration-300">{stat.label}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
