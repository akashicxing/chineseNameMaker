"use client";

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { cn } from '@/lib/utils';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How do you create a Chinese name that suits me?",
    answer: "We consider your personal traits, aspirations, values, and even your birth name's sounds when applicable. Our linguists and cultural experts select characters that harmonize in meaning and pronunciation, creating a name that feels authentic while reflecting your identity."
  },
  {
    question: "Will Chinese people understand and be able to pronounce my name?",
    answer: "Absolutely! Unlike direct translations or phonetic approximations, our names follow proper Chinese naming conventions. We carefully select characters that create natural-sounding names that native speakers can easily pronounce and remember."
  },
  {
    question: "How long does the process take?",
    answer: "For our Essential and Premium packages, you'll receive your name recommendations within 3-5 business days. The Business package includes consultation sessions and typically takes 7-10 days to complete the full process."
  },
  {
    question: "Can I request revisions to my suggested names?",
    answer: "Yes! Premium and Business packages include a revision round where you can provide feedback and request adjustments. For the Essential package, revisions can be purchased separately if needed."
  },
  {
    question: "Do I own the copyright to my Chinese name?",
    answer: "While you can't copyright a name itself, the digital certificate and calligraphy artwork we provide are yours to use personally or professionally. You receive full usage rights for all digital assets we create for you."
  },
  {
    question: "How will I learn to pronounce my Chinese name correctly?",
    answer: "All packages include pinyin pronunciation guides. Premium and Business packages also include audio recordings by native speakers. We provide phonetic equivalents in English to help you master the pronunciation."
  },
  {
    question: "Is my Chinese name legally valid?",
    answer: "The Chinese name we provide is culturally authentic and can be used socially, professionally, and on business cards. However, legal name changes must follow your country's specific procedures. Our names can be used in those processes."
  },
  {
    question: "Can I get names for my entire family or team?",
    answer: "Yes! We offer special rates for families and business teams. Contact us for custom packages that can include thematically related names while preserving individual identity."
  }
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="faq" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked <span className="text-red-600 dark:text-red-400">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to know about our Chinese name service.
          </p>
        </div>

        <div className={cn(
          "max-w-3xl mx-auto transition-all duration-700",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`} 
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-gray-900 dark:text-white hover:text-red-600 dark:hover:text-red-400">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className={cn(
          "mt-16 text-center transition-all duration-700 delay-500",
          inView ? "opacity-100" : "opacity-0"
        )}>
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions? 
            <a href="#contact" className="text-red-600 dark:text-red-400 font-medium ml-1 hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}