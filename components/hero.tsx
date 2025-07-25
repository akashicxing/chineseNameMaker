"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, ChevronDown, Volume2, Zap, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DatePicker } from '@/components/ui/date-picker';
import { GeneratedNameWithTranslation } from '@/types/name';
import { speakChinese } from '@/lib/features';
import { useLanguage } from '@/lib/i18n';
import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';

const localeMap = { en, zh, fr, de, ar, tr } as const;

const languages = [
  'English',
  'French',
  'German',
  'Spanish',
  'Italian',
  'Russian',
  'Japanese',
  'Korean',
  'Vietnamese',
  'Thai',
  'Other'
];

type GenerationMode = 'instant' | 'smart';

export default function Hero({ t: tProp }: { t?: any }) {
  const { language } = useLanguage();
  const t = tProp || (localeMap[language as keyof typeof localeMap] || en);
  const [isLoaded, setIsLoaded] = useState(false);
  const [generationMode, setGenerationMode] = useState<GenerationMode>('instant');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nameLanguage, setNameLanguage] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [generatedName, setGeneratedName] = useState<GeneratedNameWithTranslation | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // AI Smart模式的表单验证
    if (generationMode === 'smart') {
      if (!firstName.trim()) {
        alert('Please enter your first name for AI Smart mode');
        return;
      }
      if (!lastName.trim()) {
        alert('Please enter your last name for AI Smart mode');
        return;
      }
      if (!gender) {
        alert('Please select your gender for AI Smart mode');
        return;
      }
      if (!nameLanguage) {
        alert('Please select your original name language for AI Smart mode');
        return;
      }
    }
    
    try {
      setIsGenerating(true);
      
      if (generationMode === 'instant') {
        // Instant模式：直接调用原有API
        const response = await fetch('/api/name');
        const result = await response.json();
        if (result.success) {
          setGeneratedName(result.data);
        } else {
          throw new Error(result.error || 'Failed to generate name');
        }
      } else {
        // AI Smart模式：传递用户信息调用大模型
        const response = await fetch('/api/name', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            mode: 'smart',
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            nameLanguage,
            birthDate,
            gender
          })
        });
        const result = await response.json();
        if (result.success) {
          setGeneratedName(result.data);
        } else {
          throw new Error(result.error || 'Failed to generate name');
        }
      }
    } catch (error) {
      console.error('Error generating name:', error);
      alert(error instanceof Error ? error.message : 'Failed to generate name. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSpeak = (text: string) => {
    speakChinese(text);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: 'url("/images/bg1.png")',
          filter: 'saturate(0.7) brightness(1.1)'
        }}
      />
      
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50 dark:bg-red-950/20 rounded-bl-full opacity-50 z-[1]" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-50 dark:bg-amber-950/20 rounded-tr-full opacity-50 z-[1]" />
      
      {/* Chinese character watermark */}
      <div className="absolute right-10 top-1/3 text-9xl font-serif text-red-100 dark:text-red-950/30 opacity-30 select-none z-[1]">
        名
      </div>
      
      <div className="container mx-auto px-4 relative z-[2]">
        <div className="max-w-3xl mx-auto text-center">
          <div className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 mb-8",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <Sparkles className="h-5 w-5" />
            <span className="text-base font-semibold tracking-wide">{t.hero.beta}</span>
          </div>

          <h1 className={cn(
            "flex flex-col items-center gap-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 transition-all duration-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="flex flex-wrap justify-center items-baseline gap-x-4">
              <span>{t.hero.title.part1}</span>
              <span className="text-red-600 dark:text-red-400">{t.hero.title.part2}</span>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-300 font-medium">
              {t.hero.title.subtitle}
            </div>
          </h1>
          
          <p className={cn(
            "text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            {t.hero.description}
          </p>

          <div className={cn(
            "max-w-2xl mx-auto transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <form onSubmit={handleSubmit} className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md p-6 rounded-xl shadow-lg" noValidate>
              
              {/* Generation Mode Selection */}
              <div className="mb-6">
                <div className="flex gap-2 p-1 bg-gray-100 dark:bg-gray-700 rounded-lg">
                  <button
                    type="button"
                    onClick={() => setGenerationMode('instant')}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium transition-all",
                      generationMode === 'instant'
                        ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 shadow-sm"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    )}
                  >
                    <Zap className="h-4 w-4" />
                    <span>Instant</span>
                    <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded">Fast Series</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setGenerationMode('smart')}
                    className={cn(
                      "flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium transition-all",
                      generationMode === 'smart'
                        ? "bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 shadow-sm"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    )}
                  >
                    <Brain className="h-4 w-4" />
                    <span>AI Smart</span>
                    <span className="text-xs bg-purple-100 text-purple-600 px-2 py-0.5 rounded">Custom Styles</span>
                  </button>
                </div>
              </div>

              {/* Personal Information Form - Only shown for AI Smart mode */}
              {generationMode === 'smart' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 animate-in slide-in-from-top duration-300">
                  <div>
                    <Input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder={t.hero.form.firstName.placeholder}
                      className="bg-white/90 dark:bg-gray-900/90"
                      required={generationMode === 'smart'}
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder={t.hero.form.lastName.placeholder}
                      className="bg-white/90 dark:bg-gray-900/90"
                      required={generationMode === 'smart'}
                    />
                  </div>
                  <div>
                    <Select 
                      value={nameLanguage} 
                      onValueChange={setNameLanguage}
                    >
                      <SelectTrigger className="w-full bg-white/90 dark:bg-gray-900/90">
                        <SelectValue placeholder={t.hero.form.nameLanguage.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        {languages.map((lang, index) => (
                          <SelectItem key={index} value={lang}>{lang}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <DatePicker
                      value={birthDate ? new Date(birthDate) : undefined}
                      onChange={(date) => setBirthDate(date ? date.toISOString().split('T')[0] : '')}
                      className="w-full bg-white/90 dark:bg-gray-900/90"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Select 
                      value={gender} 
                      onValueChange={setGender}
                    >
                      <SelectTrigger className="w-full bg-white/90 dark:bg-gray-900/90">
                        <SelectValue placeholder={t.hero.form.gender.placeholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="male">{t.hero.form.gender.options.male}</SelectItem>
                        <SelectItem value="female">{t.hero.form.gender.options.female}</SelectItem>
                        <SelectItem value="other">{t.hero.form.gender.options.other}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                size="lg"
                disabled={isGenerating}
              >
                {generationMode === 'instant' ? (
                  <>
                    <Zap className="mr-2 h-5 w-5" />
                    {isGenerating ? 'Generating...' : 'Generate'}
                  </>
                ) : (
                  <>
                    <Brain className="mr-2 h-5 w-5" />
                    {isGenerating ? t.hero.form.submit.generating : t.hero.form.submit.default}
                  </>
                )}
              </Button>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                {generationMode === 'instant' 
                  ? 'No credit card required • Instant name generation'
                  : t.hero.form.disclaimer
                }
              </p>
            </form>

            {generatedName && (
              <div className={cn(
                "mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-500",
                "transform"
              )}>
                <div className="text-center">
                  {/* 名字主显示 */}
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    <div className="flex items-center justify-center gap-4">
                      <span>{generatedName.fullName || `${generatedName.surname?.surname}${generatedName.name}`}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleSpeak(generatedName.fullName || `${generatedName.surname?.surname}${generatedName.name}`)}
                        className="rounded-full hover:bg-red-100 dark:hover:bg-red-900"
                      >
                        <Volume2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </h3>
                  <p className="text-lg text-red-600 dark:text-red-400 font-medium mb-6">
                    {generatedName.pinyin?.fullName || `${generatedName.pinyin?.surname} ${generatedName.pinyin?.givenName}`}
                  </p>

                  {/* 姓氏信息 */}
                  {generatedName.surname && (
                    <div className="mb-6 bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                        关于姓氏 "{generatedName.surname.surname}"
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        {generatedName.surname.rank && (
                          <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">全国排名:</span> 第{generatedName.surname.rank}位
                          </p>
                        )}
                        {generatedName.surname.population && (
                          <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">人口:</span> {generatedName.surname.population}
                          </p>
                        )}
                        {generatedName.surname.percentage && (
                          <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">占比:</span> {generatedName.surname.percentage}
                          </p>
                        )}
                        {generatedName.surname.regions && generatedName.surname.regions.length > 0 && (
                          <p className="text-gray-600 dark:text-gray-300">
                            <span className="font-medium">主要分布:</span> {generatedName.surname.regions.join('、')}
                          </p>
                        )}
                      </div>
                      {generatedName.surname.famous_people && generatedName.surname.famous_people.length > 0 && (
                        <p className="text-gray-600 dark:text-gray-300 mt-2">
                          <span className="font-medium">名人代表:</span> {generatedName.surname.famous_people.join('、')}
                        </p>
                      )}
                    </div>
                  )}

                  {/* 文学出处 */}
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-left">
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">
                        文学出处 Literary Source
                      </h4>
                      
                      {/* 中文信息 */}
                      <div className="mb-4 p-3 bg-red-50 dark:bg-red-900/20 rounded">
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          <span className="font-medium">朝代:</span> {generatedName.chineseContent?.dynasty}
                          <span className="ml-4 font-medium">作者:</span> {generatedName.chineseContent?.author}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          <span className="font-medium">作品:</span> 《{generatedName.chineseContent?.title}》
                        </p>
                        {generatedName.chineseContent?.book && (
                          <p className="text-gray-600 dark:text-gray-300 mb-2">
                            <span className="font-medium">典籍:</span> 《{generatedName.chineseContent.book}》
                          </p>
                        )}
                        <p className="text-gray-800 dark:text-gray-200 font-medium">
                          "{generatedName.chineseContent?.sentence}"
                        </p>
                      </div>

                      {/* 英文翻译 */}
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded">
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          <span className="font-medium">Dynasty:</span> {generatedName.englishTranslation?.dynasty}
                          <span className="ml-4 font-medium">Author:</span> {generatedName.englishTranslation?.author}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-2">
                          <span className="font-medium">Work:</span> "{generatedName.englishTranslation?.title}"
                        </p>
                        {generatedName.englishTranslation?.book && (
                          <p className="text-gray-600 dark:text-gray-300 mb-2">
                            <span className="font-medium">Collection:</span> "{generatedName.englishTranslation.book}"
                          </p>
                        )}
                        <p className="text-gray-800 dark:text-gray-200 font-medium italic">
                          "{generatedName.englishTranslation?.sentence}"
                        </p>
                      </div>

                      {/* 名字含义 */}
                      {(generatedName.chineseContent?.meaning || generatedName.englishTranslation?.meaning) && (
                        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                          <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-center">
                            名字寓意 Name Meaning
                          </h5>
                          {generatedName.chineseContent?.meaning && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                              {generatedName.chineseContent.meaning}
                            </p>
                          )}
                          {generatedName.englishTranslation?.meaning && (
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                              {generatedName.englishTranslation.meaning}
                            </p>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className={cn(
            "mt-16 transition-all duration-1000 delay-600",
            isLoaded ? "opacity-100" : "opacity-0"
          )}>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Join thousands of happy users from</p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="text-gray-400 dark:text-gray-600 font-medium">UNITED STATES</div>
              <div className="text-gray-400 dark:text-gray-600 font-medium">FRANCE</div>
              <div className="text-gray-400 dark:text-gray-600 font-medium">GERMANY</div>
              <div className="text-gray-400 dark:text-gray-600 font-medium">CANADA</div>
              <div className="text-gray-400 dark:text-gray-600 font-medium">AUSTRALIA</div>
            </div>
          </div>
        </div>
        
        <a 
          href="#features" 
          className={cn(
            "absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col items-center text-sm text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}
        >
          <span className="mb-2">Discover More</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}