"use client";

import { useInView } from 'react-intersection-observer';
import { Check, X, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';
import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  popular?: boolean;
  buttonText: string;
}

const localeMap = { en, zh, fr, de, ar, tr } as const;

const plans: PricingPlan[] = [
  {
    name: "Essential",
    price: "$29",
    description: "Perfect for individuals seeking a meaningful Chinese name.",
    buttonText: "Get Started",
    features: [
      { name: "3 Name Recommendations", included: true },
      { name: "Name Meaning Analysis", included: true },
      { name: "Pinyin Pronunciation Guide", included: true },
      { name: "Digital Name Certificate", included: true },
      { name: "Basic Calligraphy Style", included: true },
      { name: "Audio Pronunciation", included: false },
      { name: "Stroke Order Animations", included: false },
      { name: "Expert Consultation", included: false },
      { name: "Premium Calligraphy Styles", included: false },
    ]
  },
  {
    name: "Premium",
    price: "$59",
    description: "Our most popular choice for a complete cultural experience.",
    buttonText: "Select Premium",
    popular: true,
    features: [
      { name: "5 Name Recommendations", included: true },
      { name: "Name Meaning Analysis", included: true },
      { name: "Pinyin Pronunciation Guide", included: true },
      { name: "Digital Name Certificate", included: true },
      { name: "Basic Calligraphy Style", included: true },
      { name: "Audio Pronunciation", included: true },
      { name: "Stroke Order Animations", included: true },
      { name: "Expert Consultation", included: false },
      { name: "Premium Calligraphy Styles", included: false },
    ]
  },
  {
    name: "Business",
    price: "$99",
    description: "Comprehensive solution with personal expert guidance.",
    buttonText: "Contact Us",
    features: [
      { name: "7 Name Recommendations", included: true },
      { name: "Name Meaning Analysis", included: true },
      { name: "Pinyin Pronunciation Guide", included: true },
      { name: "Digital Name Certificate", included: true },
      { name: "Basic Calligraphy Style", included: true },
      { name: "Audio Pronunciation", included: true },
      { name: "Stroke Order Animations", included: true },
      { name: "Expert Consultation", included: true },
      { name: "Premium Calligraphy Styles", included: true },
    ]
  }
];

export default function Pricing() {
  const { language } = useLanguage();
  const t = (localeMap[language as keyof typeof localeMap] || en) as typeof en;
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t.pricing.title} <span className="text-red-600 dark:text-red-400">{t.nav.pricing || 'Pricing'}</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t.pricing.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.pricing.plans.map((plan, index) => {
            const p = plan as any;
            return (
              <div 
                key={index} 
                className={cn(
                  "bg-white dark:bg-gray-800 rounded-xl border transition-all duration-700 transform",
                  p.popular 
                    ? "border-red-400 dark:border-red-500 shadow-xl shadow-red-100 dark:shadow-none scale-105 md:scale-110 z-10" 
                    : "border-gray-200 dark:border-gray-700 shadow-lg",
                  inView 
                    ? "opacity-100 translate-y-0" 
                    : "opacity-0 translate-y-12"
                )}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {p.popular && (
                  <div className="bg-red-600 text-white text-sm font-medium py-1.5 px-4 rounded-t-xl text-center">
                    Most Popular
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {p.name}
                  </h3>
                  <div className="flex items-baseline mb-4">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      {p.price}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-1">one-time</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {p.description}
                  </p>
                  <Button 
                    className={cn(
                      "w-full mb-8 font-medium",
                      p.popular ? "bg-red-600 hover:bg-red-700 text-white" : "bg-gray-900 hover:bg-gray-800 text-white dark:bg-gray-700 dark:hover:bg-gray-600"
                    )}
                  >
                    {p.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
                    What's included:
                  </h4>
                  <ul className="space-y-3">
                    {p.features.map((feature: any, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 dark:text-gray-600 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={cn(
                          "text-sm",
                          feature.included 
                            ? "text-gray-700 dark:text-gray-300" 
                            : "text-gray-500 dark:text-gray-500"
                        )}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-gray-600 dark:text-gray-300">
            {t.pricing.enterprise.text}
            <a href="#contact" className="text-red-600 dark:text-red-400 font-medium ml-1 hover:underline">
              {t.pricing.enterprise.link}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}