import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export function AdBanner() {
  const [text, setText] = useState('Gjeje nusen');
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setText(prev => prev === 'Gjeje nusen' ? 'Gjeje burrin' : 'Gjeje nusen');
    }, 5000);

    const blinkInterval = setInterval(() => {
      setIsBlinking(prev => !prev);
    }, 500);

    return () => {
      clearInterval(textInterval);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <a 
      href="https://open.dua.com/q9LX/iaazs5mo" 
      target="_blank" 
      rel="noopener noreferrer"
      className="block w-full max-w-[320px] h-[50px] mx-auto my-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
    >
      <div className="w-full h-full flex items-center justify-center gap-3 text-white font-semibold">
        <Heart 
          className={`w-6 h-6 ${isBlinking ? 'animate-pulse text-white' : 'text-white/70'}`} 
          fill={isBlinking ? 'currentColor' : 'none'}
        />
        <span className="text-lg">{text}</span>
        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Download</span>
      </div>
    </a>
  );
}