import React from 'react';
import { motion } from 'framer-motion';
import onkarImg from '../assets/images/onkar.webp';
import divyaImg from '../assets/images/Divya.webp';
import unnatImg from '../assets/images/Unnat.jpeg';

const Team = () => {
  const team = [
    {
      name: 'Divya Gandhi',
      role: 'Associate Partner',
      bio: [
        'Divya Gandhi has been associated with the firm since its inception. She is a CA Finalist, MBA (Finance), Diploma Holder in Taxation Laws, and a Commerce Graduate with extensive experience in business compliance, accounting, and advisory services.',
        'She plays a pivotal role in managing client engagements across accounting, GST compliance, ROC compliances, business registrations, and incorporation of entities. Her expertise extends to regulatory filings, bookkeeping supervision, financial documentation and tax compliance management.'
      ],
      image: divyaImg,
    },
    {
      name: 'CA Unnat Chandak',
      role: 'Associate Chartered Accountant',
      bio: [
        'CA Unnat Chandak brings expertise in accounting, audit, and indirect tax matters. He plays a key role in managing GST litigation matters, financial reporting, and compliance engagements.',
        'He oversees the finalization of books of accounts, preparation of financial statements, and audit-related assignments, ensuring adherence to applicable regulatory and professional standards. With a practical approach and strong technical knowledge, he assists clients in navigating complex tax and compliance challenges while supporting sound financial management and business growth.'
      ],
      image: unnatImg,
    },
    {
      name: 'Onkar Charkha',
      role: 'Manager – Audit & Assurance',
      bio: [
        'Onkar Charkha is associated with Kayadu Consulting LLP in the Audit & Assurance practice. As a Chartered Accountancy Finalist, he is actively involved in statutory audits, financial reporting, and compliance assignments.',
        'He assists clients in strengthening their financial processes through effective audit procedures, regulatory compliance, and financial analysis. With a strong focus on accuracy and professional standards, Onkar contributes to delivering reliable and practical solutions that support informed business decisions.'
      ],
      image: onkarImg,
    },

  ];

  return (
    <section id="team" className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-slate-50 dark:bg-slate-800 rounded-2xl px-6 py-8 shadow-lg border border-slate-100 dark:border-slate-700 hover:border-brand-teal/50 dark:hover:border-brand-teal/50 transition-all duration-300 flex flex-col items-center text-center gap-6 hover:-translate-y-1 hover:shadow-2xl h-full"
            >
              <div className="w-36 h-36 md:w-40 md:h-40 shrink-0 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center border-4 border-white dark:border-slate-900 shadow-xl overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(20,184,166,0.4)] transition-all duration-500">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-110 group-hover:rotate-2 transition-transform duration-500 ease-out" />
                ) : (
                  <span className="text-4xl font-bold text-slate-400 dark:text-slate-500">{member.name.charAt(0)}</span>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{member.name}</h4>
                  <p className="text-brand-teal font-medium text-base mt-1 mb-4">{member.role}</p>
                  <div className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed text-justify space-y-3">
                    {member.bio.map((para, idx) => (
                      <p key={idx} className="indent-6">{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;