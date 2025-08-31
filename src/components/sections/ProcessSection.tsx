import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { useTranslation } from 'react-i18next';

interface ProcessStep {
  number: number;
  title: string;
  description: string;
  details: string[];
}

const ProcessSection: React.FC = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progressWidth, setProgressWidth] = useState(0);
  
  const steps: ProcessStep[] = [
    {
      number: 1,
      title: t('process.step1'),
      description: t('process.step1Desc'),
      details: [
        t('process.step1Details.detail1'),
        t('process.step1Details.detail2'), 
        t('process.step1Details.detail3'),
        t('process.step1Details.detail4')
      ]
    },
    {
      number: 2,
      title: t('process.step2'), 
      description: t('process.step2Desc'),
      details: [
        t('process.step2Details.detail1'),
        t('process.step2Details.detail2'),
        t('process.step2Details.detail3'),
        t('process.step2Details.detail4')
      ]
    },
    {
      number: 3,
      title: t('process.step3'),
      description: t('process.step3Desc'),
      details: [
        t('process.step3Details.detail1'),
        t('process.step3Details.detail2'),
        t('process.step3Details.detail3'),
        t('process.step3Details.detail4')
      ]
    },
    {
      number: 4,
      title: t('process.step4'),
      description: t('process.step4Desc'),
      details: [
        t('process.step4Details.detail1'),
        t('process.step4Details.detail2'),
        t('process.step4Details.detail3'),
        t('process.step4Details.detail4')
      ]
    }
  ];

  // Auto-play functionality - 2 second transitions
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    // Reset progress when step changes
    setProgressWidth(0);
    
    // Progress animation - smoother with smaller increments
    const progressInterval = setInterval(() => {
      setProgressWidth(prev => {
        if (prev >= 100) {
          return 0;
        }
        return prev + 1; // Increment by 1% every 20ms = 2 seconds total
      });
    }, 20); // 20ms intervals for smoother animation
    
    // Step change interval
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 2000); // 2 seconds

    return () => {
      clearInterval(progressInterval);
      clearInterval(stepInterval);
    };
  }, [isAutoPlaying, steps.length, activeStep]);

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setProgressWidth(0);
    setIsAutoPlaying(false);
  };

  return (
    <section 
      ref={sectionRef}
      id="nasil-calisiyoruz"
      className="relative min-h-screen bg-black"
    >
      {/* Soft Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/30 to-[#0b6e99]/3" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            {t('process.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t('process.subtitle')}
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 lg:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative group cursor-pointer ${
                index % 2 === 0 ? 'lg:transform lg:translate-y-0' : 'lg:transform lg:translate-y-32'
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => handleStepClick(index)}
            >
              {/* Step Card */}
              <motion.div 
                className={`relative p-8 rounded-2xl border transition-all duration-500 ease-in-out ${
                  activeStep === index 
                    ? 'bg-white/5 border-[#0c80b3]/50 shadow-lg scale-105' 
                    : 'bg-black/20 border-gray-700/50 hover:border-[#0c80b3]/30 hover:scale-102'
                }`}
                                  animate={{
                    scale: activeStep === index ? 1.05 : 1,
                    borderColor: activeStep === index ? 'rgba(12, 128, 179, 0.5)' : 'rgba(75, 85, 99, 0.5)',
                    backgroundColor: activeStep === index ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.2)'
                  }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Step Number */}
                <motion.div 
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mb-6 mx-auto transition-all duration-500 ${
                    activeStep === index 
                      ? 'bg-gradient-to-br from-[#0b6e99] to-[#0894d1] text-white' 
                      : 'bg-gray-800/50 text-gray-400 border border-gray-600'
                  }`}
                  animate={{
                    scale: activeStep === index ? 1.1 : 1,
                    backgroundColor: activeStep === index 
                      ? 'linear-gradient(135deg, #0b6e99, #0894d1)' 
                      : 'rgba(31, 41, 55, 0.5)'
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {step.number}
                </motion.div>

                {/* Step Title */}
                <motion.h3 
                  className={`text-2xl font-bold text-center mb-4 transition-colors duration-500 ${
                    activeStep === index ? 'text-white' : 'text-gray-300'
                  }`}
                  animate={{
                    color: activeStep === index ? '#ffffff' : '#d1d5db'
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  {step.title}
                </motion.h3>

                {/* Step Description */}
                <p className="text-gray-400 text-center leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Active Step Details */}
                <AnimatePresence mode="wait">
                  {activeStep === index && (
                    <motion.div 
                      className="border-t border-gray-700/50 pt-4"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                      <ul className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            className="flex items-start space-x-3 text-sm text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: detailIndex * 0.1,
                              ease: "easeOut"
                            }}
                          >
                            <span className="text-[#0c80b3] mt-1 text-lg">•</span>
                            <span className="leading-relaxed">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Progress Indicator */}
                <motion.div 
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#0b6e99] to-[#0894d1] rounded-b-2xl"
                  style={{
                    width: activeStep === index ? `${progressWidth}%` : '0%'
                  }}
                  transition={{ duration: 0.1, ease: "linear" }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
