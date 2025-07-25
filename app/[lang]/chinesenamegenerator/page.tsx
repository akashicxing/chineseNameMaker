"use client";
import { useSession, signIn } from "next-auth/react";
import Hero from '@/components/hero';
import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';
import pt from '@/locales/pt/index';

const localeMap = { en, zh, fr, de, ar, tr, pt } as const;

export default function NamePage({ params }: { params: { lang: string } }) {
  const t = localeMap[params.lang as keyof typeof localeMap] || en;
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>加载中...</div>;
  }

  if (!session) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <p>请先登录 Google 账号后使用名字生成功能。</p>
        <button onClick={() => signIn("google")}>使用 Google 登录</button>
      </div>
    );
  }

  return <Hero t={t} />;
} 