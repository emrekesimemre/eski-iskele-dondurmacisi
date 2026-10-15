import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { HistoryMilestone, ArtisanValue } from '../types';
import { Milk, Mountain, Clock, Feather, Sparkles, ShieldCheck } from 'lucide-react';

const principles: HistoryMilestone[] = [
  {
    step: '01',
    title: 'Kaynağından Taze Süt',
    description:
      'Her gün erken saatlerde Süphan ve Nemrut eteklerindeki yaylalardan toplanan saf ve taze süt.',
    badge: 'Saf İçerik',
  },
  {
    step: '02',
    title: 'Hakiki Yabani Salep',
    description:
      'Hiçbir yapay kıvam artırıcı kullanmadan, taş havanlarda öğütülen dağ salebiyle elde edilen doğal sakız kıvamı.',
    badge: 'Doğal Kıvam',
  },
  {
    step: '03',
    title: 'Göl Kıyısında Samimiyet',
    description:
      'Ahlat İskelesi’nin serinliğinde, Van Gölü manzarası eşliğinde sevdiklerinizle paylaşacağınız tatlı bir mola.',
    badge: 'İskele Ruhu',
  },
];

const artisanValues: ArtisanValue[] = [
  {
    icon: 'Milk',
    title: 'Yaylalardan Taze Süt',
    subtitle: 'SÜPHAN & NEMRUT MERALARI',
    description:
      'Bölgenin zengin florasında, kekik ve gevenle beslenen yerel meralardan her sabah taze sağılan kaliteli ve yağlı süt kullanılır.',
  },
  {
    icon: 'Mountain',
    title: 'Yabani Dağ Salebi',
    subtitle: 'TAŞ HAVANLARDA ÇEKİLMİŞ',
    description:
      'Bölgenin sarp yamaçlarından toplanan hakiki orkide yumruları, dondurmaya o benzersiz elastikiyetini ve kokusunu verir.',
  },
  {
    icon: 'Clock',
    title: 'Sabırla Dövülen Kıvam',
    subtitle: 'GELENEKSEL TOKMAK USULÜ',
    description:
      'Hızlı endüstriyel üretim değil; sabır, bilek gücü ve özenle dövülerek sakız kıvamına getirilen dürüst bir lezzet.',
  },
];

