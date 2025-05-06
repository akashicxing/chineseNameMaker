"use client";

import { useRef, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  ScrollText, 
  BookOpen, 
  Headphones, 
  Pen, 
  Users, 
  Download,
  PenTool,
  History,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';
import SectionWithBackground from './section-with-background';
import { useLanguage } from '@/lib/i18n';
import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';

const localeMap = { en, zh, fr, de, ar, tr } as const;

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isVisible: boolean;
  index: number;
}

function Feature({ icon, title, description, isVisible, index }: FeatureProps) {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-700 transform",
      isVisible 
        ? "opacity-100 translate-y-0" 
        : "opacity-0 translate-y-12",
      `delay-${index * 100}`
    )}>
      <div className="inline-flex items-center justify-center p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

export default function Features({ t: tProp }: { t?: any }) {
  const { language } = useLanguage();
  const t = tProp || (localeMap[language as keyof typeof localeMap] || en);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const features = t.features.items.map((item: any, idx: number) => ({
    icon: [
      <ScrollText className="h-6 w-6" />,
      <BookOpen className="h-6 w-6" />,
      <Headphones className="h-6 w-6" />,
      <Pen className="h-6 w-6" />,
      <Users className="h-6 w-6" />,
      <BookOpen className="h-6 w-6" />,
      <AlertTriangle className="h-6 w-6" />,
      <History className="h-6 w-6" />
    ][idx],
    title: item.title,
    description: item.description
  }));

  return (
    <SectionWithBackground backgroundImage="bg-traditional.png" className="py-20 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.features.title} <span className="text-red-600 dark:text-red-400">{t.nav.features}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.features.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isVisible={inView}
              index={index}
            />
          ))}
        </div>
      </div>
    </SectionWithBackground>
  );
}