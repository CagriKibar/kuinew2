import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Code, 
  Smartphone, 
  Cloud, 
  Database, 
  Bot, 
  Shield, 
  ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={index}
      className="card group hover:shadow-glow hover:bg-surface/80 hover:border-primary/30 cursor-pointer"
    >
      <div className="mb-4 p-3 w-14 h-14 flex items-center justify-center bg-primary/10 rounded-xl text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
        {title}
      </h3>
      <p className="text-white/70 mb-4 group-hover:text-white/90 transition-colors">
        {description}
      </p>
      <Link 
        to={link} 
        className="flex items-center text-primary font-medium hover:text-secondary transition-colors"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

const ServiceSection: React.FC = () => {
  const services = [
    {
      icon: <Code className="h-7 w-7" />,
      title: "Custom Software Development",
      description: "Tailor-made software solutions designed to meet your specific business needs and challenges.",
      link: "/services/custom-software",
    },
    {
      icon: <Smartphone className="h-7 w-7" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      link: "/services/mobile-apps",
    },
    {
      icon: <Cloud className="h-7 w-7" />,
      title: "Cloud Services",
      description: "Scalable cloud solutions that optimize performance, security, and cost-efficiency.",
      link: "/services/cloud-services",
    },
    {
      icon: <Database className="h-7 w-7" />,
      title: "Database Management",
      description: "Comprehensive database solutions for efficient data storage, retrieval, and analytics.",
      link: "/services/database-management",
    },
    {
      icon: <Bot className="h-7 w-7" />,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that leverage the power of AI to automate processes and gain insights.",
      link: "/services/ai-solutions",
    },
    {
      icon: <Shield className="h-7 w-7" />,
      title: "Cybersecurity",
      description: "Robust security measures to protect your digital assets from evolving cyber threats.",
      link: "/services/cybersecurity",
    },
  ];

  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="services" className="section">
      <div className="container">
        <motion.div
          ref={sectionRef}
          variants={sectionVariants}
          initial="hidden"
          animate={sectionInView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span 
            variants={titleVariants}
            className="inline-block text-sm font-semibold text-primary mb-2 uppercase tracking-wider"
          >
            Our Services
          </motion.span>
          <motion.h2 variants={titleVariants} className="mb-6">
            Comprehensive Software Solutions
          </motion.h2>
          <motion.p variants={titleVariants} className="text-white/70 text-lg">
            We offer a wide range of software development services to help businesses 
            transform their digital presence and operations.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;