export interface ClassicText {
  content: string;
  title: string;
  author: string;
  dynasty: string;
  book: string;
}

export interface Surname {
  surname: string;
  pinyin: string;
  rank: number;
  population: string;
  percentage: string;
  regions: string[];
  famous_people: string[];
}

export interface GeneratedName {
  name: string;
  surname: Surname;
  sentence: string;
  content: string;
  title: string;
  author: string;
  book: string;
  dynasty: string;
}

export interface GeneratedNameWithTranslation {
  name: string;
  fullName: string;
  surname: Surname;
  pinyin: {
    surname: string;
    givenName: string;
    fullName: string;
  };
  chineseContent: {
    sentence: string;
    book: string;
    title: string;
    author: string;
    dynasty: string;
    fullContent: string;
    meaning: string;
  };
  englishTranslation: {
    sentence: string;
    book: string;
    title: string;
    author: string;
    dynasty: string;
    fullContent: string;
    meaning: string;
  };
} 