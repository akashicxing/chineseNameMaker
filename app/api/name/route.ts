import { NextResponse } from 'next/server';
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
        givenName: toPinyin(generatedName.name)
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

    return NextResponse.json(nameWithPinyin);
  } catch (error) {
    console.error('Error generating name:', error);
    return NextResponse.json(
      { error: 'Failed to generate name' },
      { status: 500 }
    );
  }
} 