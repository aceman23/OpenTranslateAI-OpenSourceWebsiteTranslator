import { useState } from 'react';
import { TranslationWidget } from './components/TranslationWidget';
import { TranslationDebug } from './components/TranslationDebug';
import { DemoContent } from './components/DemoContent';
import { DemoContentEnglish } from './components/DemoContentEnglish';
import { FeaturesPage } from './components/FeaturesPage';

type Page = 'home' | 'features';

function App() {
  const [localLang, setLocalLang] = useState<'zh' | 'en'>('zh');
  const [currentPage, setCurrentPage] = useState<Page>('home');

  return (
    <>
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={() => setCurrentPage('home')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'home'
                  ? 'bg-[#1A2E2C] text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => setCurrentPage('features')}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                currentPage === 'features'
                  ? 'bg-[#1A2E2C] text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              Features
            </button>
          </div>
        </div>
      </nav>
      <TranslationWidget
        defaultLang="zh"
        targetElementId="translatable-content"
        position="top-right"
        onLanguageChange={(lang) => {
          if (lang === 'zh' || lang === 'en') {
            setLocalLang(lang);
          }
        }}
        localLanguages={['zh', 'en']}
      />
      <TranslationDebug />
      {currentPage === 'features' ? (
        <FeaturesPage />
      ) : localLang === 'zh' ? (
        <DemoContent />
      ) : (
        <DemoContentEnglish />
      )}
    </>
  );
}

export default App;
