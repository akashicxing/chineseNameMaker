import Hero from '@/components/hero';
import Features from '@/components/features';
import HowItWorks from '@/components/how-it-works';
import Testimonials from '@/components/testimonials';
import FAQ from '@/components/faq';
import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';

const localeMap = { en, zh, fr, de, ar, tr } as const;

export default function LangHome({ params }: { params: { lang: string } }) {
  const t = localeMap[params.lang as keyof typeof localeMap] || en;
  return (
    <main>
      <Hero t={t} />
      <Features t={t} />
      <HowItWorks t={t} />
      <Testimonials t={t} />
      <FAQ t={t} />
    </main>
  );
} 