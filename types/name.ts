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
  origin: string;
  population: string;
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

export interface GeneratedNameWithTranslation extends GeneratedName {
  pinyin: {
    surname: string;
    givenName: string;
  };
  englishTranslation: {
    sentence: string;
    content: string;
    title: string;
    author: string;
    book: string;
    dynasty: string;
  };
} 