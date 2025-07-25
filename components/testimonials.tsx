"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import SectionWithBackground from './section-with-background';
import { useLanguage } from '@/lib/i18n';
import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';

const localeMap = { en, zh, fr, de, ar, tr } as const;

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
  rating: number;
  chineseName: string;
}

export default function Testimonials({ t: tProp }: { t?: any }) {
  const { language } = useLanguage();
  const t = tProp || (localeMap[language as keyof typeof localeMap] || en);
  const testimonials = t.testimonials.items;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setIsLoaded(true);
    }
  }, [inView]);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <SectionWithBackground backgroundImage="bg3.png" className="py-20 md:py-32">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.testimonials.title} <span className="text-red-600 dark:text-red-400"> </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Large quote icon */}
          <div className="absolute -top-10 left-0 text-red-100 dark:text-red-900/20">
            <Quote className="h-24 w-24" />
          </div>
          
          <div className={cn(
            "bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-10 relative z-10 transition-all duration-700 transform",
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center text-center">
                <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden">
                  <Image 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].author}
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                  {testimonials[activeIndex].author}
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">
                  {testimonials[activeIndex].role}
                </p>
                
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_: unknown, i: number) => (
                    <Star 
                      key={i} 
                      className={cn(
                        "h-4 w-4",
                        i < testimonials[activeIndex].rating 
                          ? "text-amber-400 fill-amber-400" 
                          : "text-gray-300 dark:text-gray-600"
                      )} 
                    />
                  ))}
                </div>
                
                <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                  <p className="text-red-700 dark:text-red-300 font-medium">
                    {testimonials[activeIndex].chineseName}
                  </p>
                </div>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-center">
                <blockquote className="text-gray-700 dark:text-gray-300 text-lg italic relative">
                  "{testimonials[activeIndex].content}"
                </blockquote>
              </div>
            </div>
            
            <div className="flex justify-center mt-8 gap-4">
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={prevTestimonial}
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              {testimonials.map((_: any, index: any) => (
                <button 
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all",
                    index === activeIndex 
                      ? "bg-red-600 dark:bg-red-400 scale-125" 
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  )}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              
              <Button 
                variant="outline" 
                size="icon" 
                className="rounded-full" 
                onClick={nextTestimonial}
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionWithBackground>
  );
}