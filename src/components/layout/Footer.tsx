import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, PhoneCall } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              {language === 'ar' ? 'مؤسسه عزم و طموح للتجاره' : 'Azm and Tmouh Trading Est.'}
            </h3>
            <div className="space-y-2">
              <p>{t('footer.cr')}: 1009128881</p>
              <p>{t('footer.tax')}: 312637310800003</p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 ml-2" />
                <a
                  href="https://www.google.com/maps/search/?q=الرياض، المملكة العربية السعودية"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {language === 'ar' ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
                </a>
              </div>
              <div className={`flex items-center ${language === 'en' ? 'space-x-4' : 'space-x-reverse space-x-4'}`}>
                <div className="flex items-center">
                  <PhoneCall className="w-5 h-5 ml-2" />
                  <a href="tel:+966569331396" className="hover:underline">+966569331396</a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  <a 
                    href="https://wa.me/966569331396" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {t('contact.whatsapp')}
                  </a>
                </div>
              </div>
              <div className={`flex items-center ${language === 'en' ? 'space-x-4' : 'space-x-reverse space-x-4'}`}>
                <div className="flex items-center">
                  <PhoneCall className="w-5 h-5 ml-2" />
                  <a href="tel:+966502002068" className="hover:underline">+966 50 200 2068</a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-5 h-5 ml-2" />
                  <a 
                    href="https://wa.me/966502002068" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {t('contact.whatsapp')}
                  </a>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 ml-2" />
                <a href="mailto:azem.tmoah@gmail.com" className="hover:underline">
                  azem.tmoah@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <div className="space-y-2">
              <div><a href="#home" className="hover:underline">{t('nav.home')}</a></div>
              <div><a href="#services" className="hover:underline">{t('nav.services')}</a></div>
              <div><a href="#about" className="hover:underline">{t('nav.about')}</a></div>
              <div><a href="#contact" className="hover:underline">{t('nav.contact')}</a></div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} {language === 'ar' ? 'مؤسسه عزم و طموح للتجاره' : 'Azm and Tmouh Trading Est.'} {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;