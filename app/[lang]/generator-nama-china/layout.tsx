import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Generator Nama China untuk Indonesia | Berdasarkan Puisi Klasik',
  description: 'Generator nama China khusus untuk Indonesia dengan metode unik berdasarkan puisi klasik dan sastra China kuno. Berbeda dari metode Wu Xing, kami menggunakan literatur 5000 tahun.',
  keywords: 'generator nama china indonesia, nama china puisi klasik, chinese name generator indonesia, generator nama china sastra',
  alternates: {
    canonical: 'https://chinesenamegenerator.online/id/generator-nama-china',
  },
  openGraph: {
    title: 'Generator Nama China untuk Indonesia | Berdasarkan Puisi Klasik',
    description: 'Generator nama China khusus untuk Indonesia dengan metode unik berdasarkan puisi klasik dan sastra China kuno.',
    url: 'https://chinesenamegenerator.online/id/generator-nama-china',
    siteName: 'Chinese Name Generator Online',
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Nama China untuk Indonesia | Berdasarkan Puisi Klasik',
    description: 'Generator nama China khusus untuk Indonesia dengan metode unik berdasarkan puisi klasik dan sastra China kuno.',
  },
};

export default function GeneratorNamaChinaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}