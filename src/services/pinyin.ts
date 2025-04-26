import pinyin from 'pinyin';

export function toPinyin(text: string): string {
  return pinyin(text, {
    style: pinyin.STYLE_NORMAL as number,
    heteronym: false
  }).map((item: string[]) => item[0]).join(' ');
} 