import React from "react";
import { Trophy, Brush, Gift, Video, Building2, Users2, Sparkles, FileText } from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";
import { motion } from "framer-motion";

function ServicesSection() {
  const { t, language } = useLanguage();

  const services = [
    {
      title: { en: "Branding", ar: "تصميم العلامة التجارية" },
      desc: {
        en: "We design your brand identity in a professional and attractive way.",
        ar: "نصمم العلامة التجارية لتُبرز هوية منشأتك بأسلوب احترافي وجذاب.",
      },
      icon: <Brush className="w-12 h-12 mx-auto mb-4 text-primary" />,
    },
    {
      title: { en: "Design", ar: "التصاميم الفنية" },
      desc: {
        en: "We offer creative designs that express your vision using the latest artistic tools.",
        ar: "نقدم تصاميم إبداعية تُعبر عن رؤيتك باستخدام أحدث الأدوات الفنية.",
      },
      icon: <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />,
    },
    {
      title: { en: "Trophy", ar: "المجسمات التذكارية" },
      desc: {
        en: "Creating unique trophies to commemorate your achievements and events.",
        ar: "إنتاج مجسمات تذكارية فريدة لتخليد أهم إنجازاتك ومناسباتك.",
      },
      icon: <Trophy className="w-12 h-12 mx-auto mb-4 text-primary" />,
    },
    {
      title: { en: "Media", ar: "الإنتاج الإعلامي" },
      desc: {
        en: "Producing innovative media content that reflects your ideas professionally.",
        ar: "إنتاج محتوى إعلامي مبتكر يعكس أفكارك بأسلوب احترافي ومؤثر.",
      },
      icon: <Video className="w-12 h-12 mx-auto mb-4 text-primary" />,
    },
    {
      title: { en: "Gifts", ar: "الهدايا الدعائية" },
      desc: {
        en: "Providing custom promotional gifts to enhance your connection with clients.",
        ar: "نوفر هدايا دعائية مُصممة بعناية لتعزيز تواصلك مع عملائك.",
      },
      icon: <Gift className="w-12 h-12 mx-auto mb-4 text-primary" />,
    },
    {
      title: { en: "Project Documentation", ar: "توثيق المشاريع" },
      desc: {
        en: "Documenting your projects as a detailed reference that tells your success story.",
        ar: "نوثق مشاريعك لتكون مرجعًا تفصيليًا يروي قصة نجاحك.",
      },
      icon: <FileText className="w-12 h-12 mx-auto mb-4 text-primary" />,
    },
    {
      title: { en: "Events", ar: "الفعاليات والمناسبات" },
      desc: {
        en: "Organizing events and occasions professionally to ensure their success.",
        ar: "تنظيم الفعاليات والمناسبات بأسلوب احترافي لضمان نجاحها.",
      },
      icon: <Sparkles className="w-12 h-12 mx-auto mb-4 text-primary" />,
    },
    {
      title: { en: "Architectural Models", ar: "المجسمات المعمارية" },
      desc: {
        en: "Designing architectural models that accurately replicate your project details.",
        ar: "تصميم مجسمات معمارية تُحاكي تفاصيل مشاريعك بدقة عالية.",
      },
      icon: <Building2 className="w-12 h-12 mx-auto mb-4 text-primary" />,
    },
  ];

  return (
    <section id="services" className="relative py-20">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.97)'
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-16 text-primary">
          {t("services.title")}
        </h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/90 p-8 rounded-lg shadow-lg text-center backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {service.icon}
              <h3 className="text-xl font-bold mb-4">
                {language === "ar" ? service.title.ar : service.title.en}
              </h3>
              <p>{language === "ar" ? service.desc.ar : service.desc.en}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;