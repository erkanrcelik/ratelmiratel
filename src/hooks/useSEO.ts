import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export const useSEO = ({
  title,
  description,
  keywords,
  image = '/logo-beyaz.png',
  url = window.location.href,
  type = 'website'
}: SEOProps = {}) => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const defaultTitle = t('hero.pageTitle');
    const defaultDescription = t('hero.description');
    const defaultKeywords = 'dijital ajans, web tasarım, dijital pazarlama, marka kimliği, sosyal medya, SEO';

    // Title
    document.title = title || defaultTitle;

    // Meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Basic meta tags
    updateMetaTag('description', description || defaultDescription);
    updateMetaTag('keywords', keywords || defaultKeywords);
    updateMetaTag('author', 'Ratel Ajans');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', i18n.language);

    // Open Graph tags
    updatePropertyTag('og:title', title || defaultTitle);
    updatePropertyTag('og:description', description || defaultDescription);
    updatePropertyTag('og:image', image);
    updatePropertyTag('og:url', url);
    updatePropertyTag('og:type', type);
    updatePropertyTag('og:site_name', 'Ratel Ajans');
    updatePropertyTag('og:locale', i18n.language === 'tr' ? 'tr_TR' : 'en_US');

    // Twitter Card tags
    updatePropertyTag('twitter:card', 'summary_large_image');
    updatePropertyTag('twitter:title', title || defaultTitle);
    updatePropertyTag('twitter:description', description || defaultDescription);
    updatePropertyTag('twitter:image', image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

    // Language alternates
    const languages = ['tr', 'en'];
    languages.forEach(lang => {
      let alternate = document.querySelector(`link[rel="alternate"][hreflang="${lang}"]`) as HTMLLinkElement;
      if (!alternate) {
        alternate = document.createElement('link');
        alternate.rel = 'alternate';
        alternate.setAttribute('hreflang', lang);
        document.head.appendChild(alternate);
      }
      alternate.href = `${window.location.origin}?lng=${lang}`;
    });

  }, [title, description, keywords, image, url, type, t, i18n.language]);
};
