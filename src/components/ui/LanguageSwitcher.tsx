import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'tr', name: 'TR', flag: '🇹🇷' },
    { code: 'en', name: 'EN', flag: '🇺🇸' }
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    // URL'yi güncelle
    const url = new URL(window.location.href);
    url.searchParams.set('lng', lng);
    window.history.replaceState({}, '', url.toString());
  };

  return (
    <motion.div
      className="flex items-center gap-1"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {languages.map((language) => (
        <motion.button
          key={language.code}
          onClick={() => changeLanguage(language.code)}
          className={`relative flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 ${
            i18n.language === language.code 
              ? 'text-white bg-[#0c80b3]/30 border-b-2 border-[#0c80b3]' 
              : 'text-gray-300 hover:text-white hover:bg-[#0b6e99]/20'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-sm">{language.flag}</span>
          <span className="text-xs font-medium">{language.name}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default LanguageSwitcher;
