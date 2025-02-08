import React from 'react';
import { Star } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Classic Cotton Saree',
    price: 1299,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80'
  },
  {
    id: 2,
    name: 'Silk Designer Saree',
    price: 2499,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&q=80'
  },
  // Add more products as needed
];

export function ProductGrid() {
  return (
    <div className="flex-1">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <div className="flex items-center mt-2">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
              </div>
              <p className="mt-2 text-xl font-bold text-gray-900">₹{product.price}</p>
              <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}