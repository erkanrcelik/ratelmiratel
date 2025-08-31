import React from 'react';
import { useTranslation } from 'react-i18next';

const PrivacyPolicyModal: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-8">
      {/* Giriş */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('privacy.introduction.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('privacy.introduction.content')}
        </p>
      </section>

      {/* Toplanan Bilgiler */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('privacy.collectedData.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t('privacy.collectedData.description')}
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>{t('privacy.collectedData.items.name')}</li>
          <li>{t('privacy.collectedData.items.email')}</li>
          <li>{t('privacy.collectedData.items.phone')}</li>
          <li>{t('privacy.collectedData.items.company')}</li>
          <li>{t('privacy.collectedData.items.website')}</li>
          <li>{t('privacy.collectedData.items.cookies')}</li>
        </ul>
      </section>

      {/* Kullanım Amaçları */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('privacy.usage.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t('privacy.usage.description')}
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>{t('privacy.usage.items.communication')}</li>
          <li>{t('privacy.usage.items.services')}</li>
          <li>{t('privacy.usage.items.improvement')}</li>
          <li>{t('privacy.usage.items.legal')}</li>
        </ul>
      </section>

      {/* Veri Güvenliği */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('privacy.security.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('privacy.security.content')}
        </p>
      </section>

      {/* Çerezler */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('privacy.cookies.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t('privacy.cookies.description')}
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>{t('privacy.cookies.items.essential')}</li>
          <li>{t('privacy.cookies.items.analytics')}</li>
          <li>{t('privacy.cookies.items.preferences')}</li>
        </ul>
      </section>

      {/* Üçüncü Taraf Hizmetler */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('privacy.thirdParty.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('privacy.thirdParty.content')}
        </p>
      </section>

      {/* Kullanıcı Hakları */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('privacy.userRights.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t('privacy.userRights.description')}
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
          <li>{t('privacy.userRights.items.access')}</li>
          <li>{t('privacy.userRights.items.correction')}</li>
          <li>{t('privacy.userRights.items.deletion')}</li>
          <li>{t('privacy.userRights.items.portability')}</li>
          <li>{t('privacy.userRights.items.objection')}</li>
        </ul>
      </section>

      {/* İletişim */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('privacy.contact.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed mb-4">
          {t('privacy.contact.description')}
        </p>
        <div className="bg-gray-800/50 p-6 rounded-lg">
          <p className="text-gray-300">
            <strong>Ratel Ajans</strong><br />
            E-posta: info@ratelajans.com<br />
            Telefon: +90 543 979 19 97<br />
            Adres: İstanbul, Türkiye
          </p>
        </div>
      </section>

      {/* Değişiklikler */}
      <section>
        <h2 className="text-2xl font-bold text-[#0c80b3] mb-4">
          {t('privacy.changes.title')}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {t('privacy.changes.content')}
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyModal;
