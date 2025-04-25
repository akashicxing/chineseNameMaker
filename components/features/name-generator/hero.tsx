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
import Image from 'next/image';

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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 w-full h-full">
        {/* 主背景图 */}
        <div className="absolute top-0 right-0 w-2/3 h-full opacity-[0.08] overflow-hidden">
          <Image
            src="/images/bg-traditional.png"
            alt="Traditional Chinese Art"
            fill
            className="object-cover object-center"
            priority
            quality={95}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/80 to-white dark:via-gray-950/80 dark:to-gray-950" />
        </div>
        {/* 径向渐变叠加 */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-white/40 to-white dark:via-gray-950/40 dark:to-gray-950" />
      </div>

      {/* 主要内容 */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="space-y-6 max-w-3xl mx-auto backdrop-blur-[2px] py-8 rounded-2xl">
          <div className="inline-block px-4 py-1.5 rounded-full bg-red-50/80 dark:bg-red-950/80 backdrop-blur-sm">
            <span className="text-red-600 dark:text-red-400 text-sm font-medium">
              Free Name Generator
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            Your Meaningful
            <span className="block text-red-600 dark:text-red-500 mt-2">
              Chinese Name
            </span>
            <span className="block text-3xl sm:text-4xl md:text-5xl mt-2 text-gray-700 dark:text-gray-300">
              Crafted with Tradition
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get your free personalized Chinese name that reflects your identity through
            the lens of 5,000 years of culture and tradition.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Generate Name
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-red-200 hover:border-red-300 dark:border-red-800 dark:hover:border-red-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}