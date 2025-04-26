import { Metadata } from "next"

export const metadata: Metadata = {
  title: "GDPR Compliance - Chinese Name Maker",
  description: "Information about our GDPR compliance and your data protection rights.",
}

export default function GDPRCompliance() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-24">
        <article className="prose prose-gray dark:prose-invert max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">GDPR Compliance</h1>
          
          <p className="text-lg mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-12">
            <h2>Your Rights Under GDPR</h2>
            <p>Under the GDPR, you have several rights regarding your personal data:</p>
            <ul>
              <li>The right to access your personal data</li>
              <li>The right to rectification of inaccurate personal data</li>
              <li>The right to erasure of your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to processing of your personal data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Data Protection</h2>
            <p>
              We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
            </p>
            <ul>
              <li>Encryption of personal data where appropriate</li>
              <li>Regular security assessments</li>
              <li>Secure data storage and processing</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Data Processing</h2>
            <p>
              We process personal data only for the purposes explicitly stated in our Privacy Policy. We ensure that our data processing activities comply with GDPR principles of:
            </p>
            <ul>
              <li>Lawfulness, fairness, and transparency</li>
              <li>Purpose limitation</li>
              <li>Data minimization</li>
              <li>Accuracy</li>
              <li>Storage limitation</li>
              <li>Integrity and confidentiality</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2>Contact Us</h2>
            <p>
              For any GDPR-related inquiries or to exercise your rights, please contact us at:{" "}
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