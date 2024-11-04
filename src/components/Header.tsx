import React from 'react';
import { Heart } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-rose-500" />
            <h1 className="text-2xl font-bold text-gray-800">Poezi Dashurie Per Ty</h1>
          </div>
        </div>
      </div>
    </header>
  );
}