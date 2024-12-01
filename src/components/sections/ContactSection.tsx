import React, { useState } from 'react';
import { PhoneCall, MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';

const API_URL = 'https://azmandtamouh-s6vf-iru809x7y-eyads-projects-0b2050de.vercel.app/api/contact';

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
            <form onSubmit={handleSubmit} className="space-y-6">
              {formStatus && (
                <div className={`p-4 rounded-lg ${formStatus.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  {formStatus}
                </div>
              )}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <input 
                  type="text" 
                  name="name" 
                  placeholder={t('contact.form.name')} 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required 
                  disabled={isSubmitting}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <input 
                  type="email" 
                  name="email" 
                  placeholder={t('contact.form.email')} 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                  required 
                  disabled={isSubmitting}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <textarea 
                  name="message" 
                  placeholder={t('contact.form.message')} 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" 
                  rows={5} 
                  required 
                  disabled={isSubmitting}
                />
              </motion.div>
              <div className="text-center">
                <button 
                  type="submit" 
                  className={`px-8 py-3 text-white bg-primary rounded-lg ${isSubmitting ? 'cursor-not-allowed' : ''}`} 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
