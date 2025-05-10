import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

// Galeri verileri (Unsplash'ten 2 teknoloji temalı resim)
const galleryItems = [
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    title: 'Dijital Çözümler',
    description: 'Veri odaklı, modern yazılım platformları.',
    category: 'Web',
  },
  {
    src: 'https://images.unsplash.com/photo-1551288049-b1f3a0c79f5d',
    title: 'Mobil Arayüzler',
    description: 'Kullanıcı dostu ve estetik mobil deneyimler.',
    category: 'Mobil',
  },
];

const Gallery: React.FC = () => {
  // Reveal animasyonu için
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.3 }
    );

    reveals.forEach((el) => observer.observe(el));
    return () => reveals.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section className="section bg-background grid-pattern overflow-hidden">
      <div className="container text-center mb-12">
        <motion.h2
          className="text-gradient aurora-text text-4xl md:text-5xl mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Öne Çıkan Projeler
        </motion.h2>
        <motion.p
          className="text-white/80 text-lg max-w-2xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Teknoloji ve estetiği birleştiren yenilikçi çözümlerimiz.
        </motion.p>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8">
        {galleryItems.map((item, index) => (
          <motion.div
            key={index}
            className="card group relative overflow-hidden reveal rounded-3xl border border-white/20 bg-surface/80 backdrop-blur-sm"
            whileHover={{ scale: 1.02, y: -12, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.img
              src={item.src}
              alt={item.title}
              className="object-cover w-full h-[500px] lg:h-[600px] transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute bottom-0 p-8 text-white">
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-gradient aurora-text">
                  {item.title}
                </h3>
                <p className="text-lg text-white/90 mt-2 max-w-md">{item.description}</p>
                <p className="text-sm text-white/70 mt-1">Kategori: {item.category}</p>
                <button
                  className="btn-primary mt-6 magnetic-button text-lg px-8 py-3"
                  onClick={() => window.location.href = `/proje/${item.title.toLowerCase().replace(' ', '-')}`}
                >
                  Keşfet
                </button>
              </div>
            </div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-gradient text-base font-medium tracking-wide">Daha Fazla</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;