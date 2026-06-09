import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Mail } from 'lucide-react';
import omkarImg from '../assets/images/onkar.webp';
import divyaImg from '../assets/images/Divya.webp';

const Team = () => {
  const team = [
    {
      name: 'Divya Gandhi',
      role: 'Head of Taxation',
      bio: 'Ex-Big4 tax specialist focusing on cross-border transactions and corporate structuring.',
      image: divyaImg,
    },
    {
      name: 'Omkar Charkha',
      role: 'Managing Partner',
      bio: 'FCA with 5+ years of experience in statutory audits for Fortune 500 companies.',
      image: omkarImg,
    },
    
  ];

  return (
    <section id="team" className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-teal font-semibold tracking-wide uppercase text-sm mb-2"
          >
            Leadership
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Meet Our Experts
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400"
          >
            Our leadership team brings decades of combined experience from top-tier financial institutions to drive your success.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-100 dark:border-slate-700 hover:border-brand-teal/50 dark:hover:border-brand-teal/50 transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6"
            >
              <div className="w-40 h-40 shrink-0 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(20,184,166,0.3)] transition-all duration-500">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <span className="text-4xl font-bold text-slate-400 dark:text-slate-500">{member.name.charAt(0)}</span>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-blue/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-3 backdrop-blur-sm">
                  <a href="#" aria-label={`Visit ${member.name}'s Website`} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue hover:text-brand-teal transition-colors">
                    <Globe className="w-5 h-5" aria-hidden="true" />
                  </a>
                  <a href="#" aria-label={`Email ${member.name}`} className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-blue hover:text-brand-teal transition-colors">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
              <div className="text-center sm:text-left flex-1 py-2">
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{member.name}</h4>
                <p className="text-brand-teal font-medium text-base mt-1 mb-3">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;