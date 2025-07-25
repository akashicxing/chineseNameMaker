export interface Feature {
  id: number;
  name: string;
  description: string;
  status: 'available' | 'unavailable' | 'coming_soon';
  implementation?: string;
}

export const features: Feature[] = [
  {
    id: 1,
    name: "Name Generation",
    description: "Generate Chinese names based on classical literature",
    status: "available",
  },
  {
    id: 2,
    name: "Cultural Context",
    description: "Provide cultural background and meaning for each generated name",
    status: "available",
  },
  {
    id: 3,
    name: "Name Pronunciation",
    description: "Listen to the pronunciation of your Chinese name",
    status: "available",
    implementation: "Using Web Speech API for free text-to-speech functionality"
  },
  {
    id: 4,
    name: "Character Writing Animation",
    description: "Watch how to write your Chinese name characters",
    status: "available",
    implementation: "Using hanzi-writer library for character stroke animations"
  },
  {
    id: 5,
    name: "Name Analysis",
    description: "Get detailed analysis of your Chinese name",
    status: "available"
  },
  {
    id: 6,
    name: "Name Compatibility",
    description: "Check name compatibility with Chinese zodiac",
    status: "coming_soon"
  },
  {
    id: 7,
    name: "Calligraphy Styles",
    description: "View your name in different calligraphy styles",
    status: "coming_soon"
  },
  {
    id: 8,
    name: "Name Suggestions",
    description: "Get personalized name suggestions based on Chinese naming culture",
    status: "available"
  }
];

// Web Speech API for pronunciation
export const speakChinese = (text: string) => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'zh-CN';
    window.speechSynthesis.speak(utterance);
  }
};

// Translation helper function
export const translateToEnglish = (chineseText: string): string => {
  // This is a placeholder. In a real implementation, you would:
  // 1. Use a translation API (e.g., Google Translate API)
  // 2. Or maintain a mapping of common phrases
  // 3. Or use a combination of both
  return chineseText;
}; 