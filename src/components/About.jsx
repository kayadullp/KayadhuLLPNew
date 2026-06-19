import React, { useState } from 'react';
import { Target, Award, Zap, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import founderImg from '../assets/images/Devendra.webp';

const About = () => {
  const [isBioExpanded, setIsBioExpanded] = useState(false);

  return (
    <section id="about" className="bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-teal font-semibold tracking-wide uppercase text-sm mb-2"
            >
              About Us
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Empowering Growth Through Financial Excellence
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed"
            >
              Founded in 2023, Kayadu Consulting LLP has established itself as a premier chartered accountancy firm. We believe in moving beyond traditional number-crunching to become strategic partners in our clients' success.
            </motion.p>
            
            <div className="space-y-6">
              {[
                { title: 'Client-Centric Approach', desc: 'Your goals drive our strategies.', icon: Target },
                { title: 'Uncompromising Integrity', desc: 'Highest standards of ethical practice.', icon: Award },
                { title: 'Agile & Modern', desc: 'Adapting to the latest financial tech.', icon: Zap },
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700">
                    <item.icon className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Founder Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group hover:border-brand-teal/50 dark:hover:border-brand-teal/50 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.2)] dark:hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)] hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-teal/10 mix-blend-overlay z-10 pointer-events-none"></div>
              <img 
                src={founderImg} 
                alt="Devendra Biyani - Founder" 
                className="w-full h-[500px] object-cover object-top bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/90 via-slate-900/60 to-transparent p-6 sm:p-8 pt-20 z-20 translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <h4 className="text-2xl font-bold text-white mb-1">Devendra Biyani</h4>
                <p className="text-brand-teal font-medium text-lg">Founder & Managing Director</p>
                <p className="text-slate-300 mt-2 text-sm max-w-md hidden sm:block">Leading Kayadu Consulting with over 15 years of expertise in strategic financial advisory and corporate compliance.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Founder Bio Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 dark:border-slate-800 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">Meet the Founder</h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                Introducing Mr. Devendra K Biyani, the Managing Partner and driving force behind KAYADU CONSULTING LLP. With an unwavering commitment to excellence, Mr. Devendra K Biyani has established himself as a leading figure in the field of finance and taxation.
              </p>
              <p>
                Drawing upon a strong educational foundation, Mr. Devendra K Biyani possesses a deep understanding of financial intricacies and tax regulations. They have successfully completed an MBA in Finance, equipping them with comprehensive knowledge in financial management, strategic planning, and investment analysis. Furthermore, Mr. Devendra K Biyani's exceptional academic performance has earned them the prestigious distinction of being a Rank Holder in the Diploma in Taxation Laws from Pune University.
              </p>

              <AnimatePresence>
                {isBioExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4 overflow-hidden"
                  >
                    <p>
                        Driven by an insatiable appetite for learning and professional growth, Mr. Devendra K Biyani continuously enhances his expertise in taxation, finance, and regulatory compliance. By staying abreast of evolving tax laws, business regulations, and industry best practices, he is committed to delivering innovative, practical, and effective solutions that help clients navigate complex financial and compliance challenges with confidence.
                    </p>
                    <p>
                      At KAYADU CONSULTING LLP, Mr. Devendra K Biyani's expertise serves as a cornerstone of the firm's success. They possess a deep understanding of the complexities associated with compliance and taxation, and their ability to navigate through these intricacies sets them apart. Whether it is assisting businesses in optimizing their tax structures, ensuring regulatory compliance, or providing sound financial advice, Mr. Devendra K Biyani's passion and proficiency make them a trusted advisor and partner for clients across various industries.
                    </p>
                    <p>
                      With an unwavering commitment to delivering exceptional service, Mr. Devendra K Biyani combines their extensive knowledge, analytical skills, and attention to detail to provide tailored solutions that meet the unique needs of each client. They are known for their professionalism, integrity, and dedication to fostering long-term relationships built on trust and mutual success.
                    </p>
                    <p>
                      In summary, Mr. Devendra K Biyani, as the Managing Partner of KAYADU CONSULTING LLP, brings a wealth of expertise and passion to the realm of finance and taxation. With a strong educational background, a relentless pursuit of professional growth, and an unwavering commitment to client satisfaction, Mr. Devendra K Biyani is a trusted advisor and a driving force behind the firm's success.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <button 
              onClick={() => setIsBioExpanded(!isBioExpanded)}
              className="mt-6 flex items-center space-x-2 text-brand-teal font-semibold hover:text-brand-blue dark:hover:text-brand-blue transition-colors group"
            >
              <span>{isBioExpanded ? 'Read Less' : 'Read Full Journey'}</span>
              {isBioExpanded ? (
                <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              ) : (
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              )}
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
