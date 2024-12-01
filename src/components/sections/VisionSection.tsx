import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';

function VisionSection() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: 'رؤيتنا',
      text: 'منذ تأسيسنا، حرصنا على غرس القيم المهنية في نفوس فريق عملنا بمختلف الأقسام والتخصصات. كما قمنا بجلب أحدث التقنيات والمعدات لتوفير حلول عصرية تضعنا في مكانة تنافسية داخل أسواق المملكة والخليج العربي.'
    },
    en: {
      title: 'Our Vision',
      text: 'Since our establishment, we have been keen on instilling professional values in our team across various departments and specialties. We have also brought in the latest technologies and equipment to provide modern solutions that put us in a competitive position within the Kingdom and Gulf markets.'
    }
  };

  return (
    <section className="relative py-16">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.95)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto text-center bg-white/90 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Eye className="w-16 h-16 mx-auto mb-6 text-primary" />
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

export default VisionSection;