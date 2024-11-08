import React, { useState } from 'react';
import { Header } from './components/Header';
import { PoemCard } from './components/PoemCard';
import { Footer } from './components/Footer';
import { poems } from './data/poems';

function App() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-rose-100">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          65 Poezi Dashurie të Bukura që të Gjithë Duhet t'i Dinë
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-12">
            Dashuria është ndjenja më e bukur që mund të përjetojë njeriu. Këto poezi dashurie janë përzgjedhur me kujdes për të shprehur ndjenjat më të thella të zemrës.
          </p>
          <div className="space-y-12">
            {poems.map((poem, index) => (
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
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default App;