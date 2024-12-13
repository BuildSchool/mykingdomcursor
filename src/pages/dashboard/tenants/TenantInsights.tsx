import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Calendar, AlertTriangle } from 'lucide-react';

export default function TenantInsights() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tenant Insights</h1>
        <p className="text-gray-600">Analytics and performance metrics for tenants</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-lg">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-green-500 text-sm font-medium">+5.2%</span>
          </div>
          <h3 className="text-sm font-medium text-gray-600">Average Tenant Score</h3>
          <p className="text-2xl font-bold text-gray-900">92.4</p>
        </motion.div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Tenant Performance Trends</h2>
        <div className="h-64 flex items-center justify-center text-gray-400">
          Chart placeholder - Add your preferred charting library
        </div>
      </div>
    </div>
  );
}