import { motion } from 'framer-motion';
import { Target, TrendingUp } from 'lucide-react';

export default function FinancialsOptimizations() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Financial Optimizations</h1>
        <p className="text-gray-600">ROI Analysis and Improvement Suggestions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-primary-100 text-primary-600 rounded-lg">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Portfolio ROI</h3>
              <p className="text-2xl font-bold text-gray-900">12.8%</p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Optimization Opportunities</h2>
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <TrendingUp className="w-5 h-5 text-green-500" />
              <div>
                <h3 className="font-medium text-gray-900">Rental Rate Optimization</h3>
                <p className="text-sm text-gray-600">Potential 8% increase based on market analysis</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors">
              View Details
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
