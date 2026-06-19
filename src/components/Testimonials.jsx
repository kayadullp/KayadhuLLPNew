import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Swetha Manot',
      company: 'Executive Director, Anand Rathi Wealth Ltd',
      review:
        'I regularly refer my clients to Kayadu Consulting LLP for income tax matters. Their team consistently delivers accurate solutions within the committed timelines and is always quick to respond to client requirements. Their professionalism, technical expertise, and reliability make them a trusted partner for both me and my clients.',
      rating: 5,
      initials: 'SM',
      avatarBg: 'from-cyan-400 to-brand-blue',
    },
    {
      name: 'Ameen Batcha',
      company: 'VP, Anand Rathi Wealth Ltd',
      review:
        'I had a great experience with their tax advisory services. The team has a solution-oriented approach, providing clear, practical, and effective guidance. Their expertise, responsiveness, and professional support made the entire process smooth and seamless. Highly recommended.',
      rating: 5,
      initials: 'AB',
      avatarBg: 'from-purple-500 to-indigo-600',
    },
    {
      name: 'Prabha Bakre',
      company: 'Blue Agate IT Solutions LLP',
      review:
        'Working with Kayadu Consulting has been a great experience. Devendra and Divya are highly professional, responsive, and provide clear, practical guidance. Their proactive approach and attention to detail make financial and compliance matters seamless. We value their support and highly recommend their services.',
      rating: 5,
      initials: 'PB',
      avatarBg: 'from-emerald-400 to-brand-teal',
    },
    {
      name: 'Sushil Ghuge',
      company: 'Salaried Individual',
      review:
        'I have been filing my Income Tax Returns through Kayadu Consulting LLP and am very satisfied with their services. The team is professional, responsive, and ensures timely filing. They explain every aspect of my tax return clearly, providing complete transparency and confidence throughout the process. I highly recommend their services.',
      rating: 5,
      initials: 'SG',
      avatarBg: 'from-orange-400 to-rose-500',
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 2;

  // Auto Slide with Pause on Hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [maxIndex, isPaused]);

  const handlePrev = () => {
    setIsPaused(true);
    setIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsPaused(true);
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const maxDots = isMobile ? testimonials.length : testimonials.length - 1;

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-16 md:py-24 transition-colors duration-300"
    >
      {/* Decorative Glow spotlights */}
      <div className="absolute top-[-10%] right-[-10%] w-[400px] h-[400px] bg-brand-blue/10 dark:bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-brand-teal/10 dark:bg-brand-teal/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-teal font-semibold tracking-wide uppercase text-sm mb-2"
          >
            Client Reviews
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight"
          >
            Trusted By Businesses
          </motion.h2>
        </div>

        {/* Slider Wrapper */}
        <div
          className="relative mt-12 md:mt-16 group/slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider viewport */}
          <div className="overflow-hidden px-1 py-4">
            <motion.div
              className="flex"
              animate={{
                x: `-${index * (100 / testimonials.length)}%`,
              }}
              transition={{
                duration: 0.8,
                ease: [0.25, 1, 0.5, 1], // Smooth custom ease-out
              }}
              style={{
                width: `${testimonials.length * (isMobile ? 100 : 50)}%`,
              }}
            >
              {testimonials.map((item, i) => (
                <div
                  key={i}
                  className="px-3 md:px-4 flex-shrink-0"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  {/* Testimonial Card */}
                  <div className="h-full relative overflow-hidden bg-white/70 dark:bg-slate-800/60 backdrop-blur-md border border-slate-200/50 dark:border-slate-700/50 rounded-[2rem] p-6 md:p-8 shadow-lg shadow-slate-200/40 dark:shadow-none hover:shadow-2xl hover:shadow-brand-teal/5 dark:hover:shadow-brand-teal/5 hover:border-brand-teal/40 dark:hover:border-brand-teal/40 hover:-translate-y-1.5 transition-all duration-500 group/card flex flex-col justify-between min-h-[300px]">
                    {/* Glowing Double-quote icon back-accent */}
                    <div className="absolute right-6 top-6 text-slate-200 dark:text-slate-700/40 group-hover/card:text-brand-teal/15 transition-colors duration-500 pointer-events-none z-0">
                      <Quote className="w-12 h-12 md:w-16 md:h-16 rotate-180 stroke-[1.5]" />
                    </div>

                    <div className="relative z-10">
                      {/* Rating stars with subtle drop shadow */}
                      <div className="flex items-center gap-1 mb-5">
                        {[...Array(item.rating)].map((_, starIndex) => (
                          <Star
                            key={starIndex}
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400 filter drop-shadow-[0_2px_4px_rgba(251,191,36,0.3)]"
                          />
                        ))}
                      </div>

                      {/* Review Content */}
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300 text-justify italic">
                        "{item.review}"
                      </p>
                    </div>

                    {/* Client Footer */}
                    <div className="relative z-10 mt-8 pt-5 border-t border-slate-100 dark:border-slate-700/50 flex items-center gap-4">
                      {/* Dynamic Initials Avatar with Gradient */}
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-base bg-gradient-to-br ${item.avatarBg} shadow-md shadow-slate-300 dark:shadow-none shrink-0 group-hover/card:scale-105 transition-transform duration-500`}>
                        {item.initials}
                      </div>
                      <div className="truncate">
                        <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-tight">
                          {item.name}
                        </h4>
                        <p className="mt-1 text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium truncate">
                          {item.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Desktop Left navigation arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-lg hover:bg-brand-teal hover:border-brand-teal dark:hover:bg-brand-teal dark:hover:border-brand-teal hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 z-20 opacity-0 group-hover/slider:opacity-100 focus:opacity-100 transition-opacity hidden md:flex"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Desktop Right navigation arrow */}
          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-[-24px] top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-lg hover:bg-brand-teal hover:border-brand-teal dark:hover:bg-brand-teal dark:hover:border-brand-teal hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 z-20 opacity-0 group-hover/slider:opacity-100 focus:opacity-100 transition-opacity hidden md:flex"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel controls - Dots and Mobile Navigation */}
        <div className="flex items-center justify-center gap-6 mt-8 md:mt-10">
          <button
            onClick={handlePrev}
            className="md:hidden w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-md active:bg-brand-teal active:text-white active:border-brand-teal transition-all shrink-0"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Pagination dots */}
          <div className="flex gap-2">
            {Array.from({ length: maxDots }).map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  setIsPaused(true);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === i
                    ? 'bg-brand-teal w-8 md:w-10'
                    : 'bg-slate-300 dark:bg-slate-700 w-2.5 hover:bg-brand-teal/50'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="md:hidden w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 flex items-center justify-center shadow-md active:bg-brand-teal active:text-white active:border-brand-teal transition-all shrink-0"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;