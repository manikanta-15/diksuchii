import React, { useState } from 'react';
import { RoleSelection } from './components/RoleSelection';
import { LoginForm } from './components/LoginForm';
import { RegisterForm } from './components/RegisterForm';
import { StudentDashboard } from './components/StudentDashboard';
import { FacultyDashboard } from './components/FacultyDashboard';
import { AdminDashboard } from './components/AdminDashboard';

interface RegisterData {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  role: string;
  branch: string;
}

export default function App() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRoleSelect = (role: string) => {
    setSelectedRole(role);
  };

  const handleLogin = (username: string, password: string) => {
    // In a real app, you would validate credentials here
    setIsLoggedIn(true);
  };

  const handleRegister = (data: RegisterData) => {
    // In a real app, you would send this data to your backend
    console.log('Registration data:', data);
    // After successful registration, you might want to:
    // 1. Show a success message
    // 2. Automatically log the user in
    // 3. Redirect them to their dashboard
    setIsLoggedIn(true);
    setSelectedRole(data.role);
  };

  const handleBack = () => {
    setSelectedRole(null);
    setIsLoggedIn(false);
    setIsRegistering(false);
  };

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };

  if (isLoggedIn) {
    if (selectedRole === 'Admin') {
      return <AdminDashboard />;
    }
    if (selectedRole === 'Student') {
      return <StudentDashboard />;
    }
    if (selectedRole === 'Faculty') {
      return <FacultyDashboard />;
    }
  }

  if (isRegistering) {
    return <RegisterForm onSubmit={handleRegister} onBack={handleBack} />;
  }

  if (selectedRole) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <LoginForm
          role={selectedRole}
          onSubmit={handleLogin}
          onBack={handleBack}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <RoleSelection onRoleSelect={handleRoleSelect} onRegisterClick={handleRegisterClick} />
    </div>
  );
}