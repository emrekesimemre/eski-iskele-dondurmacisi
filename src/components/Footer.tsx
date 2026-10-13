import React from 'react';
import { motion } from 'framer-motion';
import { Compass, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#131226] text-white/80 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
      {/* Arka plan ışık vurgusu */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-brand-teal/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-10 relative z-10">
        {/* Ortalanmış Yapı: Logo, Başlık, Alıntı */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-xl"
        >
          {/* Yuvarlak hatlı kart içindeki marka logosu */}
          <div className="px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl mb-5 flex items-center justify-center hover:border-brand-teal/30 transition-colors">
            <img
              src="/logo-full-trans.png"
              alt="Eski İskele Dondurmacısı"
              className="h-12 sm:h-14 w-auto object-contain"
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

        {/* Yatay Navigasyon Linkleri */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm text-white/75"
        >
          <a href="#hero" className="hover:text-brand-yellow transition-colors font-medium">
            Giriş
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
        <div className="w-full border-t border-white/10" />

        {/* En Alt Satır (Bottom Bar) */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          {/* Sol: Telif Hakkı Metni */}
          <p className="text-center sm:text-left">
            &copy; {new Date().getFullYear()} Eski İskele Dondurmacısı. Tüm hakları saklıdır.
          </p>

          {/* Sağ: Koordinat Bilgisi & Yukarı Çık Butonu */}
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-white/70 font-mono">
              <Compass className="w-4 h-4 text-brand-red shrink-0" />
              <span>38.7520° K, 42.4980° D</span>
            </span>

            {/* Yukarı Çık Butonu (Hover'da turkuaz) */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-white/5 hover:bg-brand-teal hover:text-brand-navy hover:border-brand-teal text-white transition-all duration-300 border border-white/10 shadow-md group"
              title="Yukarı Çık"
              aria-label="Sayfanın en başına dön"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
