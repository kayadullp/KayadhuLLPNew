import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, ChevronRight, PhoneCall, ArrowRight, ChevronDown } from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { servicesData } from '../data/services';
import { Helmet } from 'react-helmet-async';

const ServiceDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contentRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const selectedService = servicesData.find(s => s.id === id);
  const relatedServices = servicesData.filter(s => s.id !== id).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (!contentRef.current) return;

    const container = contentRef.current;
    const groups = container.querySelectorAll('.group');

    groups.forEach((group, index) => {
      if (group.dataset.accordionInitialized) return;
      group.dataset.accordionInitialized = 'true';

      const heading = group.querySelector('h3, h4');
      const content = group.querySelector('ul');
      
      if (heading && content) {
        // Prepare group container
        group.classList.remove('hover:-translate-y-1', 'hover:shadow-2xl');
        if (index === 0) group.classList.add('is-expanded');

        // Style heading
        heading.classList.add('cursor-pointer', 'select-none', 'flex', 'items-center', 'justify-between', 'w-full', 'group/heading', 'transition-colors');
        
        // Wrap existing heading text/elements in a div to keep layout intact
        const headingText = document.createElement('div');
        headingText.className = 'flex items-center gap-3 pr-4 pointer-events-none';
        while (heading.firstChild) {
            headingText.appendChild(heading.firstChild);
        }
        heading.appendChild(headingText);

        // Create Icon Container
        const iconContainer = document.createElement('div');
        iconContainer.className = 'accordion-icon flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 group-hover/heading:bg-brand-teal group-hover/heading:text-white transition-all duration-300 pointer-events-none';
        iconContainer.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);"><path d="m6 9 6 6 6-6"/></svg>';
        heading.appendChild(iconContainer);

        // Create wrappers for the content to animate max-height smoothly
        const contentWrapper = document.createElement('div');
        contentWrapper.className = 'accordion-content-wrapper';
        contentWrapper.style.transition = 'max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease-in-out, margin-top 0.4s ease';
        contentWrapper.style.overflow = 'hidden';

        const contentInner = document.createElement('div');
        contentInner.className = 'accordion-content-inner';
        
        // Move content inside wrappers
        content.parentNode.insertBefore(contentWrapper, content);
        contentInner.appendChild(content);
        contentWrapper.appendChild(contentInner);

        // Initial setup
        if (index === 0) {
            // Expanded
            contentWrapper.style.maxHeight = contentInner.scrollHeight + 200 + 'px';
            contentWrapper.style.opacity = '1';
            contentWrapper.style.marginTop = '1.5rem';
            iconContainer.querySelector('svg').style.transform = 'rotate(180deg)';
            heading.style.marginBottom = '0';
        } else {
            // Collapsed
            contentWrapper.style.maxHeight = '0px';
            contentWrapper.style.opacity = '0';
            contentWrapper.style.marginTop = '0';
            iconContainer.querySelector('svg').style.transform = 'rotate(0deg)';
            heading.style.marginBottom = '0';
        }
      }
    });

    // Use event delegation for clicks
    const handleAccordionClick = (e) => {
      const heading = e.target.closest('h3.cursor-pointer, h4.cursor-pointer');
      if (!heading) return;
      
      e.preventDefault();
      const group = heading.closest('.group');
      if (!group) return;

      const isExpanded = group.classList.contains('is-expanded');
      const contentWrapper = group.querySelector('.accordion-content-wrapper');
      const contentInner = group.querySelector('.accordion-content-inner');
      const icon = group.querySelector('.accordion-icon svg');

      if (!isExpanded) {
        // Expand
        group.classList.add('is-expanded');
        contentWrapper.style.maxHeight = contentInner.scrollHeight + 200 + 'px';
        contentWrapper.style.opacity = '1';
        contentWrapper.style.marginTop = '1.5rem';
        icon.style.transform = 'rotate(180deg)';
      } else {
        // Collapse
        group.classList.remove('is-expanded');
        contentWrapper.style.maxHeight = '0px';
        contentWrapper.style.opacity = '0';
        contentWrapper.style.marginTop = '0';
        icon.style.transform = 'rotate(0deg)';
      }
    };

    container.addEventListener('click', handleAccordionClick);

    // Handle window resize dynamically to recalculate height
    const handleResize = () => {
      const expandedGroups = container.querySelectorAll('.group.is-expanded');
      expandedGroups.forEach(group => {
         const wrapper = group.querySelector('.accordion-content-wrapper');
         const inner = group.querySelector('.accordion-content-inner');
         if (wrapper && inner) {
             wrapper.style.maxHeight = inner.scrollHeight + 200 + 'px';
         }
      });
    };
    window.addEventListener('resize', handleResize);

    return () => {
        container.removeEventListener('click', handleAccordionClick);
        window.removeEventListener('resize', handleResize);
    };
  }, [id, selectedService]);

  if (!selectedService) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Service not found</h2>
        <button onClick={() => navigate('/')} className="text-brand-teal hover:underline flex items-center gap-2 font-medium">
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </button>
      </div>
    );
  }

  const Icon = selectedService.icon;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50 dark:bg-slate-900 min-h-screen flex flex-col pt-16 relative overflow-hidden"
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-brand-teal origin-left z-50"
        style={{ scaleX }}
      />

      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-brand-blue/5 dark:bg-brand-blue/10 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-brand-teal/5 dark:bg-brand-teal/10 blur-[100px]"></div>
      </div>

      <Helmet>
        <title>{selectedService.title} | Kayadu Consulting LLP</title>
        <meta name="description" content={selectedService.description} />
      </Helmet>

      {/* Header / Breadcrumbs */}
      <div className="sticky top-16 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center shadow-sm">
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm font-medium text-slate-500 dark:text-slate-400">
            <Link to="/" className="hover:text-brand-teal transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/#services" className="hover:text-brand-teal transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-slate-800 dark:text-slate-200 line-clamp-1">{selectedService.title}</span>
          </nav>
          <button
            onClick={() => navigate('/#services')}
            className="group flex items-center w-fit space-x-2 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3 py-1.5 rounded-full hover:bg-brand-teal hover:text-white dark:hover:bg-brand-teal transition-all duration-300 shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Services</span>
          </button>
        </div>
      </div>

      {/* Hero Image Section */}
      <div className="relative w-full h-[45vh] min-h-[350px] shrink-0 z-10 overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={selectedService.image}
          alt={selectedService.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent flex items-end">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 flex flex-col md:flex-row items-start md:items-center gap-6">
            <motion.div 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl shrink-0"
            >
              <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner">
                <Icon className="w-10 h-10 text-brand-teal" />
              </div>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-block px-3 py-1 bg-brand-teal/20 border border-brand-teal/30 text-brand-teal backdrop-blur-sm rounded-full text-xs font-semibold tracking-wider uppercase mb-3">
                Expert Service
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-3 tracking-tight leading-tight">{selectedService.title}</h1>
              <p className="text-slate-200 font-medium text-lg max-w-3xl">{selectedService.description}</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 flex-grow flex flex-col gap-12 lg:gap-16">

        {/* Content Area */}
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1.5 bg-brand-teal rounded-full"></div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Service Overview</h2>
            </div>
            
            {/* Rich Text Container */}
            <div 
              ref={contentRef}
              className="prose prose-lg md:prose-xl prose-slate dark:prose-invert max-w-none 
                prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white
                prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b-2 prose-h2:border-brand-teal/20
                prose-h3:text-2xl prose-h3:text-slate-900 dark:prose-h3:text-white prose-h3:mt-10 prose-h3:mb-4
                prose-p:text-slate-600 dark:prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
                prose-strong:text-slate-900 dark:prose-strong:text-white prose-strong:font-bold
                mb-16 bg-white dark:bg-slate-900/50 p-6 sm:p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800"
              dangerouslySetInnerHTML={{ __html: selectedService.detailedDescription }}
            />
          </motion.div>

          {/* How it works Timeline */}
          {selectedService.process && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="h-8 w-1.5 bg-brand-blue dark:bg-brand-teal rounded-full"></div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">How it Works</h2>
              </div>
              
              <div className="bg-white dark:bg-slate-900/50 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-slate-800 relative">
                <div className="hidden md:block absolute top-20 left-12 right-12 h-1 bg-slate-100 dark:bg-slate-800 z-0 rounded-full overflow-hidden">
                   <div className="h-full bg-brand-teal/20 w-full"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  {selectedService.process.map((step, idx) => (
                    <div key={idx} className="relative group">
                      <div className="hidden md:flex justify-center mb-6">
                        <div className="w-12 h-12 bg-white dark:bg-slate-900 rounded-full border-4 border-slate-100 dark:border-slate-800 flex items-center justify-center text-lg font-bold text-slate-400 group-hover:border-brand-teal group-hover:text-brand-teal group-hover:scale-110 transition-all duration-300 shadow-sm relative z-10">
                          {idx + 1}
                        </div>
                      </div>
                      <div className="md:hidden w-10 h-10 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal font-bold mb-4">
                        {idx + 1}
                      </div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3 md:text-center group-hover:text-brand-teal transition-colors">{step.title}</h4>
                      <p className="text-slate-600 dark:text-slate-400 md:text-center leading-relaxed text-sm">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="h-8 w-1.5 bg-brand-teal rounded-full"></div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Key Features</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {selectedService.features.map((feature, idx) => (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  key={idx} 
                  className="group flex items-start gap-4 p-6 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-brand-teal/50 dark:hover:border-brand-teal/50 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-brand-teal/10 dark:hover:shadow-brand-teal/5 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/10 dark:bg-brand-teal/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-brand-teal transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6 text-brand-teal group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-base font-semibold text-slate-700 dark:text-slate-200 mt-2.5 leading-snug">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div className="bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 py-16 mt-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-brand-teal/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-brand-blue/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 dark:bg-slate-800/50 p-10 md:p-16 rounded-[3rem] border border-slate-100 dark:border-slate-700 max-w-4xl mx-auto shadow-2xl shadow-slate-200/50 dark:shadow-none"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">Ready to simplify your compliances?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">Let our experts handle the heavy lifting while you focus on growing your business. Reach out today for a personalized consultation.</p>
            
            <button
              onClick={() => {
                navigate('/#contact');
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="inline-flex items-center justify-center gap-3 py-4 px-10 bg-brand-teal hover:bg-brand-teal/90 text-white font-semibold text-lg rounded-full transition-all duration-300 shadow-lg shadow-brand-teal/30 hover:shadow-brand-teal/50 hover:-translate-y-1"
            >
              <PhoneCall className="w-5 h-5" />
              Get Expert Assistance
            </button>
          </motion.div>
        </div>
      </div>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <div className="bg-slate-50 dark:bg-slate-900 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Other Services You Might Need</h2>
                <p className="text-slate-600 dark:text-slate-400 mt-2">Explore our comprehensive suite of professional services.</p>
              </div>
              <button 
                onClick={() => navigate('/#services')}
                className="text-brand-teal font-semibold flex items-center gap-1 hover:underline"
              >
                View all <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service, idx) => {
                const RelatedIcon = service.icon;
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    key={service.id}
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="group cursor-pointer bg-white dark:bg-slate-800 p-6 rounded-3xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                  >
                    <div className="w-14 h-14 bg-brand-teal/10 dark:bg-brand-teal/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-teal group-hover:scale-110 transition-all duration-300">
                      <RelatedIcon className="w-7 h-7 text-brand-teal group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-teal transition-colors line-clamp-2">{service.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      )}

    </motion.div>
  );
};

export default ServiceDetail;