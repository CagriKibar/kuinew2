import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import PortfolioSlider from '../components/home/Webdesign';
import LogoSlider from '../components/home/LogoSlider';
import ServiceSection from '../components/home/ServiceSection';
import WorkSection from '../components/home/WorkSection';
import TestimonialSection from '../components/home/TestimonialSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.5 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const webProjects = [
    {
      title: 'Wanderly',
      description: 'Seyahat planlama uygulaması.',
      image: 'https://via.placeholder.com/1200x550',
      link: '/web-design/wanderly',
      type: 'web',
    },
    {
      title: 'Regulate',
      description: 'Fitness takip uygulaması.',
      image: 'https://via.placeholder.com/1200x550',
      link: '/web-design/regulate',
      type: 'web',
    },
    {
      title: 'AIgnite',
      description: 'Yapay zeka destekli asistan.',
      image: 'https://via.placeholder.com/1200x550',
      link: '/web-design/aignite',
      type: 'web',
    },
  ];

  const appProjects = [
    {
      title: 'Waitlista',
      description: 'Bekleme listesi yönetim uygulaması.',
      image: 'https://via.placeholder.com/1200x550',
      link: '/app-design/waitlista',
      type: 'app',
    },
    {
      title: 'Appit',
      description: 'Mobil uygulama mağazası.',
      image: 'https://via.placeholder.com/1200x550',
      link: '/app-design/appit',
      type: 'app',
    },
    {
      title: 'Pix',
      description: 'Fotoğraf paylaşım uygulaması.',
      image: 'https://via.placeholder.com/1200x550',
      link: '/app-design/pix',
      type: 'app',
    },
  ];

  // Tek bir slider için projeleri birleştir
  const combinedProjects = [...webProjects, ...appProjects];

  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <PortfolioSlider projects={combinedProjects} title="Tüm Projeler" />
      <LogoSlider />
      <ServiceSection />
      <WorkSection />
      <TestimonialSection />
      <CTASection />
    </motion.div>
  );
};

export default HomePage;
