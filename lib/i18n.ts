import { create } from 'zustand';

type Language = 'en' | 'zh' | 'fr' | 'ja' | 'ru' | 'de' | 'es';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}));

export const translations = {
  en: {
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      testimonials: 'Testimonials',
      pricing: 'Pricing',
      faq: 'FAQ',
      blog: 'Blog',
    },
    hero: {
      title: 'Your Meaningful Chinese Name, Crafted with Tradition',
      subtitle: 'Discover a personalized Chinese name that reflects your identity through the lens of 5,000 years of culture and tradition.',
      generate: 'Generate My Chinese Name',
    },
  },
  zh: {
    nav: {
      features: '功能特点',
      howItWorks: '工作原理',
      testimonials: '用户评价',
      pricing: '价格',
      faq: '常见问题',
      blog: '博客',
    },
    hero: {
      title: '传统文化赋予您独特的中文名字',
      subtitle: '通过五千年文化传统的智慧，发现属于您的完美中文名字。',
      generate: '生成我的中文名字',
    },
  },
  fr: {
    nav: {
      features: 'Fonctionnalités',
      howItWorks: 'Comment ça marche',
      testimonials: 'Témoignages',
      pricing: 'Tarifs',
      faq: 'FAQ',
      blog: 'Blog',
    },
    hero: {
      title: 'Votre nom chinois significatif, créé avec tradition',
      subtitle: 'Découvrez un nom chinois personnalisé qui reflète votre identité à travers 5000 ans de culture et de tradition.',
      generate: 'Générer mon nom chinois',
    },
  },
  ja: {
    nav: {
      features: '特徴',
      howItWorks: '使い方',
      testimonials: '感想',
      pricing: '料金',
      faq: 'よくある質問',
      blog: 'ブログ',
    },
    hero: {
      title: '伝統に基づいた意味のある中国語の名前',
      subtitle: '5000年の文化と伝統を通じて、あなたのアイデンティティを反映した中国語の名前を見つけましょう。',
      generate: '中国語の名前を生成する',
    },
  },
  ru: {
    nav: {
      features: 'Особенности',
      howItWorks: 'Как это работает',
      testimonials: 'Отзывы',
      pricing: 'Цены',
      faq: 'Вопросы',
      blog: 'Блог',
    },
    hero: {
      title: 'Ваше значимое китайское имя, созданное с традицией',
      subtitle: 'Откройте для себя персонализированное китайское имя, отражающее вашу индивидуальность через призму 5000-летней культуры и традиций.',
      generate: 'Создать мое китайское имя',
    },
  },
  de: {
    nav: {
      features: 'Funktionen',
      howItWorks: 'Wie es funktioniert',
      testimonials: 'Referenzen',
      pricing: 'Preise',
      faq: 'FAQ',
      blog: 'Blog',
    },
    hero: {
      title: 'Ihr bedeutungsvoller chinesischer Name, geschaffen mit Tradition',
      subtitle: 'Entdecken Sie einen personalisierten chinesischen Namen, der Ihre Identität durch 5000 Jahre Kultur und Tradition widerspiegelt.',
      generate: 'Meinen chinesischen Namen generieren',
    },
  },
  es: {
    nav: {
      features: 'Características',
      howItWorks: 'Cómo funciona',
      testimonials: 'Testimonios',
      pricing: 'Precios',
      faq: 'Preguntas frecuentes',
      blog: 'Blog',
    },
    hero: {
      title: 'Tu nombre chino significativo, creado con tradición',
      subtitle: 'Descubre un nombre chino personalizado que refleje tu identidad a través de 5000 años de cultura y tradición.',
      generate: 'Generar mi nombre chino',
    },
  },
};