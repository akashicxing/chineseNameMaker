import { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Chinese Male Names: Tradition, Meaning, and Modern Approaches",
  description: "An in-depth exploration of Chinese male naming traditions, including historical significance, character elements, and modern innovations.",
}

export default function ChineseMaleNames() {
  return (
    <div className="container mx-auto px-4">
      <article className="prose prose-gray dark:prose-invert max-w-4xl mx-auto mt-24 mb-16">
        <h1 className="text-4xl font-bold mb-8">Chinese Male Names: Tradition, Meaning, and Modern Approaches</h1>
        
        {/* Hero Image Section */}
        <div className="relative w-full h-[500px] my-8 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src="/images/blog/boys/maleName.png"
            alt="Traditional Chinese male figure in traditional costume"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <div className="max-w-2xl">
              <p className="text-lg font-medium mb-2 text-red-200">中文名字的传统与现代</p>
              <p className="text-sm opacity-90">
                探索中国男性名字背后的文化意义、历史渊源与现代创新
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12">
          <p className="text-lg mb-8 leading-relaxed text-gray-700 dark:text-gray-300">
            在中国文化中，男孩的名字承载着家族期望、文化价值观和对未来的憧憬。与西方常常注重个人喜好或家族传统的命名方式不同，中国男性的名字是经过精心设计的字符组合，旨在影响命运并塑造品格。本指南探讨了中国男性命名传统独特的方面。
          </p>
          <p>
            👉 Want a meaningful Chinese name for yourself? <a href="/chinesenamegenerator" className="text-red-600 underline hover:text-red-800">Try our free name generator here</a>.
          </p>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">The Distinctive Nature of Chinese Male Names</h2>
        <p>While female names in Chinese culture often emphasize beauty, grace, and gentleness, male names traditionally focus on different qualities:</p>
        <blockquote className="my-6 border-l-4 border-red-500 pl-4 italic bg-gray-50 dark:bg-gray-800/50 p-4 rounded-r-lg">
          <p className="my-4">"名正言顺，名不正则言不顺" ("míng zhèng yán shùn, míng bù zhèng zé yán bù shùn") – "When the name is correct, speech flows; when the name is incorrect, speech falters." For boys especially, a properly chosen name was believed to set them on the right path in life.</p>
        </blockquote>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Historical Significance of Male Names</h2>
        <p>Historically, Chinese men could have several names throughout their lifetime:</p>
        <div className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl my-6">
          <ol className="list-decimal pl-6 mt-2 space-y-3">
            <li><strong>Birth Name (名 - míng)</strong> - The formal name given at birth</li>
            <li><strong>Courtesy Name (字 - zì)</strong> - A name taken at adulthood (traditionally age 20)</li>
            <li><strong>Style Name (号 - hào)</strong> - A self-selected name used by scholars and artists</li>
          </ol>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-400">Famous historical example: The renowned poet Li Bai ("李白" - "Lǐ Bái") was also known by his courtesy name "太白" ("Tài Bái") and various style names.</p>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Masculine Character Elements</h2>
        <p>Chinese male names often incorporate specific elements that convey masculine qualities:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Nature Elements</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-2xl">山</span>
                <span className="text-gray-600 dark:text-gray-400">("shān" - mountain)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl">岳</span>
                <span className="text-gray-600 dark:text-gray-400">("yuè" - peak)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl">峰</span>
                <span className="text-gray-600 dark:text-gray-400">("fēng" - summit)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Metal Elements</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-2xl">钢</span>
                <span className="text-gray-600 dark:text-gray-400">("gāng" - steel)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl">铁</span>
                <span className="text-gray-600 dark:text-gray-400">("tiě" - iron)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl">金</span>
                <span className="text-gray-600 dark:text-gray-400">("jīn" - gold)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Stone Elements</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-2xl">石</span>
                <span className="text-gray-600 dark:text-gray-400">("shí" - stone)</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-2xl">磊</span>
                <span className="text-gray-600 dark:text-gray-400">("lěi" - pile of stones)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-8 my-12">
          <h3 className="text-xl font-semibold mb-6 text-red-600 dark:text-red-400">Animals Symbolizing Strength</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <span className="text-4xl block mb-2">龙</span>
              <p className="font-semibold">Dragon (lóng)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">The ultimate symbol of male power</p>
            </div>
            <div className="text-center">
              <span className="text-4xl block mb-2">虎</span>
              <p className="font-semibold">Tiger (hǔ)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Courage and protection</p>
            </div>
            <div className="text-center">
              <span className="text-4xl block mb-2">鹏</span>
              <p className="font-semibold">Eagle (péng)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Ambition and vision</p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-semibold mt-12 mb-6">Military and Leadership Terms</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <p className="text-2xl mb-2">令</p>
            <p className="font-medium">Command (lìng)</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <p className="text-2xl mb-2">将</p>
            <p className="font-medium">General (jiàng)</p>
          </div>
          <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
            <p className="text-2xl mb-2">胜</p>
            <p className="font-medium">Victory (shèng)</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-8">Naming Patterns Unique to Boys</h2>
        
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 my-8">
          <h3 className="text-xl font-semibold mb-4">Generation Poem System (辈分诗)</h3>
          <p className="mb-4">Many families have a poem where each character represents a generation. All male cousins of the same generation share the same character in their names.</p>
          <div className="border-l-4 border-red-500 pl-4 my-4">
            <p className="text-lg mb-2">Example: Mao Family Poem</p>
            <p className="text-2xl mb-2">润泽南国</p>
            <p className="text-gray-600 dark:text-gray-400">Mao Zedong's son: 毛润之 (Máo Rùn Zhī)</p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Numerical Significance</h2>
        <p>Boys' names sometimes incorporate numbers with cultural significance:</p>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm my-6">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <li className="text-center">
              <span className="text-3xl block mb-2">五</span>
              <p className="font-semibold">Five (wǔ)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Representing the Five Elements</p>
            </li>
            <li className="text-center">
              <span className="text-3xl block mb-2">八</span>
              <p className="font-semibold">Eight (bā)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Considered extremely lucky and prosperous</p>
            </li>
            <li className="text-center">
              <span className="text-3xl block mb-2">九</span>
              <p className="font-semibold">Nine (jiǔ)</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">Associated with longevity and imperial power</p>
            </li>
          </ul>
        </div>

        <h2 className="text-2xl font-semibold mt-12 mb-4">Modern Innovations in Male Naming</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">Contemporary parents are breaking traditional molds while maintaining cultural roots:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Cross-Cultural Compatibility</h3>
            <p className="mb-4">Names that work well internationally while maintaining Chinese identity:</p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-2xl">安东</span>
                <div>
                  <p className="font-medium">Ān Dōng</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Sounds similar to "Anton"</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">明</span>
                <div>
                  <p className="font-medium">Míng</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Short, easy to pronounce</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-400">Reviving Ancient Characters</h3>
            <p className="mb-4">Some parents are rediscovering rare classical characters:</p>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <span className="text-2xl">玄</span>
                <div>
                  <p className="font-medium">xuán</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Profound, mysterious</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">澄</span>
                <div>
                  <p className="font-medium">chéng</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Clear, pure</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-2xl">翊</span>
                <div>
                  <p className="font-medium">yì</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Assist, support</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-6">Practical Guide for Foreigners</h2>
        <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-8 my-8">
          <h3 className="text-xl font-semibold mb-6">Compatibility with Original Name</h3>
          <p className="mb-6">Consider phonetic similarity to your original name:</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-2xl">迈克</span>
                <p className="font-medium">Mài Kè</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Phonetic match for "Michael"</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-2xl">威廉</span>
                <p className="font-medium">Wēi Lián</p>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Phonetic match for "William"</p>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
            <p className="mb-4">Then add meaningful characters that reflect personal qualities:</p>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-6">
              <div className="flex items-center space-x-4 mb-3">
                <span className="text-2xl">迈克·强生</span>
                <p className="font-medium">Mài Kè Qiáng Shēng</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">
                Michael Johnson → 强生 suggests "strong life"
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-semibold mt-16 mb-8">Conclusion</h2>
        <div className="space-y-6 text-gray-700 dark:text-gray-300">
          <p>Chinese male names represent a fascinating intersection of linguistic art, cultural values, and family aspirations. Unlike female names that often emphasize beauty and grace, male names typically focus on strength, achievement, and moral character.</p>
          
          <p>Whether you're naming a son, choosing a Chinese name for yourself, or simply appreciating this cultural tradition, understanding the distinct patterns and meanings behind Chinese male names offers insight into Chinese values and the evolving nature of gender expectations in Chinese society.</p>
          
          <p>A well-chosen Chinese male name is more than a label—it's a lifelong companion that can inspire, guide, and connect a boy to his cultural heritage while positioning him for success in the modern world.</p>
        </div>
      </article>
    </div>
  )
} 