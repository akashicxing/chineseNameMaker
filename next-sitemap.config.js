const fs = require('fs');
const path = require('path');

// 获取所有语言
const localesDir = path.join(__dirname, 'locales');
const languages = fs.readdirSync(localesDir).filter(f => fs.statSync(path.join(localesDir, f)).isDirectory());

// 获取所有页面
const appLangDir = path.join(__dirname, 'app', '[lang]');
const staticPages = fs.readdirSync(appLangDir).filter(f => fs.statSync(path.join(appLangDir, f)).isDirectory());

// 生成所有多语言页面路径
const allPaths = [];
for (const lang of languages) {
  // 根页面
  allPaths.push({ loc: `/${lang}`, changefreq: 'weekly', priority: 1.0 });
  for (const page of staticPages) {
    // 检查是否有 page.tsx
    const pageFile = path.join(appLangDir, page, 'page.tsx');
    if (fs.existsSync(pageFile)) {
      allPaths.push({ loc: `/${lang}/${page}`, changefreq: 'monthly', priority: 0.7 });
    }
  }
}

module.exports = {
  siteUrl: 'https://chinesenamegenerator.online',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/api/*'],
  additionalPaths: async (config) => allPaths,
}; 