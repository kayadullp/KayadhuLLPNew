import React, { Suspense, lazy, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import { Toaster } from 'react-hot-toast';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';

const Footer = lazy(() => import('./components/Footer'));
const WhatsAppButton = lazy(() => import('./components/WhatsAppButton'));

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // Prevent browser from automatically restoring scroll position on refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      window.scrollTo(0, 0);
      
      // If we are on the homepage and there's a hash, clear it so we stay at the top on reload
      if (location.pathname === '/' && location.hash) {
        navigate('/', { replace: true });
      }
      return;
    }

    if (location.hash) {
      const id = location.hash.replace('#', '');
      let retries = 0;
      const interval = setInterval(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          clearInterval(interval);
        }
        if (retries > 50) { // Stop checking after 5 seconds
          clearInterval(interval);
        }
        retries++;
      }, 100);
      return () => clearInterval(interval);
    } else {
      // If no hash, scroll to top on path change
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash, navigate]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 font-sans selection:bg-brand-teal/30">
      <ScrollProgress />
      <Toaster position="bottom-left" />
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/services/:id" element={<ServiceDetail />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
        <WhatsAppButton />
      </Suspense>
    </div>
  );
}

export default App;