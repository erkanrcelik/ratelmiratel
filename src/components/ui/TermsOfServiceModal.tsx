import React from 'react';
import { useTranslation } from 'react-i18next';

const TermsOfServiceModal: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {/* Giriş */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.introduction.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('terms.introduction.content')}
        </p>
      </section>

      {/* Hizmet Tanımı */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.services.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t('terms.services.description')}
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>{t('terms.services.items.webDesign')}</li>
          <li>{t('terms.services.items.digitalMarketing')}</li>
          <li>{t('terms.services.items.branding')}</li>
          <li>{t('terms.services.items.socialMedia')}</li>
          <li>{t('terms.services.items.consulting')}</li>
        </ul>
      </section>

      {/* Kullanıcı Sorumlulukları */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.userResponsibilities.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t('terms.userResponsibilities.description')}
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>{t('terms.userResponsibilities.items.accurateInfo')}</li>
          <li>{t('terms.userResponsibilities.items.legalUse')}</li>
          <li>{t('terms.userResponsibilities.items.noInterference')}</li>
          <li>{t('terms.userResponsibilities.items.compliance')}</li>
        </ul>
      </section>

      {/* Fikri Mülkiyet */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.intellectualProperty.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('terms.intellectualProperty.content')}
        </p>
      </section>

      {/* Gizlilik */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.privacy.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('terms.privacy.content')}
        </p>
      </section>

      {/* Sorumluluk Sınırlaması */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.liability.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('terms.liability.content')}
        </p>
      </section>

      {/* Hizmet Kesintileri */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.serviceInterruptions.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('terms.serviceInterruptions.content')}
        </p>
      </section>

      {/* Ücretlendirme */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.pricing.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t('terms.pricing.description')}
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>{t('terms.pricing.items.quotes')}</li>
          <li>{t('terms.pricing.items.payment')}</li>
          <li>{t('terms.pricing.items.changes')}</li>
          <li>{t('terms.pricing.items.taxes')}</li>
        </ul>
      </section>

      {/* Fesih */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.termination.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('terms.termination.content')}
        </p>
      </section>

      {/* Uygulanacak Hukuk */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.governingLaw.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('terms.governingLaw.content')}
        </p>
      </section>

      {/* İletişim */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.contact.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t('terms.contact.description')}
        </p>
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <p className="text-gray-300">
            <strong>Ratel Ajans</strong><br />
            E-posta: ratelajans@gmail.com<br />
            Telefon: +90 543 979 19 97<br />
            Adres: Bursa, Türkiye
          </p>
        </div>
      </section>

      {/* Değişiklikler */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('terms.changes.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('terms.changes.content')}
        </p>
      </section>
    </div>
  );
};

export default TermsOfServiceModal;
