import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import LogoSlider from '../components/home/LogoSlider';
import ServiceSection from '../components/home/ServiceSection';
import WorkSection from '../components/home/WorkSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CTASection from '../components/home/CTASection';

const HomePage: React.FC = () => {
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <HeroSection />
      <LogoSlider />
      <ServiceSection />
      <WorkSection />
      <TestimonialSection />
      <CTASection />
    </motion.div>
  );
};

export default HomePage;