export const History: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  // Görsel için Parallax Scroll Hook
  const { scrollYProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  // Parallax Y kaydırma ve Scale efekti (GPU dostu hafif değerler)
  const imageY = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.0]);

  return (
    <section
      id="hikaye"
      className="relative w-full bg-[#fafafa] text-brand-navy py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <span id="history" className="sr-only" />
      {/* Dekoratif Arka Plan Ahlat Dokusu */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* ============================================================
            1. BÖLÜM: BAŞLIK & ÜST BÖLÜM (Statik HTML - Asla Gecikmez)
        ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 border border-brand-navy/10">
            <Feather className="w-3.5 h-3.5 text-brand-red" />
            <span>Felsefemiz & Hikayemiz</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-brand-navy leading-tight">
            Van Gölü&apos;nün Kıyısında, <br />
            <span className="text-brand-red font-serif italic font-normal">
              Gerçek Bir
            </span>{' '}
            Zanaat Hikayesi
          </h2>

          {/* Turkuaz Alt Çizgi */}
          <div className="w-36 sm:w-48 md:w-56 h-1 sm:h-1.5 bg-brand-teal mx-auto mt-4 sm:mt-5 rounded-full" />
        </div>

        {/* ============================================================
            2. BÖLÜM: HİKAYE METNİ VE PARALLAX GÖRSEL (Statik Grid)
        ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          {/* Sol Kolon: Editoryal Anlatı & Rozetler */}
          <div className="lg:col-span-6 space-y-6 text-base sm:text-lg leading-relaxed text-brand-navy/85">
            <div className="p-5 sm:p-7 rounded-2xl bg-white border-l-4 border-brand-teal shadow-md">
              <p className="font-serif italic text-lg sm:text-xl text-brand-navy leading-relaxed">
                &ldquo;Ahlat&apos;ın tarihi dokusuyla harmanlanmış, göl kenarındaki o eski iskelede başlayan serüvenimiz; katkısız, dürüst ve yerel malzemelerle aynı doğallıkla devam ediyor.&rdquo;
              </p>
            </div>

            <p className="text-justify sm:text-left">
              Endüstriyel dondurmaların yapay kıvam artırıcılarına, glikoz şuruplarına ve sentetik aromalarına karşı; çocukluğumuzun saf ve gerçek dondurma tadını yaşatmak için yola çıktık. Ahlat&apos;ın berrak havasında, Van Gölü&apos;nün hemen kıyısındaki eski iskelede ocağımızı kurduk.
            </p>

            <p className="text-justify sm:text-left">
              Dondurmalarımızda hiçbir katkı maddesi kullanmıyoruz. Sadece yüksek rakımlı Ahlat yaylalarının taze sütü, dağlardan toplanan yabani salep, yerel bahçelerden karadutlar ve meşhur Ahlat cevizi. Göle karşı oturup bir kase dondurma yerken hissettiğiniz o ferahlık, doğallığın ta kendisidir.
            </p>

            {/* İstatistik / Değer Rozetleri */}
            <div className="!mt-10 sm:!mt-12 grid grid-cols-3 gap-2 sm:gap-4 pt-6 border-t border-brand-navy/10">
              <div className="text-center px-2 py-3.5 sm:p-5 rounded-2xl bg-white shadow-md border border-brand-navy/5 hover:shadow-lg transition-shadow">
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-brand-teal tracking-tight">%100</span>
                <span className="block text-[10px] sm:text-xs text-brand-navy/70 uppercase tracking-wider font-semibold mt-1">Doğal</span>
              </div>
              <div className="text-center px-2 py-3.5 sm:p-5 rounded-2xl bg-white shadow-md border border-brand-navy/5 hover:shadow-lg transition-shadow">
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-brand-red tracking-tight">Yerel</span>
                <span className="block text-[10px] sm:text-xs text-brand-navy/70 uppercase tracking-wider font-semibold mt-1">Ahlat Sütü</span>
              </div>
              <div className="text-center px-2 py-3.5 sm:p-5 rounded-2xl bg-white shadow-md border border-brand-navy/5 hover:shadow-lg transition-shadow">
                <span className="block text-xl min-[380px]:text-[22px] min-[420px]:text-2xl sm:text-3xl lg:text-4xl font-serif font-black text-brand-navy tracking-tight whitespace-nowrap">Katkısız</span>
                <span className="block text-[10px] sm:text-xs text-brand-navy/70 uppercase tracking-wider font-semibold mt-1">Temiz İçerik</span>
              </div>
            </div>
          </div>

          {/* Sağ Kolon: Kenarlıksız Parallax Görsel + Dönen Rozet */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Sağ Üstten Taşan Dönen "DOĞAL EL YAPIMI" Rozeti */}
              <div className="absolute -top-4 -right-4 md:-top-8 md:-right-8 z-20 pointer-events-none">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                  className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-brand-navy border-2 border-brand-yellow shadow-2xl flex items-center justify-center select-none"
                >
                  {/* Dairesel Dönen Metin */}
                  <svg className="w-full h-full p-1" viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="badgeCirclePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text fontSize="9.2" className="uppercase font-bold tracking-[0.24em] fill-brand-yellow">
                      <textPath href="#badgeCirclePath" startOffset="0%">
                        • DOĞAL EL YAPIMI • AHLAT •
                      </textPath>
                    </text>
                  </svg>

                  {/* Rozet Merkezi Süsü */}
                  <div className="absolute inset-0 m-auto w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full border border-dashed border-brand-yellow/60 flex flex-col items-center justify-center text-brand-yellow">
                    <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-brand-teal" />
                    <span className="text-[7px] sm:text-[8px] md:text-[10px] font-black tracking-widest text-brand-yellow">
                      100%
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Parallax Görsel Kapsayıcısı */}
              <div
                ref={imageContainerRef}
                className="relative aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl bg-brand-navy will-change-transform"
              >
                <motion.img
                  src="/ahlat-selcuklu.png"
                  alt="Ahlat Selçuklu Meydan Mezarlığı Mezar Taşları"
                  style={{ y: imageY, scale: imageScale }}
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-[0.95]"
                />

                {/* Yukarıya Doğru Uzatılmış Zengin Karartma Kaplaması */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/95 via-brand-navy/50 via-45% to-transparent pointer-events-none" />

                {/* Fotoğraf Üzeri Bilgi */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex items-end justify-between text-white z-10">
                  <div>
                    <span className="inline-block text-xs uppercase tracking-widest text-brand-yellow font-semibold drop-shadow-sm">
                      Tarihi Ahlat Taşları &bull; Selçuklu Meydan Mezarlığı
                    </span>
                    <h3 className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-white drop-shadow-md mt-0.5">
                      Kültürel Mirasın Gölgesinde
                    </h3>
                  </div>
                  <div className="text-right shrink-0 ml-3">
                    <span className="font-serif italic text-xs sm:text-sm text-brand-yellow/90">
                      Ahlat / Bitlis
                    </span>
                  </div>
                </div>
              </div>

              {/* Şık, Gri, İtalik Resim Altı Caption */}
              <p className="mt-3.5 text-xs sm:text-sm text-brand-navy/60 italic font-serif flex items-center justify-center sm:justify-start gap-2 px-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-teal shrink-0" />
                <span>Ahlat Selçuklu taşlarının gölgesinde, Van Gölü esintisiyle sunulan doğal zanaat.</span>
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================
            3. BÖLÜM: ORTA BÖLÜM (ÜÇLÜ ÖZELLİK KARTLARI)
        ============================================================ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {artisanValues.map((val) => {
            const IconComponent =
              val.icon === 'Milk' ? Milk : val.icon === 'Mountain' ? Mountain : Clock;

            return (
              <div
                key={val.title}
                className="group p-6 sm:p-8 rounded-2xl bg-white border border-brand-navy/10 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col h-full cursor-default"
              >
                {/* Açık turkuaz kutu içindeki ikon */}
                <div className="w-14 h-14 rounded-xl bg-brand-teal/10 text-brand-teal p-3.5 flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shrink-0">
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Üst Başlık */}
                <span className="text-xs uppercase font-bold tracking-wider text-brand-red block mb-1">
                  {val.subtitle}
                </span>

                {/* Başlık */}
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-navy mb-3">
                  {val.title}
                </h3>

                {/* Açıklama Metni */}
                <p className="text-sm sm:text-base text-brand-navy/75 leading-relaxed mt-auto">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ============================================================
            4. BÖLÜM: ALT BÖLÜM (DEĞERLER / SÜREÇ ADIMLARI)
        ============================================================ */}
        <div className="border-t border-brand-navy/10 my-16" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {principles.map((ms) => (
            <div
              key={ms.step}
              className="border-l-2 border-brand-teal pl-4 sm:pl-5 transition-colors duration-200"
            >
              {/* Rozet */}
              <span className="inline-block px-3 py-1 rounded-md text-xs font-bold bg-brand-navy text-brand-yellow mb-3 shadow-sm tracking-wide">
                {ms.badge} &bull; {ms.step}
              </span>

              {/* Başlık */}
              <h4 className="font-serif text-lg sm:text-xl font-bold text-brand-navy mb-2">
                {ms.title}
              </h4>

              {/* Açıklama */}
              <p className="text-sm sm:text-base text-brand-navy/70 leading-relaxed">
                {ms.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default History;
