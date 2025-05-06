"use client";

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n';
import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';

const localeMap = { en, zh, fr, de, ar, tr } as const;

export default function Footer() {
  const { language } = useLanguage();
  const t = (localeMap[language as keyof typeof localeMap] || en) as typeof en;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ChineseNameGenerator</h3>
            <p className="mb-4">
              {t.footer?.slogan || 'Bridging cultures through personalized Chinese names. Discover your authentic Chinese identity with our expert linguists and cultural specialists.'}
            </p>
            <p className="mb-2">{t.footer?.contact || 'Contact us:'}</p>
            <a href="mailto:akashicxing@gmail.com" className="text-red-400 hover:text-red-300 transition-colors">
              akashicxing@gmail.com
            </a>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer?.quickLinks || 'Quick Links'}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">{t.nav.features}</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">{t.nav.howItWorks}</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">{t.nav.testimonials}</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">{t.nav.pricing || 'Pricing'}</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">{t.nav.faq}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer?.resources || 'Resources'}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/chinese-names-for-boys" className="hover:text-white transition-colors">{t.footer?.boys || 'Chinese Names for Boys'}</Link>
              </li>
              <li>
                <Link href="/blog/chinese-names-for-girls" className="hover:text-white transition-colors">{t.footer?.girls || 'Chinese Names for Girls'}</Link>
              </li>
              <li>
                <Link href="/blog/chinese-name-pronunciation" className="hover:text-white transition-colors">{t.footer?.pronunciation || 'Chinese Name Pronunciation'}</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">{t.footer?.legal || 'Legal'}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">{t.footer?.privacy || 'Privacy Policy'}</Link>
              </li>
              <li>
                <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">{t.footer?.terms || 'Terms of Service'}</Link>
              </li>
              <li>
                <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">{t.footer?.cookie || 'Cookie Policy'}</Link>
              </li>
              <li>
                <Link href="/legal/gdpr" className="hover:text-white transition-colors">{t.footer?.gdpr || 'GDPR Compliance'}</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} ChineseNameGenerator. {t.footer?.copyright || 'All rights reserved by akashicxing.'}</p>
          <div className="mt-4 md:mt-0">
            <span className="text-sm">{t.footer?.available || 'Available in:'}</span>
            <div className="flex space-x-4 mt-2">
              <button className="hover:text-white transition-colors">{t.languages.english}</button>
              <button className="hover:text-white transition-colors">{t.languages.french}</button>
              <button className="hover:text-white transition-colors">{t.languages.german}</button>
              <button className="hover:text-white transition-colors">{t.languages.spanish}</button>
              <button className="hover:text-white transition-colors">{t.languages.italian}</button>
              <button className="hover:text-white transition-colors">{t.languages.russian}</button>
              <button className="hover:text-white transition-colors">{t.languages.japanese}</button>
              <button className="hover:text-white transition-colors">{t.languages.korean}</button>
              <button className="hover:text-white transition-colors">{t.languages.vietnamese}</button>
              <button className="hover:text-white transition-colors">{t.languages.thai}</button>
              <button className="hover:text-white transition-colors">{t.languages.other}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}