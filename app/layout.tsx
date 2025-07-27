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
  title: 'Free Chinese Name Generator | AI Smart Chinese Names Online',
  description: 'Free AI-powered Chinese name generator online. Create authentic Chinese names instantly with meanings, pronunciation guide. Smart algorithm, no registration required.',
  keywords: 'chinese name generator, free chinese names, AI smart generator, chinese name online, free name generator',
  openGraph: {
    title: 'Free Chinese Name Generator | AI Smart Chinese Names Online',
    description: 'Free AI-powered Chinese name generator online. Create authentic Chinese names instantly with meanings, pronunciation guide. Smart algorithm, no registration required.',
    url: 'https://chinesenamegenerator.online',
    siteName: 'Chinese Name Generator',
    images: [
      {
        url: 'https://chinesenamegenerator.online/images/chineseNameLogo4.png',
        width: 1200,
        height: 630,
        alt: 'Free Chinese Name Generator - AI Smart Technology',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Chinese Name Generator | AI Smart Chinese Names Online',
    description: 'Free AI-powered Chinese name generator online. Create authentic Chinese names instantly with meanings, pronunciation guide.',
    images: ['https://chinesenamegenerator.online/images/chineseNameLogo4.png'],
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
    google: 'google-site-verification-code', // 需要添加实际的验证码
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Free Chinese Name Generator",
              "description": "AI-powered free Chinese name generator online",
              "url": "https://chinesenamegenerator.online/",
              "applicationCategory": "UtilityApplication",
              "operatingSystem": "Web Browser",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              }
            })
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