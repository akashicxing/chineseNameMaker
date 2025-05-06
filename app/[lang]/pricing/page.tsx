import Pricing from '@/components/pricing';
import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';
import pt from '@/locales/pt/index';

const localeMap = { en, zh, fr, de, ar, tr, pt } as const;

export default function PricingPage({ params }: { params: { lang: string } }) {
  return (
    <div className="pt-20">
      <Pricing />
    </div>
  );
} 