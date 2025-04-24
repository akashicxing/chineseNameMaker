import pinyinData from '@/data/pinyin.json';

interface PinyinMap {
  [key: string]: string;
}

const pinyinMap: PinyinMap = pinyinData as PinyinMap;

export function toPinyin(text: string): string {
  // 如果是单个汉字且在映射表中存在
  if (text.length === 1 && text in pinyinMap) {
    return pinyinMap[text];
  }

  // 如果是英文名，直接返回小写
  if (/^[a-zA-Z\s]+$/.test(text)) {
    return text.toLowerCase();
  }

  // 如果是多个汉字，尝试逐个转换
  const result = text.split('').map(char => {
    if (char in pinyinMap) {
      return pinyinMap[char];
    }
    // 如果找不到对应的拼音，返回原字符
    return char;
  });

  return result.join(' ');
}

export function toPinyinWithTone(text: string): string {
  return text.split('').map(char => {
    return pinyinMap[char] || char;
  }).join(' ');
} 