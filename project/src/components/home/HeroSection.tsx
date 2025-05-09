import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowDown, ChevronRight } from 'lucide-react';
import gsap from 'gsap';

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<HTMLDivElement>(null);
  const changingWordsRef = useRef<HTMLSpanElement>(null);

  const words = [
    'ile Yazılım',
    'ile İnovasyon',
    'ile Teknoloji',
    'ile Gelecek',
    'ile Başarı',
  ];

  useEffect(() => {
    if (!sectionRef.current || !mouseRef.current) return;
    
    const section = sectionRef.current;
    const circle = circleRef.current;
    const mouse = mouseRef.current;
    
    // Mouse following gradient effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = section.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      gsap.to(mouse, {
        x: x - mouse.offsetWidth / 2,
        y: y - mouse.offsetHeight / 2,
        duration: 1,
        ease: 'power2.out',
      });
    };

    // Changing words animation
    let currentIndex = 0;
    const wordElement = changingWordsRef.current;

    const changeWord = () => {
      if (!wordElement) return;
      gsap.to(wordElement, {
        opacity: 0,
        y: 20,
        duration: 0.5,
        onComplete: () => {
          currentIndex = (currentIndex + 1) % words.length;
          wordElement.textContent = words[currentIndex];
          gsap.to(wordElement, {
            opacity: 1,
            y: 0,
            duration: 0.5,
          });
        },
      });
    };

    const wordInterval = setInterval(changeWord, 3000);
    
    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const speed = 0.5;
      
      if (circle) {
        gsap.to(circle, {
          y: scrolled * speed,
          rotation: scrolled * 0.03,
          duration: 0.5,
          ease: 'power1.out',
        });
      }
    };
    
    section.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Initial animations
    const tl = gsap.timeline();
    
    tl.from('.hero-title .word', {
      y: 100,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: 'power3.out',
    })
    .from('.hero-subtitle', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.4')
    .from('.hero-cta', {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: 'power3.out',
    }, '-=0.3')
    .from(circle, {
      scale: 0,
      opacity: 0,
      duration: 1,
      ease: 'elastic.out(1, 0.5)',
    }, '-=0.5');
    
    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(wordInterval);
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      {/* Mouse following gradient */}
      <div
        ref={mouseRef}
        className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl pointer-events-none opacity-50 transition-transform duration-1000"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none"></div>
      
      <div 
        ref={circleRef}
        className="absolute top-1/4 right-[10%] w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl opacity-60 pointer-events-none"
      ></div>
      
      <div className="absolute top-20 left-[15%] w-[4vw] h-[4vw] rounded-full bg-accent/30 animate-float-slow blur-xl pointer-events-none"></div>
      
      <div className="absolute bottom-[15%] right-[30%] w-[6vw] h-[6vw] rounded-full bg-primary/30 animate-float blur-2xl pointer-events-none"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="hero-title mb-6 flex items-center justify-center flex-wrap">
            <span className="word relative inline-block mr-[0.3em] aurora-text text-gradient">
              Kuisoft
            </span>
            <span ref={changingWordsRef} className="word relative inline-block">
              {words[0]}
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl leading-relaxed mb-10 text-white/80 max-w-2xl mx-auto">
            Fikirlerinizi verimli, ölçeklenebilir ve geleceğe hazır dijital ürünlere dönüştürüyoruz.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="hero-cta"
            >
              <Link to="/contact" className="btn-primary text-base group">
                Hemen Başlayın
                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="hero-cta"
            >
              <Link to="/services" className="btn-secondary text-base group">
                Hizmetlerimiz
                <ChevronRight className="ml-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
        
        {/* Scroll down indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50 flex flex-col items-center space-y-2 cursor-pointer hover:text-white transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          onClick={() => {
            const servicesSection = document.getElementById('services');
            if (servicesSection) {
              servicesSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-sm font-medium">Aşağı Kaydır</span>
          <ArrowDown className="h-4 w-4" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;