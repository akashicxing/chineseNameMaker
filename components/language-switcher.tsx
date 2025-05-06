"use client";

import { useLanguage } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import fs from 'fs';

// 只用locales目录下的语言
const supportedLanguages = [
  { code: 'en', name: 'English' },
  { code: 'zh', name: '中文' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'ar', name: 'العربية' },
  { code: 'tr', name: 'Türkçe' },
];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();
  const pathname = usePathname();

  // 获取当前路径去掉语言前缀
  function getBasePath(path: string) {
    const parts = path.split('/').filter(Boolean);
    if (parts.length > 0 && supportedLanguages.some(l => l.code === parts[0])) {
      return '/' + parts.slice(1).join('/');
    }
    return path;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {supportedLanguages.map((lang: { code: string; name: string }) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => {
              setLanguage(lang.code as any);
              const basePath = getBasePath(pathname);
              if (lang.code === 'en') {
                router.push(basePath === '/' ? '/' : basePath);
              } else {
                router.push(`/${lang.code}${basePath === '/' ? '' : basePath}`);
              }
            }}
            className={language === lang.code ? 'bg-accent' : ''}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}