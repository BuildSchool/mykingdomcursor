import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { MetricProps } from './types';

export default function MetricCard({ label, value, change, icon, color, index }: MetricProps) {
  const isPositive = !change.startsWith('-');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:border-primary-100 transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${color} group-hover:scale-110 transition-transform duration-300`}>
            {React.cloneElement(icon as React.ReactElement, {
              className: 'w-6 h-6 text-white'
            })}
          </div>
          <div className={`flex items-center gap-1 ${isPositive ? 'text-green-500' : 'text-red-500'} text-sm font-medium`}>
            {isPositive ? (
              <ArrowUpRight className="w-4 h-4" />
            ) : (
              <ArrowDownRight className="w-4 h-4" />
            )}
            {change}
          </div>
        </div>
        <h3 className="text-sm font-medium text-gray-600 mb-1">{label}</h3>
        <p className="text-2xl font-bold text-gray-900">{value}</p>
      </div>
    </motion.div>
  );
}