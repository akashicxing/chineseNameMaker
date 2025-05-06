import { create } from 'zustand';

type Language = 'en' | 'zh' | 'fr' | 'ja' | 'ru' | 'de' | 'es' | 'ar' | 'tr';

interface LanguageState {
  language: Language;
  setLanguage: (language: Language) => void;
}

export const useLanguage = create<LanguageState>((set) => ({
  language: 'en',
  setLanguage: (language) => set({ language }),
}));