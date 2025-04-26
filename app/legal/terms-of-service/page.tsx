import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service - Chinese Name Maker",
  description: "Terms and conditions for using Chinese Name Maker services.",
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <article className="prose prose-gray dark:prose-invert max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <p className="text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using Chinese Name Maker, you accept and agree to be bound by the terms and conditions of this agreement.
            </p>
          </section>

          <section className="mb-12">
            <h2>2. Service Description</h2>
            <p>
              Chinese Name Maker provides a service for generating Chinese names based on various inputs and preferences. While we strive for accuracy and cultural authenticity, we cannot guarantee that all generated names will be perfectly suitable for all contexts.
            </p>
          </section>

          <section className="mb-12">
            <h2>3. User Responsibilities</h2>
            <ul>
              <li>You agree to provide accurate information when using our services</li>
              <li>You will not use our service for any unlawful purposes</li>
              <li>You understand that the generated names are suggestions and the final choice remains your responsibility</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>4. Intellectual Property</h2>
            <p>
              The content, features, and functionality of Chinese Name Maker are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2>5. Disclaimer</h2>
            <p>
              Our service is provided "as is" without any warranties, expressed or implied. We do not guarantee that the service will be uninterrupted or error-free.
            </p>
          </section>

          <section className="mb-12">
            <h2>Contact</h2>
            <p>
              For any questions regarding these terms, please contact us at:{" "}
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