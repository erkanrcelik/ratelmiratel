import React from 'react';
import RatelLogo from './RatelLogo';

const LogoShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 p-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black text-white mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Ratel Ajans Logo Gallery
          </h1>
          <p className="text-gray-300 text-lg">
            Çok detaylı, benzersiz bal porsuk vector logosu - 3 farklı varyant
          </p>
        </div>

        {/* Logo Variants */}
        <div className="space-y-20">
          
          {/* Full Logo */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Ana Logo (Full)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Light Background */}
              <div className="p-8 bg-white rounded-2xl">
                <h3 className="text-gray-800 font-semibold mb-4">Açık Zemin</h3>
                <div className="flex justify-center">
                  <RatelLogo width={320} height={120} variant="full" animated={true} />
                </div>
              </div>
              
              {/* Dark Background */}
              <div className="p-8 bg-black rounded-2xl border border-purple-500/30">
                <h3 className="text-white font-semibold mb-4">Koyu Zemin</h3>
                <div className="flex justify-center">
                  <RatelLogo width={320} height={120} variant="full" animated={true} />
                </div>
              </div>
              
            </div>
          </div>

          {/* Icon Only */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Sadece İkon</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              
              {/* Small */}
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-white font-medium mb-4 text-sm">Küçük (64px)</h3>
                <div className="flex justify-center">
                  <RatelLogo width={64} height={64} variant="icon" animated={true} />
                </div>
              </div>
              
              {/* Medium */}
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-white font-medium mb-4 text-sm">Orta (96px)</h3>
                <div className="flex justify-center">
                  <RatelLogo width={96} height={96} variant="icon" animated={true} />
                </div>
              </div>
              
              {/* Large */}
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-white font-medium mb-4 text-sm">Büyük (128px)</h3>
                <div className="flex justify-center">
                  <RatelLogo width={128} height={128} variant="icon" animated={true} />
                </div>
              </div>
              
              {/* Extra Large */}
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-white font-medium mb-4 text-sm">Çok Büyük (160px)</h3>
                <div className="flex justify-center">
                  <RatelLogo width={160} height={160} variant="icon" animated={true} />
                </div>
              </div>
              
            </div>
          </div>

          {/* Text Only */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Sadece Yazı</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Small Text */}
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-white font-medium mb-4">Küçük</h3>
                <div className="flex justify-center">
                  <RatelLogo width={120} height={30} variant="text" animated={false} />
                </div>
              </div>
              
              {/* Medium Text */}
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-white font-medium mb-4">Orta</h3>
                <div className="flex justify-center">
                  <RatelLogo width={160} height={40} variant="text" animated={true} />
                </div>
              </div>
              
              {/* Large Text */}
              <div className="p-6 bg-gray-800 rounded-xl">
                <h3 className="text-white font-medium mb-4">Büyük</h3>
                <div className="flex justify-center">
                  <RatelLogo width={200} height={50} variant="text" animated={false} />
                </div>
              </div>
              
            </div>
          </div>

          {/* Usage Examples */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Kullanım Örnekleri</h2>
            
            {/* Business Card */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="bg-white p-6 rounded-2xl shadow-2xl">
                <div className="flex justify-between items-start mb-4">
                  <RatelLogo width={120} height={40} variant="full" animated={false} />
                </div>
                <div className="text-left text-gray-800">
                  <h4 className="font-bold">Erkan Çelik</h4>
                  <p className="text-sm text-gray-600">Kurucu & CEO</p>
                  <p className="text-sm text-gray-600 mt-2">info@ratelajans.com</p>
                  <p className="text-sm text-gray-600">+90 555 123 45 67</p>
                </div>
              </div>
              
              {/* Letterhead */}
              <div className="bg-white p-8 rounded-2xl shadow-2xl">
                <div className="flex justify-center mb-6">
                  <RatelLogo width={160} height={60} variant="full" animated={false} />
                </div>
                <div className="text-center text-gray-800 text-sm space-y-2">
                  <p>İstanbul, Türkiye</p>
                  <p>info@ratelajans.com</p>
                  <p>www.ratelajans.com</p>
                </div>
              </div>
              
              {/* Social Media Profile */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative z-10 text-center">
                  <RatelLogo width={80} height={80} variant="icon" animated={true} />
                  <h4 className="text-white font-bold mt-4">@ratelajans</h4>
                  <p className="text-white/80 text-sm">Cesur, Sıra dışı, Güçlü</p>
                </div>
              </div>
              
            </div>
          </div>

          {/* Technical Specs */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Teknik Özellikler</h2>
            <div className="bg-gray-800 rounded-2xl p-8 text-left max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-purple-400 font-bold mb-4">Logo Özellikleri</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• <strong>Format:</strong> SVG (Scalable Vector Graphics)</li>
                    <li>• <strong>Renk Paleti:</strong> Purple (#8400FF), Pink (#FF0080), Yellow (#FFC107)</li>
                    <li>• <strong>Boyutlar:</strong> Tamamen scalable (responsive)</li>
                    <li>• <strong>Animasyonlar:</strong> CSS animations & GSAP uyumlu</li>
                    <li>• <strong>Varyantlar:</strong> Full, Icon, Text only</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-pink-400 font-bold mb-4">Bal Porsuk Detayları</h3>
                  <ul className="text-gray-300 space-y-2 text-sm">
                    <li>• <strong>Vector Tasarım:</strong> Elle çizilmiş, benzersiz</li>
                    <li>• <strong>Anatomi:</strong> Gerçekçi proportions</li>
                    <li>• <strong>Özellikler:</strong> Glow effects, whiskers, claws</li>
                    <li>• <strong>Renkler:</strong> Natural badger colors + brand gradients</li>
                    <li>• <strong>Duygular:</strong> Cesur, güçlü, kararlı</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-purple-900/30 rounded-lg">
                <h4 className="text-yellow-400 font-bold mb-2">Brand Message</h4>
                <p className="text-gray-300 italic">
                  "Bal Porsukları gibi hiçbir zaman sizi yarı yolda bırakmayız, sıra dışı işlere imza atarak, gücünüze güç katarız."
                </p>
              </div>
            </div>
          </div>

        </div>
        
        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-purple-500/30">
          <p className="text-gray-400">
            © 2024 Ratel Ajans - Cesur, Sıra dışı, Güçlü 🦡
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default LogoShowcase;
