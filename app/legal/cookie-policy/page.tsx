import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy - Chinese Name Maker",
  description: "Learn about how we use cookies on Chinese Name Maker.",
}

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <article className="prose prose-gray dark:prose-invert max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          
          <p className="text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
            </p>
          </section>

          <section className="mb-12">
            <h2>How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul>
              <li>To remember your preferences and settings</li>
              <li>To understand how you use our website</li>
              <li>To improve our service based on usage data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Types of Cookies We Use</h2>
            <ul>
              <li>Essential cookies: Required for the website to function properly</li>
              <li>Preference cookies: Remember your settings and preferences</li>
              <li>Analytics cookies: Help us understand how visitors use our website</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "options" or "preferences" menu of your browser.
            </p>
          </section>

          <section className="mb-12">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our Cookie Policy, please contact us at:{" "}
              <a href="mailto:akashicxing@gmail.com" className="text-red-600 dark:text-red-400">
                akashicxing@gmail.com
              </a>
            </p>
          </section>
        </article>
      </div>
    </div>
  )
} 