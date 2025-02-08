import React from 'react';
import { UserCircle2, GraduationCap, Users, UserPlus } from 'lucide-react';

interface RoleSelectionProps {
  onRoleSelect: (role: string) => void;
  onRegisterClick: () => void;
}

interface LoginOptionProps {
  icon: React.ElementType;
  title: string;
  onClick: () => void;
}

function LoginOption({ icon: Icon, title, onClick }: LoginOptionProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 space-y-3 w-full max-w-[250px]"
    >
      <Icon className="w-12 h-12 text-indigo-600" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{title === 'Register' ? 'Create new account' : `Login as ${title.toLowerCase()}`}</p>
    </button>
  );
}

export function RoleSelection({ onRoleSelect, onRegisterClick }: RoleSelectionProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to Diksuchi
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Please select your role or create a new account
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        <LoginOption
          icon={UserPlus}
          title="Register"
          onClick={onRegisterClick}
        />
        <LoginOption
          icon={UserCircle2}
          title="Admin"
          onClick={() => onRoleSelect('Admin')}
        />
        <LoginOption
          icon={GraduationCap}
          title="Student"
          onClick={() => onRoleSelect('Student')}
        />
        <LoginOption
          icon={Users}
          title="Faculty"
          onClick={() => onRoleSelect('Faculty')}
        />
      </div>
    </div>
  );
}