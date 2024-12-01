import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

function MissionSection() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: 'رسالتنا',
      text: 'نعمل على مواجهة التحديات بروح مليئة بالطموح، ونؤمن بأهمية التطوير الذاتي المبني على أسس تقنية وبشرية وعلمية. وقد حققنا نقلة نوعية في جودة خدماتنا منذ البداية، لتقديم حلول إبداعية متكاملة تلبي احتياجات العملاء مهما كانت متطلباتهم.'
    },
    en: {
      title: 'Our Mission',
      text: 'We work to face challenges with an ambitious spirit, and we believe in the importance of self-development based on technical, human, and scientific foundations. We have achieved a qualitative leap in the quality of our services since the beginning, to provide integrated creative solutions that meet customer needs regardless of their requirements.'
    }
  };

  return (
    <section className="relative py-16">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(27, 59, 69, 0.95)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center bg-white/90 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Target className="w-16 h-16 mx-auto mb-6 text-primary" />
          <h2 className="text-3xl font-bold mb-6 text-primary">
            {language === 'ar' ? content.ar.title : content.en.title}
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {language === 'ar' ? content.ar.text : content.en.text}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default MissionSection;