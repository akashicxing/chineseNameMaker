import pinyinData from '@/data/pinyin.json';

interface PinyinMap {
  [key: string]: string;
}

const pinyinMap: PinyinMap = pinyinData;

export function toPinyin(chinese: string): string {
  return chinese.split('').map(char => {
    return pinyinMap[char] || char;
  }).join(' ');
}

export function toPinyinWithTone(chinese: string): string {
  return chinese.split('').map(char => {
    return pinyinMap[char] || char;
  }).join(' ');
} 