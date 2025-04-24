import { NextRequest, NextResponse } from 'next/server';
import { nameGenerator } from '@/lib/name-generator';
import { toPinyin } from '@/lib/pinyin';
import { translateDynasty, translateBook, translateText, translateAuthor } from '@/lib/translate';

export async function GET() {
  try {
    const generatedName = await nameGenerator.generate();
    
    // Add pinyin to the response
    const nameWithPinyin = {
      ...generatedName,
      pinyin: {
        surname: generatedName.surname.pinyin,
        givenName: await toPinyin(generatedName.name)
      },
      // Translate the content to English
      englishTranslation: {
        sentence: await translateText(generatedName.sentence),
        content: await translateText(generatedName.content),
        title: await translateText(generatedName.title),
        author: translateAuthor(generatedName.author),
        book: translateBook(generatedName.book),
        dynasty: translateDynasty(generatedName.dynasty)
      }
    };

    return NextResponse.json({
      success: true,
      data: nameWithPinyin
    });
  } catch (error) {
    console.error('Error generating name:', error);
    return NextResponse.json(
      { success: false, error: '生成名字时发生错误，请稍后再试' },
      { status: 500 }
    );
  }
} 