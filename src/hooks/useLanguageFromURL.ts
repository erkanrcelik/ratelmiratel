import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const useLanguageFromURL = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const languageFromURL = urlParams.get('lng');
    
    if (languageFromURL && ['tr', 'en'].includes(languageFromURL)) {
      i18n.changeLanguage(languageFromURL);
    } else {
      // URL'de dil parametresi yoksa varsayılan olarak Türkçe kullan
      if (i18n.language !== 'tr') {
        i18n.changeLanguage('tr');
      }
    }
  }, [i18n]);

  return null;
};
