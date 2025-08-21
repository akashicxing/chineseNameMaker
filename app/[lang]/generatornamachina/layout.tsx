import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generator Nama China untuk Indonesia | Gratis & AI Smart',
  description: 'Generator nama China gratis khusus untuk Indonesia. Teknologi AI canggih untuk menghasilkan nama China autentik dengan makna mendalam dan panduan pelafalan.',
  keywords: 'generator nama china indonesia, nama china gratis, chinese name generator indonesia, nama china ai, generator nama china online',
  alternates: {
    canonical: 'https://chinesenamegenerator.online/id/generatornamachina',
  },
  openGraph: {
    title: 'Generator Nama China untuk Indonesia | Gratis & AI Smart',
    description: 'Generator nama China gratis khusus untuk Indonesia. Teknologi AI canggih untuk menghasilkan nama China autentik dengan makna mendalam.',
    url: 'https://chinesenamegenerator.online/id/generatornamachina',
    siteName: 'Chinese Name Generator Online',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Nama China untuk Indonesia | Gratis & AI Smart',
    description: 'Generator nama China gratis khusus untuk Indonesia. Teknologi AI canggih untuk menghasilkan nama China autentik dengan makna mendalam.',
  },
};

export default function GeneratorNamaChinaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
