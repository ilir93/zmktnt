import React, { useState } from 'react';
import { Header } from './components/Header';
import { PoemCard } from './components/PoemCard';
import { Footer } from './components/Footer';
import { poems } from './data/poems';

function App() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [visiblePoems, setVisiblePoems] = useState(10);
  const currentYear = new Date().getFullYear();

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const shareContent = (text: string, platform: 'whatsapp' | 'facebook' | 'viber') => {
    const encodedText = encodeURIComponent(text);
    const urls = {
      whatsapp: `https://wa.me/?text=${encodedText}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=https://poezidashurie.com&quote=${encodedText}`,
      viber: `viber://forward?text=${encodedText}`
    };
    window.open(urls[platform], '_blank');
  };

  const loadMorePoems = () => {
    setVisiblePoems(prev => Math.min(prev + 10, poems.length));
  };

  const displayedPoems = poems.slice(0, visiblePoems);
  const hasMorePoems = visiblePoems < poems.length;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          65 Poezi Dashurie të Bukura që të Gjithë Duhet t'i Dinë {currentYear}
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-12">
            Dashuria është ndjenja më e bukur që mund të përjetojë njeriu. Këto poezi dashurie janë përzgjedhur me kujdes për të shprehur ndjenjat më të thella të zemrës.
          </p>
          <div className="space-y-12">
            {displayedPoems.map((poem, index) => (
              <PoemCard
                key={index}
                poem={poem}
                index={index}
                copiedIndex={copiedIndex}
                onCopy={copyToClipboard}
                onShare={shareContent}
              />
            ))}
          </div>
          {hasMorePoems && (
            <div className="mt-12 text-center">
              <button
                onClick={loadMorePoems}
                className="bg-rose-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-rose-700 transition-colors shadow-md hover:shadow-lg"
              >
                Lexo më shumë poezi
              </button>
            </div>
          )}
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;