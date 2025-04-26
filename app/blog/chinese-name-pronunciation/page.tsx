import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Chinese Name Pronunciation: A Comprehensive Guide",
  description: "Master the art of Chinese name pronunciation with our detailed guide covering tones, syllables, and real-world examples.",
}

export default function ChineseNamePronunciation() {
  return (
    <div className="container mx-auto px-4">
      <article className="prose prose-gray dark:prose-invert max-w-4xl mx-auto mt-24 mb-16">
        <h1 className="text-4xl font-bold mb-8">Chinese Name Pronunciation: A Comprehensive Guide</h1>
        
        {/* Hero Image Section */}
        <div className="relative w-full h-[500px] my-8 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/blog/pronunciation/pronunciation.png"
            alt="Chinese calligraphy and pinyin demonstration"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-2xl">
              <p className="text-lg font-medium mb-2">汉字发音艺术</p>
              <p className="text-sm opacity-90">
                The Art of Chinese Character Pronunciation
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-lg mb-8 leading-relaxed">
            Understanding how to pronounce Chinese names correctly is crucial for showing respect and cultural awareness. Unlike English names, Chinese names follow specific tonal patterns that can significantly change their meaning. This guide will help you master the basics of Chinese name pronunciation through real-world examples.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-6">The Four Tones of Chinese Names</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 my-8">
          <p className="mb-6">Chinese is a tonal language with four main tones. Each tone can completely change the meaning of a syllable:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">First Tone (ˉ)</h3>
              <p className="mb-2">High and level</p>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">妈</span>
                <div>
                  <p className="font-medium">mā</p>
                  <p className="text-sm text-gray-600">mother</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Second Tone (ˊ)</h3>
              <p className="mb-2">Rising tone</p>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">明</span>
                <div>
                  <p className="font-medium">míng</p>
                  <p className="text-sm text-gray-600">bright</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Third Tone (ˇ)</h3>
              <p className="mb-2">Falling-rising tone</p>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">李</span>
                <div>
                  <p className="font-medium">lǐ</p>
                  <p className="text-sm text-gray-600">common surname</p>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-red-600">Fourth Tone (ˋ)</h3>
              <p className="mb-2">Falling tone</p>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">大</span>
                <div>
                  <p className="font-medium">dà</p>
                  <p className="text-sm text-gray-600">big</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-6">Real-World Examples</h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Literary Names</h3>
            <p className="mb-4">Some of the most beautiful Chinese names come from classical literature. For example:</p>
            
            <div className="space-y-6">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="text-lg mb-2">The name "朱漫漫" (Zhū Màn Màn)</p>
                <p className="text-gray-600">Inspired by a famous line from Chu Ci (楚辞): "路漫漫其修远兮" meaning "the road ahead is long and arduous." This name carries the profound meaning of perseverance and continuous pursuit of one's goals.</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Famous Historical Names</h3>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-lg mb-2">"屠呦呦" (Tú Yōu Yōu)</p>
                  <p className="text-gray-600">Nobel Prize winner whose name comes from the Book of Songs (诗经): "呦呦鹿鸣，食野之蒿" describing the gentle cry of deer.</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-lg mb-2">"朱自清" (Zhū Zì Qīng)</p>
                  <p className="text-gray-600">Famous writer whose name comes from Chu Ci (楚辞): "宁廉洁正直以自清乎" meaning to maintain one's purity through integrity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-6">Common Pronunciation Patterns</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 my-8">
          <p className="mb-6">Chinese names typically follow these patterns:</p>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Two-Character Given Names</h3>
              <p className="mb-4">Most common in modern Chinese names. Examples:</p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <span className="text-2xl">灵兮</span>
                  <div>
                    <p className="font-medium">Líng Xī</p>
                    <p className="text-sm text-gray-600">Meaning: spiritual and elegant</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-2xl">素华</span>
                  <div>
                    <p className="font-medium">Sù Huá</p>
                    <p className="text-sm text-gray-600">Meaning: pure and magnificent</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Single-Character Given Names</h3>
              <p className="mb-4">Traditional and elegant. Examples:</p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-4">
                  <span className="text-2xl">明</span>
                  <div>
                    <p className="font-medium">Míng</p>
                    <p className="text-sm text-gray-600">Meaning: bright, intelligent</p>
                  </div>
                </li>
                <li className="flex items-center space-x-4">
                  <span className="text-2xl">华</span>
                  <div>
                    <p className="font-medium">Huá</p>
                    <p className="text-sm text-gray-600">Meaning: magnificent, splendid</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-6">Tips for Proper Pronunciation</h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <ol className="list-decimal space-y-4 pl-6">
            <li>
              <strong>Listen carefully to native speakers</strong>: The best way to learn proper pronunciation is to hear how native Chinese speakers say the name.
            </li>
            <li>
              <strong>Practice the tones</strong>: Pay special attention to the tone marks in pinyin and practice each tone separately before combining them.
            </li>
            <li>
              <strong>Break down the syllables</strong>: Chinese names are usually composed of distinct syllables. Practice each syllable separately before combining them.
            </li>
            <li>
              <strong>Use online resources</strong>: Many websites and apps provide audio pronunciations of Chinese characters.
            </li>
          </ol>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 my-12">
          <h2 className="text-2xl font-semibold mb-6">Common Mistakes to Avoid</h2>
          <div className="space-y-4">
            <p>When pronouncing Chinese names, be careful to avoid these common mistakes:</p>
            <ul className="list-disc pl-6 space-y-3">
              <li>Ignoring the tones</li>
              <li>Adding extra syllables</li>
              <li>Using English pronunciation rules</li>
              <li>Mixing up similar-sounding syllables</li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-8">Conclusion</h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>
            Mastering Chinese name pronunciation takes practice, but the effort shows respect for Chinese culture and the individual. Remember that each name carries deep meaning and cultural significance, often drawing from classical literature and traditional values.
          </p>
          <p>
            Whether you're learning to pronounce your own Chinese name or those of others, take the time to understand the tones and practice the correct pronunciation. The appreciation from native Chinese speakers will be worth the effort.
          </p>
        </div>
      </article>
    </div>
  );
} 