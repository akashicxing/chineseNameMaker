import { ClassicText, GeneratedName, Surname } from '@/types/name';
import { toPinyin } from './pinyin';
import surnames from '@/data/classical/surnames.json';
import chuci from '@/data/classical/chuci.json';

class NameGenerator {
  private surnames: Surname[];
  private classicTexts: ClassicText[];

  constructor() {
    this.surnames = surnames as Surname[];
    this.classicTexts = (chuci as ClassicText[]).filter(text => 
      text.content && text.author && text.title && text.dynasty && text.book
    );
  }

  private getRandomElement<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }

  private async extractNameCharacter(text: string): Promise<string> {
    const characters = text.split('');
    const validCharacters = characters.filter(char => {
      const punctuation = '，。！？；：＂＂＇＇「」『』（）［］【】、'.split('');
      const commonWords = '的地得和与而使令把在于是为'.split('');
      return !punctuation.includes(char) && !commonWords.includes(char);
    });
    return this.getRandomElement(validCharacters);
  }

  public async generate(): Promise<GeneratedName> {
    const surname = this.getRandomElement(this.surnames);
    const classicText = this.getRandomElement(this.classicTexts);
    const nameCharacter = await this.extractNameCharacter(classicText.content);
    const sentences = classicText.content.split(/[。！？]/);
    const sentence = sentences.find(s => s.includes(nameCharacter)) || '';

    return {
      name: nameCharacter,
      surname: surname,
      sentence: sentence.trim(),
      content: classicText.content,
      title: classicText.title,
      author: classicText.author,
      book: classicText.book,
      dynasty: classicText.dynasty
    };
  }
}

export const nameGenerator = new NameGenerator(); 