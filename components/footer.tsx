"use client";

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">ChineseNameGenerator</h3>
            <p className="mb-4">
              Bridging cultures through personalized Chinese names. Discover your authentic Chinese identity with our expert linguists and cultural specialists.
            </p>
            <p className="mb-2">Contact us:</p>
            <a href="mailto:akashicxing@gmail.com" className="text-red-400 hover:text-red-300 transition-colors">
              akashicxing@gmail.com
            </a>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="hover:text-white transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/chinese-names-for-boys" className="hover:text-white transition-colors">Chinese Names for Boys</Link>
              </li>
              <li>
                <Link href="/blog/chinese-names-for-girls" className="hover:text-white transition-colors">Chinese Names for Girls</Link>
              </li>
              <li>
                <Link href="/blog/chinese-name-pronunciation" className="hover:text-white transition-colors">Chinese Name Pronunciation</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/legal/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/legal/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
              </li>
              <li>
                <Link href="/legal/gdpr" className="hover:text-white transition-colors">GDPR Compliance</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} ChineseNameGenerator. All rights reserved by akashicxing.</p>
          <div className="mt-4 md:mt-0">
            <span className="text-sm">Available in:</span>
            <div className="flex space-x-4 mt-2">
              <button className="hover:text-white transition-colors">English</button>
              <button className="hover:text-white transition-colors">Français</button>
              <button className="hover:text-white transition-colors">Español</button>
              <button className="hover:text-white transition-colors">Deutsch</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}