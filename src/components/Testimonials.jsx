import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

function Testimonials() {
  const testimonials = [
    {
      name: 'Swetha Manot',
      company: 'Executive Director, Anand Rathi Wealth Ltd',
      review:
        'I regularly refer my clients to Kayadu Consulting LLP for income tax matters. Their team consistently delivers accurate solutions within the committed timelines and is always quick to respond to client requirements. Their professionalism, technical expertise, and reliability make them a trusted partner for both me and my clients.',
      rating: 5,
    },
    {
      name: 'Ameen Batcha',
      company: 'VP, Anand Rathi Wealth Ltd',
      review:
        'I had a great experience with their tax advisory services. The team has a solution-oriented approach, providing clear, practical, and effective guidance. Their expertise, responsiveness, and professional support made the entire process smooth and seamless. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Preshit Bakre',
      company: 'Desai Infra',
      review:
        'Very reliable consultancy team. They simplified GST filings and compliance management for us.',
      rating: 5,
    },
    {
      name: 'Blue Agate IT Solutions LLP',
      company: '',
      review:
        'Working with Kayadu Consulting has been a great experience. Devendra and Divya are highly professional, responsive, and provide clear, practical guidance. Their proactive approach and attention to detail make financial and compliance matters seamless. We value their support and highly recommend their services.',
      rating: 5,
    },
  ]

  const [index, setIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto Slide with Pause on Hover
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setIndex((prev) => {
        const maxIndex = isMobile
          ? testimonials.length - 1
          : testimonials.length - 2

        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 3500)

    return () => clearInterval(interval)
  }, [isMobile, testimonials.length, isPaused])

  const maxDots = isMobile
    ? testimonials.length
    : testimonials.length - 1

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-900 py-16 md:py-24 transition-colors duration-300"
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center">
          <p className="text-brand-teal font-semibold tracking-wide uppercase text-sm mb-2">
            Client Reviews
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Trusted By Businesses
          </h2>
        </div>

        {/* Slider */}
        <div
          className="mt-12 md:mt-20 overflow-hidden -mx-3 md:-mx-4 px-3 md:px-4 py-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <motion.div
            className="flex"
            animate={{
              x: `-${index * (100 / testimonials.length)}%`,
            }}
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
            style={{
              width: `${testimonials.length * (isMobile ? 100 : 50)}%`,
            }}
          >
            {testimonials.map((item, i) => (
              <div
                key={i}
                className="px-3 md:px-4"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="h-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl md:rounded-[32px] p-6 md:p-8 shadow-lg shadow-slate-200/50 dark:shadow-none transition-all duration-300">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  {/* Review */}
                  <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                    "{item.review}"
                  </p>

                  {/* User */}
                  <div className="mt-6 md:mt-8">
                    <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-slate-500 dark:text-slate-400 text-sm">
                      {item.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-10">
          {Array.from({ length: maxDots }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                  setIndex(i)
                  setIsPaused(true)
                }}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === i
                  ? 'bg-brand-teal w-8 md:w-10'
                  : 'bg-slate-300 dark:bg-slate-700 w-2 md:w-3 hover:bg-brand-teal/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials