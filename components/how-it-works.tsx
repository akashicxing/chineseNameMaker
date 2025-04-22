"use client";

import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  ClipboardList, 
  UserCircle, 
  FileText, 
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface StepProps {
  number: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  isVisible: boolean;
}

function Step({ number, title, description, icon, isVisible }: StepProps) {
  return (
    <div className={cn(
      "relative flex flex-col md:flex-row items-start gap-4 md:gap-8 transition-all duration-700 transform",
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    )}>
      {/* Number bubble */}
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-red-600 dark:bg-red-500 text-white flex items-center justify-center text-xl font-bold z-10">
        {number}
      </div>
      
      {/* Content */}
      <div className="flex-grow pt-2 md:pt-0">
        <div className="flex items-start gap-4 mb-3">
          <div className="p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
        <p className="text-gray-600 dark:text-gray-300">
          {description}
        </p>
      </div>
      
      {/* Connector line */}
      {number < 4 && (
        <div className="absolute top-12 left-6 w-0.5 h-16 bg-red-200 dark:bg-red-800 hidden md:block" />
      )}
    </div>
  );
}

export default function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const steps = [
    {
      number: 1,
      title: "Complete Your Profile",
      description: "Tell us about yourself, your personality traits, aspirations, and what values you want reflected in your Chinese name.",
      icon: <UserCircle className="h-6 w-6" />,
    },
    {
      number: 2,
      title: "Receive Personalized Recommendations",
      description: "Our AI system will analyze your profile and create a harmonious Chinese name that matches your personality.",
      icon: <ClipboardList className="h-6 w-6" />,
    },
    {
      number: 3,
      title: "Explore Cultural Context",
      description: "Learn about the meaning, history, and cultural significance behind each character in your Chinese name.",
      icon: <FileText className="h-6 w-6" />,
    },
    {
      number: 4,
      title: "Learn Your Chinese Name",
      description: "Master the pronunciation and writing of your Chinese name, with options to explore premium features for more choices.",
      icon: <CheckCircle className="h-6 w-6" />,
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It <span className="text-red-600 dark:text-red-400">Works</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Our simple process guides you to your perfect Chinese name in just four steps.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <Step
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isVisible={inView}
              />
            ))}
          </div>
          
          <div className={cn(
            "mt-16 text-center transition-all duration-700 delay-500",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}>
            <a 
              href="#pricing" 
              className="inline-flex items-center text-red-600 dark:text-red-400 font-medium hover:text-red-700 dark:hover:text-red-300"
            >
              Ready to start your journey?
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}