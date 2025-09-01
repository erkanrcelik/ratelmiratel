import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../ui/Modal';
import PrivacyPolicyModal from '../ui/PrivacyPolicyModal';
import TermsOfServiceModal from '../ui/TermsOfServiceModal';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

  return (
      // 'relative z-10' sınıfları footer'ın diğer elemanların üzerinde olmasını sağlar.
      <footer className="relative z-10 bg-black text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

            {/* Logo ve Açıklama */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <img
                    src="/logo-beyaz.png"
                    alt="Ratel Ajans Logo"
                    className="h-10 w-auto"
                />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {t('footer.description')}
              </p>
            </div>

            {/* Hızlı Linkler */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('footer.quickLinks')}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#biz-kimiz" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {t('nav.about')}
                  </a>
                </li>
                <li>
                  <a href="#hizmetlerimiz" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {t('nav.services')}
                  </a>
                </li>
                <li>
                  <a href="#referanslar" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {t('nav.references')}
                  </a>
                </li>
                <li>
                  <a href="#iletisim" className="text-gray-400 hover:text-white transition-colors duration-200 text-sm">
                    {t('nav.contact')}
                  </a>
                </li>
              </ul>
            </div>

            {/* İletişim Bilgileri */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t('nav.contact')}</h3>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span>{t('contact.addressDesc')}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>{t('contact.emailDesc')}</span>
                </div>
                <div className="flex items-start space-x-2">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+90 543 979 19 97</span>
                </div>
              </div>
            </div>
          </div>

          {/* Alt Çizgi */}
          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                {t('footer.copyright', { year: currentYear })}
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <button
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('footer.privacy')}
                </button>
                <button
                    onClick={() => setIsTermsModalOpen(true)}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  {t('footer.terms')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy Policy Modal */}
        <Modal
            isOpen={isPrivacyModalOpen}
            onClose={() => setIsPrivacyModalOpen(false)}
            title={t('privacy.title')}
        >
          <PrivacyPolicyModal />
        </Modal>

        {/* Terms of Service Modal */}
        <Modal
            isOpen={isTermsModalOpen}
            onClose={() => setIsTermsModalOpen(false)}
            title={t('terms.title')}
        >
          <TermsOfServiceModal />
        </Modal>
      </footer>
  );
};

export default Footer;