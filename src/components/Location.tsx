import React, { useState } from 'react';
import {
  MapPin,
  Clock,
  Compass,
  Navigation,
  ExternalLink,
  Copy,
  Check,
  Waves,
  Phone,
} from 'lucide-react';
import { ContactDetails } from '../types';

const contactInfo: ContactDetails = {
  brandName: 'Eski İskele Dondurmacısı',
  address: 'Tarihi Ahlat İskelesi Yanı, Van Gölü Sahil Caddesi',
  district: 'Ahlat',
  city: 'Bitlis',
  workingHours: 'Her gün 10:00 - 23:30',
  phone: '+90 (505) 031 49 69',
  email: 'info@eskiiskeledondurmacisi.com',
  coordinates: {
    lat: 38.7519723,
    lng: 42.4979503,
  },
  googleMapsUrl: 'https://maps.app.goo.gl/q7LtvzRh6xf8HvTQA',
};

export const Location: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopyAddress = () => {
    const fullText = `${contactInfo.brandName}, ${contactInfo.address}, ${contactInfo.district}/${contactInfo.city}`;
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Google Maps embed URL (Ahlat İskelesi koordinatları ile)
  const mapEmbedUrl = `https://maps.google.com/maps?q=${contactInfo.coordinates.lat},${contactInfo.coordinates.lng}&hl=tr&z=15&output=embed`;

  return (
    <section
      id="konum"
      className="relative w-full bg-brand-navy text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-brand-teal/20"
    >
      {/* Arka plan atmosferik parlamalar (GPU dostu radyal gradyanlar) */}
      <div className="absolute top-0 right-1/4 w-96 h-96 [background:radial-gradient(circle,rgba(22,160,146,0.12)_0%,transparent_70%)] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 [background:radial-gradient(circle,rgba(239,213,129,0.1)_0%,transparent_70%)] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ============================================================
            ÜST BAŞLIK (HEADER) - Statik & Her Zaman Görünür
        ============================================================ */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          {/* Hap (Pill) Rozet: Pusula ikonu + ZİYARET & ULAŞIM */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-teal/15 text-brand-teal text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 border border-brand-teal/30">
            <Compass className="w-3.5 h-3.5 text-brand-teal" />
            <span>ZİYARET & ULAŞIM</span>
          </div>

          {/* Büyük Font-Serif Beyaz + İtalik Turkuaz Başlık */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-tight">
            Göl Kenarında <br />
            <span className="text-brand-teal font-serif italic">Bizi Ziyaret Edin</span>
          </h2>

          {/* Açık gri/beyaz açıklama metni */}
          <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed font-light">
            Van Gölü&apos;nün serinletici kıyısında, tarihi Ahlat İskelesi&apos;nin hemen yanı başında taze dövme dondurmamızla sizleri bekliyoruz.
          </p>
        </div>

        {/* ============================================================
            ASİMETRİK GRID (Sol 2 Kolon, Sağ 3 Kolon) - Statik
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Sol Kart: İletişim Bilgileri (2 Kolon) */}
          <div className="lg:col-span-2 flex flex-col justify-between space-y-7 p-7 sm:p-9 rounded-3xl bg-white/5 border border-white/10 shadow-2xl">
            <div className="space-y-6">
              {/* Lokasyon Üst Başlık & Marka */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest font-bold text-brand-yellow">
                  İSKELE LOKASYONUMUZ
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-snug">
                  Eski İskele Dondurmacısı
                </h3>
              </div>

              {/* Adres ve Koordinat */}
              <div className="flex items-start gap-3 text-white/85 text-base pt-1">
                <MapPin className="w-5 h-5 text-brand-teal shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-white">{contactInfo.address}</p>
                  <p className="text-brand-teal font-semibold text-sm mt-0.5">
                    {contactInfo.district} / {contactInfo.city} &bull; Bitlis
                  </p>
                  <p className="text-xs text-white/50 mt-1 font-mono">
                    (Koordinat: {contactInfo.coordinates.lat}, {contactInfo.coordinates.lng})
                  </p>
                </div>
              </div>

              {/* İç Kart: Çalışma Saatleri */}
              <div className="p-6 rounded-2xl bg-brand-navy/50 border border-white/10 space-y-3 shadow-inner">
                <div className="flex items-center gap-2 text-brand-yellow font-bold text-xs uppercase tracking-wider">
                  <Clock className="w-4 h-4 text-brand-yellow" />
                  <span>ÇALIŞMA SAATLERİ</span>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Her gün 10:00 - 23:30
                  </p>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-brand-teal text-brand-navy shrink-0">
                    Haftanın 7 Günü
                  </span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Mevsim boyunca taze dövülmüş dondurmamızla gece geç saatlere kadar iskelede hizmetinizdeyiz.
                </p>
              </div>

              {/* Telefon & Sipariş */}
              <div className="flex items-center gap-3 text-white/85 pt-1">
                <Phone className="w-5 h-5 text-brand-teal shrink-0" />
                <div>
                  <span className="block text-xs uppercase text-white/50 tracking-wider">Telefon</span>
                  <a
                    href={`tel:${contactInfo.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-base font-semibold text-white hover:text-brand-yellow transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              {/* Gerçek Mekan / Dükkan Önizlemesi - Dükkanın altı, cam cephesi ve girişi tam görünür */}
              <div className="relative rounded-2xl overflow-hidden aspect-[3/4] sm:aspect-[4/5] max-h-[480px] border border-white/10 shadow-lg group isolate bg-brand-navy">
                <img
                  src="/ahlat-dukkan.png"
                  alt="Eski İskele Dondurmacısı Ahlat Sahil Dükkanı"
                  className="w-full h-full object-cover object-bottom rounded-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-brand-navy/40 via-transparent to-transparent pointer-events-none" />

                {/* Üst Kısımda Şık Glassmorphism Rozet (Dükkanın altını kapatmaz) */}
                <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-brand-navy/85 backdrop-blur-md text-white border border-white/20 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                  <span className="text-brand-yellow font-bold">İskele Dükkanımız</span>
                  <span className="text-white/40">&bull;</span>
                  <span className="text-white/80 text-[11px]">Ahlat Sahili</span>
                </div>
              </div>

              {/* Göl Esintisi Notu */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-white/70">
                <Waves className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                <span>
                  Ahlat Selçuklu Meydan Mezarlığı ve Kümbetler gezinizin ardından göl kenarında serinlemek için ideal mola durağı.
                </span>
              </div>
            </div>

            {/* Aksiyon Butonları: mt-6 sm:mt-8 yeterli nefes payı */}
            <div className="mt-6 sm:mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
              <a
                href={contactInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[150px] inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-brand-teal hover:bg-brand-teal/90 text-brand-navy font-bold text-sm shadow-lg hover:shadow-brand-teal/30 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Yol Tarifi Al</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium text-sm border border-white/10 transition-all active:scale-95"
                title="Adresi Kopyala"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-brand-yellow" />
                    <span className="text-brand-yellow font-bold">Kopyalandı!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-white/80" />
                    <span>Adresi Kopyala</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Sağ Kart: Google Maps Haritası (3 Kolon) */}
          <div className="lg:col-span-3 flex flex-col">
            <div className="relative w-full h-[450px] sm:h-[500px] lg:h-full min-h-[440px] rounded-3xl overflow-hidden border border-white/15 bg-[#131226] shadow-2xl group">
              {/* Harita İçi Nabız Atan Canlı Konum Rozeti */}
              <div className="absolute top-5 left-5 z-10 px-4 py-2.5 rounded-2xl bg-brand-navy/90 backdrop-blur-md border border-brand-yellow/50 text-white shadow-xl flex items-center gap-2.5 pointer-events-none">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red" />
                </span>
                <span className="text-xs font-serif font-bold text-brand-yellow tracking-wide">
                  Ahlat İskelesi &bull; Canlı Konum
                </span>
              </div>

              {/* Google Maps Embed Iframe - Dark Theme CSS Filters */}
              <iframe
                title="Eski İskele Dondurmacısı Google Haritası"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                className="w-full h-full min-h-[440px] border-0 filter grayscale-[20%] invert-[90%] hue-rotate-[180deg] contrast-[85%] opacity-90"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Sağ Alt Köşe Koordinat Rozeti */}
              <div className="absolute bottom-5 right-5 z-10 hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-brand-navy/85 backdrop-blur-md border border-white/10 text-[11px] text-white/80 pointer-events-none font-mono">
                <span>38.7520° K, 42.4980° D</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
