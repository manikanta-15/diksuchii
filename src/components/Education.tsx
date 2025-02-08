import React from 'react';
import { GraduationCap, School } from 'lucide-react';

export function Education() {
  return (
    <section className="bg-gray-800/50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">B.Tech in Computer Science Engineering</h3>
                <p className="text-gray-300">Jayamukhi Institute of Technological Sciences</p>
                <p className="text-gray-400">Currently Pursuing</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <School className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Intermediate (MPC)</h3>
                <p className="text-gray-300">Sigma Jr College</p>
                <p className="text-gray-400">Completed</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="flex items-start gap-4">
              <School className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Secondary School (10th)</h3>
                <p className="text-gray-300">Infant Jesus Convent High School</p>
                <p className="text-gray-400">Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}