import { NextRequest, NextResponse } from 'next/server';

// 支持的语言列表
const locales = ['en', 'zh', 'fr', 'de', 'ar', 'tr', 'pt'];
const defaultLocale = 'en';

// 需要重定向的路径
const pathsToRedirect = [
  'features',
  'how-it-works', 
  'testimonials',
  'faq', 
  'blog',
  'pricing',
  'chinesenamegenerator'
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // 检查是否是需要重定向的路径
  const shouldRedirect = pathsToRedirect.some(path => 
    pathname === `/${path}` || pathname.startsWith(`/${path}/`)
  );
  
  if (shouldRedirect) {
    // 从请求头或cookie中获取用户的首选语言
    const acceptLanguage = request.headers.get('accept-language');
    let preferredLocale = defaultLocale;
    
    // 尝试匹配用户的首选语言
    if (acceptLanguage) {
      for (const locale of locales) {
        if (acceptLanguage.includes(locale)) {
          preferredLocale = locale;
          break;
        }
      }
    }
    
    // 重定向到多语言路径
    return NextResponse.redirect(
      new URL(`/${preferredLocale}${pathname}`, request.url)
    );
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * 匹配除了以下开头的所有请求路径:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 