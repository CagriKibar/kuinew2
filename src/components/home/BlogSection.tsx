import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 'post1',
    title: 'Yapay Zeka ve İş Dünyasının Geleceği',
    excerpt: 'Yapay zeka teknolojilerinin iş dünyasına etkileri ve gelecekte bizi bekleyen değişimler hakkında detaylı bir analiz.',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Ahmet Yılmaz',
    date: '15 Mart 2024',
    readTime: '5 dk',
    category: 'Yapay Zeka'
  },
  {
    id: 'post2',
    title: 'Modern Web Geliştirme Trendleri',
    excerpt: '2024 yılında öne çıkan web geliştirme teknolojileri ve framework\'leri hakkında kapsamlı bir rehber.',
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Zeynep Kaya',
    date: '10 Mart 2024',
    readTime: '4 dk',
    category: 'Web Geliştirme'
  },
  {
    id: 'post3',
    title: 'Siber Güvenlik İpuçları',
    excerpt: 'Şirketinizi siber tehditlere karşı korumak için uygulamanız gereken temel güvenlik önlemleri.',
    image: 'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: 'Mehmet Demir',
    date: '5 Mart 2024',
    readTime: '6 dk',
    category: 'Siber Güvenlik'
  }
];

const BlogSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-primary mb-2 uppercase tracking-wider">
            Blog
          </span>
          <h2 className="mb-6">Teknoloji ve Yazılım Dünyasından Haberler</h2>
          <p className="text-white/70 text-lg">
            En son teknoloji trendleri, yazılım geliştirme ipuçları ve sektör haberleri
          </p>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <Link 
            to="/blog" 
            className="btn-secondary group inline-flex items-center"
          >
            Tüm Yazıları Görüntüle
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
  return (
    <article className="bg-surface rounded-xl overflow-hidden transition-transform hover:-translate-y-1 duration-300">
      <Link to={`/blog/${post.id}`} className="block">
        <div className="aspect-w-16 aspect-h-9 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-white/60 mb-4">
          <span className="inline-flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            {post.date}
          </span>
          <span className="inline-flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            {post.readTime}
          </span>
        </div>
        <Link to={`/blog/${post.id}`} className="block group">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
        </Link>
        <p className="text-white/70 mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-white/60">
            <User className="h-4 w-4 mr-1" />
            {post.author}
          </div>
          <span className="text-sm font-medium text-primary">
            {post.category}
          </span>
        </div>
      </div>
    </article>
  );
};

export default BlogSection;