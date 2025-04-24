import { ClassicText, GeneratedName, Surname } from '@/types/name';
import { toPinyin } from './pinyin';
import surnames from '@/data/classical/surnames-sorted.json';
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

  private async extractNameCharacters(text: string): Promise<string[]> {
    const characters = text.split('');
    const validCharacters = characters.filter(char => {
      const punctuation = '，。！？；：＂＂＇＇「」『』（）［］【】、'.split('');
      const commonWords = '的地得和与而使令把在于是为'.split('');
      return !punctuation.includes(char) && !commonWords.includes(char);
    });

    const result: string[] = [];
    const used = new Set<string>();

    // 确保生成两个字的名字
    while (result.length < 2 && validCharacters.length > 0) {
      const char = this.getRandomElement(validCharacters);
      if (!used.has(char)) {
        result.push(char);
        used.add(char);
      }
    }

    // 如果从当前文本中无法获得两个字，从其他文本中补充
    while (result.length < 2) {
      const additionalText = this.getRandomElement(this.classicTexts);
      const additionalChars = additionalText.content.split('').filter(char => {
        const punctuation = '，。！？；：＂＂＇＇「」『』（）［］【】、'.split('');
        const commonWords = '的地得和与而使令把在于是为'.split('');
        return !punctuation.includes(char) && !commonWords.includes(char) && !used.has(char);
      });
      
      if (additionalChars.length > 0) {
        const char = this.getRandomElement(additionalChars);
        result.push(char);
        used.add(char);
      }
    }

    return result;
  }

  public async generate(): Promise<GeneratedName> {
    // 随机选择一个姓氏
    const surname = this.getRandomElement(this.surnames);
    
    // 从典籍中选择并提取两个字作为名
    const classicText = this.getRandomElement(this.classicTexts);
    const nameCharacters = await this.extractNameCharacters(classicText.content);
    
    // 确保我们有两个字的名字
    if (nameCharacters.length !== 2) {
      throw new Error('无法生成两个字的名字');
    }

    const name = nameCharacters.join('');
    const sentences = classicText.content.split(/[。！？]/);
    const sentence = sentences.find(s => nameCharacters.some(char => s.includes(char))) || '';

    return {
      name,
      surname,
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