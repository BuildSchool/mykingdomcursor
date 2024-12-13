import React from 'react';
import { motion } from 'framer-motion';
import type { SubMenuItem } from './types';

interface SubMenuProps {
  items: SubMenuItem[];
}

export default function SubMenu({ items }: SubMenuProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-3 gap-8">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button className="w-full text-left group">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary-500/10 text-primary-400 group-hover:bg-primary-500/20 group-hover:text-primary-300 transition-colors">
                  {item.icon}
                </div>
                <span className="font-medium text-white group-hover:text-primary-300 transition-colors">
                  {item.label}
                </span>
              </div>
              {item.description && (
                <p className="text-sm text-primary-300 ml-11">
                  {item.description}
                </p>
              )}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}