import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const { scrollY } = useScroll();
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    // Sayfa ilk yüklendiğinde kontrol et (en tepedeyse asla gösterme)
    setShow(window.scrollY > 400);

    // Scroll değişimlerini Framer Motion scroll motoru ile kesintisiz dinle
    const unsubscribe = scrollY.on('change', (latest) => {
      setShow(latest > 400);
    });

    return () => unsubscribe();
  }, [scrollY]);

  const handleScrollToTop = () => {
    // Tıklandığı an butonu hemen yok et (en yukarıda beklemesin)
    setShow(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 rounded-full bg-brand-navy border border-white/10 p-3 shadow-2xl hover:bg-brand-teal hover:text-brand-navy text-white transition-colors duration-300 group cursor-pointer focus:outline-none"
          title="Yukarı Çık"
          aria-label="Sayfanın en başına dön"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
