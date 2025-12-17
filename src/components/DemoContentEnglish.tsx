import { Globe, Languages, Lock, Zap, Code, Eye, Users, FileText, ArrowRight, RotateCcw, Github, Star } from 'lucide-react';

export function DemoContentEnglish() {
  return (
    <div id="translatable-content" className="min-h-screen bg-[#FFF8F3]">
      {/* Hero Section */}
      <header className="bg-[#FFF8F3] pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
                Translate Websites. Build Your{' '}
                <span className="text-[#FF9A6C]">Future</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Start your translation journey now with our open-source solution designed to break language barriers.
              </p>
              <button className="bg-[#1A2E2C] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#152521] transition-colors flex items-center gap-2 group">
                Start For Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-xl p-8 relative">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-4">
                  <div className="bg-[#FFE6D5] rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-[#FF9A6C]" />
                      <span className="text-gray-700 font-medium">Hello World</span>
                    </div>
                    <span className="text-xs text-gray-500">EN</span>
                  </div>
                  <div className="bg-[#E5E7FF] rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Languages className="w-6 h-6 text-[#8B8FFF]" />
                      <span className="text-gray-700 font-medium">你好世界</span>
                    </div>
                    <span className="text-xs text-gray-500">中文</span>
                  </div>
                  <div className="bg-[#FFE6D5] rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Globe className="w-6 h-6 text-[#FF9A6C]" />
                      <span className="text-gray-700 font-medium">Hola Mundo</span>
                    </div>
                    <span className="text-xs text-gray-500">ES</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#FFE6D5] rounded-2xl flex items-center justify-center shadow-lg rotate-12">
                <Languages className="w-10 h-10 text-[#FF9A6C]" />
              </div>
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-[#FFE6D5] rounded-2xl flex items-center justify-center shadow-lg -rotate-12">
                <Lock className="w-10 h-10 text-[#FF9A6C]" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* About Section */}
        <section className="mb-20">
          <div className="bg-[#FFE6D5] rounded-3xl p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Privacy-First Translation</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  A fully open-source machine translation solution based on LibreTranslate, supporting real-time translation across multiple languages.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  No need for Google Translate API, protecting your privacy and data security. You control your data, you control your infrastructure.
                </p>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-xl font-medium hover:bg-gray-900 hover:text-white transition-colors">
                  Explore More
                </button>
              </div>
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="bg-white rounded-3xl p-8 shadow-lg">
                  <Github className="w-32 h-32 text-gray-900" />
                </div>
                <div className="flex flex-col gap-3 w-full max-w-sm">
                  <a
                    href="https://github.com/LibreTranslate/LibreTranslate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-900 text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                    <Star className="w-5 h-5" />
                    Star this repo if you like it!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
            <button className="bg-[#1A2E2C] text-white px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap">
              All
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:border-gray-400 transition-colors whitespace-nowrap">
              Translation
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:border-gray-400 transition-colors whitespace-nowrap">
              Security
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:border-gray-400 transition-colors whitespace-nowrap">
              Integration
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-full h-32 bg-[#FFE6D5] rounded-xl flex items-center justify-center mb-6">
                <Languages className="w-12 h-12 text-[#FF9A6C]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Multi-Language Support</h3>
              <p className="text-gray-600 mb-4">Supports translation between dozens of major world languages</p>
              <p className="text-sm text-gray-500 mb-4">Beginner to Advanced • Real-time</p>
              <button className="w-full bg-[#1A2E2C] text-white py-3 rounded-xl font-medium hover:bg-[#152521] transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-full h-32 bg-[#E5E7FF] rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-12 h-12 text-[#8B8FFF]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Privacy Protection</h3>
              <p className="text-gray-600 mb-4">No data collection, fully respects user privacy</p>
              <p className="text-sm text-gray-500 mb-4">Enterprise Grade • Secure</p>
              <button className="w-full bg-[#1A2E2C] text-white py-3 rounded-xl font-medium hover:bg-[#152521] transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-full h-32 bg-[#FFE6D5] rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-12 h-12 text-[#FF9A6C]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Real-time Translation</h3>
              <p className="text-gray-600 mb-4">Instant translation, seamless user experience</p>
              <p className="text-sm text-gray-500 mb-4">Lightning Fast • Optimized</p>
              <button className="w-full bg-[#1A2E2C] text-white py-3 rounded-xl font-medium hover:bg-[#152521] transition-colors">
                Learn More
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-full h-32 bg-[#E5E7FF] rounded-xl flex items-center justify-center mb-6">
                <RotateCcw className="w-12 h-12 text-[#8B8FFF]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Smart Caching</h3>
              <p className="text-gray-600 mb-4">Switch between languages instantly once cached</p>
              <p className="text-sm text-gray-500 mb-4">Cached • Zero Latency</p>
              <button className="w-full bg-[#1A2E2C] text-white py-3 rounded-xl font-medium hover:bg-[#152521] transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Application Scenarios</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#FFE6D5] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#FF9A6C]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">International Business</h3>
              <p className="text-gray-600 leading-relaxed">Help businesses expand into international markets and communicate with global customers</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#E5E7FF] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#8B8FFF]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Educational Platforms</h3>
              <p className="text-gray-600 leading-relaxed">Break language barriers, enable students worldwide to access quality educational resources</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#FFE6D5] rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-[#FF9A6C]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Content Publishing</h3>
              <p className="text-gray-600 leading-relaxed">Help content creators reach readers in different language regions</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                  How does open-source translation protect my privacy?
                  <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Unlike commercial APIs, our open-source solution runs entirely on your infrastructure. No data is sent to third parties, giving you complete control over sensitive information.
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                  What languages are supported?
                  <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  LibreTranslate supports over 30 languages including English, Spanish, French, German, Chinese, Japanese, and many more. The list is continuously expanding with community contributions.
                </p>
              </details>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                  How do I integrate this into my website?
                  <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  Integration is simple with our JavaScript widget. Just include our script and add a few lines of code. Detailed documentation and examples are provided to get you started quickly.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1A2E2C] text-white rounded-3xl p-16 text-center">
          <h2 className="text-4xl font-bold mb-4">Translate Websites. Build Your Future</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">Join hundreds of developers already using this solution to reach global audiences</p>
          <button className="bg-white text-gray-900 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg">
            Start For Free
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A2E2C] mt-20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-sm text-gray-300">
            <p className="mb-2">
              Built with LibreTranslate | Fully Open Source | MIT License
            </p>
            <p>
              Supports self-hosting or public instances | Protects your data privacy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
