import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Compass, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const { scrollY } = useScroll();

  // 4. Scroll başladığında yumuşakça kaybolan aşağı kaydırma göstergesi
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 90], [1, 0]);
  const scrollIndicatorY = useTransform(scrollY, [0, 90], [0, 24]);

  const scrollToHistory = () => {
    const section = document.getElementById('hikaye');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const section = document.getElementById('menu');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-brand-teal flex flex-col justify-between items-center text-center px-4 sm:px-6 lg:px-8 pt-28 pb-10 overflow-hidden select-none"
    >
      {/* 1. ARKA PLAN VE DERİNLİK (HERO BACKDROP) */}
      {/* Doğal Van Gölü İskelesi ve Sahil Atmosfer Katmanı */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform pointer-events-none transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=85')`,
        }}
      />

      {/* Marka Turkuazı Gradyan Katmanı - Ferahlık ve Derinlik */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/95 via-brand-teal/90 to-brand-teal/98 pointer-events-none" />

      {/* İnce Organik Dalga Çizgileri */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg
          className="absolute w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          <path
            fill="#171630"
            fillOpacity="0.10"
            d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,900L1392,900C1344,900,1248,900,1152,900C1056,900,960,900,864,900C768,900,672,900,576,900C480,900,384,900,288,900C192,900,96,900,48,900L0,900Z"
          />
          <path
            fill="#fafafa"
            fillOpacity="0.06"
            d="M0,288L60,266.7C120,245,240,203,360,208C480,213,600,267,720,266.7C840,267,960,213,1080,192C1200,171,1320,181,1380,186.7L1440,192L1440,900L1380,900C1320,900,1200,900,1080,900C960,900,840,900,720,900C600,900,480,900,360,900C240,900,120,900,60,900L0,900Z"
          />
        </svg>
      </div>

      {/* Merkezi Sıcak Altın Aurası */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

      {/* 4. MİKRO ETKİLEŞİM: Dalgalanan / Yüzen Lokasyon Rozeti */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="will-change-transform relative z-10 inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-brand-navy/15 border border-brand-navy/20 backdrop-blur-md text-brand-navy text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 sm:mb-4 shadow-sm"
      >
        <Compass className="w-4 h-4 text-brand-red animate-spin-slow" />
        <span>Bitlis Ahlat &bull; Van Gölü İskelesi</span>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
        <span className="text-brand-navy font-serif italic lowercase tracking-normal">katkısız & taze</span>
      </motion.div>

      {/* 5. RESPONSIVE KONTRAST: Mobil ve masaüstünde okunaklı merkez alan */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center my-auto py-2">
        {/* Metin arkasında hafif, belirsiz yumuşak kontrast aurası */}
        <div className="absolute inset-0 bg-brand-teal/30 rounded-3xl blur-2xl -z-10 pointer-events-none" />

        {/* 2. LOGO VE INTRO REVİZESİ: Kutusuz, Şeffaf ve Yaylı Framer Motion */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 110,
            damping: 14,
            duration: 1,
          }}
          className="relative mb-5 sm:mb-7 flex items-center justify-center group"
        >
          {/* Arkada doğal altın/turkuaz ışıma aurası (kutu sınırı olmadan) */}
          <div className="absolute inset-0 bg-brand-yellow/25 rounded-full blur-2xl group-hover:bg-brand-yellow/35 transition-all duration-700 pointer-events-none" />

          {/* Şeffaf ve Kutusuz Orijinal Logo */}
          <img
            src="/logo-full-trans.png"
            alt="Eski İskele Dondurmacısı Logosu"
            className="relative z-10 h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain filter drop-shadow-[0_12px_24px_rgba(23,22,48,0.22)] transform group-hover:scale-105 transition-transform duration-500"
            loading="eager"
          />
        </motion.div>

        {/* 3. BAŞLIK VE EL YAZISI FIRÇA ANİMASYONU */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: [0.21, 1.02, 0.49, 0.99],
          }}
          className="space-y-4 sm:space-y-5"
        >
          {/* 4. MİKRO ETKİLEŞİM: Yüzen Üst Rozet Satırı */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="will-change-transform flex items-center justify-center gap-2.5 text-brand-navy/90 font-semibold tracking-[0.25em] text-xs sm:text-sm uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span>Taze Yayla Sütü &bull; Yabani Dağ Salebi</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
          </motion.div>

          {/* Heybetli Serif Başlık */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif font-black text-brand-navy tracking-tight leading-[1.05] sm:leading-[0.98] drop-shadow-sm">
            Van Gölü Kıyısında <br />
            <span className="relative inline-block text-brand-navy mt-1 sm:mt-2">
              Doğal Serinlik
              {/* 3. Framer Motion pathLength ile Soldan Sağa Çizilen Kırmızı Fırça Darbesi */}
              <svg
                className="absolute left-0 -bottom-3 sm:-bottom-5 md:-bottom-6 w-full h-4 sm:h-6 md:h-7 pointer-events-none overflow-visible"
                viewBox="0 0 400 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M6 16C75 7 185 4 394 15C310 22 170 19 80 18"
                  stroke="#c82136"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{
                    pathLength: { duration: 1.1, delay: 1.2, ease: 'easeInOut' },
                    opacity: { duration: 0.2, delay: 1.2 },
                  }}
                />
              </svg>
            </span>
          </h1>

          <p className="max-w-2xl mx-auto pt-2 sm:pt-3 text-brand-navy/95 font-medium sm:font-normal text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
            Süphan ve Nemrut yaylalarının taze sütü, yüksek dağların yabani salebi ve göl kenarının serinletici esintisiyle...
            Ahlat&apos;ın tarihi iskelesinde katkısız, dürüst ve hakiki dondurma deneyimi.
          </p>
        </motion.div>

        {/* 4. MİKRO ETKİLEŞİM: whileHover, whileTap ve Sağa Kayan İkon Butonları */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          className="mt-8 sm:mt-11 flex flex-wrap items-center justify-center gap-4"
        >
          <motion.button
            onClick={scrollToMenu}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-full bg-brand-navy text-brand-yellow hover:bg-brand-navy/90 font-bold tracking-wide text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2.5 border border-brand-yellow/30"
          >
            <span>Lezzetleri Keşfet</span>
            <span className="w-2 h-2 rounded-full bg-brand-red transform group-hover:translate-x-1.5 transition-transform duration-200" />
          </motion.button>

          <motion.button
            onClick={scrollToHistory}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group px-8 py-4 rounded-full bg-brand-yellow/90 hover:bg-brand-yellow text-brand-navy font-bold tracking-wide text-sm sm:text-base shadow-md hover:shadow-xl transition-all duration-300 border border-brand-navy/20 flex items-center gap-2"
          >
            <span>Hikayemiz & Felsefemiz</span>
            <ChevronRight className="w-4 h-4 text-brand-navy/70 transform group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </motion.div>
      </div>

      {/* 4. MİKRO ETKİLEŞİM: Scroll Edildiğinde Yumuşakça Fade-out Olan Aşağı Kaydırma Alanı */}
      <motion.div
        style={{
          opacity: scrollIndicatorOpacity,
          y: scrollIndicatorY,
        }}
        className="relative z-10 pt-4 sm:pt-6 flex flex-col items-center justify-center"
      >
        <button
          onClick={scrollToHistory}
          aria-label="Aşağı kaydırarak hikayemizi keşfedin"
          className="group flex flex-col items-center gap-2 cursor-pointer focus:outline-none"
        >
          <span className="text-xs uppercase tracking-widest text-brand-navy/80 font-bold group-hover:text-brand-navy transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            Aşağı Kaydırın
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-11 h-11 rounded-full bg-brand-navy text-brand-yellow flex items-center justify-center shadow-lg group-hover:bg-brand-navy/90 transition-all border border-brand-yellow/40"
          >
            <ChevronDown className="w-6 h-6 text-brand-yellow" strokeWidth={2.5} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
