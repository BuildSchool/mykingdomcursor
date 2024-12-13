import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LayoutDashboard, Building2, Users, Wrench, 
  BarChart3, LineChart, Scale, Globe2, Leaf,
  Settings, HelpCircle, ChevronDown, Menu, X,
  Bell, Search, UserCircle
} from 'lucide-react';
import MobileMenu from './MobileMenu';
import SubMenu from './SubMenu';
import { navigationItems } from './navigationData';
import type { NavigationItem } from './types';

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleItemHover = (itemId: string) => {
    setActiveItem(itemId);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
    setActiveItem(null);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900/95 to-primary-900/95 backdrop-blur-xl border-b border-primary-500/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Building2 className="w-8 h-8 text-primary-500" />
            <span className="text-xl font-bold bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent">
              MyKingdom
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item: NavigationItem) => (
              <div
                key={item.id}
                onMouseEnter={() => handleItemHover(item.id)}
                className="relative"
              >
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2
                    ${activeItem === item.id 
                      ? 'text-white bg-primary-500/10' 
                      : 'text-primary-200 hover:text-white hover:bg-primary-500/5'
                    }`}
                >
                  {item.icon}
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <button className="p-2 text-primary-200 hover:text-white hover:bg-primary-500/10 rounded-lg transition-colors">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-primary-200 hover:text-white hover:bg-primary-500/10 rounded-lg transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-accent-500 rounded-full" />
            </button>

            {/* User Menu */}
            <button className="p-2 text-primary-200 hover:text-white hover:bg-primary-500/10 rounded-lg transition-colors">
              <UserCircle className="w-5 h-5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-primary-200 hover:text-white hover:bg-primary-500/10 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {isOpen && activeItem && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 bg-gradient-to-b from-gray-900/95 to-primary-900/95 backdrop-blur-xl border-b border-primary-500/20"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={handleMouseLeave}
          >
            <SubMenu 
              items={navigationItems.find(item => item.id === activeItem)?.submenu || []}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navigationItems}
      />
    </header>
  );
}