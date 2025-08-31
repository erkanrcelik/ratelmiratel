import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';
import CircularGallery from '../ui/Bits/CircularGallery';

// Referanslar constant'ı - siz içini doldurabilirsiniz
const REFERENCES = [
  {
    image: '/ref_1.jpg',
    text: 'Fanplus - Zen İklimlendirme',
    link: 'https://fanplus.com.tr/'
  },
  {
    image: '/ref_2.jpg',
    text: 'Tezgah Marketi',
    link: 'https://tezgahmarketi.com.tr/'
  },
  {
    image: '/ref_3.jpg',
    text: 'Safari Turizmi',
    link: 'https://safaritourism.ae/tr/'
  },
  {
    image: '/ref_4.jpg',
    text: 'Agen Teknik & Tedarik',
    link: 'https://agentedarik.com/'
  },
  {
    image: '/ref_5.jpg',
    text: 'Çiftyıldız Marble Group',
    link: 'https://ciftyildiz.com.tr/'
  },
  {
    image: '/ref_6.jpg',
    text: 'Skordan Bağımsız',
    link: 'https://www.instagram.com/skordanbagimsiz/?utm_source=ig_web_button_share_sheet&igsh=Y2lsYTE4Nm43M2o2'
  },
  {
    image: '/ref_7.jpg',
    text: 'Likya Karavan',
    link: 'https://www.instagram.com/likyakaravann/?utm_source=ig_web_button_share_sheet&igsh=bTdtdHRuNHhtY2pp'
  },
  {
    image: '/ref_8.jpg',
    text: 'Almer Group',
    link: 'https://www.instagram.com/almer.group/?utm_source=ig_web_button_share_sheet&igsh=MWkzYzA3Y3dtZnd5NA%3D%3D#'
  },
  {
    image: '/ref_9.jpg',
    text: 'Ada Barış Kitabevi',
    link: 'https://www.instagram.com/adabariskitabevi/?utm_source=ig_web_button_share_sheet&igsh=MW11eXMzdnUzNmppNQ%3D%3D#'
  },
  {
    image: '/ref_10.jpg',
    text: 'Metayard Metalürji',
    link: 'https://metayard.com.tr/'
  },
  {
    image: '/ref_11.jpg',
    text: 'Este Valeria Güzellik Salonu',
    link: 'https://www.instagram.com/valeriaguzelliksalonuu'
  },
  {
    image: '/ref_12.jpg',
    text: 'Alba Dent Diş Kliniği',
    link: 'https://albadental.com.tr/'
  },
  {
    image: '/ref_13.jpg',
    text: 'Clinicc Sofia',
    link: 'https://www.instagram.com/clinic.sofia.kozagac/'
  }
];

const ReferencesSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  return (
    <section 
      id="referanslar"
      ref={sectionRef}
      className="relative py-20 bg-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t('references.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('references.subtitle')}
          </p>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="h-[400px] md:h-[400px] relative">
            <CircularGallery 
              items={REFERENCES}
              bend={3} 
              textColor="#0c80b3" 
              borderRadius={0.05} 
              scrollEase={0.02}
              mobileScale={1}
              mobileFont="bold 25px Figtree"
            />
          </div>
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t('references.description')}
          </p>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#0894d1] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default ReferencesSection;