import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CursorFollower from './components/ui/CursorFollower';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  useEffect(() => {
    // Add background scroll animation
    const handleScroll = () => {
      document.body.style.backgroundPositionY = `${window.scrollY * 0.1}px`;
    };

    // Observe elements for scroll animations
    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      elements.forEach((element) => observer.observe(element));
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', observeElements);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', observeElements);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CursorFollower />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;