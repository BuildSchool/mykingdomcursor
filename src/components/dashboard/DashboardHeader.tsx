import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Track your property portfolio performance</p>
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white rounded-lg transition-all duration-300 shadow-sm hover:shadow-md"
      >
        <Plus className="w-5 h-5" />
        Add Property
      </motion.button>
    </div>
  );
}