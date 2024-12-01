import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const API_URL = 'https://www.azmandtamouh.com/api/contact';  // Make sure this URL is correct.

function ContactSection() {
  const { t, language } = useLanguage();
  const [formStatus, setFormStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus(language === 'ar' ? 'تم إرسال رسالتك بنجاح' : 'Message sent successfully');
        (e.target as HTMLFormElement).reset();
      } else {
        setFormStatus(language === 'ar' ? 'حدث خطأ أثناء الإرسال' : 'Error sending message');
        console.error('Server error:', data);
      }
    } catch (error) {
      console.error('Network error:', error);
      setFormStatus(language === 'ar' ? 'حدث خطأ أثناء الإرسال' : 'Error sending message');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.97)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12">
            <Mail className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl font-bold text-primary">{t('contact.title')}</h2>
          </div>
          <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-xl">
            <div className="flex flex-col space-y-6 mb-8">
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-4">
                  <PhoneCall className="w-6 h-6 text-primary" />
                  <a href="tel:+966569331396" className="text-lg hover:text-primary transition-colors">+966569331396</a>
                </div>
                <div className="flex items-center space-x-4 ml-10">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <a 
                    href="https://wa.me/966569331396" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    {t('contact.whatsapp')}
                  </a>
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-4">
                  <PhoneCall className="w-6 h-6 text-primary" />
                  <a href="tel:+966502002068" className="text-lg hover:text-primary transition-colors">+966502002068</a>
                </div>
                <div className="flex items-center space-x-4 ml-10">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  <a 
                    href="https://wa.me/966502002068" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg hover:text-primary transition-colors"
                  >
                    {t('contact.whatsapp')}
                  </a>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder={t('contact.form.name')}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder={t('contact.form.email')}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <textarea
                name="message"
                placeholder={t('contact.form.message')}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <div className="text-center">
                <button
                  type="submit"
                  className="w-full py-3 text-white bg-primary rounded-md hover:bg-primary/80 transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.send')}
                </button>
              </div>
              {formStatus && <div className="text-center mt-4 text-xl">{formStatus}</div>}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
