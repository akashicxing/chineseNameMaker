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

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <ScrollText className="h-6 w-6" />,
      title: "Cultural Meaning",
      description: "Each name comes with detailed cultural interpretations, revealing the deep meaning behind your Chinese name."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Pinyin Guide",
      description: "Clear pronunciation guides with both pinyin notation and phonetic equivalents in English."
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Smart Pronunciation",
      description: "Experience authentic pronunciation through advanced text-to-speech technology."
    },
    {
      icon: <Pen className="h-6 w-6" />,
      title: "Stroke Order",
      description: "Learn the correct stroke order of Chinese characters through dynamic demonstrations."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Guidance",
      description: "Receive professional advice to ensure cultural authenticity in your Chinese name."
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Chinese Surnames",
      description: "Explore the rich history and origins of traditional Chinese family names."
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Naming Taboos",
      description: "Smart alerts about cultural taboos to ensure your name is culturally appropriate."
    },
    {
      icon: <History className="h-6 w-6" />,
      title: "Cultural Heritage",
      description: "Names inspired by classical poetry, historical figures, and cultural elements."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Culturally Rich <span className="text-red-600 dark:text-red-400">Features</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover our comprehensive tools and insights for finding your perfect Chinese name.
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
    </section>
  );
}