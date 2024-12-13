import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight } from 'lucide-react';
import type { NavigationItem } from './types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  items: NavigationItem[];
}

export default function MobileMenu({ isOpen, onClose, items }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setExpandedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-gradient-to-b from-gray-900/95 to-primary-900/95 backdrop-blur-xl border-b border-primary-500/20"
        >
          <nav className="container mx-auto px-4 py-4">
            {items.map((item) => (
              <div key={item.id} className="mb-2">
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-center justify-between p-3 rounded-lg text-primary-200 hover:text-white hover:bg-primary-500/10 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    {item.icon}
                    {item.label}
                  </span>
                  {expandedItems.includes(item.id) ? (
                    <ChevronDown className="w-5 h-5" />
                  ) : (
                    <ChevronRight className="w-5 h-5" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedItems.includes(item.id) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 mt-2 space-y-2"
                    >
                      {item.submenu.map((subItem) => (
                        <button
                          key={subItem.id}
                          className="w-full flex items-center gap-2 p-2 rounded-lg text-sm text-primary-300 hover:text-white hover:bg-primary-500/10 transition-colors"
                        >
                          {subItem.icon}
                          {subItem.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}