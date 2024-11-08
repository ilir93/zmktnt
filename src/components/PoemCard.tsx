import React from 'react';
import { Copy, Share2, Facebook } from 'lucide-react';

interface Poem {
  title: string;
  author: string;
  content: string;
}

interface PoemCardProps {
  poem: Poem;
  index: number;
  copiedIndex: number | null;
  onCopy: (text: string, index: number) => void;
  onShare: (text: string, platform: 'whatsapp' | 'facebook' | 'viber') => void;
}

export function PoemCard({ poem, index, copiedIndex, onShare, onCopy }: PoemCardProps) {
  const poemNumber = index + 1;

  return (
    <div className="relative">
      <div className="absolute -top-3 left-4">
        <div className="w-6 h-6 bg-rose-600 text-white rounded-full flex items-center justify-center text-sm font-medium shadow-sm">
          {poemNumber}
        </div>
      </div>
      <article className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">{poem.title}</h2>
        <p className="text-gray-600 italic mb-4">nga {poem.author}</p>
        <div className="text-gray-800 mb-4 whitespace-pre-line">
          {poem.content}
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => onCopy(poem.content, index)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md transition-colors ${
              copiedIndex === index
                ? 'bg-green-600 text-white'
                : 'bg-rose-600 text-white hover:bg-rose-700'
            }`}
          >
            <Copy className="h-4 w-4" />
            <span>{copiedIndex === index ? 'Kopjuar!' : 'Kopjo'}</span>
          </button>
          <button
            onClick={() => onShare(poem.content, 'whatsapp')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-800 text-white rounded-md hover:bg-green-900 transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>WhatsApp</span>
          </button>
          <button
            onClick={() => onShare(poem.content, 'facebook')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Facebook className="h-4 w-4" />
            <span>Facebook</span>
          </button>
          <button
            onClick={() => onShare(poem.content, 'viber')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-900 transition-colors"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.177.693 6.698.623 9.82c-.06 3.11-.13 8.95 5.5 10.541v2.42s-.038.97.602 1.17c.79.25 1.24-.499 1.99-1.299l1.4-1.58c3.85.32 6.8-.419 7.14-.529.78-.25 5.181-.811 5.901-6.652.74-6.031-.36-9.831-2.34-11.551l-.01-.002c-.6-.55-3-2.3-8.37-2.32 0 0-.396-.025-1.038-.016z"/>
          </svg>
            <span>Viber</span>
          </button>
        </div>
      </article>
    </div>
  );
}