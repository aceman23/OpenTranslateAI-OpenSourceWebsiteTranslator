import { Globe, Languages, Lock, Zap, Code, Eye, Users, FileText, ArrowRight, RotateCcw, Github, Star } from 'lucide-react';

export function DemoContent() {
  return (
    <div id="translatable-content" className="min-h-screen bg-[#FFF8F3]">
      {/* Hero Section */}
      <header className="bg-[#FFF8F3] pt-8 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-bold text-gray-900 leading-tight mb-6">
                翻译网站. 构建您的{' '}
                <span className="text-[#FF9A6C]">未来</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                立即开始您的翻译之旅，使用我们专为打破语言障碍而设计的开源解决方案。
              </p>
              <button className="bg-[#1A2E2C] text-white px-8 py-4 rounded-xl font-medium hover:bg-[#152521] transition-colors flex items-center gap-2 group">
                免费开始
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
                      <span className="text-gray-700 font-medium">你好世界</span>
                    </div>
                    <span className="text-xs text-gray-500">中文</span>
                  </div>
                  <div className="bg-[#E5E7FF] rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Languages className="w-6 h-6 text-[#8B8FFF]" />
                      <span className="text-gray-700 font-medium">Hello World</span>
                    </div>
                    <span className="text-xs text-gray-500">EN</span>
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
                <h2 className="text-3xl font-bold text-gray-900 mb-6">隐私优先的翻译技术</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  基于 LibreTranslate 的完全开源机器翻译解决方案，支持多种语言实时翻译。
                </p>
                <p className="text-gray-700 text-lg leading-relaxed mb-8">
                  无需 Google Translate API，保护您的隐私和数据安全。您掌控数据，您掌控基础设施。
                </p>
                <button className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-xl font-medium hover:bg-gray-900 hover:text-white transition-colors">
                  了解更多
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
                    在 GitHub 上查看
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <button className="border-2 border-gray-900 text-gray-900 px-6 py-3 rounded-xl font-medium hover:bg-gray-900 hover:text-white transition-colors flex items-center justify-center gap-2">
                    <Star className="w-5 h-5" />
                    如果喜欢请给个 Star！
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
              全部
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:border-gray-400 transition-colors whitespace-nowrap">
              翻译
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:border-gray-400 transition-colors whitespace-nowrap">
              安全
            </button>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full text-sm font-medium hover:border-gray-400 transition-colors whitespace-nowrap">
              集成
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-full h-32 bg-[#FFE6D5] rounded-xl flex items-center justify-center mb-6">
                <Languages className="w-12 h-12 text-[#FF9A6C]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">多语言支持</h3>
              <p className="text-gray-600 mb-4">支持数十种主要世界语言之间的翻译</p>
              <p className="text-sm text-gray-500 mb-4">新手到高级 • 实时</p>
              <button className="w-full bg-[#1A2E2C] text-white py-3 rounded-xl font-medium hover:bg-[#152521] transition-colors">
                了解更多
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-full h-32 bg-[#E5E7FF] rounded-xl flex items-center justify-center mb-6">
                <Lock className="w-12 h-12 text-[#8B8FFF]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">隐私保护</h3>
              <p className="text-gray-600 mb-4">不收集数据，完全尊重用户隐私</p>
              <p className="text-sm text-gray-500 mb-4">企业级 • 安全</p>
              <button className="w-full bg-[#1A2E2C] text-white py-3 rounded-xl font-medium hover:bg-[#152521] transition-colors">
                了解更多
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-full h-32 bg-[#FFE6D5] rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-12 h-12 text-[#FF9A6C]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">实时翻译</h3>
              <p className="text-gray-600 mb-4">即时翻译，无缝用户体验</p>
              <p className="text-sm text-gray-500 mb-4">闪电般快速 • 优化</p>
              <button className="w-full bg-[#1A2E2C] text-white py-3 rounded-xl font-medium hover:bg-[#152521] transition-colors">
                了解更多
              </button>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all group">
              <div className="w-full h-32 bg-[#E5E7FF] rounded-xl flex items-center justify-center mb-6">
                <RotateCcw className="w-12 h-12 text-[#8B8FFF]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">智能缓存</h3>
              <p className="text-gray-600 mb-4">缓存后可在语言之间即时切换</p>
              <p className="text-sm text-gray-500 mb-4">已缓存 • 零延迟</p>
              <button className="w-full bg-[#1A2E2C] text-white py-3 rounded-xl font-medium hover:bg-[#152521] transition-colors">
                了解更多
              </button>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">应用场景</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#FFE6D5] rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-[#FF9A6C]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">国际业务</h3>
              <p className="text-gray-600 leading-relaxed">帮助企业拓展国际市场，与全球客户沟通</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#E5E7FF] rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[#8B8FFF]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">教育平台</h3>
              <p className="text-gray-600 leading-relaxed">打破语言障碍，让世界各地的学生都能获得优质教育资源</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-14 h-14 bg-[#FFE6D5] rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-[#FF9A6C]" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">内容发布</h3>
              <p className="text-gray-600 leading-relaxed">帮助内容创作者接触到不同语言地区的读者</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">常见问题</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <div className="space-y-6">
              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                  开源翻译如何保护我的隐私？
                  <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  与商业 API 不同，我们的开源解决方案完全在您的基础设施上运行。不会向第三方发送数据，让您完全掌控敏感信息。
                </p>
              </details>
              <details className="group border-b border-gray-200 pb-6">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                  支持哪些语言？
                  <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  LibreTranslate 支持超过 30 种语言，包括英语、西班牙语、法语、德语、中文、日语等等。语言列表随着社区贡献不断扩展。
                </p>
              </details>
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer text-lg font-semibold text-gray-900">
                  如何将其集成到我的网站中？
                  <span className="ml-6 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  使用我们的 JavaScript 小部件集成很简单。只需包含我们的脚本并添加几行代码。提供详细的文档和示例，帮您快速入门。
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1A2E2C] text-white rounded-3xl p-16 text-center">
          <h2 className="text-4xl font-bold mb-4">翻译网站. 构建您的未来</h2>
          <p className="text-gray-300 mb-10 text-lg max-w-2xl mx-auto">加入数百名已经使用此解决方案触达全球受众的开发者</p>
          <button className="bg-white text-gray-900 px-10 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-colors text-lg">
            免费开始
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#1A2E2C] mt-20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center text-sm text-gray-300">
            <p className="mb-2">
              基于 LibreTranslate 构建 | 完全开源 | MIT 协议
            </p>
            <p>
              支持自托管或使用公共实例 | 保护您的数据隐私
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
