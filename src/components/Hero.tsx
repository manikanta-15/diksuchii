import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  return (
    <header className="container mx-auto px-4 py-16 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Manikanta Pokala
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          Computer Science Engineering Student
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com" className="text-gray-300 hover:text-white transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" className="text-gray-300 hover:text-white transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:vmanu0029@gmail.com" className="text-gray-300 hover:text-white transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
}