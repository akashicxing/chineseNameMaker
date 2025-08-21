const fs = require('fs');
const path = require('path');

// 获取所有语言
const localesDir = path.join(__dirname, 'locales');
const languages = fs.readdirSync(localesDir).filter(f => fs.statSync(path.join(localesDir, f)).isDirectory());

// 获取所有页面
const appLangDir = path.join(__dirname, 'app', '[lang]');
const staticPages = fs.readdirSync(appLangDir).filter(f => fs.statSync(path.join(appLangDir, f)).isDirectory());

// 博客文章slug列表 - SEO优化版本
const blogArticles = [
  {
    slug: 'generator-nama-china-indonesia',
    priority: 0.9, // 高优先级针对印尼市场
    changefreq: 'weekly' // 更频繁更新
  },
  {
    slug: 'chinese-names-for-boys',
    priority: 0.8,
    changefreq: 'monthly'
  },
  {
    slug: 'chinese-names-for-girls',
    priority: 0.8, 
    changefreq: 'monthly'
  },
  {
    slug: 'chinese-name-pronunciation',
    priority: 0.7,
    changefreq: 'monthly'
  },
  {
    slug: 'gamertaggenerator',
    priority: 0.6,
    changefreq: 'monthly'
  },
  {
    slug: 'chinese-name-culture',
    priority: 0.75,
    changefreq: 'monthly'
  },
  {
    slug: 'traditional-chinese-names',
    priority: 0.75,
    changefreq: 'monthly'
  }
];

// 页面优先级配置 - SEO优化版本
const pagePriorities = {
  '': 1.0,                           // 首页 - 最高优先级
  'chinesenamegenerator': 0.95,      // 主功能页面 - 核心功能
  'generatornamachina': 0.92,      // 印尼专用页面 - 高优先级
  'ai-name-generator': 0.9,          // AI功能页面 - 高价值内容
  'chinese-name-meanings': 0.85,     // 名字含义页面 - 高质量内容
  'free-chinese-names': 0.8,         // 免费名字页面 - 吸引用户
  'features': 0.8,                   // 功能介绍
  'how-it-works': 0.8,              // 工作原理
  'blog': 0.75,                     // 博客列表 - 内容营销
  'testimonials': 0.65,             // 用户评价
  'faq': 0.6,                       // FAQ
  'pricing': 0.5                    // 定价页面
};

// 页面更新频率配置
const pageChangefreq = {
  '': 'weekly',                      // 首页
  'chinesenamegenerator': 'weekly',  // 主功能页面
  'generatornamachina': 'weekly',  // 印尼专用页面 - 高频更新
  'blog': 'weekly',                  // 博客列表
  'features': 'monthly',             // 功能介绍
  'how-it-works': 'monthly',         // 工作原理
  'testimonials': 'monthly',         // 用户评价
  'faq': 'monthly',                  // FAQ
  'pricing': 'monthly'               // 定价页面
};

// 生成所有多语言页面路径
const allPaths = [];

// 添加多语言主页
for (const lang of languages) {
  // 语言首页
  allPaths.push({ 
    loc: `/${lang}`, 
    changefreq: 'weekly', 
    priority: lang === 'en' ? 1.0 : 0.95, // 英文版优先级最高
    lastmod: new Date().toISOString()
  });
  
  // 静态页面
  for (const page of staticPages) {
    const pageFile = path.join(appLangDir, page, 'page.tsx');
    if (fs.existsSync(pageFile)) {
      allPaths.push({ 
        loc: `/${lang}/${page}`, 
        changefreq: pageChangefreq[page] || 'monthly', 
        priority: (pagePriorities[page] || 0.5) * (lang === 'en' ? 1 : 0.9),
        lastmod: new Date().toISOString()
      });
    }
  }
  
  // 博客文章页面 - SEO优化版本
  for (const article of blogArticles) {
    allPaths.push({
      loc: `/${lang}/blog/${article.slug}`,
      changefreq: article.changefreq,
      priority: article.priority * (lang === 'en' ? 1 : lang === 'zh' ? 0.95 : 0.9),
      lastmod: new Date().toISOString()
    });
  }
}

// 添加根目录重定向页面
allPaths.push({
  loc: '/',
  changefreq: 'weekly',
  priority: 1.0,
  lastmod: new Date().toISOString()
});

module.exports = {
  siteUrl: 'https://chinesenamegenerator.online',
  generateRobotsTxt: true,
  generateIndexSitemap: false, // 禁用索引文件，直接生成单个sitemap.xml
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 10000, // 增大限制确保所有URL在一个文件中
  
  // 排除路径 - SEO优化版本
  exclude: [
    '/api/*',
    '/404',
    '/500', 
    '/_next/*',
    '/admin/*',
    '/tmp/*',
    '/private/*',
    '/*.json',
    '/*.xml',
    '/legal/cookie-policy', // 保留主要法律页面，排除次要页面
    '/legal/gdpr'
  ],
  
  // robots.txt配置
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/']
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/']
      }
    ]
  },
  
  // 自定义转换函数
  transform: async (config, path) => {
    // 为博客文章添加特殊处理
    if (path.includes('/blog/') && !path.endsWith('/blog')) {
      return {
        loc: path,
        changefreq: 'monthly',
        priority: 0.6,
        lastmod: new Date().toISOString(),
      }
    }
    
    // 为主要功能页面添加特殊处理
    if (path.includes('/chinesenamegenerator')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    
    return {
      loc: path,
      changefreq: config.changefreq || 'monthly',
      priority: config.priority || 0.7,
      lastmod: new Date().toISOString(),
    }
  },
  
  additionalPaths: async (config) => allPaths,
}; 