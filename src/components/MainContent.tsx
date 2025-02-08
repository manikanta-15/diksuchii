import React from 'react';
import { ProductGrid } from './ProductGrid';
import { Sidebar } from './Sidebar';

export function MainContent() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex gap-8">
        <Sidebar />
        <ProductGrid />
      </div>
    </main>
  );
}