import React from 'react';
import { Code2, Terminal, BookOpen, Database } from 'lucide-react';

export function Skills() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <Code2 className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
            <ul className="space-y-2 text-gray-300">
              <li>C</li>
              <li>Java</li>
              <li>Python</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <Terminal className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Web Development</h3>
            <ul className="space-y-2 text-gray-300">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript (Basic)</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <Database className="w-8 h-8 text-green-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Database</h3>
            <ul className="space-y-2 text-gray-300">
              <li>MySQL</li>
              <li>DBMS Concepts</li>
            </ul>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <BookOpen className="w-8 h-8 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Learning</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Data Structures</li>
              <li>Algorithms</li>
              <li>Software Engineering</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}