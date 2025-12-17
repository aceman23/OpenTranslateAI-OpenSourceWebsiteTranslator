# Open-Source Website Translation Widget

A beautiful, production-ready translation widget powered by [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) - a fully open-source machine translation API. No Google Translate API needed, keeping your data private and secure.

> **Built on LibreTranslate**: This project leverages the power of [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate), a free and open-source machine translation API that respects your privacy. Star the [LibreTranslate repository](https://github.com/LibreTranslate/LibreTranslate) to support the project!

## Features

- **Fully Open Source**: Built on [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate), completely transparent and auditable
- **Smart DOM Translation**: Preserves HTML structure, styles, and interactive elements
- **Multi-Language Support**: Chinese, English, Spanish, French, German, Japanese, Korean, Arabic, Hindi, Portuguese
- **Smart Caching System**: Instant language switching with zero latency once cached
- **Batch Processing**: Translates content in optimized batches with progress tracking
- **Beautiful Demo Page**: Production-ready landing page with bilingual content (English/Chinese)
- **GitHub Integration**: Built-in CTA buttons linking to LibreTranslate repository
- **Beautiful UI**: Modern, accessible design with smooth animations
- **Easy Integration**: Simple React component that works out of the box

## Demo Content

The project includes a fully-featured demo landing page showcasing the translation widget:

- **Bilingual Support**: Available in both English (`DemoContentEnglish.tsx`) and Chinese (`DemoContent.tsx`)
- **Feature Showcase**: Four feature cards highlighting:
  - Multi-Language Support
  - Privacy Protection
  - Real-time Translation
  - Smart Caching
- **GitHub CTA Section**: Prominent call-to-action with GitHub logo and buttons linking to the [LibreTranslate repository](https://github.com/LibreTranslate/LibreTranslate)
- **Use Cases Section**: Real-world application scenarios
- **FAQ Section**: Common questions about open-source translation
- **Responsive Design**: Mobile-friendly layout with professional styling

## Quick Start

### Using in React

```tsx
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
}
```

### Configuration Options

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultLang` | string | `'zh'` | Initial language code |
| `apiUrl` | string | LibreTranslate public instance | Custom LibreTranslate API URL |
| `apiKey` | string | undefined | API key for authentication (if required) |
| `targetElementId` | string | `'translatable-content'` | ID of element to translate |
| `position` | string | `'top-right'` | Widget position: top-left, top-right, bottom-left, bottom-right |

## Preventing Translation

Add `data-no-translate` attribute to elements that should not be translated:

```html
<button data-no-translate>Click Me</button>
<div data-no-translate>
  <!-- This entire section will not be translated -->
</div>
```

## Self-Hosting LibreTranslate

For production use, we recommend self-hosting [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate). This gives you:

- **Full Control**: No rate limits or restrictions
- **Better Performance**: Deploy closer to your users
- **Enhanced Privacy**: Your data never leaves your infrastructure
- **Cost Effective**: Free to run on your own servers

Learn more in the [official LibreTranslate documentation](https://github.com/LibreTranslate/LibreTranslate#readme).

### Using Docker

```bash
docker run -ti --rm -p 5000:5000 libretranslate/libretranslate
```

Then configure the widget to use your instance:

```tsx
<TranslationWidget
  apiUrl="http://localhost:5000/translate"
  defaultLang="zh"
/>
```

### Docker Compose

```yaml
version: '3'
services:
  libretranslate:
    image: libretranslate/libretranslate
    restart: unless-stopped
    ports:
      - "5000:5000"
    environment:
      LT_LOAD_ONLY: en,zh,es,fr,de,ja,ko,ar,hi,pt
```

## Architecture

### Translation Flow

1. **DOM Analysis**: TreeWalker API extracts all visible text nodes
2. **Batch Translation**: Text sent to LibreTranslate API in optimized batches
3. **Smart Caching**: Translations cached for instant switching with zero latency
4. **Precise Updates**: Direct text node updates preserve DOM structure

### Key Components

- **TranslationService** (`src/services/translation.ts`): API communication and smart caching
- **DOMTranslator** (`src/services/domTranslator.ts`): DOM traversal and text replacement
- **TranslationWidget** (`src/components/TranslationWidget.tsx`): UI widget component
- **DemoContent** (`src/components/DemoContent.tsx`): Chinese demo landing page
- **DemoContentEnglish** (`src/components/DemoContentEnglish.tsx`): English demo landing page

## Supported Languages

The widget supports all languages available in [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate). Currently configured languages include:

- Chinese (中文) - `zh`
- English - `en`
- Spanish (Español) - `es`
- French (Français) - `fr`
- German (Deutsch) - `de`
- Japanese (日本語) - `ja`
- Korean (한국어) - `ko`
- Arabic (العربية) - `ar`
- Hindi (हिन्दी) - `hi`
- Portuguese (Português) - `pt`

For a complete list of supported languages, visit the [LibreTranslate repository](https://github.com/LibreTranslate/LibreTranslate#supported-languages).

## Performance Tips

1. **Self-host [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate)** for better performance and no rate limits
2. **Use specific target elements** instead of translating the entire page
3. **Smart caching** enables instant language switching after initial translation
4. **Translation cache** automatically reduces API calls for repeated content
5. **Batch processing** optimizes API usage and reduces network overhead

## Why LibreTranslate?

[LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) is the foundation of this widget because it:

- **Respects Privacy**: No tracking, no data collection, completely open-source
- **Self-Hostable**: Deploy on your infrastructure for full control
- **Free & Open**: MIT licensed with an active community
- **Production Ready**: Used by thousands of websites worldwide
- **API Compatible**: Drop-in replacement for proprietary translation services

Learn more and contribute at [github.com/LibreTranslate/LibreTranslate](https://github.com/LibreTranslate/LibreTranslate)

## Browser Support

- Modern browsers with ES6+ support
- Chrome, Firefox, Safari, Edge (latest versions)

## License

MIT License - feel free to use in personal and commercial projects

## Credits

Built with:
- [LibreTranslate](https://github.com/LibreTranslate/LibreTranslate) - Open-source translation API
- [React](https://react.dev/) - UI framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
