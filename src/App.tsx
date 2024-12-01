import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import VisionSection from './components/sections/VisionSection';
import MissionSection from './components/sections/MissionSection';
import WhyUsSection from './components/sections/WhyUsSection';
import ContactSection from './components/sections/ContactSection';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';

function AppContent() {
  const { language } = useLanguage();
  
  return (
    <div className={`font-arabic ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <MissionSection />
      <WhyUsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;