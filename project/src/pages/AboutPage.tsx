import React from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
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
      <section className="pt-32 pb-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
              About Us
            </span>
            <h1 className="mb-6">Our Story</h1>
            <p className="text-white/70 text-lg">
              Learn more about Kuisoft, our mission, values, and the team behind our innovative software solutions.
            </p>
          </div>
          
          <div className="grid-pattern relative h-[300px] rounded-2xl overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">Coming Soon</h2>
            </div>
          </div>
          
          <p className="text-center text-white/70">
            We're currently building our about page.
            Please check back soon or contact us to learn more about our company.
          </p>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;