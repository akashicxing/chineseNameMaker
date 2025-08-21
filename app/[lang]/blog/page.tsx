"use client";

import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';
import pt from '@/locales/pt/index';
import Link from 'next/link';
import Image from 'next/image';

const localeMap = { en, zh, fr, de, ar, tr, pt } as const;

// Blog articles data
const blogPosts = [
  {
    id: 'generator-nama-china-indonesia',
    title: 'Generator Nama China: Panduan Lengkap untuk Orang Indonesia',
    excerpt: 'Temukan generator nama China terbaik untuk orang Indonesia. Perbandingan lengkap alat pembuat nama China, tips memilih nama yang tepat, dan rekomendasi platform terpercaya.',
    image: '/images/blog/indonesia/generator-nama-china.png',
    date: '2025-01-15',
    category: 'Indonesian Guide'
  },
  {
    id: 'gamertaggenerator',
    title: 'Gamertag Generator: The Art of Visual Identity in Names',
    excerpt: 'Explore how typography and colors enhance the beauty and meaning of Chinese names, from traditional calligraphy to modern design.',
    image: '/images/blog/typography/typography.png',
    date: '2024-12-20',
    category: 'Design Guide'
  },
  {
    id: 'chinese-names-for-boys',
    title: 'Chinese Names for Boys: Traditional Meanings and Modern Choices',
    excerpt: 'Discover the rich tradition behind Chinese names for boys, from classical literature to modern preferences.',
    image: '/images/blog/boys/maleName.png',
    date: '2024-12-15',
    category: 'Naming Guide'
  },
  {
    id: 'chinese-names-for-girls',
    title: 'Chinese Names for Girls: Beauty, Wisdom, and Cultural Significance',
    excerpt: 'Explore elegant Chinese names for girls that embody grace, intelligence, and cultural heritage.',
    image: '/images/blog/girls/girlName.png',
    date: '2024-12-10',
    category: 'Naming Guide'
  },
  {
    id: 'chinese-name-pronunciation',
    title: 'Mastering Chinese Name Pronunciation: A Complete Guide',
    excerpt: 'Learn how to correctly pronounce Chinese names with our comprehensive pronunciation guide.',
    image: '/images/blog/pronunciation/pronunciation.png',
    date: '2024-12-05',
    category: 'Pronunciation'
  }
];

export default function BlogPage({ params }: { params: { lang: string } }) {
  const t = localeMap[params.lang as keyof typeof localeMap] || en;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Chinese Name <span className="text-red-600 dark:text-red-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Explore the rich world of Chinese names, their meanings, cultural significance, and pronunciation guides.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 bg-gray-100 dark:bg-gray-700">
                  <Image
                    src={post.image}
                    alt={`${post.title} - Learn about Chinese names, meanings and cultural significance`}
                    fill
                    className="object-cover"
                    priority={post.id === 'chinese-names-for-boys'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/${params.lang}/blog/${post.id}`}
                    className="inline-flex items-center text-red-600 dark:text-red-400 font-medium hover:text-red-700 dark:hover:text-red-300 transition-colors"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                      <path d="M5 12h14"/>
                      <path d="m12 5 7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Get the latest insights about Chinese names, cultural traditions, and naming tips delivered to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 