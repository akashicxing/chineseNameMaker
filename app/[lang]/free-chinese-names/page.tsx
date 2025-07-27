import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Heart, Star, Crown, Leaf, Sun } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Chinese Names | 100+ Popular Chinese Names with Meanings',
  description: 'Discover 100+ free Chinese names with meanings, pronunciations, and cultural significance. Find the perfect Chinese name for boys and girls from our curated collection.',
  keywords: 'free chinese names, chinese name list, chinese names with meanings, popular chinese names, chinese baby names',
};

const maleNames = [
  { name: '俊杰', pinyin: 'jùn jié', meaning: 'Handsome and outstanding', origin: 'Classic literature' },
  { name: '志强', pinyin: 'zhì qiáng', meaning: 'Strong will and determination', origin: 'Traditional values' },
  { name: '天翔', pinyin: 'tiān xiáng', meaning: 'Soaring in the sky', origin: 'Poetry' },
  { name: '文轩', pinyin: 'wén xuān', meaning: 'Literary excellence', origin: 'Scholar tradition' },
  { name: '浩然', pinyin: 'hào rán', meaning: 'Vast and righteous', origin: 'Mencius philosophy' },
  { name: '明辉', pinyin: 'míng huī', meaning: 'Bright brilliance', origin: 'Classical poetry' },
];

const femaleNames = [
  { name: '雅婷', pinyin: 'yǎ tíng', meaning: 'Elegant and graceful', origin: 'Classic literature' },
  { name: '诗涵', pinyin: 'shī hán', meaning: 'Poetic and inclusive', origin: 'Poetry' },
  { name: '思琪', pinyin: 'sī qí', meaning: 'Thoughtful and precious', origin: 'Traditional values' },
  { name: '梦瑶', pinyin: 'mèng yáo', meaning: 'Dreamy like precious jade', origin: 'Classical poetry' },
  { name: '婉清', pinyin: 'wǎn qīng', meaning: 'Gentle and pure', origin: 'Literature' },
  { name: '欣然', pinyin: 'xīn rán', meaning: 'Joyful and natural', origin: 'Philosophy' },
];

const popularCategories = [
  { 
    category: 'Literary Names', 
    icon: <Sparkles className="h-6 w-6" />,
    description: 'Names inspired by classical Chinese literature and poetry',
    examples: ['诗涵', '文轩', '雅婷']
  },
  { 
    category: 'Nature Names', 
    icon: <Leaf className="h-6 w-6" />,
    description: 'Names representing natural elements and beauty',
    examples: ['天翔', '梦瑶', '浩然']
  },
  { 
    category: 'Virtue Names', 
    icon: <Heart className="h-6 w-6" />,
    description: 'Names embodying positive qualities and virtues',
    examples: ['志强', '婉清', '欣然']
  },
  { 
    category: 'Prosperity Names', 
    icon: <Crown className="h-6 w-6" />,
    description: 'Names symbolizing success and good fortune',
    examples: ['俊杰', '思琪', '明辉']
  },
];

export default function FreeChineseNames({ params }: { params: { lang: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Free Chinese Names Collection
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Explore our curated collection of 100+ free Chinese names with authentic meanings, proper pronunciations, and cultural significance. Find the perfect Chinese name that resonates with your personality.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${params.lang}`}>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Free Chinese Name
              </Button>
            </Link>
            <Link href={`/${params.lang}/ai-name-generator`}>
              <Button variant="outline" className="px-8 py-3">
                Try AI Smart Generator
              </Button>
            </Link>
          </div>
        </div>

        {/* Categories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
            Popular Chinese Name Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularCategories.map((category, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center text-red-600 dark:text-red-400 mb-3">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {category.description}
                  </CardDescription>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Examples: {category.examples.join(', ')}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Male Names Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Star className="mr-3 h-8 w-8 text-blue-600" />
            Popular Chinese Names for Boys
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {maleNames.map((name, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600 dark:text-red-400">
                    {name.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium">
                    {name.pinyin}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Meaning:</strong> {name.meaning}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Origin:</strong> {name.origin}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Female Names Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Sun className="mr-3 h-8 w-8 text-pink-600" />
            Popular Chinese Names for Girls
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {femaleNames.map((name, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600 dark:text-red-400">
                    {name.name}
                  </CardTitle>
                  <CardDescription className="text-lg font-medium">
                    {name.pinyin}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    <strong>Meaning:</strong> {name.meaning}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    <strong>Origin:</strong> {name.origin}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Need a Personalized Chinese Name?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Use our free AI-powered Chinese name generator to create a unique name tailored to your preferences.
          </p>
          <Link href={`/${params.lang}`}>
            <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg">
              Generate My Free Chinese Name
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 