import Header from "./components/Home/Header";
import BackgroundLight from "./components/ui/BackgroundLight";
import TrueFocus from "./components/ui/Bits/TrueFocus";
import AllSections from "./components/sections/AllSections";
import GlitchText from "./components/ui/Glitch";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { useSEO } from "./hooks/useSEO";
import { useLanguageFromURL } from "./hooks/useLanguageFromURL";

function App() {
  const { t, i18n } = useTranslation();

  // URL'den dil parametresini oku
  useLanguageFromURL();

  // SEO hook'u kullan
  useSEO({
    title: t('hero.pageTitle'),
    description: t('hero.description'),
    keywords: '' +
        'Ratel Ajans' +
        'Sosyal Medya Ajansı' +
        'Dijital Ajans' +
        'Web Tasarım' +
        'Dijital Pazarlama' +
        'Marka Kimliği' +
        'Sosyal Medya' +
        'SEO' +
        'Bursa Sosyal Medya' +
        'Bursa Sosyal Medya Yönetimi' +
        'İstanbul Sosyal Medya' +
        'İstanbul Sosyal Medya Yönetimi' +
        'İnstagram Yönetimi' +
        'Ajans' +
        'Reklam Ajansı' +
        'Sosyal Medya Yönetimi' +
        'Bursa Dijital Ajans',
    image: '/logo-beyaz.png',
    url: window.location.href,
    type: 'website'
  });
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const message = i18n.language === 'tr'
      ? "Merhaba! Ajans Ratel hizmetleri hakkında bilgi almak istiyorum."
      : "Hello! I would like to get information about Ratel Agency services.";
    const whatsappUrl = `https://wa.me/905439791997?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative m-0 p-0 bg-black text-white">
      {/* Sticky Header - Always Visible */}
      <Header />
      {/* Hero Section */}
      <div className="relative min-h-screen bg-black">
        <BackgroundLight />
        {/* Hit area: sadece sağ taraf; burada tıklama aktif */}
        <div className="absolute inset-0 z-5 bg-gradient-to-br from-[#0b6e99]/10 via-transparent to-[#0894d1]/15 pointer-events-none" />


        <div className="relative z-5 flex min-h-screen flex-col justify-center pt-24">
          <main className="flex-1 flex flex-col items-center justify-center px-4 w-full">
            <div className="text-center mb-16">
              <GlitchText
                speed={1}
                enableShadows={true}
              >
                {t('hero.title')}
              </GlitchText>
            </div>

            <TrueFocus
              sentence={t('hero.subtitle')}
              manualMode={false}
              blurAmount={5}
              borderColor="#0c80b3"
              glowColor="rgba(12, 128, 179, 0.6)"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </main>
        </div>

      </div>

      {/* All Sections */}
      <AllSections />

      {/* Footer */}
      <Footer />

      {/* Floating Contact Button */}
      <motion.div
        className="fixed bottom-8 right-8 z-[9999]"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <motion.button
          onClick={() => setIsContactOpen(true)}
          className="bg-gradient-to-r from-[#0b6e99] to-[#0894d1] hover:from-[#0c80b3] hover:to-[#0894d1] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#0c80b3]/30"
          whileHover={{ scale: 1 }}
          whileTap={{ scale: 1 }}
        >
          <span className="text-md">💬</span>
        </motion.button>
      </motion.div>
{/* Expanding Contact Card */}
<AnimatePresence>
        {isContactOpen && (
          <motion.div
            className="fixed bottom-0 right-0 z-[9999]"
            initial={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              width: 320,
              height: 400,
              borderRadius: "32px 0 0 32px",
              scale: 1,
              opacity: 1
            }}
            exit={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              borderRadius: { duration: 0.3, delay: 0.1 }
            }}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-br from-[#0b6e99]/95 to-[#0894d1]/95 backdrop-blur-xl border-l border-t border-[#0c80b3]/30 shadow-2xl shadow-[#0b6e99]/20 rounded-l-3xl p-6 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-[#0c80b3] transition-colors duration-300 z-10 bg-[#0b6e99]/20 rounded-full p-1 hover:bg-[#0b6e99]/40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.2 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Header */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b6e99] to-[#0894d1] flex items-center justify-center shadow-lg shadow-[#0b6e99]/30">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <h2 className="text-lg font-black text-white drop-shadow-lg">
                    {t('contact.title')}
                  </h2>
                  <p className="text-white/90 text-xs drop-shadow-md">Ratel Ajans</p>
                </div>
              </motion.div>

              {/* Contact Options */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                {/* WhatsApp */}
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-2xl">💬</span>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-white drop-shadow-md">{t('contact.whatsapp')}</div>
                    <div className="text-xs text-white/90 drop-shadow-sm">{t('contact.whatsappDesc')}</div>
                  </div>
                </motion.button>

                {/* Email */}
                <motion.button
                  onClick={() => window.open('mailto:info@ratelajans.com?subject=Hizmet Talebi&body=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.', '_blank')}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#0b6e99] to-[#0894d1] hover:from-[#0c80b3] hover:to-[#0894d1] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-2xl">📧</span>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-white drop-shadow-md">{t('contact.email')}</div>
                    <div className="text-xs text-white/90 drop-shadow-sm">{t('contact.emailDesc')}</div>
                  </div>
                </motion.button>

                {/* Phone */}
                <motion.button
                  onClick={() => window.open('tel:+905551234567', '_blank')}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#0c80b3] to-[#0894d1] hover:from-[#0b6e99] hover:to-[#0c80b3] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="text-2xl">📱</span>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-white drop-shadow-md">{t('contact.phone')}</div>
                    <div className="text-xs text-white/90 drop-shadow-sm">+90 543 979 19 97</div>
                  </div>
                </motion.button>

                {/* Address */}
                <motion.div
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0b6e99]/20 border border-[#0c80b3]/30"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-2xl">📍</span>
                  <div className="text-left">
                    <div className="font-semibold text-white text-sm drop-shadow-md">{t('contact.address')}</div>
                    <div className="text-xs text-white/80 drop-shadow-sm">{t('contact.addressDesc')}</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            className="fixed bottom-8 right-24 z-[9999]"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-[#0c80b3] to-[#0894d1] hover:from-[#0b6e99] hover:to-[#0c80b3] text-white p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#0c80b3]/30"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanding Contact Card */}
      <AnimatePresence>
        {isContactOpen && (
          <motion.div
            className="fixed bottom-0 right-0 !z-[9999]"
            initial={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              scale: 0.8,
              opacity: 0
            }}
            animate={{
              width: 320,
              height: 400,
              borderRadius: "32px 0 0 32px",
              scale: 1,
              opacity: 1
            }}
            exit={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              borderRadius: { duration: 0.3, delay: 0.1 }
            }}
          >
            <motion.div
              className="w-full h-full bg-gradient-to-br from-[#0b6e99]/95 to-[#0894d1]/95 backdrop-blur-xl border-l border-t border-[#0c80b3]/30 shadow-2xl shadow-[#0b6e99]/20 rounded-l-3xl p-6 relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {/* Close Button */}
              <motion.button
                onClick={() => setIsContactOpen(false)}
                className="absolute top-4 right-4 text-white hover:text-[#0c80b3] transition-colors duration-300 z-[9999] bg-[#0b6e99]/20 rounded-full p-1 hover:bg-[#0b6e99]/40"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.2 }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              {/* Header */}
              <motion.div
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0b6e99] to-[#0894d1] flex items-center justify-center shadow-lg shadow-[#0b6e99]/30">
                  <span className="text-xl">💬</span>
                </div>
                <div>
                  <h2 className="text-lg font-black text-white drop-shadow-lg">
                    {t('contact.title')}
                  </h2>
                  <p className="text-white/90 text-xs drop-shadow-md">Ratel Ajans</p>
                </div>
              </motion.div>

              {/* Contact Options */}
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                {/* WhatsApp */}
                <motion.button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <span className="text-2xl">💬</span>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-white drop-shadow-md">{t('contact.whatsapp')}</div>
                    <div className="text-xs text-white/90 drop-shadow-sm">{t('contact.whatsappDesc')}</div>
                  </div>
                </motion.button>

                {/* Email */}
                <motion.button
                  onClick={() => window.open('mailto:info@ratelajans.com?subject=Hizmet Talebi&body=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.', '_blank')}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#0b6e99] to-[#0894d1] hover:from-[#0c80b3] hover:to-[#0894d1] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <span className="text-2xl">📧</span>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-white drop-shadow-md">{t('contact.email')}</div>
                    <div className="text-xs text-white/90 drop-shadow-sm">{t('contact.emailDesc')}</div>
                  </div>
                </motion.button>

                {/* Phone */}
                <motion.button
                  onClick={() => window.open('tel:+905551234567', '_blank')}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-[#0c80b3] to-[#0894d1] hover:from-[#0b6e99] hover:to-[#0c80b3] text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <span className="text-2xl">📱</span>
                  <div className="text-left">
                    <div className="font-semibold text-sm text-white drop-shadow-md">{t('contact.phone')}</div>
                    <div className="text-xs text-white/90 drop-shadow-sm">+90 543 979 19 97</div>
                  </div>
                </motion.button>

                {/* Address */}
                <motion.div
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0b6e99]/20 border border-[#0c80b3]/30"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <span className="text-2xl">📍</span>
                  <div className="text-left">
                    <div className="font-semibold text-white text-sm drop-shadow-md">{t('contact.address')}</div>
                    <div className="text-xs text-white/80 drop-shadow-sm">{t('contact.addressDesc')}</div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


    </div>
  );
}

export default App;
