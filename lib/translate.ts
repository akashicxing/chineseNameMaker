import translations from '@/data/translations.json';

interface Translations {
  dynasties: { [key: string]: string };
  books: { [key: string]: string };
  common: { [key: string]: string };
}

const trans = translations as Translations;

export function translateDynasty(dynasty: string): string {
  return trans.dynasties[dynasty] || dynasty;
}

export function translateBook(book: string): string {
  // 尝试直接匹配
  if (trans.books[book]) {
    return trans.books[book];
  }

  // 尝试部分匹配
  for (const [cn, en] of Object.entries(trans.books)) {
    if (book.includes(cn)) {
      // 替换匹配部分，保留其他部分
      return book.replace(cn, en);
    }
  }

  // 处理常见词汇
  let result = book;
  for (const [cn, en] of Object.entries(trans.common)) {
    result = result.replace(cn, en);
  }

  return result;
}

export async function translateText(text: string): Promise<string> {
  // 这里可以集成第三方翻译API
  // 目前返回原文
  return text;
}

export function translateAuthor(author: string): string {
  // 移除可能的朝代标记
  for (const dynasty of Object.keys(trans.dynasties)) {
    author = author.replace(dynasty, '').trim();
  }
  // 返回拼音化的作者名
  return author;
} 