/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-teal': '#16a092',    // Ana arka plan, ferah iskele hissiyatı
        'brand-navy': '#171630',    // Metinler, başlıklar ve kontrast alanlar
        'brand-red': '#c82136',     // Vurgu ve aksan renkleri
        'brand-yellow': '#efd581',  // Sıcak detaylar, hover efektleri
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', '"Quicksand"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
