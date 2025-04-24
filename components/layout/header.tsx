"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { GitGraph, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import LanguageSwitcher from '@/components/shared/language-switcher';
import ThemeSwitcher from '@/components/shared/theme-switcher';
import { useLanguage, translations } from '@/lib/i18n';
import { useTheme } from '@/lib/themes';
import { usePathname } from "next/navigation"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();
  const { theme } = useTheme();
  const t = translations[language];
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
        <Link href="/" className="flex items-center gap-2">
          <GitGraph className="h-8 w-8 text-red-600 dark:text-red-400" />
          <span className="font-bold text-xl text-gray-900 dark:text-white">NomChinois</span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm">
          <Link href="/features" className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
            {t.nav.features}
          </Link>
          <Link href="/how-it-works" className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
            {t.nav.howItWorks}
          </Link>
          <Link href="/chinesenamegenerator" className={cn(
            "text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors",
            pathname === "/chinesenamegenerator" && "text-red-600 dark:text-red-400"
          )}>
            {t.nav.nameGenerator}
          </Link>
          <Link href="/testimonials" className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
            {t.nav.testimonials}
          </Link>
          <Link href="/faq" className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
            {t.nav.faq}
          </Link>
          <Link href="/blog" className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400 transition-colors">
            {t.nav.blog}
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <Button variant="outline" className="font-medium">
            {t.auth.signIn}
          </Button>
          <Button className="bg-red-600 hover:bg-red-700 text-white font-medium">
            {t.auth.getStarted}
          </Button>
        </div>

        <button 
          className="md:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg absolute top-full left-0 right-0 p-4">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/features" 
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.features}
            </Link>
            <Link 
              href="/how-it-works" 
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.howItWorks}
            </Link>
            <Link 
              href="/chinesenamegenerator" 
              className={cn(
                "text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400",
                pathname === "/chinesenamegenerator" && "text-red-600 dark:text-red-400"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.nameGenerator}
            </Link>
            <Link 
              href="/testimonials" 
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.testimonials}
            </Link>
            <Link 
              href="/faq" 
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.faq}
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-red-600 dark:text-gray-300 dark:hover:text-red-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.blog}
            </Link>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col space-y-3">
              <div className="flex gap-2">
                <ThemeSwitcher />
                <LanguageSwitcher />
              </div>
              <Button variant="outline" className="w-full">{t.auth.signIn}</Button>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white">{t.auth.getStarted}</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}