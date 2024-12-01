import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import LanguageSwitch from './LanguageSwitch';
import Logo from '../assets/img/logo.png';  // Adjusted import path

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`bg-white shadow-lg fixed w-full top-0 z-50 font-cairo ${language === 'en' ? 'ltr' : 'rtl'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="h-16 w-16 ml-3" /> {/* Correctly imported logo */}
            <div className="text-2xl font-bold text-primary">
              {language === 'ar' ? 'مؤسسه عزم و طموح للتجاره' : 'Azm and Tmouh Trading Est.'}
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <div className={`flex ${language === 'en' ? 'space-x-8' : 'space-x-reverse space-x-8'}`}>
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-primary"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-primary"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-primary"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-primary"
              >
                {t('nav.contact')}
              </button>
            </div>
            <div className="ml-8">
              <LanguageSwitch />
            </div>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-gray-600 hover:text-primary text-right"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-600 hover:text-primary text-right"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-gray-600 hover:text-primary text-right"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-gray-600 hover:text-primary text-right"
              >
                {t('nav.contact')}
              </button>
              <div className="pt-2">
                <LanguageSwitch />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
