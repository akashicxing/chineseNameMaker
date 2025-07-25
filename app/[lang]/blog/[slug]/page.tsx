"use client";

import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import en from '@/locales/en/index';
import zh from '@/locales/zh/index';
import fr from '@/locales/fr/index';
import de from '@/locales/de/index';
import ar from '@/locales/ar/index';
import tr from '@/locales/tr/index';
import pt from '@/locales/pt/index';

const localeMap = { en, zh, fr, de, ar, tr, pt } as const;

// Blog articles data
const blogArticles = {
  'chinese-names-for-boys': {
    title: 'Chinese Names for Boys: Traditional Meanings and Modern Choices',
    excerpt: 'Discover the rich tradition behind Chinese names for boys, from classical literature to modern preferences.',
    image: '/images/blog/boys/maleName.png',
    date: '2024-12-15',
    category: 'Naming Guide',
    readTime: '8 min read',
    content: `
      <h2>In-Depth Analysis of Traditional Chinese Boys' Names</h2>
      
      <p>Chinese boys' names carry profound cultural heritage and parents' beautiful expectations. From classical literature to modern choices, let's explore this rich naming tradition together.</p>
      
      <h3>1. Boys' Names from Classical Literature</h3>
      
      <p>Chinese classical literature provides abundant inspiration for naming boys:</p>
      
      <ul>
        <li><strong>子轩 (Zǐxuān)</strong> - "子" represents a person of high moral character, "轩" signifies elegance and dignity</li>
        <li><strong>文昊 (Wénhào)</strong> - "文" symbolizes literary talent, "昊" represents the vast sky</li>
        <li><strong>明哲 (Míngzhé)</strong> - "明" means intelligent, "哲" represents wisdom</li>
        <li><strong>俊杰 (Jùnjié)</strong> - "俊" means handsome, "杰" signifies outstanding</li>
      </ul>
      
      <h3>2. Modern Popular Boys' Names</h3>
      
      <p>Modern parents often combine traditional culture with contemporary characteristics when naming boys:</p>
      
      <ul>
        <li><strong>浩然 (Hàorán)</strong> - Represents righteousness and integrity</li>
        <li><strong>宇航 (Yǔháng)</strong> - Symbolizes exploring the universe and pursuing dreams</li>
        <li><strong>智轩 (Zhìxuān)</strong> - Emphasizes both wisdom and character</li>
        <li><strong>天翊 (Tiānyì)</strong> - Signifies natural talent and soaring high</li>
      </ul>
      
      <h3>3. Cultural Considerations in Naming</h3>
      
      <p>When choosing Chinese names for boys, consider these cultural factors:</p>
      
      <h4>Meaning and Expectations</h4>
      <p>Names should reflect parents' expectations and blessings for their children, such as academic success, noble character, and good health.</p>
      
      <h4>Phonetic Harmony</h4>
      <p>Good names should be pleasant to pronounce, harmonious in sound, and avoid unfortunate homonyms.</p>
      
      <h4>Visual Aesthetics</h4>
      <p>The visual beauty of Chinese characters is also important, with moderate strokes and balanced structure.</p>
      
      <h3>4. Common Naming Mistakes to Avoid</h3>
      
      <ul>
        <li>Avoid using obscure characters that affect daily use</li>
        <li>Be careful to avoid unfavorable homonyms</li>
        <li>Don't pursue overly unconventional choices</li>
        <li>Consider the name's suitability across different life stages</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>A good Chinese boys' name should have both deep cultural connotations and contemporary relevance, being both pleasant to hear and meaningful. We hope this article provides valuable reference for choosing suitable Chinese boys' names.</p>
    `
  },
  'chinese-names-for-girls': {
    title: 'Chinese Names for Girls: Beauty, Wisdom, and Cultural Significance',
    excerpt: 'Explore elegant Chinese names for girls that embody grace, intelligence, and cultural heritage.',
    image: '/images/blog/girls/girlName.png', 
    date: '2024-12-10',
    category: 'Naming Guide',
    readTime: '7 min read',
    content: `
      <h2>The Cultural Charm of Elegant Chinese Girls' Names</h2>
      
      <p>Chinese girls' names are like poetry and painting, carrying expectations for beautiful qualities and a happy life. Let's explore these names full of wisdom and beauty together.</p>
      
      <h3>1. Girls' Names from Classical Poetry</h3>
      
      <p>Chinese classical poetry provides beautiful inspiration for naming girls:</p>
      
      <ul>
        <li><strong>雨桐 (Yǔtóng)</strong> - Derived from "梧桐更兼细雨" (sycamore with gentle rain), symbolizing elegance and refinement</li>
        <li><strong>婉清 (Wǎnqīng)</strong> - "婉" means gentle, "清" represents purity</li>
        <li><strong>诗涵 (Shīhán)</strong> - Poetic and rich in connotation</li>
        <li><strong>语嫣 (Yǔyān)</strong> - Speaks with charm, beautiful and captivating</li>
      </ul>
      
      <h3>2. Modern Elegant Girls' Names</h3>
      
      <p>Modern girls' names emphasize both inner and outer beauty:</p>
      
      <ul>
        <li><strong>思琪 (Sīqí)</strong> - Quick thinking, precious as beautiful jade</li>
        <li><strong>梓萱 (Zǐxuān)</strong> - Vibrant and elegantly noble</li>
        <li><strong>欣怡 (Xīnyí)</strong> - Joyful heart, contentment</li>
        <li><strong>韵涵 (Yùnhán)</strong> - Graceful and meaningful</li>
      </ul>
      
      <h3>3. Aesthetic Principles for Naming Girls</h3>
      
      <h4>Balance of Gentleness and Strength</h4>
      <p>Modern girls' names should reflect feminine gentleness while also containing inner strength and wisdom.</p>
      
      <h4>Deep Cultural Heritage</h4>
      <p>Good girls' names should have profound cultural foundation, embodying the essence of Chinese culture.</p>
      
      <h4>Positive Meaning</h4>
      <p>Names should convey positive energy and embody wishes for a child's bright future.</p>
      
      <h3>4. Common Types of Girls' Names</h3>
      
      <ul>
        <li><strong>Floral Type</strong>: Like 梅 (plum), 兰 (orchid), 竹 (bamboo), 菊 (chrysanthemum), symbolizing noble character</li>
        <li><strong>Precious Stone Type</strong>: Like 琪 (jade), 瑶 (precious jade), 珺 (beautiful jade), meaning precious and beautiful</li>
        <li><strong>Virtue Type</strong>: Like 慧 (wisdom), 贤 (virtue), 淑 (gentle), emphasizing moral cultivation</li>
        <li><strong>Artistic Type</strong>: Like 诗 (poetry), 琴 (music), 书 (calligraphy), 画 (painting), highlighting talent</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>Choosing a beautiful Chinese name for a girl is giving her the first precious gift of her life. May every girl have a name that is both beautiful and meaningful, accompanying her healthy and happy growth.</p>
    `
  },
  'chinese-name-pronunciation': {
    title: 'Mastering Chinese Name Pronunciation: A Complete Guide',
    excerpt: 'Learn how to correctly pronounce Chinese names with our comprehensive pronunciation guide.',
    image: '/images/blog/pronunciation/pronunciation.png',
    date: '2024-12-05', 
    category: 'Pronunciation',
    readTime: '10 min read',
    content: `
      <h2>Complete Guide to Mastering Chinese Name Pronunciation</h2>
      
      <p>Correctly pronouncing Chinese names is an important way to show cultural respect. This guide will help you master the basic techniques and rules for Chinese name pronunciation.</p>
      
      <h3>1. Pinyin System Basics</h3>
      
      <p>Pinyin is an essential tool for learning Chinese pronunciation:</p>
      
      <h4>Consonants (Initials)</h4>
      <ul>
        <li><strong>b, p, m, f</strong> - Similar to English pronunciation</li>
        <li><strong>d, t, n, l</strong> - Tip-of-tongue sounds</li>
        <li><strong>g, k, h</strong> - Back-of-tongue sounds</li>
        <li><strong>j, q, x</strong> - Blade-of-tongue sounds (more difficult to master)</li>
        <li><strong>zh, ch, sh, r</strong> - Retroflex sounds</li>
        <li><strong>z, c, s</strong> - Flat-tongue sounds</li>
      </ul>
      
      <h4>Vowels (Finals)</h4>
      <ul>
        <li><strong>a</strong> - Like the 'a' in English "father"</li>
        <li><strong>o</strong> - Like the 'o' in English "more"</li>
        <li><strong>e</strong> - Special sound, between "er" and "uh"</li>
        <li><strong>i</strong> - Like 'ee' in English "see"</li>
        <li><strong>u</strong> - Like 'oo' in English "too"</li>
        <li><strong>ü</strong> - Rounded sound, similar to French "tu"</li>
      </ul>
      
      <h3>2. Four-Tone System</h3>
      
      <p>Chinese is a tonal language with four basic tones:</p>
      
      <ul>
        <li><strong>First Tone (High Level)</strong>: ā - Flat tone, like "妈" (mā)</li>
        <li><strong>Second Tone (Rising)</strong>: á - Rising tone, like "麻" (má)</li>
        <li><strong>Third Tone (Falling-Rising)</strong>: ǎ - Dip tone, like "马" (mǎ)</li>
        <li><strong>Fourth Tone (Falling)</strong>: à - Falling tone, like "骂" (mà)</li>
      </ul>
      
      <h3>3. Common Chinese Name Pronunciation Examples</h3>
      
      <h4>Boys' Names</h4>
      <ul>
        <li><strong>王伟 (Wáng Wěi)</strong> - "Wang" + "Way"</li>
        <li><strong>李明 (Lǐ Míng)</strong> - "Lee" + "Ming"</li>
        <li><strong>张强 (Zhāng Qiáng)</strong> - "Zhang" + "Chyang"</li>
        <li><strong>刘峰 (Liú Fēng)</strong> - "Lyo" + "Fung"</li>
      </ul>
      
      <h4>Girls' Names</h4>
      <ul>
        <li><strong>李莉 (Lǐ Lì)</strong> - "Lee" + "Lee" (different tones)</li>
        <li><strong>王静 (Wáng Jìng)</strong> - "Wang" + "Jing"</li>
        <li><strong>张丽 (Zhāng Lì)</strong> - "Zhang" + "Lee"</li>
        <li><strong>刘雪 (Liú Xuě)</strong> - "Lyo" + "Shwe"</li>
      </ul>
      
      <h3>4. Pronunciation Techniques and Practice</h3>
      
      <h4>Listening Practice</h4>
      <p>Listen to Chinese audio materials frequently to develop sensitivity to Chinese phonetics.</p>
      
      <h4>Imitation Practice</h4>
      <p>Practice repeatedly with audio, paying attention to tonal changes.</p>
      
      <h4>Recording Comparison</h4>
      <p>Record your own pronunciation and compare it with standard pronunciation.</p>
      
      <h3>5. Common Pronunciation Errors and Corrections</h3>
      
      <ul>
        <li><strong>Tone Confusion</strong>: Pay special attention to tone distinctions during practice</li>
        <li><strong>Incorrect Retroflex Sounds</strong>: zh, ch, sh require tongue tip curling upward</li>
        <li><strong>Front/Back Nasal Confusion</strong>: Note the difference between an/ang, en/eng</li>
        <li><strong>Neutral Tone Processing</strong>: Some characters in names should be pronounced in neutral tone</li>
      </ul>
      
      <h3>6. Practical Pronunciation Tools</h3>
      
      <ul>
        <li>Online pinyin conversion tools</li>
        <li>Chinese pronunciation apps</li>
        <li>Speech recognition software</li>
        <li>Professional Chinese teacher guidance</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>Learning Chinese name pronunciation requires time and practice, but it's an important way to show respect for Chinese culture. Through consistent practice and proper methods, you will definitely master accurate Chinese name pronunciation.</p>
    `
  },
  'gamertaggenerator': {
    title: 'Ultimate Gamertag Generator Guide',
    excerpt: 'Create the perfect gaming identity with professional gamertag generation tools and AI-powered naming solutions.',
    image: '/images/blog/typography/typography.png',
    date: '2024-12-20',
    category: 'Design Guide',
    readTime: '12 min read',
    content: `
      <h2>🎮 <a href="https://www.gamertaggenerator.games/" target="_blank" rel="noopener noreferrer" style="color: #3498db; text-decoration: none;">Ultimate Gamertag Generator Guide</a></h2>
      
      <p>Creating the perfect gaming identity starts with the right gamertag. Our comprehensive guide explores professional <a href="https://www.gamertaggenerator.games/" target="_blank" rel="noopener noreferrer" style="color: #3498db;">gamertag generation tools</a> and AI-powered naming solutions to help you stand out in the gaming community.</p>
      
      <h3>🎯 What is a Gamertag Generator?</h3>
      
      <p>A gamertag generator is an online tool designed to create unique, fun, and creative usernames for gaming platforms like Xbox, PlayStation, Steam, and more. These tools help gamers overcome the challenge of finding available usernames while ensuring they reflect their gaming personality and style.</p>
      
      <p>Modern gamertag generators use advanced algorithms to create catchy and memorable usernames from billions of possible combinations of names, words, and phrases, ensuring your gaming identity stands out among fellow players.</p>
      
      <h3>🏆 Top Gamertag Generator Tools</h3>
      
      <h4>🎮 <a href="https://www.gamertaggenerator.games/" target="_blank" rel="noopener noreferrer" style="color: #3498db;">Gamertag Generator Games</a></h4>
      <ul>
        <li><strong>Features:</strong> AI-powered generation with smart algorithm technology</li>
        <li><strong>Best for:</strong> Creating personalized gaming names for PS5, Steam, Xbox & all major platforms</li>
        <li><strong>Unique Selling Point:</strong> Multi-platform compatibility with instant availability checking</li>
        <li><strong>User Experience:</strong> Simple 4-step process from style selection to final gamertag</li>
      </ul>
      
      <h4>🎨 UserNameGenerator.com</h4>
      <ul>
        <li><strong>Features:</strong> Comprehensive gamertag generator with input preferences</li>
        <li><strong>Best for:</strong> Finding gaming names that match your personal style</li>
        <li><strong>Strength:</strong> Style matching capabilities and preference customization</li>
      </ul>
      
      <h4>⚡ Plarium Gamertag Generator</h4>
      <ul>
        <li><strong>Features:</strong> Free tool with creative alter-ego suggestions</li>
        <li><strong>Best for:</strong> Standing out among players with catchy tags</li>
        <li><strong>Strength:</strong> Random generation with creative personality matching</li>
      </ul>
      
      <h3>🌈 Color Psychology in Chinese Name Design</h3>
      
      <p>Colors play a crucial role in Chinese culture and can significantly impact how names are perceived and remembered:</p>
      
      <h4>🔴 Red (红色 Hóngsè)</h4>
      <ul>
        <li><strong>Cultural Meaning:</strong> Good fortune, joy, prosperity, celebration</li>
        <li><strong>Design Application:</strong> Perfect for wedding invitations, New Year cards, festive occasions</li>
        <li><strong>Name Enhancement:</strong> Amplifies the positive energy in names like 福建 (Fújiàn), 喜悦 (Xǐyuè)</li>
        <li><strong>Modern Usage:</strong> Corporate logos, brand names, social media profiles</li>
      </ul>
      
      <h4>🟡 Gold/Yellow (金色 Jīnsè)</h4>
      <ul>
        <li><strong>Cultural Meaning:</strong> Imperial power, wealth, wisdom, honor</li>
        <li><strong>Design Application:</strong> Luxury branding, high-end certificates, formal presentations</li>
        <li><strong>Name Enhancement:</strong> Elevates regal names like 君豪 (Jūnháo), 金龙 (Jīnlóng)</li>
        <li><strong>Modern Usage:</strong> Premium services, luxury products, exclusive memberships</li>
      </ul>
      
      <h4>🔵 Blue (蓝色 Lánsè)</h4>
      <ul>
        <li><strong>Cultural Meaning:</strong> Tranquility, wisdom, reliability, depth</li>
        <li><strong>Design Application:</strong> Professional contexts, technology brands, educational materials</li>
        <li><strong>Name Enhancement:</strong> Complements intellectual names like 智慧 (Zhìhuì), 博学 (Bóxué)</li>
        <li><strong>Modern Usage:</strong> Tech companies, academic institutions, healthcare</li>
      </ul>
      
      <h4>🟢 Green (绿色 Lǜsè)</h4>
      <ul>
        <li><strong>Cultural Meaning:</strong> Growth, harmony, nature, renewal</li>
        <li><strong>Design Application:</strong> Environmental brands, health products, organic foods</li>
        <li><strong>Name Enhancement:</strong> Perfect for nature-inspired names like 林风 (Línfēng), 青山 (Qīngshān)</li>
        <li><strong>Modern Usage:</strong> Sustainability projects, wellness brands, eco-friendly products</li>
      </ul>
      
      <h3>🎯 Modern Typography Trends for Chinese Names</h3>
      
      <h4>Minimalist Design</h4>
      <ul>
        <li><strong>Key Features:</strong> Clean lines, ample white space, simple color schemes</li>
        <li><strong>Font Choices:</strong> Modern sans-serif Chinese fonts like PingFang, Noto Sans CJK</li>
        <li><strong>Color Palette:</strong> Monochromatic or limited color schemes</li>
        <li><strong>Applications:</strong> Tech startups, modern business cards, app interfaces</li>
      </ul>
      
      <h4>Gradient Effects</h4>
      <ul>
        <li><strong>Visual Impact:</strong> Creates depth and modern appeal</li>
        <li><strong>Popular Combinations:</strong> Blue to purple, gold to orange, red to pink</li>
        <li><strong>Best Practices:</strong> Use subtle gradients that don't compromise readability</li>
        <li><strong>Applications:</strong> Social media branding, digital presentations, modern logos</li>
      </ul>
      
      <h4>Mixed Script Styling</h4>
      <ul>
        <li><strong>Concept:</strong> Combining traditional calligraphy with modern typography</li>
        <li><strong>Implementation:</strong> Traditional Chinese characters with modern English fonts</li>
        <li><strong>Cultural Bridge:</strong> Appeals to both traditional and contemporary audiences</li>
        <li><strong>Applications:</strong> International brands, cultural organizations, modern art</li>
      </ul>
      
      <h3>⚡ Digital Design Best Practices</h3>
      
      <h4>🖥️ Screen Readability</h4>
      <ul>
        <li><strong>Font Size:</strong> Minimum 14px for body text, 24px+ for headlines</li>
        <li><strong>Contrast Ratio:</strong> Maintain at least 4.5:1 ratio for accessibility</li>
        <li><strong>Character Spacing:</strong> Allow adequate space between complex characters</li>
        <li><strong>Line Height:</strong> Use 1.4-1.6 line height for optimal readability</li>
      </ul>
      
      <h4>📱 Mobile Optimization</h4>
      <ul>
        <li><strong>Responsive Typography:</strong> Scale fonts appropriately for different screen sizes</li>
        <li><strong>Touch Targets:</strong> Ensure interactive text elements are thumb-friendly</li>
        <li><strong>Loading Speed:</strong> Optimize font files for faster mobile loading</li>
        <li><strong>Cross-Platform:</strong> Test on various devices and operating systems</li>
      </ul>
      
      <h3>🎨 Creative Applications and Tools</h3>
      
      <h4>Professional Design Software</h4>
      <ul>
        <li><strong>Adobe Creative Suite:</strong> Photoshop, Illustrator, InDesign for comprehensive design</li>
        <li><strong>Sketch:</strong> Perfect for UI/UX design with Chinese typography</li>
        <li><strong>Figma:</strong> Collaborative design with excellent font support</li>
        <li><strong>Canva:</strong> User-friendly for non-designers with Chinese font options</li>
      </ul>
      
      <h4>Online Font Resources</h4>
      <ul>
        <li><strong>Google Fonts:</strong> Free Noto Sans CJK and other Chinese fonts</li>
        <li><strong>Adobe Fonts:</strong> Premium Chinese typography collection</li>
        <li><strong>Font Awesome:</strong> Icons that complement Chinese text design</li>
        <li><strong>DaFont:</strong> Free decorative Chinese fonts for creative projects</li>
        <li><strong><a href="https://www.gamertaggenerator.games/" target="_blank" rel="noopener noreferrer">Gamertag Generator</a>:</strong> AI-powered creative naming tools that inspire modern typography approaches</li>
      </ul>
      
      <h3>🏆 Successful Case Studies</h3>
      
      <h4>Luxury Brand Integration</h4>
      <p>International luxury brands like Louis Vuitton and Cartier have masterfully integrated Chinese typography into their branding, using elegant gold lettering on dark backgrounds to convey exclusivity while respecting Chinese aesthetic traditions.</p>
      
      <h4>Tech Company Innovation</h4>
      <p>Companies like Xiaomi and ByteDance have revolutionized Chinese typography in digital spaces, combining modern sans-serif fonts with traditional color schemes to create brands that feel both innovative and culturally grounded. Similarly, modern AI-powered naming platforms like <a href="https://www.gamertaggenerator.games/" target="_blank" rel="noopener noreferrer">Gamertag Generator</a> demonstrate how advanced algorithms can create visually appealing and culturally sensitive name presentations across digital platforms.</p>
      
      <h4>Cultural Institution Excellence</h4>
      <p>Museums and cultural centers worldwide use sophisticated combinations of traditional calligraphy styles with contemporary color palettes to make Chinese names and concepts accessible to global audiences.</p>
      
      <h3>💡 Practical Tips for Implementation</h3>
      
      <ul>
        <li><strong>Start Simple:</strong> Begin with classic combinations like black text on white backgrounds</li>
        <li><strong>Consider Context:</strong> Match your typography choices to the intended use and audience</li>
        <li><strong>Test Extensively:</strong> Check how your designs look across different devices and platforms</li>
        <li><strong>Respect Tradition:</strong> When in doubt, lean toward traditional and conservative choices</li>
        <li><strong>Seek Feedback:</strong> Get input from native Chinese speakers about cultural appropriateness</li>
        <li><strong>Stay Updated:</strong> Follow design trends while maintaining cultural sensitivity</li>
      </ul>
      
      <h3>🌟 Future Trends in Chinese Typography</h3>
      
      <p>The future of Chinese name typography is exciting, with emerging trends including:</p>
      
      <ul>
        <li><strong>AI-Generated Calligraphy:</strong> Machine learning creating personalized calligraphy styles</li>
        <li><strong>Interactive Typography:</strong> Names that respond to user interactions with color and motion</li>
        <li><strong>Augmented Reality:</strong> 3D Chinese characters floating in virtual space</li>
        <li><strong>Sustainable Design:</strong> Eco-friendly color palettes and energy-efficient display methods</li>
        <li><strong>Accessibility Focus:</strong> Designs that work for users with visual impairments</li>
      </ul>
      
      <h3>Conclusion</h3>
      
      <p>The art of presenting Chinese names through thoughtful typography and color choices is both a creative challenge and a cultural responsibility. By understanding traditional principles while embracing modern techniques, designers can create visual presentations that honor the beauty and significance of Chinese names while making them accessible and appealing to contemporary audiences.</p>
      
      <p>Whether you're designing a business card, creating a digital profile, or developing a brand identity, remember that every typographic choice you make contributes to how Chinese names are perceived and appreciated in our increasingly connected world.</p>
    `
  }
};

export default function BlogArticlePage({ 
  params 
}: { 
  params: { lang: string; slug: string } 
}) {
  const t = localeMap[params.lang as keyof typeof localeMap] || en;
  const article = blogArticles[params.slug as keyof typeof blogArticles];

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-4">
          {/* Back Link */}
          <Link 
            href={`/${params.lang}/blog`}
            className="inline-flex items-center text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 mb-8 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Article Header */}
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                {article.category}
              </div>
              <span>{article.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              {article.excerpt}
            </p>

            {/* Featured Image */}
            <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-red-600 dark:prose-a:text-red-400 prose-strong:text-gray-900 dark:prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(blogArticles)
                .filter(([slug]) => slug !== params.slug)
                .slice(0, 2)
                .map(([slug, relatedArticle]) => (
                  <Link 
                    key={slug}
                    href={`/${params.lang}/blog/${slug}`}
                    className="bg-white dark:bg-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="relative h-32 mb-4 rounded overflow-hidden">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                      {relatedArticle.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2">
                      {relatedArticle.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 