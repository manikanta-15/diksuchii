import React from 'react';

export function Sidebar() {
  const categories = [
    'All Sarees',
    'Cotton Sarees',
    'Silk Sarees',
    'Designer Sarees',
    'Traditional Sarees',
    'Party Wear'
  ];

  return (
    <aside className="w-64 flex-shrink-0">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category}>
              <button className="w-full text-left px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}