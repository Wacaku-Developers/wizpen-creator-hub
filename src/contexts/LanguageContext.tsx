
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'id';

type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

// English and Indonesian translations
const translations: Translations = {
  nav: {
    features_en: "Features",
    features_id: "Fitur",
    how_it_works_en: "How it works",
    how_it_works_id: "Cara Kerja",
    pricing_en: "Pricing",
    pricing_id: "Harga",
    login_en: "Login",
    login_id: "Masuk",
    get_started_en: "Get started",
    get_started_id: "Mulai Sekarang",
  },
  hero: {
    title1_en: "Create, Sell, and Manage",
    title1_id: "Bikin, Jual, dan Kelola",
    title2_en: "Digital Content",
    title2_id: "Konten Digital",
    title3_en: "with Full Control",
    title3_id: "dengan Kontrol Penuh",
    subtitle_en: "A powerful all-in-one platform for creators to publish and monetize content — from bite-sized posts to full eBooks, with complete ownership over your pricing, sales, and revenue.",
    subtitle_id: "Platform serba bisa buat kreator untuk terbitkan dan menghasilkan uang dari konten — dari postingan pendek sampai eBook lengkap, dengan kendali penuh atas harga, penjualan, dan penghasilan kamu.",
    cta_en: "Start Creating and Selling For FREE",
    cta_id: "Mulai Bikin dan Jual GRATIS",
  },
  features: {
    title_en: "Everything creators need in one platform",
    title_id: "Semua yang kreator butuhkan dalam satu platform",
    subtitle_en: "No more juggling between different tools. Wizpen gives you everything you need to create, sell, and grow — all in one place.",
    subtitle_id: "Nggak perlu lagi sibuk pakai banyak alat. Wizpen kasih semua yang kamu butuhkan untuk bikin, jual, dan berkembang — semuanya dalam satu tempat.",
    studio_title_en: "Studio",
    studio_title_id: "Studio",
    studio_desc_en: "Create and publish bite-sized or longform content with an intuitive editor designed for creators.",
    studio_desc_id: "Bikin dan terbitkan konten pendek atau panjang dengan editor yang gampang banget buat kreator.",
    direct_sales_title_en: "Direct Sales",
    direct_sales_title_id: "Penjualan Langsung",
    direct_sales_desc_en: "Sell directly to your fans with customizable pricing and flexible packaging options.",
    direct_sales_desc_id: "Jual langsung ke fans kamu dengan harga yang bisa diatur dan pilihan paket yang fleksibel.",
    ownership_title_en: "Full Ownership",
    ownership_title_id: "Kepemilikan Penuh",
    ownership_desc_en: "Keep 100% ownership of your content and maintain complete control over your revenue.",
    ownership_desc_id: "Pertahankan kepemilikan konten 100% dan kontrol penuh atas penghasilan kamu.",
    analytics_title_en: "Analytics",
    analytics_title_id: "Analitik",
    analytics_desc_en: "Track performance with in-depth analytics to understand your audience and growth.",
    analytics_desc_id: "Pantau performa dengan analitik lengkap untuk pahami audiens dan pertumbuhan kamu.",
    withdrawals_title_en: "Simple Withdrawals",
    withdrawals_title_id: "Penarikan Simpel",
    withdrawals_desc_en: "Manage your income with an intuitive dashboard and easy withdrawal options.",
    withdrawals_desc_id: "Kelola penghasilan kamu dengan dashboard yang gampang dan pilihan penarikan yang mudah.",
    speed_title_en: "Speed & Clarity",
    speed_title_id: "Cepat & Jelas",
    speed_desc_en: "An easy-to-use interface designed for speed, clarity, and seamless content management.",
    speed_desc_id: "Antarmuka yang gampang dipakai dirancang untuk kecepatan, kejelasan, dan pengelolaan konten yang mulus.",
  },
  how_it_works: {
    title_en: "How Wizpen Works",
    title_id: "Gimana Wizpen Bekerja",
    subtitle_en: "Launch and sell your content in minutes with our streamlined process. No fee % required when withdrawal, no complex setup — just pure creation and monetization.",
    subtitle_id: "Luncurkan dan jual kontenmu dalam hitungan menit dengan proses yang simpel. Nggak ada biaya persentase saat penarikan, nggak ribet setting — cuma bikin dan hasilkan uang aja.",
    step1_title_en: "Create Your Content",
    step1_title_id: "Bikin Kontenmu",
    step1_desc_en: "Use our powerful studio to craft bite-sized posts or comprehensive eBooks with ease.",
    step1_desc_id: "Pakai studio keren kita buat bikin postingan singkat atau eBook lengkap dengan gampang.",
    step2_title_en: "Set Your Price",
    step2_title_id: "Tentukan Hargamu",
    step2_desc_en: "Choose your pricing strategy with complete flexibility — subscriptions, one-time sales, or bundles.",
    step2_desc_id: "Pilih strategi harga dengan fleksibilitas penuh — langganan, jual sekali bayar, atau bundel.",
    step3_title_en: "Publish & Share",
    step3_title_id: "Terbitkan & Bagikan",
    step3_desc_en: "Launch your content to the world and share it directly with your audience.",
    step3_desc_id: "Luncurkan kontenmu ke dunia dan bagikan langsung ke audiensmu.",
    step4_title_en: "Grow & Monetize",
    step4_title_id: "Tumbuh & Hasilkan Uang",
    step4_desc_en: "Track performance, understand what works, and maximize your revenue potential.",
    step4_desc_id: "Pantau performa, pahami apa yang berhasil, dan maksimalkan potensi penghasilanmu.",
  },
  testimonials: {
    title_en: "Trusted by creators worldwide",
    title_id: "Dipercaya kreator di seluruh dunia",
    subtitle_en: "Join the community of writers, educators, and digital creators who have taken control of their content and income.",
    subtitle_id: "Gabung dengan komunitas penulis, pendidik, dan kreator digital yang sudah mengambil kendali atas konten dan penghasilan mereka.",
    quote1_en: "Wizpen Studio gave me everything I need to monetize my writing without the usual platform restrictions. The best part? My readers appreciate the seamless experience.",
    quote1_id: "Wizpen Studio kasih semua yang aku butuhkan buat monetisasi tulisanku tanpa batasan platform yang biasa. Yang paling keren? Pembacaku suka banget sama pengalaman yang mulus.",
    quote2_en: "After years of fighting algorithms on other platforms, I now have direct access to my audience with total control over my income and content strategy.",
    quote2_id: "Setelah bertahun-tahun melawan algoritma di platform lain, sekarang aku punya akses langsung ke audiensku dengan kontrol total atas penghasilan dan strategi kontenku.",
    quote3_en: "The analytics alone are worth it. I now know exactly what content resonates with my audience and how to maximize my revenue potential.",
    quote3_id: "Analitiknya aja udah worth it banget. Sekarang aku tahu persis konten apa yang disukai audiensku dan gimana cara maksimalkan potensi penghasilanku.",
  },
  cta: {
    title_en: "Ready to take control of your creator business?",
    title_id: "Siap ambil kendali bisnis kreatormu?",
    subtitle_en: "Join thousands of creators who are building sustainable businesses with complete ownership using Wizpen. Launch in minutes, not weeks.",
    subtitle_id: "Gabung dengan ribuan kreator yang membangun bisnis berkelanjutan dengan kepemilikan penuh menggunakan Wizpen. Meluncur dalam hitungan menit, bukan minggu.",
    button_en: "Get started for free",
    button_id: "Mulai gratis",
    testimonial_title_en: "What creators are saying",
    testimonial_title_id: "Apa kata para kreator",
    testimonial_quote_en: "Wizpen revolutionized my bite-size content selling. Complete control, best margins, and a direct relationship with my audience.",
    testimonial_quote_id: "Wizpen merevolusi penjualan konten singkatku. Kontrol penuh, margin terbaik, dan hubungan langsung dengan audiensku.",
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (section: string, key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (section: string, key: string) => {
    const fullKey = `${key}_${language}`;
    return translations[section]?.[fullKey] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
