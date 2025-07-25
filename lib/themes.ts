import { create } from 'zustand';

export type Theme = 'default' | 'traditional' | 'modern' | 'nature' | 'ink';

interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export const useTheme = create<ThemeState>((set) => ({
  theme: 'default',
  setTheme: (theme) => set({ theme }),
}));

export const themes = {
  default: {
    name: 'Default',
    colors: {
      primary: '#D73C2C',
      text: '#1A1A1A',
      background: '#F7F6F2',
      accent: '#E6B53C',
      secondary: '#3C7D91',
    }
  },
  traditional: {
    name: '传统',
    colors: {
      primary: '#8C1F28',
      text: '#2C1810',
      background: '#F5E6D3',
      accent: '#D2691E',
      secondary: '#2E4347',
    }
  },
  modern: {
    name: '现代',
    colors: {
      primary: '#FF4D4D',
      text: '#2D2D2D',
      background: '#FFFFFF',
      accent: '#FFD700',
      secondary: '#4A90E2',
    }
  },
  nature: {
    name: '自然',
    colors: {
      primary: '#4B7F52',
      text: '#1C2826',
      background: '#F4F1DE',
      accent: '#E07A5F',
      secondary: '#3D405B',
    }
  },
  ink: {
    name: '水墨',
    colors: {
      primary: '#2C3E50',
      text: '#2C3E50',
      background: '#ECF0F1',
      accent: '#E74C3C',
      secondary: '#34495E',
    }
  }
};