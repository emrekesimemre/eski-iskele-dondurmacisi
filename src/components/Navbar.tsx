import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Compass, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Scroll dinleyicisi: passive: true ile ana iş parçacığı bloklanmaz
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 40;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mobil menü açıkken arka plan kaydırmasını kilitle (lag ve çakışmayı önler)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Hikayemiz', href: '#hikaye' },
    { label: 'Lezzetler', href: '#menu' },
    { label: 'Konum & İletişim', href: '#konum' },
  ];

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled
            ? 'py-3 backdrop-blur-md bg-brand-navy/80 border-b border-white/10 shadow-lg'
            : 'py-5 bg-transparent'
        }`}
      >
        <div
          className={`max-w-6xl mx-auto rounded-full transition-colors duration-300 px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between ${
            isScrolled
              ? 'bg-brand-navy/90 border border-white/15 text-white shadow-md'
              : 'bg-brand-navy/35 backdrop-blur-sm border border-brand-navy/15 text-brand-navy'
          }`}
        >
          {/* Logo & Marka İsmi */}
          <a
            href="#hero"
            onClick={scrollToTop}
            className="flex items-center gap-3 group focus:outline-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-yellow p-1 bg-brand-yellow shrink-0 shadow-md flex items-center justify-center">
              <img
                src="/logo-emblem-trans.webp"
                alt="Eski İskele Dondurmacısı Logosu"
                width={36}
                height={36}
                loading="eager"
                fetchPriority="high"
                decoding="sync"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span
                className={`font-serif font-black text-sm sm:text-base leading-none tracking-wider ${
                  isScrolled ? 'text-brand-yellow' : 'text-brand-navy'
                }`}
              >
                ESKİ İSKELE
              </span>
              <span
                className={`text-[10px] tracking-[0.2em] uppercase font-semibold ${
                  isScrolled ? 'text-white/80' : 'text-brand-navy/80'
                }`}
              >
                Dondurmacısı &bull; Ahlat
              </span>
            </div>
          </a>

          {/* Masaüstü Navigasyon */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-brand-yellow relative py-1 ${
                  isScrolled ? 'text-white/90' : 'text-brand-navy'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* İskele Ziyaret Butonu */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#konum"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-brand-yellow text-brand-navy hover:bg-brand-yellow/90 shadow-md hover:shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              <Compass className="w-3.5 h-3.5 text-brand-red" />
              <span>İskelede Buluşalım</span>
            </a>
          </div>

          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Menüyü aç/kapat"
            className={`md:hidden p-2 rounded-full transition-colors ${
              isScrolled
                ? 'text-white hover:bg-white/10'
                : 'text-brand-navy hover:bg-brand-navy/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobil Açılır Menü ve GPU Optimize Arka Plan */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Arka plan karartması: Dışarı tıklandığında kapatır (GPU dostu, blur yok) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 md:hidden"
            />

            {/* Menü Kartı:
                - backdrop-blur kaldırıldı (Mobil GPU rasterization donmasını çözer)
                - Katı (solid) koyu #171630 arkaplan
                - will-change-transform ile doğrudan GPU katmanında animasyon
            */}
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18, ease: 'easeOut' }}
              className="will-change-transform fixed inset-x-4 top-20 z-50 md:hidden bg-[#171630] border border-brand-yellow/40 rounded-3xl p-6 shadow-2xl text-white"
            >
              <div className="flex flex-col space-y-3 text-center">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2.5 text-base font-serif font-bold text-white hover:text-brand-yellow transition-colors border-b border-white/5 active:bg-white/5 rounded-xl"
                  >
                    {link.label}
                  </a>
                ))}

                <div className="pt-2">
                  <a
                    href="#konum"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-brand-yellow text-brand-navy font-bold text-sm shadow-lg active:scale-95 transition-transform"
                  >
                    <PhoneCall className="w-4 h-4 text-brand-red" />
                    <span>Yol Tarifi & İletişim</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
