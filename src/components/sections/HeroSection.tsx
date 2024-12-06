import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import Logo from '../../hero.png'; // Path to your hero image in the src folder

function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 mt-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${Logo})`, // Your hero image
          backgroundSize: 'cover', // Ensures the image covers the section
          backgroundPosition: 'center center', // Centers the image
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(27, 59, 69, 0.85)' // Optional overlay color for contrast
        }}
      />
      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <motion.h1
          className="text-5xl font-bold mb-6 text-white"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {language === 'ar' ? 'مؤسسه عزم و طموح للتجاره' : 'Azm and Tmouh Trading Est.'}
        </motion.h1>
        <motion.p
          className="text-xl mb-8 text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.button
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {t('hero.cta')}
        </motion.button>
        <div className="mt-16">
          <ChevronDown className="w-8 h-8 mx-auto animate-bounce text-white" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
