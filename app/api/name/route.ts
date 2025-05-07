import { NextRequest, NextResponse } from 'next/server';
import { nameGenerator } from '@/lib/name-generator';
import { toPinyin } from '@/lib/pinyin';
import { translateDynasty, translateBook, translateText, translateAuthor } from '@/lib/translate';
import { db } from '@/lib/db';
import { userDailyUsage } from '@/lib/schema';
import { eq, and } from 'drizzle-orm';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const FREE_LIMIT = 5;

export async function GET(req: Request) {
  // 1. 校验登录
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) {
    return new Response(JSON.stringify({ success: false, error: '请先登录 Google 账号后使用名字生成功能。' }), { status: 401 });
  }
  const userId = session.user.email;
  const today = new Date().toISOString().slice(0, 10);

  // 2. 查询今日用量
  const usage = await db.select().from(userDailyUsage)
    .where(and(eq(userDailyUsage.userId, userId), eq(userDailyUsage.usageDate, today)))
    .limit(1);
  if (usage.length && usage[0].count >= FREE_LIMIT) {
    return new Response(JSON.stringify({ success: false, error: '今日免费次数已用完，正在升级中，敬请期待。' }), { status: 403 });
  }
  // 3. 递增用量
  if (usage.length) {
    await db.update(userDailyUsage)
      .set({ count: usage[0].count + 1 })
      .where(and(eq(userDailyUsage.userId, userId), eq(userDailyUsage.usageDate, today)));
  } else {
    await db.insert(userDailyUsage).values({ userId, usageDate: today, count: 1 });
  }

  // 4. 原有生成逻辑
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