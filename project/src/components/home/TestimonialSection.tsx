import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Kuisoft transformed our business with an innovative software solution that streamlined our operations and increased efficiency by 40%. Their team was professional, responsive, and delivered beyond our expectations.",
    author: "Sarah Johnson",
    position: "CEO",
    company: "TechGrowth Inc.",
  },
  {
    id: 2,
    quote: "Working with Kuisoft was a game-changer for our startup. They understood our vision and built a mobile application that perfectly captured our brand and user experience goals. Highly recommended!",
    author: "Michael Chen",
    position: "Founder",
    company: "InnovateMobile",
  },
  {
    id: 3,
    quote: "The cloud migration project handled by Kuisoft was flawless. They minimized downtime and ensured a smooth transition while enhancing our security protocols. Their expertise in cloud technologies is unmatched.",
    author: "Emily Rodriguez",
    position: "CTO",
    company: "DataSphere Solutions",
  },
];

const TestimonialSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="section overflow-hidden">
      <motion.div
        ref={ref}
        variants={sectionVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        className="container"
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mb-6">What Our Clients Say</h2>
          <p className="text-white/70 text-lg">
            Don't just take our word for it. Hear what our clients have to say about their experiences
            working with Kuisoft.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-8">
          <div className="absolute top-0 left-0 w-20 h-20 -translate-x-1/2 -translate-y-1/2">
            <Quote className="w-full h-full text-primary/20" />
          </div>
          
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="text-center p-8"
            >
              <blockquote className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10">
                {testimonials[currentIndex].quote}
              </blockquote>
              <div>
                <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
                <p className="text-white/70">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center space-x-4 mt-12">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TestimonialSection;