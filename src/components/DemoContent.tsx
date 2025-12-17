import { BookOpen, Code, Globe, Zap, TrendingUp, Users, Target } from 'lucide-react';

export function DemoContent() {
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
                打破语言障碍
              </h1>
              <p className="text-xl text-blue-100 mt-2">
                零摩擦触达全球用户
              </p>
            </div>
          </div>
          <p className="text-lg text-blue-100 max-w-3xl leading-relaxed">
            将任何网站瞬间转变为多语言体验。无需复杂设置，无供应商锁定，只有纯粹的开源力量。
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">隐私优先的翻译技术</h2>
                <p className="text-gray-700 leading-relaxed mb-3">
                  基于 LibreTranslate 的完全开源机器翻译解决方案，支持多种语言实时翻译。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  无需 Google Translate API，保护您的隐私和数据安全。您掌控数据，您掌控基础设施。
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">核心特性</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                完全开源
              </h3>
              <p className="text-sm text-gray-600">
                基于 LibreTranslate 开源翻译引擎，代码透明可审计，无供应商锁定风险。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                快速部署
              </h3>
              <p className="text-sm text-gray-600">
                支持 Docker 一键部署，也可使用公共实例。集成简单，只需几行代码。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                多语言支持
              </h3>
              <p className="text-sm text-gray-600">
                支持中文、英文、西班牙语、法语、德语、日语、韩语等多种语言互译。
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                保留结构
              </h3>
              <p className="text-sm text-gray-600">
                智能 DOM 遍历算法，翻译文本同时保留网页结构、样式和交互功能。
              </p>
            </div>
          </div>
        </section>

        {/* Business Value Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">为什么网站所有者和企业喜欢这个方案</h2>
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
                      的消费者更倾向于使用母语浏览产品
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
                    <div className="text-3xl font-bold text-green-600 mb-1">2.5倍</div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      本地化网站的转化率提升
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
                      国际市场的用户流失率降低
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-l-4 border-blue-600">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                真实商业影响
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                对于面向国际受众的企业来说，语言可访问性直接影响收入和增长。一个专注于中文家庭的在线教育平台可以通过增加英语支持，立即扩展到美国和英国市场，潜在地在一夜之间将其可触达市场翻倍。
              </p>
              <p className="text-gray-700 leading-relaxed">
                通过这个开源解决方案，您可以同时测试多个市场，无需昂贵的翻译服务或复杂的国际化框架。从小规模开始，验证需求，然后根据真实用户数据扩展您的本地化工作。
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">工作原理</h2>
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    DOM 分析与提取
                  </h3>
                  <p className="text-gray-600">
                    使用 TreeWalker API 遍历网页 DOM 树，智能提取所有可见文本节点，过滤脚本、样式等不需要翻译的内容。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    批量翻译处理
                  </h3>
                  <p className="text-gray-600">
                    将提取的文本分批发送到 LibreTranslate API 进行翻译，支持缓存机制避免重复请求，提升性能。
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    精准替换更新
                  </h3>
                  <p className="text-gray-600">
                    使用原始 DOM 引用直接更新文本节点内容，保留所有 HTML 结构、CSS 样式、事件监听器和交互功能。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Integration Example */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">集成示例</h2>
          <div className="bg-gray-900 rounded-xl p-6 shadow-sm overflow-x-auto">
            <pre className="text-sm text-gray-100 font-mono">
              <code>{`// 在您的 React 应用中使用
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
        {/* 您的内容 */}
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
              立即开始使用
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              完全免费的开源翻译方案，让您的网站瞬间支持多语言，覆盖全球用户。
            </p>
            <div className="flex gap-4 justify-center" data-no-translate>
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors shadow-md">
                GitHub Repository
              </button>
              <button className="bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                查看文档
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
              基于 LibreTranslate 构建 | 完全开源 | MIT 协议
            </p>
            <p className="mt-2">
              支持自托管或使用公共实例 | 保护您的数据隐私
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
