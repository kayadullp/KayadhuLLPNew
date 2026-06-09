import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_8fg2m1k',
        'template_hn7ykvl',
        form.current,
        '8kMACGh4NEwJWfzHk'
      );
      
      toast.success('Message sent successfully! We will get back to you soon.', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      e.target.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send the message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="section-container">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-teal font-semibold tracking-wide uppercase text-sm mb-2"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Let's Discuss Your Financial Future
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 max-w-2xl mx-auto text-slate-600 dark:text-slate-400"
          >
            Whether you need comprehensive tax strategies or corporate compliance, our team is ready to assist you.
          </motion.p>
        </div>

        <div className="group flex flex-col lg:flex-row gap-12 bg-slate-50 dark:bg-slate-800 rounded-3xl p-8 md:p-12 border border-slate-100 dark:border-slate-700 shadow-xl overflow-hidden relative hover:border-brand-teal/30 dark:hover:border-brand-teal/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.1)] hover:-translate-y-1">
          {/* Subtle Background Glow */}
          <div className="absolute -right-40 -top-40 w-96 h-96 bg-brand-teal/10 dark:bg-brand-teal/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>
          
          {/* Contact Information & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex flex-col z-10"
          >
            <div className="flex-grow">
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Details</h4>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-blue dark:text-brand-teal" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Our Offices</h5>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">Mumbai, Pune & Washim</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-teal/10 dark:bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-teal" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Phone</h5>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">+91 96655 60571</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 dark:bg-brand-blue/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-blue dark:text-brand-teal" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-slate-900 dark:text-white">Email</h5>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">contact@kayadu.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section Inside Details */}
            <div className="mt-10 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700 flex-shrink-0 relative group/map">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.3182760939494!2d73.78691092704578!3d18.604748871512907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b91cd53b0c35%3A0x8e36ada01435cf7d!2sGk%20Dwarka%20Sai%2C%20Rahatani%20Gaon%2C%20Pawana%20Nagar%2C%20Rahatani%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411017!5e0!3m2!1sen!2sin!4v1778616505311!5m2!1sen!2sin" 
                width="100%" 
                height="280" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
              
              {/* Floating Location Box */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:w-[85%] bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 flex items-start gap-3 translate-y-2 opacity-90 group-hover/map:translate-y-0 group-hover/map:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="w-8 h-8 rounded-full bg-brand-teal/10 dark:bg-brand-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-brand-teal" />
                </div>
                <div>
                  <h6 className="text-sm font-bold text-slate-900 dark:text-white">Pune Office</h6>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">Gk Dwarka Sai, Rahatani Gaon, Pimpri-Chinchwad, Maharashtra 411017</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 z-10 flex flex-col"
          >
            <form ref={form} className="space-y-6 flex-grow flex flex-col" onSubmit={handleSubmit}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3.5 rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all outline-none"
                  placeholder="How can we help?"
                />
              </div>

              <div className="flex-grow flex flex-col">
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full flex-grow px-4 py-3.5 min-h-[220px] rounded-lg border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-brand-teal focus:border-transparent transition-all outline-none resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 bg-brand-blue hover:bg-blue-800 disabled:opacity-70 text-white rounded-lg font-semibold flex items-center justify-center transition-colors shadow-lg shadow-brand-blue/20 mt-2"
              >
                {isSubmitting ? (
                  <>Processing <Loader2 className="w-5 h-5 ml-2 animate-spin" /></>
                ) : (
                  <>Send Message <Send className="w-5 h-5 ml-2" /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
