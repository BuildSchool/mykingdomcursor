import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Settings, Trash2 } from 'lucide-react';

export default function PropertyManage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Manage Properties</h1>
          <p className="text-gray-600">Add, edit, and manage your properties</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Property List</h2>
            <button className="px-4 py-2 bg-primary-500 hover:bg-primary-400 text-white rounded-lg transition-colors">
              Add New Property
            </button>
          </div>

          <div className="space-y-4">
            {/* Property Item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg group hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Luxury Villa</h3>
                  <p className="text-sm text-gray-600">123 Main St, New York</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-white rounded-lg transition-colors">
                  <Users className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-primary-600 hover:bg-white rounded-lg transition-colors">
                  <Settings className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-white rounded-lg transition-colors">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}