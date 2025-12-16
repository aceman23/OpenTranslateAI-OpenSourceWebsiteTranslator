import { TranslationWidget } from './components/TranslationWidget';
import { TranslationDebug } from './components/TranslationDebug';
import { DemoContent } from './components/DemoContent';

function App() {
  return (
    <>
      <TranslationWidget
        defaultLang="zh"
        targetElementId="translatable-content"
        position="top-right"
      />
      <TranslationDebug />
      <DemoContent />
    </>
  );
}

export default App;
