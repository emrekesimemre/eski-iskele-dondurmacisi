import React from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import History from './components/History';
import Menu from './components/Menu';
import Location from './components/Location';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

export const App: React.FC = () => {
  return (
    <div className="min-h-[100svh] bg-[#fafafa] text-white selection:bg-brand-yellow selection:text-brand-navy font-sans relative antialiased">
      {/* Sabit Cam Efektli Gezinme Çubuğu */}
      <Navbar />

      {/* Ana Bölümler */}
      <main>
        {/* 1. Giriş Bölümü: Hero (min-h-[100svh], bg-brand-teal, Framer Motion fade-up & spring logo, bounce arrow) */}
        <Hero />

        {/* 2. Hikayemiz Bölümü: History (bg-[#fafafa], text-brand-navy, whileInView slide-in, useScroll parallax) */}
        <History />

        {/* 3. Lezzetlerimiz Bölümü: Menu (Modern Bento-Box grid, hover yükselme & shadow-xl & border-brand-yellow) */}
        <Menu />

        {/* 4. Konum ve İletişim Bölümü: Location (bg-brand-navy, text-brand-teal ve beyaz, Google Maps iframe) */}
        <Location />
      </main>

      {/* Alt Bilgi / Footer */}
      <Footer />

      {/* Akıllı ve Sabit Sayfa Başına Dön Butonu */}
      <ScrollToTop />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
};

export default App;
