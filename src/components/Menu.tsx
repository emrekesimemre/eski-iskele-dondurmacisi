import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { MenuItem } from '../types';
import { Star, Shield, Award } from 'lucide-react';

// 1. DATA YAPISI (Mock Data)
export const menuItems: MenuItem[] = [
  {
    id: 'hakiki-ahlat-sadesi',
    title: 'Hakiki Ahlat Sadesi',
    subtitle: 'Taş Havan Dağ Salebi & Taze Yayla Sütü',
    description:
      'Dondurmamızın amiral gemisi. Süphan eteklerindeki zengin meraların taze sütü, taş havanlarda dövülmüş yabani salep ile saatlerce tokmaklanır. Kaşık bükülten, sakız kıvamında hakiki bir lezzet şaheseri.',
    image:
      'https://images.unsplash.com/photo-1560008581-09826d1de69e?auto=format&fit=crop&w=1200&q=80',
    category: 'Klasik',
    ingredients: ['%100 Taze Yayla Sütü', 'Yabani Dağ Salebi', 'Pancar Şekeri'],
    tag: 'İmza Lezzet',
    isFeatured: true,
    tastingNotes: 'Buram buram doğal salep kokusu, yoğun ve pürüzsüz damak hissi.',
  },
  {
    id: 'nemrut-yabani-karadutu',
    title: 'Nemrut Yabani Karadutu',
    subtitle: 'Güneşte Olgunlaşmış Ahlat Karadutları',
    description:
      'Nemrut krateri yamaçlarından sabahın erken saatlerinde elle toplanan taze karadutların ferahlatıcı mayhoşluğu. Süt içermeyen saf meyve şöleni.',
    image:
      'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=900&q=80',
    category: 'Mevsimlik',
    ingredients: ['Yabani Ahlat Karadutu', 'Limon Kabuğu Esintisi', 'Doğal Kaynak Suyu'],
    tag: 'Yaz Hasatı',
    isFeatured: false,
    tastingNotes: 'Tatlı ve mayhoşun göl esintisiyle dengelenmiş serinletici patlaması.',
  },
  {
    id: 'koyu-mese-kakaolu',
    title: 'Koyu Meşe Kakaolu',
    subtitle: 'Yoğun Kakao Çekirdekleri & Bitter Çikolata',
    description:
      'Geleneksel dövme kıvam ile %72 yoğun bitter kakao çekirdeklerinin buluşması. Ağırlaşmayan, sütlü ama doygun ve asil bir bitter lezzeti.',
    image:
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80',
    category: 'Klasik',
    ingredients: ['Doğal Kakao Çekirdeği', 'Bitter Çikolata', 'Süphan Yayla Sütü'],
    tag: 'Klasik',
    isFeatured: false,
    tastingNotes: 'Koyu kavrulmuş kakao derinliği ve kremsi yoğunluk.',
  },
  {
    id: 'duble-boz-antep-fistikli',
    title: 'Duble Boz Antep Fıstıklı',
    subtitle: 'Yeni Mahsul Fıstık Taneleri & Çekilmiş Ezme',
    description:
      'Erken hasat duble boz fıstıkların taş değirmende çekilmiş saf ezmesi ve çıtır iri tanecikleriyle harmanlanmış gurme bir lezzet ziyafeti.',
    image:
      'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=900&q=80',
    category: 'Özel Reçete',
    ingredients: ['Boz Antep Fıstığı', 'Köz Fıstık Parçaları', 'Doğal Taze Süt'],
    tag: 'Gurme Seçim',
    isFeatured: false,
    tastingNotes: 'Zümrüt yeşili doğallık ve çıtır fıstık dokusu.',
  },
  {
    id: 'geleneksel-damla-sakizli',
    title: 'Geleneksel Damla Sakızlı',
    subtitle: 'Hakiki Ada Damla Sakızı Reçinesi',
    description:
      'Havanlarda toz haline getirilen hakiki damla sakızı reçinesinin sıcak yayla sütüyle demlenmesi sonucu ortaya çıkan eşsiz lezzet dengesi.',
    image:
      'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=900&q=80',
    category: 'Klasik',
    ingredients: ['Damla Sakızı Reçinesi', 'Saf Salep', 'Taze Yayla Sütü'],
    tag: 'Geleneksel',
    isFeatured: false,
    tastingNotes: 'Ferahlatıcı reçine aroması ve sonsuz uzayan kıvam.',
  },
  {
    id: 'ahlat-cevizli-bal',
    title: 'Coğrafi İşaretli Ahlat Cevizli',
    subtitle: 'Meşhur Ahlat İnce Kabuk Cevizi & Yayla Balı',
    description:
      'Ahlat’ın tescilli çıtır cevizleri, karakovan yayla balı ile kavrulup dövme dondurma tabanına bolca eklenir. Zengin ve asil bir tat profili.',
    image:
      'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&w=900&q=80',
    category: 'Özel Reçete',
    ingredients: ['Ahlat Cevizi', 'Karakovan Balı', 'Dövme Yayla Sütü'],
    tag: 'Coğrafi İşaretli',
    isFeatured: false,
    tastingNotes: 'Kavruk ceviz dokusu ve balın hafif karamelize zarafeti.',
  },
  {
    id: 'van-golu-kokulu-kavun',
    title: 'Van Gölü Kokulu Kavun',
    subtitle: 'Göl Havzası Güneşinde Olgunlaşan',
    description:
      'Van Gölü mikroklimasında yetişen buram buram kokulu yerli kavunların püre haline getirilip taze yayla sütüyle nazikçe harmanlanmasıyla hazırlanır.',
    image:
      'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=900&q=80',
    category: 'Mevsimlik',
    ingredients: ['Havza Kavunu', 'Taze Süt', 'Doğal Dağ Salebi'],
    tag: 'Mevsim Ferahlığı',
    isFeatured: false,
    tastingNotes: 'İlk kaşıkta kavun tarlası tazeliği, ipeksi ferah doku.',
  },
];

