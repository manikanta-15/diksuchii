import React from 'react';
import { Book, FileText, Youtube, Clock, BookOpen, Star } from 'lucide-react';
import { NotesSection } from './NotesSection';

interface Resource {
  title: string;
  type: string;
  link: string;
  subject: string;
}

export function StudentDashboard() {
  const subjects = [
    { name: 'Data Structures & Algorithms', code: 'CS201' },
    { name: 'Object-Oriented Programming', code: 'CS202' },
    { name: 'Computer Networks', code: 'CS203' },
    { name: 'Database Management Systems', code: 'CS204' },
    { name: 'Operating Systems', code: 'CS205' },
    { name: 'Software Engineering', code: 'CS206' }
  ];

  const resources: Resource[] = [
    {
      title: 'Advanced DSA: Graph Algorithms',
      type: 'notes',
      link: '#',
      subject: 'Data Structures & Algorithms'
    },
    {
      title: 'DBMS Previous Year Paper 2023',
      type: 'paper',
      link: '#',
      subject: 'Database Management Systems'
    },
    {
      title: 'Complete OOP Concepts in Java',
      type: 'video',
      link: 'https://youtube.com/watch?v=example',
      subject: 'Object-Oriented Programming'
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Quick Stats */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-indigo-50 p-6 rounded-xl flex items-center gap-4">
            <Book className="w-8 h-8 text-indigo-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">6</h3>
              <p className="text-sm text-gray-600">Active Subjects</p>
            </div>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl flex items-center gap-4">
            <Clock className="w-8 h-8 text-purple-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">3</h3>
              <p className="text-sm text-gray-600">Upcoming Labs</p>
            </div>
          </div>
          <div className="bg-pink-50 p-6 rounded-xl flex items-center gap-4">
            <Star className="w-8 h-8 text-pink-600" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">8.5</h3>
              <p className="text-sm text-gray-600">Current CGPA</p>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Notes Section */}
          <NotesSection />

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Current Semester Subjects</h2>
            <div className="space-y-3">
              {subjects.map((subject, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-indigo-300 transition-colors">
                  <h3 className="font-semibold text-gray-800">{subject.name}</h3>
                  <p className="text-sm text-gray-600">Course Code: {subject.code}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Quick Links</h2>
            <div className="space-y-3">
              <a href="#" className="block p-3 bg-indigo-50 rounded-lg text-indigo-700 hover:bg-indigo-100 transition-colors">
                Lab Manuals
              </a>
              <a href="#" className="block p-3 bg-green-50 rounded-lg text-green-700 hover:bg-green-100 transition-colors">
                Programming Assignments
              </a>
              <a href="#" className="block p-3 bg-red-50 rounded-lg text-red-700 hover:bg-red-100 transition-colors">
                Project Guidelines
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recommended Resources</h2>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Youtube className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-800">System Design Patterns</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Youtube className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-800">Network Protocols Deep Dive</span>
              </a>
              <a href="#" className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <Youtube className="w-5 h-5 text-red-600" />
                <span className="text-sm text-gray-800">SQL Query Optimization</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}