import { CheckCircle, Zap, Shield, Globe, Sparkles, ArrowRight, Crown } from 'lucide-react';

export function FeaturesPage() {
  return (
    <div id="translatable-content" className="min-h-screen bg-[#FFF8F3]">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <section className="mb-20">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Features</h1>
          <p className="text-xl text-gray-600 mb-12">
            Choose the version that fits your needs
          </p>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FFE6D5] rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-[#FF9A6C]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Free Version</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Client-side translation</span> - privacy-focused, no data sent to servers
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-semibold">LibreTranslate API support</span> - self-hosted or public instances
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Simple language switcher</span> - easy-to-use dropdown interface
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Works everywhere</span> - static and dynamic sites
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-semibold">Lightweight JavaScript</span> - no dependencies required
                  </p>
                </div>
              </div>
              <button className="w-full mt-8 bg-[#1A2E2C] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#152521] transition-colors">
                Get Started Free
              </button>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 shadow-xl border-2 border-[#FF9A6C] relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <Crown className="w-8 h-8 text-[#FF9A6C]" />
              </div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#FF9A6C] rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-white">Pro Version</h2>
              </div>
              <p className="text-gray-300 text-lg mb-6">
                Multi-AI Model Powered Translation
              </p>
              <div className="bg-white/10 rounded-xl p-6 mb-6 backdrop-blur-sm">
                <h3 className="text-white font-bold text-xl mb-4">Why Go Pro?</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9A6C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1">Model Switching</p>
                      <p className="text-gray-300 text-sm">
                        Choose from top AI engines on-the-fly: Grok, Gemini, GPT-4o, Claude, DeepSeek, Qwen, Kimi, MiniMax, Llama variants
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9A6C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1">Superior Quality</p>
                      <p className="text-gray-300 text-sm">
                        90-98% accuracy with context-aware neural translation, beats basic LibreTranslate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9A6C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1">No Setup Hassle</p>
                      <p className="text-gray-300 text-sm">
                        Hosted backend proxy - add your site once, no API keys exposed client-side
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#FF9A6C] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-white font-semibold mb-1">Unlimited Usage</p>
                      <p className="text-gray-300 text-sm">
                        No rate limits, faster inference via Groq for speed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-white font-bold text-lg mb-3">Extra Features</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#FF9A6C]" />
                    Real-time page translation
                  </li>
                  <li className="flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#FF9A6C]" />
                    Custom glossaries (e.g., edtech terms for sites like Apply7)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#FF9A6C]" />
                    Analytics & SEO-friendly URLs
                  </li>
                  <li className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#FF9A6C]" />
                    Priority support
                  </li>
                </ul>
              </div>
              <button className="w-full mt-8 bg-[#FF9A6C] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#FF8454] transition-colors flex items-center justify-center gap-2 group">
                Upgrade to Pro
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          <div className="bg-[#FFE6D5] rounded-3xl p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Powered by OpenRouter
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Pro version uses OpenRouter's unified API for seamless access to 100+ AI models, giving you the flexibility to choose the best translation engine for your needs.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
