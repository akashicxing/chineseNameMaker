import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - Chinese Name Maker",
  description: "Our privacy policy outlines how we collect, use, and protect your personal information.",
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <article className="prose prose-gray dark:prose-invert max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <p className="text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2>Introduction</h2>
            <p>
              Chinese Name Maker ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>
          </section>

          <section className="mb-12">
            <h2>Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li>Basic personal information (name, email) when you use our name generation service</li>
              <li>Usage data and preferences to improve our service</li>
              <li>Technical information such as browser type and device information</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide and improve our Chinese name generation service</li>
              <li>Communicate with you about our services</li>
              <li>Analyze and improve our website performance</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, please note that no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-12">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:{" "}
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