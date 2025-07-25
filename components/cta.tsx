"use client";

import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export default function CTA() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-red-700 dark:from-red-900 dark:to-red-800 text-white">
      <div 
        className="container mx-auto px-4" 
        ref={ref}
      >
        <div className={cn(
          "max-w-4xl mx-auto text-center transition-all duration-700 transform",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Begin Your Cultural Journey Today
          </h2>
          <p className="text-xl text-red-100 dark:text-red-200 mb-8 max-w-2xl mx-auto">
            Discover a Chinese name that resonates with your identity and connects you to a rich cultural tradition spanning millennia.
          </p>
          
          {/* Chinese character decoration */}
          <div className="relative mb-10">
            <div className="flex justify-center gap-8 text-7xl md:text-8xl font-serif opacity-20">
              <span>名</span>
              <span>字</span>
              <span>缘</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-red-600 font-medium px-6 py-6 text-lg"
            >
              Get Your Chinese Name
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white hover:bg-red-700/50 text-white font-medium px-6 py-6 text-lg"
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}