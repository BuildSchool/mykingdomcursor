import React from 'react';
import { motion } from 'framer-motion';
import { History, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function PropertyHistory() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Property History</h1>
          <p className="text-gray-600">View historical data and changes</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h2>

          <div className="space-y-4">
            {/* History Item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg"
            >
              <div className="p-2 bg-primary-100 text-primary-600 rounded-lg">
                <History className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900">Rent Adjustment</h3>
                  <span className="text-sm text-gray-500">2 hours ago</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Monthly rent updated from $2,500 to $2,700
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}