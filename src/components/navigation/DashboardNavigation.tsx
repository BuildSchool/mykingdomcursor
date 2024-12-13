import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { navigationConfig } from '../../config/navigation';
import type { MenuItem, SubMenuItem } from '../../types/navigation';

interface DashboardNavigationProps {
  isOpen: boolean;
}

export default function DashboardNavigation({ isOpen }: DashboardNavigationProps) {
  const location = useLocation();
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const isActive = (path?: string) => {
    if (!path) return false;
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const renderMenuItem = (item: MenuItem) => (
    <div key={item.id} className="mb-1">
      <button
        onClick={() => toggleItem(item.id)}
        className={`
          w-full flex items-center justify-between p-2 rounded-lg text-sm
          transition-colors duration-200
          ${isActive(item.path)
            ? 'bg-primary-50 text-primary-600'
            : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600'
          }
        `}
      >
        <div className="flex items-center gap-2">
          {item.icon}
          <span className="font-medium">{item.label}</span>
        </div>
        {item.submenu && (
          expandedItems.includes(item.id)
            ? <ChevronDown className="w-4 h-4" />
            : <ChevronRight className="w-4 h-4" />
        )}
      </button>

      <AnimatePresence>
        {item.submenu && expandedItems.includes(item.id) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 mt-1 space-y-1"
          >
            {item.submenu.map((subItem: SubMenuItem) => (
              <Link
                key={subItem.id}
                to={subItem.path}
                className={`
                  flex items-center gap-2 p-2 rounded-lg text-sm
                  transition-colors duration-200
                  ${isActive(subItem.path)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                  }
                `}
              >
                {subItem.icon}
                <span>{subItem.label}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <aside
      className={`
        fixed top-16 bottom-0 left-0 z-40
        w-64 bg-white border-r border-gray-200
        transition-transform duration-300
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:relative lg:translate-x-0
      `}
    >
      <div className="h-full overflow-y-auto py-4 px-3">
        <nav className="space-y-6">
          {/* Main Navigation */}
          <div className="space-y-1">
            {navigationConfig.main.map(renderMenuItem)}
          </div>

          {/* Secondary Navigation */}
          <div className="pt-6 mt-6 border-t border-gray-200">
            {navigationConfig.secondary.map(item => (
              <Link
                key={item.id}
                to={item.path || '#'}
                className="flex items-center gap-2 p-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
}