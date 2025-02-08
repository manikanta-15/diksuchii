import React, { useState } from 'react';
import { FileText, BookOpen, Eye } from 'lucide-react';
import { PDFViewer } from './PDFViewer';

interface Note {
  id: string;
  title: string;
  subject: string;
  description: string;
  pdfUrl: string;
  uploadDate: string;
}

const sampleNotes: Note[] = [
  {
    id: '1',
    title: 'Data Structures: Graph Algorithms',
    subject: 'Data Structures & Algorithms',
    description: 'Comprehensive notes on graph traversal, shortest paths, and MST algorithms',
    pdfUrl: 'https://www.africau.edu/images/default/sample.pdf',
    uploadDate: '2024-03-15'
  },
  {
    id: '2',
    title: 'Database Normalization',
    subject: 'Database Management Systems',
    description: 'Complete guide to 1NF, 2NF, 3NF, and BCNF with examples',
    pdfUrl: 'https://www.africau.edu/images/default/sample.pdf',
    uploadDate: '2024-03-14'
  },
  {
    id: '3',
    title: 'Object-Oriented Design Patterns',
    subject: 'Object-Oriented Programming',
    description: 'Detailed explanation of creational, structural, and behavioral patterns',
    pdfUrl: 'https://www.africau.edu/images/default/sample.pdf',
    uploadDate: '2024-03-13'
  }
];

export function NotesSection() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNotes = sampleNotes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BookOpen className="w-6 h-6 text-indigo-600" />
          <h2 className="text-2xl font-bold text-gray-800">Course Notes</h2>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search notes..."
            className="pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="space-y-4">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            className="border border-gray-200 rounded-lg p-4 hover:border-indigo-300 transition-all duration-200"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-800">{note.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{note.subject}</p>
                  <p className="text-sm text-gray-500 mt-2">{note.description}</p>
                  <p className="text-xs text-gray-400 mt-2">Uploaded on: {note.uploadDate}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedPdf(note.pdfUrl)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
              >
                <Eye className="w-4 h-4" />
                View PDF
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedPdf && (
        <PDFViewer
          url={selectedPdf}
          onClose={() => setSelectedPdf(null)}
        />
      )}
    </div>
  );
}