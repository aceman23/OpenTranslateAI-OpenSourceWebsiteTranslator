# Open-Source Website Translation Widget

A beautiful, production-ready translation widget powered by LibreTranslate - a fully open-source machine translation API. No Google Translate API needed, keeping your data private and secure.

## Features

- **Fully Open Source**: Built on LibreTranslate, completely transparent and auditable
- **Smart DOM Translation**: Preserves HTML structure, styles, and interactive elements
- **Multi-Language Support**: Chinese, English, Spanish, French, German, Japanese, Korean, Arabic, Hindi, Portuguese
- **Caching System**: Efficient translation caching to avoid redundant API calls
- **Batch Processing**: Translates content in optimized batches with progress tracking
- **Beautiful UI**: Modern, accessible design with smooth animations
- **Easy Integration**: Simple React component that works out of the box

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

For production use, we recommend self-hosting LibreTranslate:

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
3. **Smart Caching**: Translations cached to avoid redundant requests
4. **Precise Updates**: Direct text node updates preserve DOM structure

### Key Components

- **TranslationService** (`src/services/translation.ts`): API communication and caching
- **DOMTranslator** (`src/services/domTranslator.ts`): DOM traversal and text replacement
- **TranslationWidget** (`src/components/TranslationWidget.tsx`): UI component

## Supported Languages

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

## Performance Tips

1. **Self-host LibreTranslate** for better performance and no rate limits
2. **Use specific target elements** instead of translating the entire page
3. **Translation cache** automatically reduces API calls for repeated content
4. **Batch processing** optimizes API usage

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
