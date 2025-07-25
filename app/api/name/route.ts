import { NextRequest, NextResponse } from 'next/server';
import { nameGenerator } from '@/lib/name-generator';
import { toPinyin } from '@/lib/pinyin';
import { translateDynasty, translateBook, translateText, translateAuthor } from '@/lib/translate';
import Replicate from 'replicate';

const FREE_LIMIT = 50; // 增加免费次数限制

// 初始化 Replicate
const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// 获取客户端IP地址
function getClientIP(req: NextRequest) {
  const forwarded = req.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return req.headers.get('x-real-ip') || 'unknown';
}

// AI Smart模式的系统提示词（基于guild.md优化）
const AI_SYSTEM_PROMPT = `You are a professional expert in Chinese traditional culture and classical literature, specializing in extracting poetic names from ancient Chinese literary works.

Generate a Chinese name with deep literary heritage based on user information. Requirements:
1. Extract from classical works (Shijing, Chuci, Tang poetry, Song ci, etc.)
2. Beautiful meaning, harmonious phonetics, appropriate for gender
3. Select suitable Chinese surname based on original name pronunciation
4. Provide authentic literary source with complete sentence

Output ONLY valid JSON in this exact format:
{
  "success": true,
  "data": {
    "name": "Generated name without surname",
    "surname": {
      "surname": "Selected surname",
      "pinyin": "Surname pinyin",
      "rank": 100,
      "population": "Population description",
      "percentage": "0.1%",
      "regions": ["Region1", "Region2"],
      "famous_people": ["Person1", "Person2"]
    },
    "pinyin": {
      "surname": "Surname pinyin",
      "givenName": "Given name pinyin"
    },
    "sentence": "Complete original sentence containing name characters",
    "content": "",
    "title": "Work title",
    "author": "Author name", 
    "book": "Source text name",
    "dynasty": "Dynasty",
    "englishTranslation": {
      "sentence": "English translation of sentence",
      "content": "",
      "title": "English title",
      "author": "English author",
      "book": "English book name",
      "dynasty": "English dynasty"
    }
  }
}`;

async function generateChineseNameWithAI(userInfo: any) {
  try {
    const userPrompt = `Generate a Chinese name for:
First Name: ${userInfo.firstName}
Last Name: ${userInfo.lastName}
Gender: ${userInfo.gender}
Date of Birth: ${userInfo.birthDate}
Original Language: ${userInfo.nameLanguage}

Please create a literary Chinese name that harmonizes with the original name pronunciation and is appropriate for the gender.`;

    console.log('=== AI Smart Mode - 大模型调用开始 ===');
    console.log('📤 发送给大模型的用户输入:');
    console.log(userPrompt);
    console.log('\n📋 发送给大模型的系统提示词:');
    console.log(AI_SYSTEM_PROMPT);
    console.log('\n🚀 调用 Replicate API (openai/o4-mini)...');
    
    let aiResponse = '';
    const stream = await replicate.stream("openai/o4-mini", {
      input: {
        prompt: userPrompt,
        system_prompt: AI_SYSTEM_PROMPT,
        reasoning_effort: "medium"
      }
    });

    console.log('📡 接收流式响应中...');
    for await (const event of stream) {
      aiResponse += event;
    }

    console.log('\n📥 大模型原始输出:');
    console.log('---响应开始---');
    console.log(aiResponse);
    console.log('---响应结束---');

    // 尝试解析JSON响应
    console.log('\n🔄 解析JSON响应...');
    let parsedResponse;
    try {
      // 提取JSON部分（如果响应包含其他内容）
      const jsonMatch = aiResponse.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        console.log('📋 提取到的JSON部分:', jsonMatch[0]);
        parsedResponse = JSON.parse(jsonMatch[0]);
        console.log('✅ JSON解析成功');
        console.log('📊 解析后的数据结构:', JSON.stringify(parsedResponse, null, 2));
      } else {
        console.error('❌ 响应中未找到JSON格式数据');
        throw new Error('No JSON found in AI response');
      }
    } catch (parseError) {
      console.error('❌ JSON解析失败:', parseError);
      throw new Error('AI response parsing failed');
    }

    if (parsedResponse.success && parsedResponse.data) {
      console.log('🎯 返回生成的名字数据:', JSON.stringify(parsedResponse.data, null, 2));
      console.log('=== AI Smart Mode - 大模型调用结束 ===\n');
      return parsedResponse.data;
    } else {
      console.error('❌ AI响应格式无效:', parsedResponse);
      throw new Error('AI response format invalid');
    }
  } catch (error) {
    console.error('❌ AI名字生成失败:', error);
    console.log('=== AI Smart Mode - 大模型调用异常结束 ===\n');
    throw new Error('AI name generation failed');
  }
}

