import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu as MenuIcon, X, Compass, PhoneCall } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Giriş', href: '#hero' },
    { label: 'Hikayemiz', href: '#hikaye' },
    { label: 'Lezzetler', href: '#menu' },
    { label: 'Konum & İletişim', href: '#konum' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-5 sm:px-8 py-2.5 sm:py-3 flex items-center justify-between ${
            isScrolled
              ? 'bg-brand-navy/85 backdrop-blur-md shadow-2xl border border-white/10 text-white'
              : 'bg-brand-navy/30 backdrop-blur-sm border border-brand-navy/15 text-brand-navy'
          }`}
        >
          {/* Logo & Marka İsmi */}
          <a
            href="#hero"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-yellow p-1 bg-brand-yellow/90 shrink-0 shadow-md flex items-center justify-center">
              <img
                src="/logo-emblem-trans.png"
                alt="Eski İskele Dondurmacısı Logosu"
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
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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

      {/* Mobil Açılır Menü */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden bg-brand-navy/95 backdrop-blur-xl border border-brand-yellow/30 rounded-3xl p-6 shadow-2xl text-white"
          >
            <div className="flex flex-col space-y-4 text-center">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 text-base font-serif font-bold text-white hover:text-brand-yellow transition-colors border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-2">
                <a
                  href="#konum"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-full bg-brand-yellow text-brand-navy font-bold text-sm shadow-lg"
                >
                  <PhoneCall className="w-4 h-4 text-brand-red" />
                  <span>Yol Tarifi & İletişim</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
