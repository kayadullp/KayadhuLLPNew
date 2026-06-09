import React, { Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

// Lazy load below-the-fold components to improve initial load performance
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const About = lazy(() => import('../components/About'));
const Team = lazy(() => import('../components/Team'));
const Contact = lazy(() => import('../components/Contact'));

const LoadingFallback = () => (
  <div className="flex items-center justify-center py-20">
    <Loader2 className="w-8 h-8 text-brand-teal animate-spin" />
  </div>
);

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Suspense fallback={<LoadingFallback />}>
        <Services />
        <Testimonials />
        <About />
        <Team />
        <Contact />
      </Suspense>
    </motion.div>
  );
};

export default Home;