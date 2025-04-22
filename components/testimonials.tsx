"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  image: string;
  rating: number;
  chineseName: string;
}

const testimonials: TestimonialProps[] = [
  {
    content: "Finding a Chinese name was important for my business relationships in Shanghai. NomChinois not only gave me a name that my colleagues could easily pronounce, but also one that reflected my personality and values. The cultural context they provided helps me share my name's story.",
    author: "Michael Thompson",
    role: "International Business Consultant",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    chineseName: "汤明智 (Táng Míngzhì)"
  },
  {
    content: "As someone studying Chinese culture and language, having an authentic Chinese name was essential. The linguistics experts at NomChinois created a name that honors my French heritage while fitting beautifully into Chinese phonetics. I treasure both the name and the calligraphy artwork.",
    author: "Sophie Laurent",
    role: "Cultural Studies Researcher",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    chineseName: "罗晓月 (Luó Xiǎoyuè)"
  },
  {
    content: "My experience with NomChinois was exceptional. They didn't just translate my name; they captured my essence in characters that have meaning and flow. The stroke animations helped me learn to write my name properly, and now I can confidently introduce myself to my Chinese students.",
    author: "David Miller",
    role: "English Teacher in Beijing",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5,
    chineseName: "米大卫 (Mǐ Dàwèi)"
  },
  {
    content: "The thoughtfulness behind my Chinese name amazed me. Each character was selected to reflect my career as an artist while honoring traditional naming conventions. The digital certificate is beautifully designed, and I've even incorporated my Chinese name into my artwork.",
    author: "Isabella Garcia",
    role: "Contemporary Artist",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4,
    chineseName: "高艺华 (Gāo Yìhuá)"
  },
];

export default function Testimonials() {
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
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Success <span className="text-red-600 dark:text-red-400">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Hear from our clients about their journey to finding their perfect Chinese identity.
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
                  {[...Array(5)].map((_, i) => (
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
              
              {testimonials.map((_, index) => (
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
    </section>
  );
}