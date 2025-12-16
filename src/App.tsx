import { TranslationWidget } from './components/TranslationWidget';
import { DemoContent } from './components/DemoContent';

function App() {
  return (
    <>
      <TranslationWidget
        defaultLang="zh"
        targetElementId="translatable-content"
        position="top-right"
      />
      <DemoContent />
    </>
  );
}

export default App;
