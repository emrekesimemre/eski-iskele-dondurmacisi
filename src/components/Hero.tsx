import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Compass, ChevronRight } from 'lucide-react';

export const Hero: React.FC = () => {
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
      className="relative min-h-[100svh] w-full bg-brand-teal flex flex-col justify-between items-center text-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-10 overflow-hidden select-none isolate"
    >
      {/* 1. ARKA PLAN VE DERİNLİK (HERO BACKDROP) - Gerçek Van Gölü */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/hero-lake-1.png"
          alt="Van Gölü İskelesi Arka Plan"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Marka Turkuazı Gradyan Katmanı - Ferahlık, Derinlik ve Metin Kontrastı */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-teal/80 via-brand-teal/60 to-brand-teal/85 pointer-events-none" />

      {/* İnce Organik Dalga Çizgileri */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
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

      {/* Merkezi Sıcak Altın Aurası (GPU Radyal Gradyan) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full [background:radial-gradient(circle,rgba(239,213,129,0.18)_0%,transparent_70%)] pointer-events-none" />

      {/* 2. MOBİLDE KALABALIĞI AZALT: Lokasyon Rozeti Yalnızca Masaüstünde (hidden md:inline-flex) */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="will-change-transform hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/15 border border-brand-navy/20 backdrop-blur-md text-brand-navy text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 shadow-sm relative z-10"
      >
        <Compass className="w-4 h-4 text-brand-red animate-spin-slow" />
        <span>Bitlis Ahlat &bull; Van Gölü İskelesi</span>
        <span className="w-1.5 h-1.5 rounded-full bg-brand-navy" />
        <span className="text-brand-navy font-serif italic lowercase tracking-normal">katkısız & taze</span>
      </motion.div>

      {/* 3. MERKEZİ İÇERİK ALANI */}
      <div className="relative z-10 max-w-5xl mx-auto flex-1 flex flex-col items-center justify-center my-auto py-2 w-full">
        {/* Yazı arkası yumuşak kontrast aurası (GPU Radyal Gradyan) */}
        <div className="absolute -inset-x-4 -inset-y-6 rounded-3xl [background:radial-gradient(circle,rgba(22,160,146,0.3)_0%,transparent_80%)] -z-10 pointer-events-none" />

        {/* 2. LOGO: Sabit Yükseklik & Genişlikli Kapsayıcı (Tam Sıfır CLS, Anında WebP) */}
        <div className="h-20 md:h-28 w-[206px] md:w-[288px] flex items-center justify-center mb-3 sm:mb-4 md:mb-6 relative group shrink-0">
          {/* Arkada doğal altın ışıma */}
          <div className="absolute inset-0 rounded-full [background:radial-gradient(circle,rgba(239,213,129,0.25)_0%,transparent_70%)] pointer-events-none" />

          {/* Şeffaf ve Kutusuz Orijinal Logo */}
          <img
            src="/logo-full-trans.webp"
            alt="Eski İskele Dondurmacısı Logosu"
            width={206}
            height={80}
            loading="eager"
            fetchPriority="high"
            decoding="sync"
            className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(23,22,48,0.2)] transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* 1. MOBİL TİPOGRAFİYİ DEVLEŞTİR: Başlık & Açıklama (Statik - Sıfır Dikey Zıplama) */}
        <div className="space-y-3 sm:space-y-4 max-w-4xl lg:max-w-5xl mx-auto px-2">
          {/* Üst Rozet Satırı */}
          <div className="flex items-center justify-center gap-2 text-brand-navy/90 font-semibold tracking-[0.2em] text-xs sm:text-sm uppercase drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
            <span>Taze Yayla Sütü &bull; Yabani Dağ Salebi</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
          </div>

          {/* Heybetli Serif Başlık: 2 Satırlı Mimari */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-extrabold md:font-black text-brand-navy tracking-tight leading-[1.12] md:leading-[1.04] drop-shadow-sm">
            <span className="block md:whitespace-nowrap">Van Gölü Kıyısında</span>
            <span className="relative inline-block text-brand-navy mt-1 sm:mt-2.5 whitespace-nowrap isolate">
              <span className="relative z-10">Doğal Serinlik</span>
              {/* Belirgin Kırmızı Fırça Çizgisi */}
              <svg
                className="absolute left-0 -bottom-2.5 sm:-bottom-3 md:-bottom-3.5 w-full h-3.5 sm:h-5 md:h-6 pointer-events-none overflow-visible z-[-1]"
                viewBox="0 0 400 24"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 16C75 7 185 4 394 15C310 22 170 19 80 18"
                  stroke="#c82136"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </h1>

          {/* Açıklama Paragrafı */}
          <p className="max-w-2xl mx-auto pt-2 sm:pt-3 px-6 sm:px-4 text-brand-navy/95 font-medium sm:font-normal text-base sm:text-lg md:text-xl leading-relaxed drop-shadow-[0_1px_1px_rgba(255,255,255,0.3)]">
            Süphan ve Nemrut yaylalarının taze sütü, yüksek dağların yabani salebi ve göl kenarının serinletici esintisiyle...
            Ahlat&apos;ın tarihi iskelesinde katkısız, dürüst ve hakiki dondurma deneyimi.
          </p>
        </div>

        {/* 3. BUTONLAR: Sabit ve Sıfır Kayma */}
        <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 w-full md:w-auto px-6 md:px-0">
          <motion.button
            onClick={scrollToMenu}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full md:w-auto px-8 py-4 rounded-full bg-brand-navy text-brand-yellow hover:bg-brand-navy/90 font-bold tracking-wide text-base shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 border border-brand-yellow/30"
          >
            <span>Lezzetleri Keşfet</span>
            <span className="w-2 h-2 rounded-full bg-brand-red transform group-hover:translate-x-1.5 transition-transform duration-200" />
          </motion.button>

          <motion.button
            onClick={scrollToHistory}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="group w-full md:w-auto px-8 py-4 rounded-full bg-brand-yellow/90 hover:bg-brand-yellow text-brand-navy font-bold tracking-wide text-base shadow-md hover:shadow-xl transition-all duration-300 border border-brand-navy/20 flex items-center justify-center gap-2"
          >
            <span>Hikayemiz & Felsefemiz</span>
            <ChevronRight className="w-4 h-4 text-brand-navy/70 transform group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>
      </div>

      {/* 4. AŞAĞI KAYDIRIN GÖSTERGESİ */}
      <div className="relative z-10 pt-6 sm:pt-8 pb-2 sm:pb-4 flex flex-col items-center justify-center shrink-0">
        <button
          onClick={scrollToHistory}
          aria-label="Aşağı kaydırarak hikayemizi keşfedin"
          className="group flex flex-col items-center gap-1.5 cursor-pointer focus:outline-none"
        >
          <span className="text-xs uppercase tracking-widest text-brand-navy/80 font-bold group-hover:text-brand-navy transition-colors drop-shadow-[0_1px_1px_rgba(255,255,255,0.4)]">
            Aşağı Kaydırın
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-10 h-10 rounded-full bg-brand-navy text-brand-yellow flex items-center justify-center shadow-lg group-hover:bg-brand-navy/90 transition-all border border-brand-yellow/40"
          >
            <ChevronDown className="w-5 h-5 text-brand-yellow" strokeWidth={2.5} />
          </motion.div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
