import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';
import RotatingText from '../ui/Bits/RotatingText';

const CompanyDescriptionSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });

  const rotatingWords = [
    t('company.rotatingWords.bold'),
    t('company.rotatingWords.creative'),
    t('company.rotatingWords.innovative'),
    t('company.rotatingWords.powerful')
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 bg-gradient-to-br from-black via-[#0b6e99]/10 to-[#0894d1]/10 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(11,110,153,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(8,148,209,0.05),transparent_50%)]" />
        
        {/* Floating Geometric Shapes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#0894d1]/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.8, 0.3],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Content */}
        <div className="text-center mb-20">
          
          {/* Company Title */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-[#0c80b3] mb-4">
              {t('company.title')}
            </h2>
          </motion.div>

          {/* Main Heading with Rotating Text */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4">
              <span>Biz</span>
              <div className="bg-gradient-to-r from-[#0b6e99] via-[#0c80b3] to-[#0894d1] bg-clip-text text-transparent">
                <RotatingText
                  texts={rotatingWords}
                  rotationInterval={2500}
                  staggerDuration={50}
                  staggerFrom="center"
                  splitBy="characters"
                  className="font-black"
                  animate={{ 
                    y: 0, 
                    opacity: 1,
                    scale: 1 
                  }}
                  initial={{ 
                    y: "100%", 
                    opacity: 0,
                    scale: 0.8
                  }}
                  exit={{ 
                    y: "-100%", 
                    opacity: 0,
                    scale: 1.2
                  }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 300
                  }}
                />
              </div>
              <span>ajansız!</span>
            </div>
            <motion.p 
              className="text-lg md:text-xl text-gray-300 italic"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {t('company.heading')}
            </motion.p>
          </motion.div>

          {/* Description */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              {t('company.description')}
            </p>
            <p className="text-xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              {t('company.uniqueSellingPoint')}
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {(t('company.features', { returnObjects: true }) as any[]).map((feature: any, index: number) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0, 
                scale: 1 
              } : { 
                opacity: 0, 
                y: 50, 
                scale: 0.9 
              }}
              transition={{ 
                duration: 0.6, 
                delay: 1.2 + (index * 0.1),
                ease: "backOut"
              }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5
              }}
              style={{ perspective: '1000px' }}
            >
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-900/80 to-black/80 border border-gray-700/50 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-500 min-h-[220px] flex flex-col justify-between">
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="text-5xl mb-4"
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: [0, -10, 10, -10, 0],
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {feature.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, transparent) padding-box,
                               linear-gradient(90deg, #8B5CF6, #EC4899, #F59E0B) border-box`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          <motion.button
            className="group relative bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white px-12 py-5 rounded-full font-bold text-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-pink-600 to-purple-600"
              initial={{ x: '-100%' }}
              whileHover={{ x: '0%' }}
              transition={{ duration: 0.3 }}
            />
            <span className="relative z-10">Dijital Dünyadaki Yerimizi Keşfet</span>
          </motion.button>
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

export default CompanyDescriptionSection;
