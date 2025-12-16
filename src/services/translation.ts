export interface TranslationConfig {
  apiUrl: string;
  apiKey?: string;
}

export interface TranslationCache {
  [key: string]: string;
}

const DEFAULT_API_URL = 'https://libretranslate.com/translate';

export class TranslationService {
  private config: TranslationConfig;
  private cache: TranslationCache = {};

  constructor(config?: Partial<TranslationConfig>) {
    this.config = {
      apiUrl: config?.apiUrl || DEFAULT_API_URL,
      apiKey: config?.apiKey,
    };
  }

  private getCacheKey(text: string, source: string, target: string): string {
    return `${source}-${target}-${text}`;
  }

  async translate(text: string, sourceLang: string, targetLang: string): Promise<string> {
    if (!text.trim()) return text;
    if (sourceLang === targetLang) return text;

    const cacheKey = this.getCacheKey(text, sourceLang, targetLang);
    if (this.cache[cacheKey]) {
      return this.cache[cacheKey];
    }

    try {
      const response = await fetch(this.config.apiUrl, {
        method: 'POST',
        body: JSON.stringify({
          q: text,
          source: sourceLang,
          target: targetLang,
          format: 'text',
          api_key: this.config.apiKey,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Translation failed: ${response.statusText}`);
      }

      const data = await response.json();
      const translated = data.translatedText;

      this.cache[cacheKey] = translated;
      return translated;
    } catch (error) {
      console.error('Translation error:', error);
      return text;
    }
  }

  async translateBatch(
    texts: string[],
    sourceLang: string,
    targetLang: string
  ): Promise<string[]> {
    const promises = texts.map((text) => this.translate(text, sourceLang, targetLang));
    return Promise.all(promises);
  }

  clearCache(): void {
    this.cache = {};
  }
}
