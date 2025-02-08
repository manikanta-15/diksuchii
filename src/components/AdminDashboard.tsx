import React, { useState } from 'react';
import { Users, Shield, BookOpen, AlertCircle, FileText, Settings, UserCheck, Bell, Search } from 'lucide-react';
import { StudentDashboard } from './StudentDashboard';
import { FacultyDashboard } from './FacultyDashboard';

interface Issue {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved';
  type: 'student' | 'faculty' | 'system';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
}

export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [showStudentDashboard, setShowStudentDashboard] = useState(false);
  const [showFacultyDashboard, setShowFacultyDashboard] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const issues: Issue[] = [
    {
      id: '1',
      title: 'Unable to access course materials',
      description: 'Students reporting difficulty accessing PDF notes for Data Structures',
      status: 'open',
      type: 'student',
      priority: 'high',
      createdAt: '2024-03-15'
    },
    {
      id: '2',
      title: 'Marks upload system error',
      description: 'Faculty unable to upload mid-semester marks',
      status: 'in-progress',
      type: 'faculty',
      priority: 'high',
      createdAt: '2024-03-14'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-50';
      case 'medium': return 'text-yellow-600 bg-yellow-50';
      case 'low': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open': return 'text-red-600 bg-red-50';
      case 'in-progress': return 'text-blue-600 bg-blue-50';
      case 'resolved': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  if (showStudentDashboard) {
    return (
      <div>
        <button
          onClick={() => setShowStudentDashboard(false)}
          className="mb-4 px-4 py-2 text-indigo-600 hover:text-indigo-800 flex items-center gap-2"
        >
          ← Back to Admin Dashboard
        </button>
        <StudentDashboard />
      </div>
    );
  }

  if (showFacultyDashboard) {
    return (
      <div>
        <button
          onClick={() => setShowFacultyDashboard(false)}
          className="mb-4 px-4 py-2 text-indigo-600 hover:text-indigo-800 flex items-center gap-2"
        >
          ← Back to Admin Dashboard
        </button>
        <FacultyDashboard />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <Users className="w-8 h-8 text-indigo-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">250</h3>
            <p className="text-sm text-gray-600">Total Students</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <UserCheck className="w-8 h-8 text-green-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">25</h3>
            <p className="text-sm text-gray-600">Faculty Members</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">5</h3>
            <p className="text-sm text-gray-600">Active Issues</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center gap-4">
          <BookOpen className="w-8 h-8 text-blue-600" />
          <div>
            <h3 className="text-lg font-semibold text-gray-800">12</h3>
            <p className="text-sm text-gray-600">Departments</p>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search issues, users, or departments..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-4 mb-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeTab === 'overview'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Shield className="w-4 h-4 inline-block mr-2" />
          Overview
        </button>
        <button
          onClick={() => setShowStudentDashboard(true)}
          className="px-4 py-2 rounded-lg bg-white text-gray-600 hover:bg-gray-50 whitespace-nowrap"
        >
          <Users className="w-4 h-4 inline-block mr-2" />
          Student Management
        </button>
        <button
          onClick={() => setShowFacultyDashboard(true)}
          className="px-4 py-2 rounded-lg bg-white text-gray-600 hover:bg-gray-50 whitespace-nowrap"
        >
          <UserCheck className="w-4 h-4 inline-block mr-2" />
          Faculty Management
        </button>
        <button
          onClick={() => setActiveTab('issues')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeTab === 'issues'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <AlertCircle className="w-4 h-4 inline-block mr-2" />
          Issue Management
        </button>
        <button
          onClick={() => setActiveTab('settings')}
          className={`px-4 py-2 rounded-lg whitespace-nowrap ${
            activeTab === 'settings'
              ? 'bg-indigo-600 text-white'
              : 'bg-white text-gray-600 hover:bg-gray-50'
          }`}
        >
          <Settings className="w-4 h-4 inline-block mr-2" />
          System Settings
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow-md p-6">
        {activeTab === 'overview' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">System Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Recent Activities */}
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Bell className="w-5 h-5 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-800">New faculty member registered</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-green-600" />
                    <div>
                      <p className="text-sm text-gray-800">Semester results published</p>
                      <p className="text-xs text-gray-500">5 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* System Health */}
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">System Health</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Server Status</span>
                      <span className="text-sm text-green-600">Operational</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-600">Database Load</span>
                      <span className="text-sm text-yellow-600">Moderate</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'issues' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Issue Management</h2>
              <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                Create Issue
              </button>
            </div>

            <div className="space-y-4">
              {issues.map((issue) => (
                <div key={issue.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-lg">{issue.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{issue.description}</p>
                      <div className="flex gap-2 mt-2">
                        <span className={`px-2 py-1 rounded-full text-xs ${getPriorityColor(issue.priority)}`}>
                          {issue.priority} priority
                        </span>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(issue.status)}`}>
                          {issue.status}
                        </span>
                      </div>
                    </div>
                    <button className="text-indigo-600 hover:text-indigo-800">
                      Resolve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">System Settings</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Email Notifications</h3>
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">Send notifications for new registrations</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">Send notifications for new issues</span>
                  </label>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-4">Security Settings</h3>
                <div className="space-y-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">Enable two-factor authentication</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-indigo-600" />
                    <span className="ml-2 text-gray-700">Require strong passwords</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}