import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle, CheckCircle } from 'lucide-react';

export default function LeaseManagement() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Lease Management</h1>
        <p className="text-gray-600">Track and manage property leases</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Active Leases</h3>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Upcoming Renewals</h2>
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <AlertTriangle className="w-5 h-5 text-amber-500" />
              <div>
                <h3 className="font-medium text-gray-900">Unit 4B - John Doe</h3>
                <p className="text-sm text-gray-600">Expires in 30 days</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors">
              Renew Lease
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}