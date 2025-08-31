import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  const stats = [
    { number: "50+", label: t('about.stats.happyClients') },
    { number: "100+", label: t('about.stats.completedProjects') },
    { number: "3+", label: t('about.stats.yearsExperience') },
    { number: "24/7", label: t('about.stats.support') }
  ];

  return (
    <section 
      id="biz-kimiz"
      ref={sectionRef}
      className="relative min-h-screen bg-black overflow-hidden"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-[#0b6e99]/5" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#0b6e99]/20 border border-[#0c80b3]/30 rounded-full px-4 py-2"
            >
              <div className="w-2 h-2 bg-[#0894d1] rounded-full animate-pulse" />
              <span className="text-[#0c80b3] text-sm font-medium">
                {t('about.title')}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="block">{t('about.mainHeading')}</span>
              <span className="block bg-gradient-to-r from-[#0b6e99] via-[#0c80b3] to-[#0894d1] bg-clip-text text-transparent">
                {t('about.companyName')}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('about.mainDescription')}
            </motion.p>

            <motion.p 
              className="text-gray-400 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {t('about.additionalInfo')}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.button
                className="bg-gradient-to-r from-[#0b6e99] to-[#0894d1] text-white px-8 py-4 rounded-full font-bold text-lg hover:from-[#0c80b3] hover:to-[#0894d1] transition-all duration-300 shadow-lg hover:shadow-[#0b6e99]/25"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(11, 110, 153, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t('about.discoverStory')}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Honey Badger Logo Area */}
            <motion.div
              className="relative mb-12"
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              animate={isInView ? { 
                opacity: 1, 
                scale: 1, 
                rotateY: 0 
              } : { 
                opacity: 0, 
                scale: 0.5, 
                rotateY: 180 
              }}
              transition={{ duration: 1.2, delay: 0.4 }}
            >
              <div className="relative w-48 h-48 mx-auto mb-8">
                {/* Animated Rings */}
                <motion.div 
                  className="absolute inset-0 rounded-full border-2 border-[#0c80b3]/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-2 rounded-full border border-[#0894d1]/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Center Badge */}
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#0b6e99] via-[#0c80b3] to-[#0894d1] p-1">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                    <span className="text-4xl">🦡</span>
                  </div>
                </div>
              </div>
              
              <p className="text-center text-gray-300 italic">
                "{t('about.honeyBadgerQuote')}"
              </p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 50, scale: 0.8 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1 
                  } : { 
                    opacity: 0, 
                    y: 50, 
                    scale: 0.8 
                  }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 0.6 + (index * 0.1),
                    ease: "backOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5
                  }}
                  style={{ perspective: '1000px' }}
                >
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 backdrop-blur-sm hover:border-[#0c80b3]/50 transition-all duration-300">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#0b6e99]/10 to-[#0894d1]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 text-center">
                      <motion.div 
                        className="text-3xl md:text-4xl font-black bg-gradient-to-r from-[#0b6e99] to-[#0894d1] bg-clip-text text-transparent mb-2"
                        animate={isInView ? {
                          scale: [1, 1.1, 1]
                        } : { scale: 1 }}
                        transition={{ 
                          duration: 2, 
                          delay: 1 + (index * 0.2), 
                          repeat: Infinity, 
                          repeatDelay: 3 
                        }}
                      >
                        {stat.number}
                      </motion.div>
                      <div className="text-gray-400 text-sm font-medium">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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

export default AboutSection;
