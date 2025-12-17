import { useState, useEffect } from 'react';
import { Globe, Loader2, Check, AlertCircle } from 'lucide-react';
import { TranslationService } from '../services/translation';
import { DOMTranslator } from '../services/domTranslator';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

const LANGUAGES: Language[] = [
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'de', name: 'German', nativeName: 'Deutsch' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
  { code: 'ko', name: 'Korean', nativeName: '한국어' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
];

interface TranslationWidgetProps {
  defaultLang?: string;
  apiUrl?: string;
  apiKey?: string;
  targetElementId?: string;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  onLanguageChange?: (lang: string) => void;
  localLanguages?: string[];
}

export function TranslationWidget({
  defaultLang = 'zh',
  apiUrl,
  apiKey,
  targetElementId = 'translatable-content',
  position = 'top-right',
  onLanguageChange,
  localLanguages = [],
}: TranslationWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(defaultLang);
  const [isTranslating, setIsTranslating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [domTranslator, setDomTranslator] = useState<DOMTranslator | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const [cachedLanguages, setCachedLanguages] = useState<string[]>([]);

  useEffect(() => {
    const initTranslator = async () => {
      try {
        const translationService = new TranslationService({ apiUrl, apiKey });
        const translator = new DOMTranslator(translationService, defaultLang);

        const targetElement = document.getElementById(targetElementId);
        if (targetElement) {
          await translator.initialize(targetElement);
          setDomTranslator(translator);
          setIsInitialized(true);

          // Initialize cached languages with the original language
          setCachedLanguages([defaultLang]);
        } else {
          setError(`Target element #${targetElementId} not found`);
        }
      } catch (err) {
        console.error('Failed to initialize translator:', err);
        setError('Failed to initialize translation widget');
      }
    };

    initTranslator();
  }, [apiUrl, apiKey, defaultLang, targetElementId]);

  const handleLanguageChange = async (langCode: string) => {
    if (!domTranslator || isTranslating || !isInitialized) return;

    setError(null);
    setIsOpen(false);

    const isLocalLanguage = localLanguages.includes(langCode);

    if (isLocalLanguage) {
      setCurrentLang(langCode);
      onLanguageChange?.(langCode);
      return;
    }

    const isCached = cachedLanguages.includes(langCode);

    if (isCached) {
      setIsTranslating(true);
      setProgress(0);

      try {
        await domTranslator.translateTo(langCode, (prog) => {
          setProgress(Math.min(prog, 100));
        });
        setCurrentLang(langCode);
        onLanguageChange?.(langCode);
      } catch (err) {
        console.error('Error switching to cached language:', err);
      } finally {
        setIsTranslating(false);
        setTimeout(() => setProgress(0), 300);
      }
      return;
    }

    setIsTranslating(true);
    setProgress(0);

    try {
      await domTranslator.translateTo(langCode, (prog) => {
        setProgress(Math.min(prog, 100));
      });
      setCurrentLang(langCode);
      onLanguageChange?.(langCode);

      // Update cached languages after successful translation
      const newCachedLanguages = domTranslator.getCachedLanguages();
      setCachedLanguages(newCachedLanguages);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Translation failed';

      if (errorMessage.includes('CORS') || errorMessage.includes('network')) {
        setError('Connection error. Try self-hosting LibreTranslate or check your network.');
      } else if (errorMessage.includes('rate limit')) {
        setError('Rate limit reached. Please wait and try again.');
      } else {
        setError(`Translation failed: ${errorMessage}`);
      }

      console.error('Translation error:', err);
    } finally {
      setIsTranslating(false);
      setTimeout(() => setProgress(0), 500);
    }
  };

  const positionClasses = {
    'top-left': 'top-4 left-4',
    'top-right': 'top-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'bottom-right': 'bottom-4 right-4',
  };

  const currentLanguage = LANGUAGES.find((lang) => lang.code === currentLang);

  return (
    <div className={`fixed ${positionClasses[position]} z-50`} data-no-translate>
      <div className="relative">
        {/* Widget Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          disabled={isTranslating || !isInitialized}
          className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-900 px-4 py-2.5 rounded-lg shadow-lg border border-gray-200 transition-all hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
          title={isInitialized ? 'Select language' : 'Initializing...'}
        >
          {isTranslating ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Globe className="w-4 h-4" />
          )}
          <span className="font-medium text-sm">
            {currentLanguage?.nativeName || 'Language'}
          </span>
        </button>

        {/* Progress Bar */}
        {isTranslating && (
          <div className={`absolute top-full mt-2 w-full min-w-[200px] bg-white rounded-lg shadow-lg border border-gray-200 p-3 ${
            position.includes('right') ? 'right-0' : 'left-0'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <Loader2 className="w-3 h-3 animate-spin text-blue-600" />
              <span className="text-xs text-gray-600">Translating...</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div
                className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Language Dropdown */}
        {isOpen && !isTranslating && (
          <div className={`absolute top-full mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 max-h-96 overflow-y-auto z-[100] ${
            position.includes('right') ? 'right-0' : 'left-0'
          }`}>
            <div className="px-3 py-2 border-b border-gray-100">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Select Language
              </p>
            </div>
            {LANGUAGES.map((lang) => {
              const isLocal = localLanguages.includes(lang.code);
              const isCached = cachedLanguages.includes(lang.code);
              const showInstantBadge = isLocal || isCached;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2.5 hover:bg-gray-50 transition-colors flex items-center justify-between group ${
                    currentLang === lang.code ? 'bg-blue-50' : ''
                  }`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">
                        {lang.nativeName}
                      </span>
                      {showInstantBadge && (
                        <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-medium">
                          Instant
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-gray-500">{lang.name}</span>
                  </div>
                  {currentLang === lang.code && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </button>
              );
            })}
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className={`absolute top-full mt-2 w-64 max-w-[calc(100vw-2rem)] bg-red-50 border border-red-200 rounded-lg shadow-lg p-3 ${
            position.includes('right') ? 'right-0' : 'left-0'
          }`}>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs text-red-800">{error}</p>
                <button
                  onClick={() => setError(null)}
                  className="text-xs text-red-600 hover:text-red-800 font-medium mt-1"
                >
                  Dismiss
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