type CategoryFilter = 'Tümü' | 'Klasik' | 'Mevsimlik' | 'Özel Reçete';

// Animasyon varyantları (Layout shift'i önlemek için container gizlenmez)
const gridContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.02,
    },
  },
};

export const Menu: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('Tümü');

  const filteredItems = menuItems.filter((item) => {
    if (activeFilter === 'Tümü') return true;
    return item.category === activeFilter;
  });

  return (
    <section
      id="menu"
      className="relative w-full bg-brand-navy text-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Arka plan ışık efektleri */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-brand-teal/15 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ============================================================
            2. ÜST BÖLÜM (HEADER & FİLTRELER)
        ============================================================ */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          {/* Hap (Pill) Rozet: Teal border ve yazı */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "100px" }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-teal text-brand-teal bg-brand-teal/10 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4"
          >
            <Star className="w-3.5 h-3.5 text-brand-teal fill-brand-teal" />
            <span>HAKİKİ DÖVME USULÜ</span>
          </motion.div>

          {/* Başlık: Beyaz Serif + Brand-Yellow İtalik Serif */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white mb-6"
          >
            Özenle Hazırlanan <br />
            <span className="text-brand-yellow italic font-serif">Lezzetlerimiz</span>
          </motion.h2>

          {/* İnce gri/beyaz açıklama metni */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-white/70 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            Tüm dondurmalarımızda sadece Ahlat yaylalarının taze sütü, yüksek dağların yabani salebi ve mevsiminde toplanan doğal meyveler kullanılır. Asla glikoz şurubu veya renklendirici içermez.
          </motion.p>

          {/* Filtre Butonları */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1, margin: "100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-10"
          >
            {(['Tümü', 'Klasik', 'Mevsimlik', 'Özel Reçete'] as CategoryFilter[]).map((category) => {
              const isActive = activeFilter === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-brand-yellow text-brand-navy font-semibold shadow-md scale-105'
                      : 'bg-transparent border border-white/20 text-white hover:border-white/50 hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* ============================================================
            3 & 4. GRID VE KART MİMARİSİ (ASİMETRİK BENTO)
        ============================================================ */}
        <motion.div
          layout
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1, margin: "100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isFeatured = item.isFeatured;

              return (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: 10 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`will-change-transform will-change-opacity group relative rounded-3xl bg-white/5 backdrop-blur-sm p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 border border-white/10 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(0,0,0,0.5)] ${
                    isFeatured ? 'md:col-span-2' : ''
                  }`}
                >
                  <div>
                    {/* Üst Kısım: Resim (h-64 sm:h-72) */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-6 bg-brand-navy">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        loading="lazy"
                      />

                      {/* GÖRSEL GEÇİŞİ: Resmin alt %50'sini kapsayan ve metin okunabilirliğini artıran derin gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/85 via-50% to-transparent pointer-events-none" />

                      {/* Resmin Sol Üst Rozeti: Buzlu Cam (Glassmorphism) Efekti */}
                      <div className="absolute top-3 left-3 z-10 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/30 backdrop-blur-md text-white border border-white/20 shadow-sm">
                        <Star className="w-3.5 h-3.5 text-brand-yellow fill-brand-yellow" />
                        <span>{item.tag}</span>
                      </div>

                      {/* Resmin Sağ Üst Yazısı: Buzlu Cam (Glassmorphism) Efekti */}
                      <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1.5 text-xs text-white/90 font-medium px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-md border border-white/20 shadow-sm">
                        {isFeatured ? (
                          <>
                            <Award className="w-3.5 h-3.5 text-brand-yellow" />
                            <span>İmza Reçete</span>
                          </>
                        ) : (
                          <span>{item.category}</span>
                        )}
                      </div>

                      {/* Resmin Hemen Altında Gradient Üstüne Binen Tipografi */}
                      <div className="absolute bottom-3 left-4 right-4 z-10">
                        <span className="text-xs uppercase tracking-wider text-brand-yellow font-bold block mb-1">
                          {item.subtitle}
                        </span>
                        <h3 className="font-serif text-2xl sm:text-3xl font-black text-white tracking-tight">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    {/* Orta Kısım: Açıklama Metni (text-gray-300) */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                      {item.description}
                    </p>

                    {/* Malzemeler (Saf İçerikler): Kalkan ikonu + SAF İÇERİKLER */}
                    <div className="space-y-2.5 pt-1 mb-6">
                      <div className="flex items-center gap-1.5 text-xs text-brand-teal font-bold uppercase tracking-wider">
                        <Shield className="w-3.5 h-3.5" />
                        <span>SAF İÇERİKLER</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.ingredients.map((ing) => (
                          <span
                            key={ing}
                            className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 group-hover:border-white/20 transition-colors"
                          >
                            {ing}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Alt Bilgi (Footer): İnce ayırıcı çizgi, solda italik not, sağda turkuaz Dövme Usulü */}
                  <div className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between text-xs text-white/60">
                    <span className="italic text-gray-300 text-[11px] sm:text-xs">
                      &ldquo;{item.tastingNotes}&rdquo;
                    </span>
                    <span className="font-medium text-brand-teal shrink-0 ml-3 tracking-wide">
                      Dövme Usulü
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Menu;
