import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="section">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container"
      >
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/20 to-secondary/20 p-8 md:p-16">
          {/* Background decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <motion.span 
              variants={itemVariants}
              className="inline-block text-sm font-semibold text-primary mb-2 uppercase tracking-wider"
            >
              Ready to Get Started?
            </motion.span>
            <motion.h2 variants={itemVariants} className="mb-6">
              Let's Transform Your 
              <span className="text-gradient"> Ideas into Reality</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-white/80 text-lg mb-8">
              Connect with our experts to discuss your project requirements and discover how
              our innovative software solutions can drive your business forward.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                to="/contact" 
                className="btn-primary text-base group"
              >
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;