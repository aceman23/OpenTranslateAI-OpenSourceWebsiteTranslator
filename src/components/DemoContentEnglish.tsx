import { BookOpen, Code, Globe, Zap, TrendingUp, Users, Target } from 'lucide-react';

export function DemoContentEnglish() {
  return (
    <div id="translatable-content" className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Globe className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-5xl font-bold leading-tight">
                Break Language Barriers
              </h1>
              <p className="text-xl text-blue-100 mt-2">
                Reach Global Audiences with Zero Friction
              </p>
            </div>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
            Transform any website into a multilingual experience instantly. No complex setup, no vendor lock-in, just pure open-source power.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mt-1">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy-First Translation Technology</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  A fully open-source machine translation solution based on LibreTranslate, supporting real-time translation across multiple languages.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  No need for Google Translate API, protecting your privacy and data security. You control your data, you control your infrastructure.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Core Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fully Open Source
              </h3>
              <p className="text-sm text-gray-600">
                Built on LibreTranslate open-source translation engine, with transparent and auditable code, no vendor lock-in risk.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quick Deployment
              </h3>
              <p className="text-sm text-gray-600">
                Supports one-click Docker deployment, or use public instances. Simple integration with just a few lines of code.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Multi-Language Support
              </h3>
              <p className="text-sm text-gray-600">
                Supports translation between multiple languages including Chinese, English, Spanish, French, German, Japanese, and Korean.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Structure Preservation
              </h3>
              <p className="text-sm text-gray-600">
                Smart DOM traversal algorithm that translates text while preserving webpage structure, styles, and interactive functionality.
              </p>
            </div>
          </div>
        </section>

        {/* Business Value Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Why Website Owners Love This Solution</h2>
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 shadow-sm border border-blue-100">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">76%</div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      of consumers prefer products in their native language
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-1">2.5x</div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      higher conversion rates for localized websites
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">40%</div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      lower customer churn in international markets
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Real-World Impact
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                For businesses targeting international audiences, language accessibility directly impacts revenue and growth. An edtech platform focused on Chinese-speaking families could instantly expand into US and UK markets by adding English support, potentially doubling their addressable market overnight.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With this open-source solution, you can test multiple markets simultaneously without expensive translation services or complex internationalization frameworks. Start small, validate demand, then scale your localization efforts based on real user data.
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    DOM Analysis and Extraction
                  </h3>
                  <p className="text-gray-600">
                    Uses TreeWalker API to traverse the webpage DOM tree, intelligently extracting all visible text nodes while filtering out scripts, styles, and other content that doesn't need translation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Batch Translation Processing
                  </h3>
                  <p className="text-gray-600">
                    Sends extracted text to the LibreTranslate API in batches for translation, with caching mechanism to avoid redundant requests and improve performance.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Precise Replacement and Update
                  </h3>
                  <p className="text-gray-600">
                    Uses original DOM references to directly update text node content, preserving all HTML structure, CSS styles, event listeners, and interactive features.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Integration Example</h2>
          <div className="bg-gray-900 rounded-xl p-6 shadow-sm overflow-x-auto">
            <pre className="text-sm text-gray-100 font-mono">
              <code>{`// Use in your React application
import { TranslationWidget } from './components/TranslationWidget';

function App() {
  return (
    <>
      <TranslationWidget
        defaultLang="zh"
        targetElementId="content"
        position="top-right"
      />
      <div id="content">
        {/* Your content */}
      </div>
    </>
  );
}`}</code>
            </pre>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-blue-600 rounded-xl p-12 shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">
              Get Started Now
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Completely free open-source translation solution that makes your website support multiple languages instantly, reaching users worldwide.
            </p>
            <div className="flex gap-4 justify-center" data-no-translate>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md">
                GitHub Repository
              </button>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                View Documentation
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-sm text-gray-600">
            <p>
              Built with LibreTranslate | Fully Open Source | MIT License
            </p>
            <p className="mt-2">
              Supports self-hosting or public instances | Protects your data privacy
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
