import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 'project1',
    title: 'Fintech Dashboard',
    category: 'Web Application',
    description: 'A comprehensive financial analytics dashboard with real-time data visualization.',
    image: 'https://images.pexels.com/photos/7821528/pexels-photo-7821528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/work/fintech-dashboard',
  },
  {
    id: 'project2',
    title: 'HealthTrack App',
    category: 'Mobile Application',
    description: 'Mobile health tracking solution with personalized insights and recommendations.',
    image: 'https://images.pexels.com/photos/3952072/pexels-photo-3952072.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/work/healthtrack-app',
  },
  {
    id: 'project3',
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'Full-featured e-commerce platform with seamless payment integration and inventory management.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    link: '/work/ecommerce-platform',
  },
];

const WorkSection: React.FC = () => {
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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="section bg-background/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="mb-6">Featured Projects</h2>
          <p className="text-white/70 text-lg">
            Explore our portfolio of successful projects that showcase our expertise
            and commitment to delivering exceptional software solutions.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <Link 
            to="/work" 
            className="btn-secondary group"
          >
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
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
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      initial="hidden"
      animate={cardInView ? 'visible' : 'hidden'}
      className="group"
    >
      <Link to={project.link} className="block overflow-hidden">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="aspect-w-16 aspect-h-12 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{ aspectRatio: '16/12', objectFit: 'cover' }}
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-80"></div>
          <div className="absolute bottom-0 left-0 p-6 w-full">
            <span className="inline-block text-xs font-medium text-primary mb-2 uppercase tracking-wider">
              {project.category}
            </span>
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-white/70 text-sm mb-4 max-w-sm">
              {project.description}
            </p>
            <span className="inline-flex items-center text-primary text-sm font-medium hover:text-secondary transition-colors">
              View Case Study
              <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default WorkSection;