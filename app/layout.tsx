import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ClientProviders from "@/components/ClientProviders";

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chinesenamegenerator.online'),
  title: 'Free Chinese Name Generator | AI Smart Chinese Names Online 2025',
  description: 'Free AI-powered Chinese name generator with 100% authentic meanings. Create beautiful Chinese names instantly with pronunciation guide, cultural significance. No registration required - Start now!',
  keywords: 'chinese name generator, free chinese names, AI chinese name generator, chinese name meaning, chinese baby names, free name generator online, authentic chinese names, chinese name pronunciation',
  openGraph: {
    title: 'Free Chinese Name Generator | AI Smart Chinese Names Online 2025',
    description: 'Free AI-powered Chinese name generator with 100% authentic meanings. Create beautiful Chinese names instantly with pronunciation guide, cultural significance. No registration required!',
    url: 'https://chinesenamegenerator.online',
    siteName: 'Chinese Name Generator Online',
    images: [
      {
        url: 'https://chinesenamegenerator.online/images/chineseNameLogo4.png',
        width: 1200,
        height: 630,
        alt: 'Free Chinese Name Generator - AI Smart Technology for Authentic Chinese Names',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Chinese Name Generator | AI Smart Chinese Names 2025',
    description: 'Free AI-powered Chinese name generator with authentic meanings. Create beautiful Chinese names instantly with pronunciation guide. No registration required!',
    images: ['https://chinesenamegenerator.online/images/chineseNameLogo4.png'],
    creator: '@ChineseNameGen',
    site: '@ChineseNameGen',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'qCqpCFhJjwSUL7Q9XFLvM8jYzKs6D3hZ', // Google Search Console验证码
    yandex: 'yandex-verification-code',
  },
  alternates: {
    canonical: 'https://chinesenamegenerator.online',
    languages: {
      'en': 'https://chinesenamegenerator.online/en',
      'zh': 'https://chinesenamegenerator.online/zh',
      'fr': 'https://chinesenamegenerator.online/fr',
      'de': 'https://chinesenamegenerator.online/de',
      'ar': 'https://chinesenamegenerator.online/ar',
      'tr': 'https://chinesenamegenerator.online/tr',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 搜索引擎验证标签 */}
        <meta name="msvalidate.01" content="msvalidate.01-verification-code" />
        
        {/* Google Analytics GA4 最新代码 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-QLHLH6K772"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-QLHLH6K772');
        `}} />
        
        {/* Schema.org 结构化数据标记 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "Free Chinese Name Generator",
                "description": "AI-powered free Chinese name generator online with authentic meanings and pronunciation guide",
                "url": "https://chinesenamegenerator.online/",
                "applicationCategory": "UtilityApplication",
                "operatingSystem": "Web Browser",
                "browserRequirements": "Requires JavaScript. Requires HTML5.",
                "softwareVersion": "2.0",
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.8",
                  "ratingCount": "1247",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD",
                  "availability": "https://schema.org/InStock"
                },
                "provider": {
                  "@type": "Organization",
                  "name": "Chinese Name Generator Online",
                  "url": "https://chinesenamegenerator.online"
                },
                "featureList": [
                  "AI-powered name generation",
                  "Cultural authenticity verification", 
                  "Pronunciation guide",
                  "Name meaning explanation",
                  "Multiple language support",
                  "No registration required"
                ],
                "screenshot": "https://chinesenamegenerator.online/images/chineseNameLogo4.png"
              },
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Chinese Name Generator Online",
                "url": "https://chinesenamegenerator.online",
                "logo": "https://chinesenamegenerator.online/images/chineseNameLogo4.png",
                "sameAs": [
                  "https://twitter.com/ChineseNameGen",
                  "https://www.facebook.com/ChineseNameGenerator"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": ["English", "Chinese", "French", "German", "Arabic", "Turkish", "Portuguese"]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Chinese Name Generator Online",
                "url": "https://chinesenamegenerator.online",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://chinesenamegenerator.online/search?q={search_term_string}",
                  "query-input": "required name=search_term_string"
                },
                "inLanguage": ["en", "zh", "fr", "de", "ar", "tr", "pt"]
              }
            ])
          }}
        />
      </head>
      <body className={inter.className}>
        <ClientProviders>
          <Header />
          <main>{children}</main>
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}