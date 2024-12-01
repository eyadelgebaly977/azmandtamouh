import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
      className="px-3 py-1 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors text-primary"
    >
      {language === 'ar' ? 'EN' : 'عر'}
    </button>
  );
}

export default LanguageSwitch;