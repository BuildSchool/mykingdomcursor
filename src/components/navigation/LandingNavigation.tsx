import { Link } from 'react-router-dom';
import { Building2 } from 'lucide-react';

export default function LandingNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary-600" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
              MyKingdom
            </span>
          </Link>
          
          <div className="flex items-center gap-4">
            <Link 
              to="/auth/login"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/auth/signup"
              className="px-4 py-2 bg-primary-500 hover:bg-primary-400 text-white rounded-lg transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}