import { create } from 'zustand';
import { translations } from '../utils/translations';
type Language = 'en' | 'es' | 'ru';


interface LanguageState {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

export const useLanguage = create<LanguageState>((set, get) => ({
  language: 'es',
  setLanguage: (lang) => set({ language: lang }),
  t: (key) => {
    const { language } = get();
    return key.split('.').reduce((obj, k) => obj?.[k], translations[language]) || key;
  },
}));