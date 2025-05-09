import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Project {
  id: string;
  title: string;
  image: string;
  category: string;
}

const projects: Project[] = [
  {
    id: 'proje1',
    title: 'E-Ticaret Platformu',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Geliştirme'
  },
  {
    id: 'proje2',
    title: 'Mobil Bankacılık Uygulaması',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Mobil Uygulama'
  },
  {
    id: 'proje3',
    title: 'Yapay Zeka Chatbot',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Yapay Zeka'
  },
  {
    id: 'proje4',
    title: 'Kurumsal Yönetim Sistemi',
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Yazılım Çözümleri'
  },
  {
    id: 'proje5',
    title: 'Restoran Rezervasyon Sistemi',
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Web Uygulaması'
  },
  {
    id: 'proje6',
    title: 'IoT Kontrol Paneli',
    image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'IoT Çözümleri'
  }
];

const GallerySection: React.FC = () => {
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

  return (
    <section className="section bg-surface/50 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Galeri
          </span>
          <h2 className="mb-6">Son Projelerimiz</h2>
          <p className="text-white/70 text-lg">
            Modern ve yenilikçi yaklaşımımızla geliştirdiğimiz projelerimizden örnekler
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link 
            to="/work" 
            className="btn-primary group inline-flex items-center"
          >
            Tüm Projelerimizi İnceleyin
            <Plus className="ml-2 h-4 w-4 transition-transform group-hover:rotate-90" />
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-secondary/20 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-xl">
        <div className="aspect-w-16 aspect-h-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-0 left-0 p-6">
            <span className="inline-block text-sm font-medium text-primary mb-2">
              {project.category}
            </span>
            <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
            <Link
              to={`/work/${project.id}`}
              className="inline-flex items-center text-white hover:text-primary transition-colors"
            >
              Detayları İncele
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GallerySection;