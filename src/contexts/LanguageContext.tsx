import React, { createContext, useContext, useState } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  ar: {
    'nav.home': 'الرئيسية',
    'nav.services': 'خدماتنا',
    'nav.about': 'من نحن',
    'nav.contact': 'اتصل بنا',
    'hero.subtitle': 'شريككم الموثوق في عالم التجارة والأعمال',
    'hero.cta': 'تواصل معنا',
    'services.title': 'خدماتنا',
    'services.general.title': 'التجارة العامة',
    'services.general.desc': 'نقدم حلول تجارية متكاملة تلبي احتياجات السوق المحلي والدولي',
    'services.corporate.title': 'خدمات الشركات',
    'services.corporate.desc': 'نساعد الشركات على النمو وتحقيق أهدافها الاستراتيجية',
    'services.consulting.title': 'الاستشارات',
    'services.consulting.desc': 'نقدم استشارات متخصصة تساعد في اتخاذ القرارات الصحيحة',
    'about.title': 'من نحن',
    'about.p1': 'تأسست مؤسسة عزم وطموح للتجارة في مدينة الرياض لتكون رائدة في تقديم خدمات مميزة في مجالات الدعاية والإعلان والإعلام. منذ انطلاقنا، وضعنا نصب أعيننا تحقيق التميز من خلال تقديم حلول متكاملة تتناسب مع احتياجات عملائنا، مدعومة بأحدث التقنيات وأفضل الممارسات.',
    'about.p2': 'عملنا على غرس القيم المهنية في جميع فرق العمل لدينا، وتبنينا رؤية تعتمد على التطوير الذاتي المستمر والابتكار في تقديم الخدمات. تمكنّا من تحقيق نقلة نوعية في جودة ما نقدمه عبر حلول إبداعية تلبي احتياجات السوق المتجددة وتحقق تطلعات عملائنا بمختلف شرائحهم.',
    'about.p3': 'نحن ملتزمون بتقديم أفضل الخدمات التقنية المبنية على أسس علمية متينة، وذلك عبر فريق عمل محترف قادر على تطويع التقنيات المتطورة لخدمة أهداف عملائنا. رؤيتنا تنطلق من شغفنا بمواكبة التحديات وتحقيق أعلى مستويات رضا العملاء.',
    'contact.title': 'تواصل معنا',
    'contact.whatsapp': 'واتساب',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال',
    'footer.quickLinks': 'روابط سريعة',
    'footer.contact': 'تواصل معنا',
    'footer.rights': 'جميع الحقوق محفوظة',
    'footer.cr': 'سجل تجاري رقم',
    'footer.tax': 'الرقم الضريبي',
  },
  en: {
    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'hero.subtitle': 'Your Trusted Partner in Trade and Business',
    'hero.cta': 'Contact Us',
    'services.title': 'Our Services',
    'services.general.title': 'General Trade',
    'services.general.desc': 'We provide integrated trading solutions that meet local and international market needs',
    'services.corporate.title': 'Corporate Services',
    'services.corporate.desc': 'We help companies grow and achieve their strategic goals',
    'services.consulting.title': 'Consulting',
    'services.consulting.desc': 'We provide specialized consulting to help make the right decisions',
    'about.title': 'About Us',
    'about.p1': 'Azm and Tmouh Trading Est. was established in Riyadh to be a leader in providing distinguished services in the fields of advertising, media, and communications. Since our inception, we have set our sights on achieving excellence by providing integrated solutions that meet our clients\' needs, supported by the latest technologies and best practices.',
    'about.p2': 'We have worked to instill professional values in all our work teams, and we have adopted a vision based on continuous self-development and innovation in service delivery. We have achieved a qualitative leap in the quality of what we offer through creative solutions that meet the renewed market needs and achieve the aspirations of our clients of various segments.',
    'about.p3': 'We are committed to providing the best technical services based on solid scientific foundations, through a professional team capable of adapting advanced technologies to serve our clients\' goals. Our vision stems from our passion for keeping pace with challenges and achieving the highest levels of customer satisfaction.',
    'contact.title': 'Contact Us',
    'contact.whatsapp': 'WhatsApp',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Submit',
    'footer.quickLinks': 'Quick Links',
    'footer.contact': 'Contact Us',
    'footer.rights': 'All Rights Reserved',
    'footer.cr': 'Commercial Registration No.',
    'footer.tax': 'Tax Number',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}