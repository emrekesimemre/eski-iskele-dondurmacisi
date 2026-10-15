import React from 'react';
import { motion } from 'framer-motion';
import { Compass } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#131226] text-white/80 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      {/* Arka plan ışık vurgusu */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between relative z-10">
        {/* Ortalanmış Yapı: Logo, Başlık, Alıntı */}
        <motion.div
          initial={{ opacity: 0.6, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 250px 0px" }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center text-center max-w-xl"
        >
          {/* 1. LOGO KUTUSUNU TEMİZLE: Şeffaf, kutusuz ve koyu lacivert zeminle bütünleşen logo */}
          <div className="mb-4 flex items-center justify-center bg-transparent border-none shadow-none">
            <img
              src="/logo-full-trans.png"
              alt="Eski İskele Dondurmacısı"
              className="h-14 sm:h-16 w-auto object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
            />
          </div>

          {/* Başlık ve Lokasyon İmzası */}
          <h3 className="font-serif font-black text-2xl sm:text-3xl text-white tracking-wide">
            Eski İskele Dondurmacısı
          </h3>
          <p className="text-xs uppercase tracking-[0.25em] text-brand-teal font-semibold mt-1.5">
            AHLAT &bull; BİTLİS &bull; VAN GÖLÜ
          </p>

          {/* Şairane Alıntı */}
          <p className="font-serif italic text-sm sm:text-base text-white/60 mt-4 leading-relaxed">
            &ldquo;Süphan&apos;ın taze sütü, Nemrut&apos;un yeli, Van Gölü&apos;nün eşsiz maviliği... Bir kasede doğanın serin lezzeti.&rdquo;
          </p>
        </motion.div>

        {/* 2 & 4. YATAY NAVİGASYON LİNKLERİ: 'Giriş' yerine 'Ana Sayfa' ve ferah mt-8 / mb-8 boşlukları */}
        <motion.div
          initial={{ opacity: 0.6, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05, margin: "0px 0px 250px 0px" }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-8 mb-8 flex flex-wrap items-center justify-center gap-4 sm:gap-7 text-sm sm:text-base text-white/75"
        >
          <a href="#hero" className="hover:text-brand-yellow transition-colors font-medium">
            Ana Sayfa
          </a>
          <span className="text-brand-teal font-bold">&bull;</span>
          <a href="#hikaye" className="hover:text-brand-yellow transition-colors font-medium">
            Hikayemiz
          </a>
          <span className="text-brand-teal font-bold">&bull;</span>
          <a href="#menu" className="hover:text-brand-yellow transition-colors font-medium">
            Hakiki Dövme Menü
          </a>
          <span className="text-brand-teal font-bold">&bull;</span>
          <a href="#konum" className="hover:text-brand-yellow transition-colors font-medium">
            İskele Haritası
          </a>
        </motion.div>

        {/* Ayırıcı İnce Çizgi */}
        <div className="w-full border-t border-white/10 mb-6" />

        {/* En Alt Satır (Bottom Bar) */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          {/* Sol: Telif Hakkı Metni */}
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Eski İskele Dondurmacısı. Tüm hakları saklıdır.
          </p>

          {/* Sağ: Koordinat Bilgisi */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/70 font-mono">
              <Compass className="w-4 h-4 text-brand-red shrink-0" />
              <span>38.7520° K, 42.4980° D</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
