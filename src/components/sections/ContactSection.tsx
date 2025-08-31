import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useTranslation } from 'react-i18next';

const ContactSection: React.FC = () => {
  const { t, i18n } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-10%' });

  const contactData = {
    title: t('contact.title'),
    subtitle: t('contact.subtitle'),
    description: t('contact.description'),
    whatsapp: {
      number: "905439791997",
      message: i18n.language === 'tr' 
        ? "Merhaba! Ajans Ratel hizmetleri hakkında bilgi almak istiyorum."
        : "Hello! I would like to get information about Ratel Agency services."
    },
    email: "info@ratelajans.com",
    phone: "+90 543 979 19 97",
    address: t('contact.addressDesc')
  };

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${contactData.whatsapp.number}?text=${encodeURIComponent(contactData.whatsapp.message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactMethods = [
    {
      icon: "📧",
      title: t('contact.email'),
      value: contactData.email,
      action: () => window.location.href = `mailto:${contactData.email}`,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "📱",
      title: t('contact.phone'),
      value: contactData.phone,
      action: () => window.location.href = `tel:${contactData.phone}`,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "📍",
      title: t('contact.address'),
      value: contactData.address,
      action: () => {},
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section 
      id="iletisim"
      ref={sectionRef}
      className="relative min-h-screen-30 py-20 bg-black"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b6e99]/10 via-black to-[#0894d1]/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(11,110,153,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1 }}
          >
            {/* Header */}
            <div className="space-y-6">
              <motion.h2 
                className="text-5xl md:text-7xl font-black text-white leading-tight bg-gradient-to-r from-[#0b6e99] via-[#0c80b3] to-[#0894d1] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {contactData.title}
              </motion.h2>
              
              <motion.h3 
                className="text-2xl md:text-4xl font-bold text-[#0c80b3]"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {contactData.subtitle}
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-300 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {contactData.description}
              </motion.p>
            </div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={handleWhatsAppClick}
                className="group relative bg-gradient-to-r from-[#0b6e99] to-[#0894d1] text-white px-8 py-4 rounded-2xl font-bold text-xl overflow-hidden shadow-lg hover:shadow-[#0b6e99]/25 transition-all duration-300 border border-[#0c80b3]/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c80b3] to-[#0894d1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-2xl">💬</span>
                  <span>{t('contact.whatsappButton')}</span>
                </div>
              </motion.button>
            </motion.div>


          </motion.div>

          {/* Right Content - Contact Methods */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 1, delay: 0.2 }}
          >

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, x: 50, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: 50, scale: 0.9 }}
                  transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div 
                    className="relative p-6 rounded-2xl bg-gray-800/50 border border-gray-700/50 hover:border-[#0c80b3]/50 transition-all duration-300 cursor-pointer backdrop-blur-sm hover:bg-gray-700/30"
                    onClick={method.action}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="text-4xl"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      >
                        {method.icon}
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1">
                          {method.title}
                        </h4>
                        <p className="text-gray-300">
                          {method.value}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-xl font-bold text-white mb-3">
                  {t('contact.readyForProject')}
                </h4>
                <p className="text-gray-300 mb-4">
                  {t('contact.letsStrengthen')}
                </p>
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="bg-gradient-to-r from-[#0b6e99] to-[#0894d1] text-white px-6 py-3 rounded-lg font-bold hover:from-[#0c80b3] hover:to-[#0894d1] transition-all duration-300 border border-[#0b6e99]/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('contact.letsStart')}
                </motion.button>
              </motion.div>
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

export default ContactSection;
