import React from 'react';
import HoneyBadgerLogo from './HoneyBadgerLogo';

interface ContactOverlayProps {
  isVisible: boolean;
  onClose: () => void;
}

const ContactOverlay: React.FC<ContactOverlayProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905551234567?text=Merhaba! Ratel Ajans hizmetleri hakkında bilgi almak istiyorum.', '_blank');
  };

  const handleEmailClick = () => {
    window.open('mailto:info@ratelajans.com?subject=Hizmet Talebi&body=Merhaba, hizmetleriniz hakkında bilgi almak istiyorum.', '_blank');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-purple-900/90 to-violet-900/90 backdrop-blur-xl rounded-2xl p-8 max-w-md w-full mx-4 border border-purple-500/30 shadow-2xl shadow-purple-500/20 relative">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-purple-200 hover:text-white transition-colors duration-300"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400 to-violet-500 flex items-center justify-center shadow-lg shadow-purple-500/30 p-2">
            <HoneyBadgerLogo size={40} color="#ffffff" />
          </div>
          <div>
            <h2 className="text-2xl font-black bg-gradient-to-r from-purple-200 to-violet-200 bg-clip-text text-transparent">
              RATEL AJANS
            </h2>
            <p className="text-purple-300/80 text-sm">🍯 Honey Badger Agency</p>
          </div>
        </div>

        {/* Contact Options */}
        <div className="space-y-4">
          
          {/* WhatsApp */}
          <button
            onClick={handleWhatsAppClick}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-500/30"
          >
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.346"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">WhatsApp</div>
              <div className="text-sm text-white/80">Hemen mesaj gönderin</div>
            </div>
          </button>

          {/* Email */}
          <button
            onClick={handleEmailClick}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-500 hover:to-violet-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/30"
          >
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">E-posta</div>
              <div className="text-sm text-white/80">info@ratelajans.com</div>
            </div>
          </button>

          {/* Phone */}
          <button
            onClick={() => window.open('tel:+905551234567')}
            className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-violet-500/30"
          >
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="font-semibold text-white">Telefon</div>
              <div className="text-sm text-white/80">+90 555 123 45 67</div>
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-purple-500/30 text-center">
          <p className="text-purple-300/60 text-sm">
            Cesur, Sıra dışı, Güçlü 🍯
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactOverlay;
