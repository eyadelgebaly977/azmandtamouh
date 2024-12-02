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
    'about.p1': 'تأسست "مؤسسة عزم وطموح للتجارة" في مدينة الرياض بهدف تقديم خدمات متنوعة في مجالات الدعاية والإعلان والإعلام.',
    'about.p2': 'منذ تأسيسها، عملت المؤسسة على تعزيز القيم داخل فرق العمل بجميع الأقسام والتخصصات. كما قامت بتزويد نفسها بأحدث التقنيات والمعدات الخاصة بمجالات عملها لتتمكن من تحقيق مكانة تنافسية في أسواق المملكة والخليج العربي.',
    'about.p3': 'تتميز المؤسسة بروح قادرة على مواجهة التحديات، حيث تؤمن إدارتها بأهمية التطوير المستمر في جميع الجوانب التقنية والبشرية والعلمية. ومنذ بدايتها، شهدت المؤسسة تطوراً نوعياً في جودة الخدمات التي تقدمها، حيث أصبحت قادرة على توفير حلول متكاملة تلبي احتياجات العملاء وتناسب حجم منشآتهم. بفضل الخبرة التراكمية والتطور المستمر في الأدوات، استطاعت المؤسسة تقديم كافة الخدمات المطلوبة من عملائها على مدار عقد من الزمن.',
    'about.p4': 'يتمحور جوهر خدماتنا ومنتجاتنا حول تقديم حلول مبتكرة لإنتاج ونشر المحتوى الإعلامي والإعلاني بكافة أشكاله. نحن نسعى باستمرار لتطوير خدماتنا بما يتوافق مع التغيرات المستمرة في السوق واحتياجات عملائنا بمختلف فئاتهم. لأن هدفنا الأساسي هو تقديم الأفضل دائمًا، والأفضل يعني توفير خدمات تقنية متطورة قائمة على أسس علمية سليمة من خلال فريق عمل قادر على استخدام التقنيات الحديثة لتلبية احتياجات العملاء.',
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
    'about.p1': 'Azm and Tmouh Trading Est. was established in Riyadh with the aim of providing diverse services in the fields of advertising, media, and public relations.',
    'about.p2': 'Since its inception, the foundation has focused on instilling core values in its workforce across all departments and specialties. It has also equipped itself with the latest technologies and equipment in its fields of operation, enabling it to establish a competitive position in the markets of Saudi Arabia and the Gulf region.',
    'about.p3': 'The foundation operates with a spirit capable of facing all challenges, as its management believes in continuous self-development in all technical, human, and scientific aspects. Since its establishment, the foundation has undergone a qualitative leap in the quality of the services it provides, and it has become capable of offering integrated solutions that meet client needs and are suitable for the scale of their businesses. This success is the result of significant developments in tools and the cumulative experience the foundation has gained over the past decade.',
    'about.p4': 'The core of our products and services lies in providing suitable solutions for producing and publishing media and advertising content in all its forms. We are always striving to develop our services to align with the evolving needs of the market and meet the demands of our diverse client base. Our primary goal is to always offer the best, and the best means providing high-quality technical services based on sound scientific principles, with a team capable of leveraging advanced technologies to meet client needs.',
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