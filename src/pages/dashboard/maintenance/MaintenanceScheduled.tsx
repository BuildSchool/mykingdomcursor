import { motion } from 'framer-motion';
import { Plus, Calendar, Clock, CheckCircle } from 'lucide-react';

export default function MaintenanceScheduled() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Scheduled Maintenance</h1>
          <p className="text-gray-600">Track and manage upcoming maintenance tasks</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-400 text-white rounded-lg transition-colors">
          <Plus className="w-5 h-5" />
          Schedule Task
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
              <Calendar className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Upcoming Tasks</h3>
              <p className="text-2xl font-bold text-gray-900">8</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Maintenance Schedule</h2>
        <div className="space-y-4">
          {/* Example Task */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-primary-600" />
              <div>
                <h3 className="font-medium text-gray-900">HVAC Maintenance - Unit 4B</h3>
                <p className="text-sm text-gray-600">Scheduled for March 15, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm">
                Pending
              </span>
              <button className="text-gray-400 hover:text-primary-600">
                <CheckCircle className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}