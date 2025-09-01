import React, { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';

const ServicesListSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const [activeService, setActiveService] = useState<number>(0);

  const handleWhatsAppClick = () => {
    const message = i18n.language === 'tr' 
      ? "Merhaba! Ajans Ratel hizmetleri hakkında bilgi almak istiyorum."
      : "Hello! I would like to get information about Ratel Agency services.";
    const whatsappUrl = `https://wa.me/905439791997?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Scroll to active service
  const scrollToActiveService = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const tabWidth = 320; // w-80 = 320px
      const gap = 12; // gap-3 = 12px
      const scrollPosition = index * (tabWidth + gap);
      
      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const services = [
    {
      id: '01',
      title: t('services.socialMedia.title'),
      subtitle: t('services.socialMedia.subtitle'),
      description: t('services.socialMedia.description'),
      details: [
        t('services.socialMedia.details.detail1'),
        t('services.socialMedia.details.detail2'),
        t('services.socialMedia.details.detail3'),
        t('services.socialMedia.details.detail4')
      ],
      color: '#0b6e99',
      bgGradient: 'from-[#0b6e99]/10 to-[#0c80b3]/10'
    },
    {
      id: '02',
      title: t('services.branding.title'),
      subtitle: t('services.branding.subtitle'),
      description: t('services.branding.description'),
      details: [
        t('services.branding.details.detail1'),
        t('services.branding.details.detail2'),
        t('services.branding.details.detail3'),
        t('services.branding.details.detail4')
      ],
      color: '#0c80b3',
      bgGradient: 'from-[#0c80b3]/10 to-[#0894d1]/10'
    },
    {
      id: '03',
      title: t('services.digitalMarketing.title'),
      subtitle: t('services.digitalMarketing.subtitle'),
      description: t('services.digitalMarketing.description'),
      details: [
        t('services.digitalMarketing.details.detail1'),
        t('services.digitalMarketing.details.detail2'),
        t('services.digitalMarketing.details.detail3'),
        t('services.digitalMarketing.details.detail4')
      ],
      color: '#0b6e99',
      bgGradient: 'from-[#0b6e99]/10 to-[#0894d1]/10'
    },
    {
      id: '04',
      title: t('services.webMobile.title'),
      subtitle: t('services.webMobile.subtitle'),
      description: t('services.webMobile.description'),
      details: [
        t('services.webMobile.details.detail1'),
        t('services.webMobile.details.detail2'),
        t('services.webMobile.details.detail3'),
        t('services.webMobile.details.detail4')
      ],
      color: '#0894d1',
      bgGradient: 'from-[#0894d1]/10 to-[#0b6e99]/10'
    },

    {
      id: '05',
      title: t('services.videoMotion.title'),
      subtitle: t('services.videoMotion.subtitle'),
      description: t('services.videoMotion.description'),
      details: [
        t('services.videoMotion.details.detail1'),
        t('services.videoMotion.details.detail2'),
        t('services.videoMotion.details.detail3'),
        t('services.videoMotion.details.detail4')
      ],
      color: '#0c80b3',
      bgGradient: 'from-[#0c80b3]/10 to-[#0894d1]/10'
    },
    {
      id: '06',
      title: t('services.consulting.title'),
      subtitle: t('services.consulting.subtitle'),
      description: t('services.consulting.description'),
      details: [
        t('services.consulting.details.detail1'),
        t('services.consulting.details.detail2'),
        t('services.consulting.details.detail3'),
        t('services.consulting.details.detail4')
      ],
      color: '#0894d1',
      bgGradient: 'from-[#0894d1]/10 to-[#0b6e99]/10'
    }
  ];

  return (
    <section 
      id="hizmetlerimiz"
      ref={sectionRef}
      className="relative py-20 bg-black"
    >
      {/* Minimal Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0b6e99]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#0894d1]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0b6e99]/30 border border-[#0c80b3]/30 text-[#0c80b3] text-sm font-medium mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-2 h-2 bg-[#0894d1] rounded-full animate-pulse" />
            {t('services.whatWeDo')}
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('services.title')}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Services List */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Desktop Layout - Vertical Stack */}
            <div className="hidden lg:block space-y-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  className={`group relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                    activeService === index
                      ? 'bg-white/5 border-white/20 shadow-lg'
                      : 'bg-gray-900/30 border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600/50'
                  }`}
                  onClick={() => setActiveService(index)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Service Number & Title */}
                  <div className="flex items-center gap-4">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold text-lg transition-colors duration-300"
                      style={{ 
                        backgroundColor: activeService === index ? service.color : 'rgba(75, 85, 99, 0.5)',
                      }}
                    >
                      {service.id}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className={`text-xl font-bold transition-colors duration-300 ${
                        activeService === index ? 'text-white' : 'text-gray-300'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {service.subtitle}
                      </p>
                    </div>

                    <div className={`transition-transform duration-300 ${
                      activeService === index ? 'rotate-90' : ''
                    }`}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-gray-400">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeService === index && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                      style={{ backgroundColor: service.color }}
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Layout - Horizontal Scroll */}
            <div className="lg:hidden">
                              <div 
                  ref={scrollContainerRef}
                  className="flex gap-3 overflow-x-scroll scrollbar-hide pb-4 relative"
                >
                {services.map((service, index) => (
                  <motion.div
                    key={service.id}
                    className={`group relative flex-shrink-0 w-80 p-4 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      activeService === index
                        ? 'bg-white/5 border-white/20 shadow-lg'
                        : 'bg-gray-900/30 border-gray-700/50 hover:bg-gray-800/50 hover:border-gray-600/50'
                    }`}
                    onClick={() => {
                      setActiveService(index);
                      scrollToActiveService(index);
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Service Number & Title */}
                    <div className="flex items-center gap-3">
                      <div 
                        className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-base transition-colors duration-300"
                        style={{ 
                          backgroundColor: activeService === index ? service.color : 'rgba(75, 85, 99, 0.5)',
                        }}
                      >
                        {service.id}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-bold transition-colors duration-300 ${
                          activeService === index ? 'text-white' : 'text-gray-300'
                        }`}>
                          {service.title}
                        </h3>
                        <p className="text-xs text-gray-500 mt-1">
                          {service.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    {activeService === index && (
                      <motion.div
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full"
                        style={{ backgroundColor: service.color }}
                        layoutId="activeIndicatorMobile"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Side - Service Details */}
          <motion.div
            className="lg:sticky lg:top-32 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Service Detail Card */}
            <motion.div
              key={activeService}
              className={`p-8 rounded-3xl border bg-gradient-to-br ${services[activeService].bgGradient} border-white/10 backdrop-blur-sm`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Service Header */}
              <div className="flex items-start gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-lg"
                  style={{ backgroundColor: services[activeService].color }}
                >
                  {services[activeService].id}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-purple-300 text-sm font-medium uppercase tracking-wider">
                    {services[activeService].subtitle}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-8">
                {services[activeService].description}
              </p>

              {/* Service Details */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white">{t('services.serviceScope')}:</h4>
                <div className="grid grid-cols-1 gap-3">
                  {services[activeService].details.map((detail, index) => (
                    <motion.div
                      key={detail}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div 
                        className="w-2 h-2 rounded-full flex-shrink-0"
                        style={{ backgroundColor: services[activeService].color }}
                      />
                      <span className="text-gray-300 text-sm">{detail}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                onClick={handleWhatsAppClick}
                className="w-full py-4 px-6 rounded-2xl font-semibold text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ 
                  backgroundColor: services[activeService].color,
                  boxShadow: `0 10px 25px ${services[activeService].color}20`
                }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                {t('services.getQuote')}
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-700/50">
                <div className="text-2xl font-bold text-white">6+</div>
                <div className="text-xs text-gray-400 uppercase">{t('services.stats.services')}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-700/50">
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-xs text-gray-400 uppercase">{t('services.stats.projects')}</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-700/50">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-gray-400 uppercase">{t('services.stats.clients')}</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

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

export default ServicesListSection;