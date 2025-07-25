const fs = require('fs');
const path = require('path');

// 获取所有语言
const localesDir = path.join(__dirname, 'locales');
const languages = fs.readdirSync(localesDir).filter(f => fs.statSync(path.join(localesDir, f)).isDirectory());

// 获取所有页面
const appLangDir = path.join(__dirname, 'app', '[lang]');
const staticPages = fs.readdirSync(appLangDir).filter(f => fs.statSync(path.join(appLangDir, f)).isDirectory());

// 博客文章slug列表
const blogArticles = [
  'chinese-names-for-boys',
  'chinese-names-for-girls', 
  'pronunciation',
  'gamertaggenerator'
];

// 页面优先级配置
const pagePriorities = {
  '': 1.0,                           // 首页
  'chinesenamegenerator': 0.9,       // 主功能页面
  'features': 0.8,                   // 功能介绍
  'how-it-works': 0.8,              // 工作原理
  'blog': 0.7,                      // 博客列表
  'testimonials': 0.6,              // 用户评价
  'faq': 0.6,                       // FAQ
  'pricing': 0.5                    // 定价页面
};

// 页面更新频率配置
const pageChangefreq = {
  '': 'weekly',                      // 首页
  'chinesenamegenerator': 'weekly',  // 主功能页面
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
  
  // 博客文章页面
  for (const articleSlug of blogArticles) {
    allPaths.push({
      loc: `/${lang}/blog/${articleSlug}`,
      changefreq: 'monthly',
      priority: 0.6 * (lang === 'en' ? 1 : 0.9),
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
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  
  // 排除路径
  exclude: [
    '/api/*',
    '/404',
    '/500',
    '/_next/*',
    '/legal/*' // 法律页面优先级较低，可单独处理
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
    ],
    additionalSitemaps: [
      'https://chinesenamegenerator.online/sitemap.xml',
    ],
    transform: async (config, path) => {
      return {
        loc: path,
        changefreq: config.changefreq,
        priority: config.priority,
        lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        alternateRefs: config.alternateRefs ?? [],
      }
    }
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