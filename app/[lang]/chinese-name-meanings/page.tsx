import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Book, Heart, Mountain, Flower, Star, Sun, Moon, Waves } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Chinese Name Meanings | Deep Cultural Significance & Symbolism',
  description: 'Discover the profound meanings behind Chinese names. Explore cultural significance, symbolism, and traditional values embedded in Chinese naming practices.',
  keywords: 'chinese name meanings, chinese name symbolism, chinese naming culture, name significance, chinese character meanings',
};

const meaningCategories = [
  {
    category: 'Nature Elements',
    icon: <Mountain className="h-6 w-6" />,
    description: 'Names inspired by natural elements reflecting harmony with nature',
    examples: [
      { name: '山', pinyin: 'shān', meaning: 'Mountain - Symbolizes stability, strength, and endurance' },
      { name: '海', pinyin: 'hǎi', meaning: 'Ocean - Represents vastness, depth, and boundless potential' },
      { name: '林', pinyin: 'lín', meaning: 'Forest - Signifies growth, prosperity, and natural wisdom' },
      { name: '雨', pinyin: 'yǔ', meaning: 'Rain - Embodies nourishment, renewal, and life-giving energy' },
    ]
  },
  {
    category: 'Virtuous Qualities',
    icon: <Heart className="h-6 w-6" />,
    description: 'Names embodying moral virtues and positive character traits',
    examples: [
      { name: '仁', pinyin: 'rén', meaning: 'Benevolence - Core Confucian virtue of humaneness and kindness' },
      { name: '义', pinyin: 'yì', meaning: 'Righteousness - Moral principle and doing what is right' },
      { name: '智', pinyin: 'zhì', meaning: 'Wisdom - Intelligence combined with sound judgment' },
      { name: '勇', pinyin: 'yǒng', meaning: 'Courage - Bravery and strength in facing challenges' },
    ]
  },
  {
    category: 'Celestial Bodies',
    icon: <Star className="h-6 w-6" />,
    description: 'Names connected to heavenly bodies and cosmic elements',
    examples: [
      { name: '星', pinyin: 'xīng', meaning: 'Star - Guidance, aspiration, and celestial beauty' },
      { name: '月', pinyin: 'yuè', meaning: 'Moon - Femininity, cycles, and gentle illumination' },
      { name: '日', pinyin: 'rì', meaning: 'Sun - Vitality, energy, and life-giving power' },
      { name: '辰', pinyin: 'chén', meaning: 'Morning - New beginnings and cosmic time' },
    ]
  },
  {
    category: 'Floral & Beauty',
    icon: <Flower className="h-6 w-6" />,
    description: 'Names representing flowers, plants, and aesthetic beauty',
    examples: [
      { name: '花', pinyin: 'huā', meaning: 'Flower - Beauty, delicacy, and blooming potential' },
      { name: '莲', pinyin: 'lián', meaning: 'Lotus - Purity rising from adversity, spiritual growth' },
      { name: '梅', pinyin: 'méi', meaning: 'Plum blossom - Resilience, perseverance in winter' },
      { name: '兰', pinyin: 'lán', meaning: 'Orchid - Refinement, nobility, and subtle fragrance' },
    ]
  },
];

const culturalConcepts = [
  {
    concept: 'Five Elements (五行)',
    description: 'Wood, Fire, Earth, Metal, Water - fundamental forces that influence name selection',
    significance: 'Used to balance energy and create harmony in a person\'s life path'
  },
  {
    concept: 'Yin Yang (阴阳)',
    description: 'Complementary forces representing balance between opposing energies',
    significance: 'Names often balance masculine and feminine, active and passive qualities'
  },
  {
    concept: 'Generation Names (字辈)',
    description: 'Shared characters among family members of the same generation',
    significance: 'Maintains family lineage and shows generational connections'
  },
  {
    concept: 'Stroke Count (笔画)',
    description: 'Number of brush strokes in characters affects numerological meaning',
    significance: 'Different stroke counts are associated with various fortune aspects'
  },
];

const namingPrinciples = [
  {
    principle: 'Sound Harmony',
    description: 'Names should have pleasant phonetic flow and avoid awkward combinations',
    importance: 'Essential for daily use and social interactions'
  },
  {
    principle: 'Meaning Depth',
    description: 'Characters chosen for profound significance and positive connotations',
    importance: 'Influences personality development and life aspirations'
  },
  {
    principle: 'Cultural Respect',
    description: 'Avoiding characters associated with negative events or taboo concepts',
    importance: 'Maintains social harmony and cultural sensitivity'
  },
  {
    principle: 'Visual Balance',
    description: 'Characters should be visually appealing when written together',
    importance: 'Aesthetic consideration for calligraphy and written appearance'
  },
];

export default function ChineseNameMeanings({ params }: { params: { lang: string } }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Chinese Name Meanings
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8">
            Discover the profound cultural significance and deep symbolism behind Chinese names. Each character carries centuries of wisdom, cultural values, and meaningful intentions that shape identity and destiny.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href={`/${params.lang}`}>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                <Book className="mr-2 h-5 w-5" />
                Find Your Name Meaning
              </Button>
            </Link>
            <Link href={`/${params.lang}/free-chinese-names`}>
              <Button variant="outline" className="px-8 py-3">
                Browse Name Collection
              </Button>
            </Link>
          </div>
        </div>

        {/* Meaning Categories Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Categories of Chinese Name Meanings
          </h2>
          <div className="space-y-8">
            {meaningCategories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="text-green-600 dark:text-green-400">
                      {category.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.category}</CardTitle>
                      <CardDescription className="text-lg">
                        {category.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.examples.map((example, idx) => (
                      <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-2xl font-bold text-red-600 dark:text-red-400">
                            {example.name}
                          </span>
                          <Badge variant="outline">{example.pinyin}</Badge>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                          {example.meaning}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Cultural Concepts Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Cultural Concepts in Chinese Naming
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culturalConcepts.map((concept, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600 dark:text-blue-400">
                    {concept.concept}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {concept.description}
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-blue-700 dark:text-blue-300">
                      <strong>Cultural Significance:</strong> {concept.significance}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Naming Principles Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Traditional Naming Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {namingPrinciples.map((principle, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{principle.principle}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    {principle.description}
                  </CardDescription>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                    <p className="text-sm font-medium text-orange-700 dark:text-orange-300">
                      {principle.importance}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Interactive Section */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Understanding Your Chinese Name
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Chinese names are not just identifiers – they are carefully crafted expressions of hopes, values, and cultural heritage. Each character tells a story and carries the weight of thousands of years of wisdom.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Book className="h-8 w-8 text-red-600 dark:text-red-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Rich History</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">5,000+ years of naming traditions and cultural evolution</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Deep Meaning</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Every character chosen with intention and significance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Personal Destiny</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Names influence personality and life path in Chinese culture</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Discover Your Name's Deep Meaning
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Generate a Chinese name with authentic cultural significance and profound meaning. Our AI understands the deep symbolism behind every character.
          </p>
          <Link href={`/${params.lang}`}>
            <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              <Book className="mr-2 h-5 w-5" />
              Generate Meaningful Chinese Name
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
} 