async function generateChineseName(mode?: string, userInfo?: any) {
  try {
    if (mode === 'smart' && userInfo) {
      // AI Smart模式：调用大模型生成个性化名字
      console.log('🧠 执行AI Smart模式名字生成');
      const aiGeneratedData = await generateChineseNameWithAI(userInfo);
      
      // 优化返回数据结构，与instant模式保持一致
      const optimizedData = {
        // 基本名字信息
        name: aiGeneratedData.name,
        fullName: `${aiGeneratedData.surname.surname}${aiGeneratedData.name}`,
        surname: aiGeneratedData.surname,
        
        // 拼音信息
        pinyin: {
          surname: aiGeneratedData.surname.pinyin,
          givenName: aiGeneratedData.pinyin.givenName,
          fullName: `${aiGeneratedData.surname.pinyin} ${aiGeneratedData.pinyin.givenName}`
        },
        
        // 中文原文信息
        chineseContent: {
          sentence: aiGeneratedData.sentence,
          book: aiGeneratedData.book,
          title: aiGeneratedData.title,
          author: aiGeneratedData.author,
          dynasty: aiGeneratedData.dynasty,
          fullContent: aiGeneratedData.content || '',
          meaning: `名字"${aiGeneratedData.name}"取自${aiGeneratedData.dynasty}时期${aiGeneratedData.author}所作《${aiGeneratedData.title}》中的"${aiGeneratedData.sentence}"，寓意深远，文化底蕴深厚。`
        },
        
        // 英文翻译信息
        englishTranslation: {
          sentence: aiGeneratedData.englishTranslation.sentence,
          book: aiGeneratedData.englishTranslation.book,
          title: aiGeneratedData.englishTranslation.title,
          author: aiGeneratedData.englishTranslation.author,
          dynasty: aiGeneratedData.englishTranslation.dynasty,
          fullContent: aiGeneratedData.englishTranslation.content || '',
          meaning: `The name "${aiGeneratedData.name}" is derived from "${aiGeneratedData.englishTranslation.sentence}" in "${aiGeneratedData.englishTranslation.title}" by ${aiGeneratedData.englishTranslation.author} during the ${aiGeneratedData.englishTranslation.dynasty} period, carrying profound meaning and rich cultural heritage.`
        }
      };
      
      return optimizedData;
    } else {
      // Instant模式：使用原有生成逻辑
      console.log('⚡ 执行Instant模式名字生成');
      const generatedName = await nameGenerator.generate();
      
      const nameWithPinyin = {
        // 基本名字信息
        name: generatedName.name,
        fullName: `${generatedName.surname.surname}${generatedName.name}`,
        surname: generatedName.surname,
        
        // 拼音信息
        pinyin: {
          surname: generatedName.surname.pinyin,
          givenName: await toPinyin(generatedName.name),
          fullName: `${generatedName.surname.pinyin} ${await toPinyin(generatedName.name)}`
        },
        
        // 中文原文信息
        chineseContent: {
          sentence: generatedName.sentence,
          book: generatedName.book,
          title: generatedName.title,
          author: generatedName.author,
          dynasty: generatedName.dynasty,
          fullContent: generatedName.content,
          meaning: `名字"${generatedName.name}"取自${generatedName.dynasty}时期${generatedName.author}所作《${generatedName.title}》中的"${generatedName.sentence}"，寓意深远，文化底蕴深厚。`
        },
        
        // 英文翻译信息
        englishTranslation: {
          sentence: await translateText(generatedName.sentence),
          book: translateBook(generatedName.book),
          title: await translateText(generatedName.title),
          author: translateAuthor(generatedName.author),
          dynasty: translateDynasty(generatedName.dynasty),
          fullContent: await translateText(generatedName.content),
          meaning: `The name "${generatedName.name}" is derived from "${await translateText(generatedName.sentence)}" in "${await translateText(generatedName.title)}" by ${translateAuthor(generatedName.author)} during the ${translateDynasty(generatedName.dynasty)} period, carrying profound meaning and rich cultural heritage.`
        }
      };

      return nameWithPinyin;
    }
  } catch (error) {
    throw new Error('Error generating name');
  }
}

