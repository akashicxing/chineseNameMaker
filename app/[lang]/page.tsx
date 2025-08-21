import { Metadata } from 'next';
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

// 多语言SEO元数据配置
const seoMetadata = {
  en: {
    title: 'Free Chinese Name Generator | AI Smart Chinese Names Online 2025',
    description: 'Free AI-powered Chinese name generator with 100% authentic meanings. Create beautiful Chinese names instantly with pronunciation guide, cultural significance. No registration required!',
    keywords: 'chinese name generator, free chinese names, AI chinese name generator, chinese name meaning, chinese baby names, authentic chinese names',
  },
  zh: {
    title: '免费中文起名器 | AI智能中文姓名生成器在线版 2025',
    description: '免费AI驱动的中文起名器，提供100%正宗含义。即时生成美丽中文名字，包含发音指南和文化意义。无需注册 - 立即开始！',
    keywords: '中文起名器, 免费起名, AI起名器, 中文名字含义, 宝宝起名, 在线起名, 正宗中文名字, 中文名字发音',
  },
  fr: {
    title: 'Générateur de Noms Chinois Gratuit | IA Smart Noms Chinois En Ligne 2025',
    description: 'Générateur de noms chinois gratuit alimenté par IA avec significations 100% authentiques. Créez de beaux noms chinois instantanément avec guide de pronunciation.',
    keywords: 'générateur nom chinois, noms chinois gratuits, générateur IA chinois, signification nom chinois, noms bébé chinois',
  },
  de: {
    title: 'Kostenloser Chinesischer Namengenerator | KI Smart Chinesische Namen Online 2025',
    description: 'Kostenloser KI-betriebener chinesischer Namengenerator mit 100% authentischen Bedeutungen. Erstellen Sie schöne chinesische Namen sofort mit Ausspracheführer.',
    keywords: 'chinesischer namengenerator, kostenlose chinesische namen, KI chinesischer generator, chinesische namen bedeutung',
  },
  ar: {
    title: 'مولد الأسماء الصينية المجاني | أسماء صينية ذكية بالذكاء الاصطناعي 2025',
    description: 'مولد أسماء صينية مجاني بالذكاء الاصطناعي مع معاني أصيلة 100%. إنشاء أسماء صينية جميلة فوريًا مع دليل النطق والأهمية الثقافية.',
    keywords: 'مولد أسماء صينية, أسماء صينية مجانية, مولد ذكاء اصطناعي صيني, معنى الأسماء الصينية',
  },
  tr: {
    title: 'Ücretsiz Çin İsim Üreticisi | AI Akıllı Çin İsimleri Online 2025',
    description: 'Ücretsiz AI destekli Çin isim üreticisi ile %100 otantik anlamlar. Telaffuz kılavuzu ile güzel Çin isimlerini anında oluşturun.',
    keywords: 'çin isim üreticisi, ücretsiz çin isimleri, AI çin üreticisi, çin isim anlamları',
  },
};

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang as keyof typeof seoMetadata;
  const metadata = seoMetadata[lang] || seoMetadata.en;
  
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: `https://chinesenamegenerator.online/${lang}`,
      languages: {
        'en': 'https://chinesenamegenerator.online/en',
        'zh': 'https://chinesenamegenerator.online/zh',
        'fr': 'https://chinesenamegenerator.online/fr',
        'de': 'https://chinesenamegenerator.online/de',
        'ar': 'https://chinesenamegenerator.online/ar',
        'tr': 'https://chinesenamegenerator.online/tr',
      },
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      url: `https://chinesenamegenerator.online/${lang}`,
      siteName: 'Chinese Name Generator Online',
      locale: lang === 'zh' ? 'zh_CN' : lang === 'en' ? 'en_US' : `${lang}_${lang.toUpperCase()}`,
      type: 'website',
    },
  };
}

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