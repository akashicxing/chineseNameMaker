"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, ChevronDown, Volume2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DatePicker } from '@/components/ui/date-picker';
import { GeneratedNameWithTranslation } from '@/types/name';
import { speakChinese } from '@/lib/features';
import { useLanguage } from '@/lib/i18n';

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

export default function Hero() {
  const { language } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
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
    
    // 验证所有必填字段
    if (!firstName.trim()) {
      alert('Please enter your first name');
      return;
    }
    if (!lastName.trim()) {
      alert('Please enter your last name');
      return;
    }
    if (!nameLanguage) {
      alert('Please select your original name language');
      return;
    }
    if (!birthDate) {
      alert('Please select your date of birth');
      return;
    }
    if (!gender) {
      alert('Please select your gender');
      return;
    }

    try {
      setIsGenerating(true);
      const response = await fetch('/api/name');
      const result = await response.json();
      if (result.success) {
        setGeneratedName(result.data);
      } else {
        throw new Error(result.error || 'Failed to generate name');
      }
    } catch (error) {
      console.error('Error generating name:', error);
      alert('Failed to generate name. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSpeak = (text: string) => {
    speakChinese(text);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50 dark:bg-red-950/20 rounded-bl-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-amber-50 dark:bg-amber-950/20 rounded-tr-full opacity-50" />
      
      {/* Chinese character watermark */}
      <div className="absolute right-10 top-1/3 text-9xl font-serif text-red-100 dark:text-red-950/30 opacity-30 select-none">
        名
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className={cn(
            "inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 mb-8",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <Sparkles className="h-5 w-5" />
            <span className="text-base font-semibold tracking-wide">Free Name Generator</span>
          </div>

          <h1 className={cn(
            "flex flex-col items-center gap-4 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 transition-all duration-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="flex flex-wrap justify-center items-baseline gap-x-4">
              <span>Your Meaningful</span>
              <span className="text-red-600 dark:text-red-400">Chinese Name </span>
            </div>
            <div className="text-3xl md:text-4xl lg:text-5xl text-gray-700 dark:text-gray-300 font-medium">
              Crafted with Tradition
            </div>
          </h1>
          
          <p className={cn(
            "text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Get your free personalized Chinese name that reflects your identity through the lens of 5,000 years of culture and tradition.
          </p>

          <div className={cn(
            "max-w-2xl mx-auto transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-6 rounded-xl shadow-lg" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Input
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="bg-white/90 dark:bg-gray-900/90"
                    onInvalid={(e: any) => e.target.setCustomValidity('Please enter your first name')}
                    onInput={(e: any) => e.target.setCustomValidity('')}
                  />
                </div>
                <div>
                  <Input
                    required
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    className="bg-white/90 dark:bg-gray-900/90"
                    onInvalid={(e: any) => e.target.setCustomValidity('Please enter your last name')}
                    onInput={(e: any) => e.target.setCustomValidity('')}
                  />
                </div>
                <div>
                  <Select 
                    value={nameLanguage} 
                    onValueChange={setNameLanguage}
                    required
                  >
                    <SelectTrigger className="w-full bg-white/90 dark:bg-gray-900/90">
                      <SelectValue placeholder="Select Original Name Language" />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang) => (
                        <SelectItem key={lang} value={lang}>
                          {lang}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <DatePicker
                    required
                    value={birthDate ? new Date(birthDate) : undefined}
                    onChange={(date) => setBirthDate(date ? date.toISOString().split('T')[0] : '')}
                    className="w-full bg-white/90 dark:bg-gray-900/90"
                  />
                </div>
                <div className="md:col-span-2">
                  <Select 
                    value={gender} 
                    onValueChange={setGender}
                    required
                  >
                    <SelectTrigger className="w-full bg-white/90 dark:bg-gray-900/90">
                      <SelectValue placeholder="Select your gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="male">Male</SelectItem>
                      <SelectItem value="female">Female</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
                size="lg"
                disabled={isGenerating}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {isGenerating ? 'Generating...' : 'Get My Free Chinese Name'}
              </Button>

              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">
                No credit card required • Instant name generation • Premium features available
              </p>
            </form>

            {generatedName && (
              <div className={cn(
                "mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-500",
                "transform"
              )}>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    <div className="flex items-center justify-center gap-4">
                      <span>{generatedName.surname.surname}{generatedName.name}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleSpeak(`${generatedName.surname.surname}${generatedName.name}`)}
                        className="rounded-full hover:bg-red-100 dark:hover:bg-red-900"
                      >
                        <Volume2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </h3>
                  <p className="text-lg text-red-600 dark:text-red-400 font-medium mb-6">
                    {generatedName.pinyin.surname} {generatedName.pinyin.givenName}
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        From {generatedName.englishTranslation.dynasty} · {generatedName.englishTranslation.author}
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        "{generatedName.englishTranslation.title}"
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mt-4">
                        {generatedName.englishTranslation.sentence}
                      </p>
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