// 简单的内存用量限制（重启后重置）
const usageTracker = new Map<string, { count: number; date: string }>();

async function checkAndUpdateUsage(userId: string): Promise<boolean> {
  const today = new Date().toISOString().slice(0, 10);
  const userUsage = usageTracker.get(userId);
  
  if (!userUsage || userUsage.date !== today) {
    // 新的一天或新用户
    usageTracker.set(userId, { count: 1, date: today });
    return true;
  }
  
  if (userUsage.count >= FREE_LIMIT) {
    return false; // 已达到限制
  }
  
  // 增加使用次数
  usageTracker.set(userId, { count: userUsage.count + 1, date: today });
  return true;
}

export async function GET(req: NextRequest) {
  // 使用IP地址作为用户标识
  const userId = getClientIP(req);

  console.log(`⚡ GET请求 - Instant模式, IP: ${userId}`);

  try {
    // 检查用量限制
    const canUse = await checkAndUpdateUsage(userId);
    if (!canUse) {
      console.log(`❌ 用量限制达到 - IP: ${userId}, 限制: ${FREE_LIMIT}次/天`);
      return NextResponse.json({ 
        success: false, 
        error: `Daily free limit reached (${FREE_LIMIT} times), please try again tomorrow.` 
      }, { status: 429 });
    }

    console.log(`✅ 用量检查通过 - IP: ${userId}`);
    console.log('⚡ 启动Instant模式');

    // 生成名字 (Instant模式)
    const nameWithPinyin = await generateChineseName();

    console.log('🎯 名字生成完成，返回结果');
    return NextResponse.json({
      success: true,
      data: nameWithPinyin
    });
  } catch (error) {
    console.error('Error generating name:', error);
    return NextResponse.json(
      { success: false, error: 'Error generating name, please try again later' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { mode, firstName, lastName, nameLanguage, birthDate, gender } = body;

    console.log(`🚀 POST请求 - 模式: ${mode}, IP: ${getClientIP(req)}`);
    console.log('📋 请求参数:', { mode, firstName, lastName, nameLanguage, birthDate, gender });

    // 使用IP地址作为用户标识
    const userId = getClientIP(req);

    // 检查用量限制
    const canUse = await checkAndUpdateUsage(userId);
    if (!canUse) {
      console.log(`❌ 用量限制达到 - IP: ${userId}, 限制: ${FREE_LIMIT}次/天`);
      return NextResponse.json({ 
        success: false, 
        error: `Daily free limit reached (${FREE_LIMIT} times), please try again tomorrow.` 
      }, { status: 429 });
    }

    console.log(`✅ 用量检查通过 - IP: ${userId}`);

    // 生成名字
    if (mode === 'smart') {
      console.log('🧠 启动AI Smart模式');
    } else {
      console.log('⚡ 启动Instant模式');
    }

    const nameWithPinyin = await generateChineseName(mode, {
      firstName,
      lastName,
      nameLanguage,
      birthDate,
      gender
    });

    console.log('🎯 名字生成完成，返回结果');
    return NextResponse.json({
      success: true,
      data: nameWithPinyin
    });
  } catch (error) {
    console.error('Error generating name:', error);
    return NextResponse.json(
      { success: false, error: 'Error generating name, please try again later' },
      { status: 500 }
    );
  }
} 