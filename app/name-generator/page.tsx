import Image from "next/image"

export default function NameGenerator() {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute -right-1/4 top-0 w-2/3 h-full opacity-[0.08] pointer-events-none rotate-180">
          <Image
            src="/images/blog/中国国画鱼.png"
            alt="Traditional Chinese art background"
            fill
            className="object-contain"
            priority
          />
        </div>
        <div className="absolute -left-1/4 bottom-0 w-2/3 h-full opacity-[0.08] pointer-events-none">
          <Image
            src="/images/blog/中国国画鱼.png"
            alt="Traditional Chinese art background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="container relative mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-red-50 text-red-500 font-medium text-sm">
            Free Name Generator
          </div>

          <h1 className="text-5xl font-bold tracking-tight mb-4">
            Your Meaningful
            <span className="block text-red-600 my-2">Chinese Name page.tsx</span>
            <span className="text-slate-700">Crafted with Tradition</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-12">
            Get your free personalized Chinese name that reflects your identity through
            the lens of 5,000 years of culture and tradition.
          </p>

          <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-lg p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
                />
              </div>

              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white">
                <option value="">Select Original Name Language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
              </select>

              <input
                type="date"
                placeholder="Select date of birth"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white"
              />

              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500 bg-white">
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Get My Free Chinese Name
              </button>
            </form>

            <p className="text-sm text-muted-foreground mt-4">
              No credit card required • Instant name generation • Premium features available
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 