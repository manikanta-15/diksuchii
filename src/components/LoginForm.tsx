import React, { useState } from 'react';

interface LoginFormProps {
  role: string;
  onSubmit: (username: string, password: string) => void;
  onBack: () => void;
}

export function LoginForm({ role, onSubmit, onBack }: LoginFormProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(username, password);
  };

  return (
    <div className="w-full max-w-md">
      <button
        onClick={onBack}
        className="mb-6 text-indigo-600 hover:text-indigo-800 flex items-center gap-2"
      >
        ← Back to role selection
      </button>
      
      <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {role} Login
        </h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
            id="username"
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-indigo-500"
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <div className="flex items-center justify-between">
          <button
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors duration-200"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
      
      <p className="text-center text-gray-600 text-sm">
        Forgot your password? Contact administrator
      </p>
    </div>
  );
}