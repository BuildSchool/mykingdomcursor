import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Bell, Search, UserCircle } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';
import Logo from '../common/Logo';

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

export default function DashboardHeader({ onMenuClick }: DashboardHeaderProps) {
  const { signOut } = useAuthStore();

  return (
    <header className="fixed top-0 left-0 right-0 h-16 z-50 bg-white border-b border-gray-200">
      <div className="h-full px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-600 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>

          <Link to="/app">
            <Logo />
          </Link>
        </div>

        {/* ... rest of the component */}
      </div>
    </header>
  );
}