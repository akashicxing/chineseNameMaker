import Link from "next/link"
import { Metadata } from "next"
import { FaMars, FaVenus, FaMicrophone } from 'react-icons/fa'
import React from 'react'

export const metadata: Metadata = {
  title: "Blog & Resources - Chinese Name Maker",
  description: "Explore the art of Chinese names through our comprehensive guides covering cultural meanings, naming techniques, and pronunciation.",
}

interface BlogPost {
  title: string
  description: string
  date: string
  slug: string
  icon: React.ComponentType<{ className?: string }>
  category: string
  readingTime: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Chinese Names for Boys: Bridging Tradition and Modernity",
    description: "Discover the art of choosing meaningful Chinese names for boys. From ancient wisdom to contemporary trends, learn how to select characters that carry cultural depth while remaining relevant in today's world. Includes popular character choices and combination techniques.",
    date: "2024-04-22",
    slug: "chinese-names-for-boys",
    icon: FaMars,
    category: "Boy Names",
    readingTime: "8 min read"
  },
  {
    title: "Chinese Names for Girls: Elegance and Character",
    description: "Explore the poetic beauty of Chinese names for girls, from classical literature to modern expressions. Learn how to choose characters that convey both grace and strength, with practical guidelines for creating a name that resonates with contemporary values.",
    date: "2024-04-22",
    slug: "chinese-names-for-girls",
    icon: FaVenus,
    category: "Girl Names",
    readingTime: "7 min read"
  },
  {
    title: "Chinese Name Pronunciation: From Tones to Fluency",
    description: "Master the nuances of Chinese name pronunciation with our detailed guide. Through tone diagrams and practical examples, learn how to accurately pronounce Chinese names and understand the common challenges faced by English speakers.",
    date: "2024-04-22",
    slug: "chinese-name-pronunciation",
    icon: FaMicrophone,
    category: "Pronunciation",
    readingTime: "10 min read"
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
            Blog & Resources
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
            Explore the depth of Chinese naming culture and get expert guidance on choosing and pronouncing Chinese names
          </p>
          
          <div className="grid gap-8">
            {blogPosts.map((post: BlogPost) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-red-200 dark:hover:border-red-800"
              >
                <article className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400">
                          {React.createElement(post.icon, { className: "w-4 h-4 mr-2" })}
                          {post.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {post.readingTime}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                        {post.description}
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <time className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </time>
                    <span className="text-red-600 dark:text-red-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Read more →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}