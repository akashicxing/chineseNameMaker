"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Sparkles, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationality, setNationality] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');
  const [generatedName, setGeneratedName] = useState<null | {
    chinese: string;
    pinyin: string;
    meaning: {
      en: string;
      zh: string;
    };
  }>(null);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setGeneratedName({
      chinese: '李太白',
      pinyin: 'Lǐ Tàibái',
      meaning: {
        zh: '李太白出生之时，他的母亲梦到太白金星，就以太白为名',
        en: 'When Li Taibai was born, his mother dreamed of Venus (the "Grand White Star"), hence naming him Taibai'
      }
    });
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
            "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 mb-6",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">AI-Powered Name Generation</span>
          </div>

          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-all duration-1000",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Your Meaningful <span className="text-red-600 dark:text-red-400">Chinese Name</span>, Crafted with Tradition
          </h1>
          
          <p className={cn(
            "text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-200",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            Discover a personalized Chinese name that reflects your identity through the lens of 5,000 years of culture and tradition.
          </p>

          <div className={cn(
            "max-w-2xl mx-auto transition-all duration-1000 delay-300",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur p-6 rounded-xl shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Input
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    className="bg-white/90 dark:bg-gray-900/90"
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
                  />
                </div>
                <div>
                  <Input
                    required
                    type="text"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    placeholder="Nationality"
                    className="bg-white/90 dark:bg-gray-900/90"
                  />
                </div>
                <div>
                  <Input
                    required
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="bg-white/90 dark:bg-gray-900/90"
                  />
                </div>
                <div className="md:col-span-2">
                  <Select value={gender} onValueChange={setGender}>
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
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Generate My Chinese Name
              </Button>
            </form>

            {generatedName && (
              <div className={cn(
                "mt-8 bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-500",
                "transform"
              )}>
                <div className="text-center">
                  <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {generatedName.chinese}
                  </h3>
                  <p className="text-lg text-red-600 dark:text-red-400 font-medium mb-6">
                    {generatedName.pinyin}
                  </p>
                  <div className="space-y-4">
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        {generatedName.meaning.en}
                      </p>
                      <p className="text-gray-800 dark:text-gray-200">
                        {generatedName.meaning.zh}
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
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Trusted by individuals from</p>
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