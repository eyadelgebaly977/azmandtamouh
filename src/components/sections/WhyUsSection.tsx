import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

function WhyUsSection() {
  const { language } = useLanguage();

  const content = {
    ar: {
      title: 'لماذا نحن؟',
      text: 'لأننا نؤمن أن الأفضل دائمًا هو تقديم جودة لا تضاهى وخدمات تقنية مبتكرة تلبي جميع تطلعات عملائنا.'
    },
    en: {
      title: 'Why Choose Us?',
      text: 'Because we believe that the best is always to provide unmatched quality and innovative technical services that meet all the aspirations of our customers.'
    }
  };

  return (
    <section className="relative py-16">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
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
          <Award className="w-16 h-16 mx-auto mb-6 text-primary" />
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

export default WhyUsSection;