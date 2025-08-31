import { useState, useEffect, lazy } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../../ui/LanguageSwitcher';

const Lanyard = lazy(() => import('../../ui/Lanyard'));

const Header = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-300 ${isScrolled
          ? 'bg-black/80 backdrop-blur-md'
          : 'bg-transparent backdrop-blur-sm'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Logo */}
            <div className="flex items-center">
              <img
                src="/logo-beyaz.png"
                alt="Ratel Ajans Logo"
                className="h-8 md:h-10 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
                onClick={scrollToTop}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('nasil-calisiyoruz')}
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors duration-200 cursor-pointer"
              >
                {t('nav.process')}
              </button>
              <button
                onClick={() => scrollToSection('biz-kimiz')}
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors duration-200 cursor-pointer"
              >
                {t('nav.about')}
              </button>
             
              <button
                onClick={() => scrollToSection('hizmetlerimiz')}
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors duration-200 cursor-pointer"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('referanslar')}
                className="text-gray-300 hover:text-white font-medium text-sm transition-colors duration-200 cursor-pointer"
              >
                {t('nav.references')}
              </button>
              
              <button
                onClick={() => scrollToSection('iletisim')}
                className="bg-gradient-to-r from-[#0b6e99] to-[#0894d1] text-white px-6 py-2 rounded-lg font-semibold text-sm hover:from-[#0c80b3] hover:to-[#0894d1] transition-all duration-200 cursor-pointer"
              >
                {t('nav.contact')}
              </button>
              
              {/* Language Switcher */}
              <LanguageSwitcher />
            </nav>

            {/* Mobile Navigation */}
            <div className="flex lg:hidden items-center">
              {/* Hamburger Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
                    }`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                    }`}></span>
                  <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
                    }`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div className={`lg:hidden fixed inset-0 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-black border-l border-gray-600 shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-600 bg-gray-800">
              <h2 className="text-white text-lg font-semibold">Menü</h2>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2 hover:text-[#0c80b3] transition-colors duration-200"
                aria-label="Close mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation Items */}
            <nav className="flex flex-col p-6 space-y-6 !bg-black min-h-screen">
              <button
                onClick={() => scrollToSection('nasil-calisiyoruz')}
                className="text-white text-lg font-medium hover:text-[#0c80b3] transition-colors duration-200 text-left py-3 border-b border-gray-700"
              >
                {t('nav.process')}
              </button>
              <button
                onClick={() => scrollToSection('biz-kimiz')}
                className="text-white text-lg font-medium hover:text-[#0c80b3] transition-colors duration-200 text-left py-3 border-b border-gray-700"
              >
                {t('nav.about')}
              </button>
              <button
                onClick={() => scrollToSection('hizmetlerimiz')}
                className="text-white text-lg font-medium hover:text-[#0c80b3] transition-colors duration-200 text-left py-3 border-b border-gray-700"
              >
                {t('nav.services')}
              </button>
              <button
                onClick={() => scrollToSection('referanslar')}
                className="text-white text-lg font-medium hover:text-[#0c80b3] transition-colors duration-200 text-left py-3 border-b border-gray-700"
              >
                {t('nav.references')}
              </button>
              
              <button
                onClick={() => scrollToSection('iletisim')}
                className="bg-gradient-to-r from-[#0b6e99] to-[#0894d1] text-white px-6 py-3 rounded-lg font-semibold text-lg hover:from-[#0c80b3] hover:to-[#0894d1] transition-all duration-200 mt-4"
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-gray-700">
                <span className="text-gray-400 text-sm">Dil:</span>
                <LanguageSwitcher />
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Lanyard - Fixed position for entire page */}
      <div className="fixed top-0 right-0 z-[20] w-full h-full">
        <div className="absolute inset-y-0 right-0 w-full">
          <div className="ml-auto h-full max-w-full">
            <Lanyard gravity={[0, -40, 0]}  />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
