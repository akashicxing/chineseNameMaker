"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { GitGraph, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ThemeSwitcher from './theme-switcher';
import { useLanguage } from '@/lib/i18n';
import { useTheme } from '@/lib/themes';
import { usePathname } from "next/navigation"
import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';

const localeMap = { en, zh, fr, de, ar, tr } as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = (localeMap[language as keyof typeof localeMap] || en) as typeof en;
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.className = `theme-${theme}`;
  }, [theme]);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative w-60 h-20">
            <Image
              src="/images/chineseNamelogo1.png"
              alt="ChineseName Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm">
          <Link href={`/${language}/features`} className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
            {t.nav.features}
          </Link>
          <Link href={`/${language}/how-it-works`} className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
            {t.nav.howItWorks}
          </Link>
          <Link href={`/${language}/chinesenamegenerator`} className={cn(
            "text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors",
            pathname === `/${language}/chinesenamegenerator` && "text-red-600 dark:text-red-400"
          )}>
            {t.nav.nameGenerator}
          </Link>
          <Link href={`/${language}/testimonials`} className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
            {t.nav.testimonials}
          </Link>
          <Link href={`/${language}/faq`} className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
            {t.nav.faq}
          </Link>
          <Link href={`/${language}/blog`} className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
            {t.nav.blog}
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              href={`/${language}/features`} 
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.features}
            </Link>
            <Link 
              href={`/${language}/how-it-works`} 
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.howItWorks}
            </Link>
            <Link 
              href={`/${language}/chinesenamegenerator`} 
              className={cn(
                "text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400",
                pathname === `/${language}/chinesenamegenerator` && "text-red-600 dark:text-red-400"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.nameGenerator}
            </Link>
            <Link 
              href={`/${language}/testimonials`} 
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.testimonials}
            </Link>
            <Link 
              href={`/${language}/faq`} 
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.faq}
            </Link>
            <Link 
              href={`/${language}/blog`} 
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.blog}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}