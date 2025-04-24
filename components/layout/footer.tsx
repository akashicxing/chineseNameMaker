export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">NomChinois</h3>
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
                <a href="#features" className="hover:text-white transition-colors">Features</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Chinese Culture Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Naming Traditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Character Dictionary</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Pronunciation Guides</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Business in China</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">GDPR Compliance</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {currentYear} NomChinois. All rights reserved by akashicxing.</p>
          <div className="mt-4 md:mt-0">
            <span className="text-sm">Available in:</span>
            <div className="flex space-x-4 mt-2">
              <a href="#" className="hover:text-white transition-colors">English</a>
              <a href="#" className="hover:text-white transition-colors">Français</a>
              <a href="#" className="hover:text-white transition-colors">Español</a>
              <a href="#" className="hover:text-white transition-colors">Deutsch</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}