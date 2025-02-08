import React, { useState } from 'react';
import { Users, Calendar, ClipboardList, Star, BookOpen, UserCheck, Upload, Plus, FileText } from 'lucide-react';

interface Student {
  id: string;
  name: string;
  semester: number;
  course: string;
}

interface Mark {
  studentId: string;
  subject: string;
  marks: number;
  semester: number;
}

interface Note {
  id: string;
  title: string;
  subject: string;
  description: string;
  fileUrl: string;
  uploadDate: string;
}

interface Subject {
  id: string;
  name: string;
  code: string;
  semester: number;
}

export function FacultyDashboard() {
  const [activeTab, setActiveTab] = useState('notes');
  const [selectedSemester, setSelectedSemester] = useState(1);
  const [selectedSubject, setSelectedSubject] = useState('Mathematics');
  const [showNoteForm, setShowNoteForm] = useState(false);
  const [showSubjectForm, setShowSubjectForm] = useState(false);
  
  // Form states
  const [noteForm, setNoteForm] = useState({
    title: '',
    subject: '',
    description: '',
    file: null as File | null
  });
  
  const [subjectForm, setSubjectForm] = useState({
    name: '',
    code: '',
    semester: 1
  });

  const students: Student[] = [
    { id: '1', name: 'Alice Johnson', semester: 1, course: 'Computer Science' },
    { id: '2', name: 'Bob Smith', semester: 1, course: 'Computer Science' },
    { id: '3', name: 'Carol White', semester: 1, course: 'Computer Science' },
  ];

  const subjects = ['Mathematics', 'Physics', 'Computer Science'];
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleNoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically upload the file and save the note data
    console.log('Note submitted:', noteForm);
    setShowNoteForm(false);
    setNoteForm({
      title: '',
      subject: '',
      description: '',
      file: null
    });
  };

  const handleSubjectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically save the new subject
    console.log('Subject submitted:', subjectForm);
    setShowSubjectForm(false);
    setSubjectForm({
      name: '',
      code: '',
      semester: 1
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setNoteForm(prev => ({ ...prev, file: e.target.files![0] }));
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <Users className="w-8 h-8 text-indigo-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">45</h3>
            <p className="text-sm text-gray-600">Total Students</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <BookOpen className="w-8 h-8 text-green-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">3</h3>
            <p className="text-sm text-gray-600">Subjects</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <UserCheck className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">85%</h3>
            <p className="text-sm text-gray-600">Attendance Rate</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <FileText className="w-8 h-8 text-yellow-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">12</h3>
            <p className="text-sm text-gray-600">Notes Posted</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('notes')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'notes'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <FileText className="w-4 h-4 inline-block mr-2" />
          Notes Management
        </button>
        <button
          onClick={() => setActiveTab('subjects')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'subjects'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <BookOpen className="w-4 h-4 inline-block mr-2" />
          Subject Management
        </button>
        <button
          onClick={() => setActiveTab('marks')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'marks'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <ClipboardList className="w-4 h-4 inline-block mr-2" />
          Marks
        </button>
        <button
          onClick={() => setActiveTab('attendance')}
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'attendance'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Calendar className="w-4 h-4 inline-block mr-2" />
          Attendance
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'notes' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Notes Management</h2>
              <button
                onClick={() => setShowNoteForm(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Plus className="w-4 h-4" />
                Add New Note
              </button>
            </div>

            {showNoteForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
                  <h3 className="text-xl font-bold mb-4">Upload New Note</h3>
                  <form onSubmit={handleNoteSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                      <input
                        type="text"
                        value={noteForm.title}
                        onChange={(e) => setNoteForm(prev => ({ ...prev, title: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select
                        value={noteForm.subject}
                        onChange={(e) => setNoteForm(prev => ({ ...prev, subject: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        {subjects.map(subject => (
                          <option key={subject} value={subject}>{subject}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        value={noteForm.description}
                        onChange={(e) => setNoteForm(prev => ({ ...prev, description: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        rows={3}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">File (PDF)</label>
                      <input
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div className="flex justify-end gap-4">
                      <button
                        type="button"
                        onClick={() => setShowNoteForm(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                        Upload Note
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Notes List */}
            <div className="space-y-4">
              {/* Sample notes - replace with actual data */}
              <div className="border rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-lg">Introduction to Data Structures</h3>
                    <p className="text-gray-600 text-sm mt-1">Computer Science • Posted on March 15, 2024</p>
                    <p className="text-gray-700 mt-2">Basic concepts of data structures including arrays, linked lists, and stacks.</p>
                  </div>
                  <button className="text-indigo-600 hover:text-indigo-800">
                    <FileText className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'subjects' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Subject Management</h2>
              <button
                onClick={() => setShowSubjectForm(true)}
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
              >
                <Plus className="w-4 h-4" />
                Add New Subject
              </button>
            </div>

            {showSubjectForm && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                <div className="bg-white rounded-xl p-6 w-full max-w-2xl">
                  <h3 className="text-xl font-bold mb-4">Add New Subject</h3>
                  <form onSubmit={handleSubjectSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject Name</label>
                      <input
                        type="text"
                        value={subjectForm.name}
                        onChange={(e) => setSubjectForm(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Subject Code</label>
                      <input
                        type="text"
                        value={subjectForm.code}
                        onChange={(e) => setSubjectForm(prev => ({ ...prev, code: e.target.value }))}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
                      <select
                        value={subjectForm.semester}
                        onChange={(e) => setSubjectForm(prev => ({ ...prev, semester: parseInt(e.target.value) }))}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        required
                      >
                        {semesters.map(sem => (
                          <option key={sem} value={sem}>Semester {sem}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex justify-end gap-4">
                      <button
                        type="button"
                        onClick={() => setShowSubjectForm(false)}
                        className="px-4 py-2 text-gray-600 hover:text-gray-800"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
                      >
                        Add Subject
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

            {/* Subjects List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject, index) => (
                <div key={index} className="border rounded-lg p-4 hover:border-indigo-300 transition-colors">
                  <h3 className="font-semibold text-lg">{subject}</h3>
                  <p className="text-gray-600 text-sm mt-1">CS10{index + 1}</p>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-sm text-gray-500">Semester {Math.floor(Math.random() * 8) + 1}</span>
                    <button className="text-indigo-600 hover:text-indigo-800">
                      <BookOpen className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'marks' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Enter Marks</h2>
            <div className="space-y-4">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{student.name}</h3>
                    <p className="text-sm text-gray-600">Semester {student.semester}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      placeholder="Enter marks"
                      className="w-24 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'attendance' && (
          <div>
            <h2 className="text-xl font-bold mb-4">Mark Attendance</h2>
            <div className="space-y-4">
              {students.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-semibold">{student.name}</h3>
                    <p className="text-sm text-gray-600">Semester {student.semester}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200">
                      Present
                    </button>
                    <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200">
                      Absent
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}