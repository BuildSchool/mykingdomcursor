import React from 'react';
import { motion } from 'framer-motion';
import { Bell, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const alerts = [
  {
    id: 1,
    type: 'warning',
    title: 'Maintenance Required',
    message: 'Property at 123 Main St needs HVAC maintenance',
    time: '2 hours ago',
    icon: AlertTriangle,
    color: 'text-amber-500'
  },
  {
    id: 2,
    type: 'success',
    title: 'Rent Payment Received',
    message: 'Tenant John Doe submitted monthly rent payment',
    time: '4 hours ago',
    icon: CheckCircle,
    color: 'text-green-500'
  },
  {
    id: 3,
    type: 'info',
    title: 'Lease Expiring Soon',
    message: 'Unit 4B lease expires in 30 days',
    time: '1 day ago',
    icon: Clock,
    color: 'text-blue-500'
  }
];

export default function Alerts() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Key Alerts</h1>
          <p className="text-gray-600">Stay informed about important updates</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-lg hover:bg-primary-100 transition-colors">
          <Bell className="w-5 h-5" />
          Mark All as Read
        </button>
      </div>

      <div className="space-y-4">
        {alerts.map((alert, index) => (
          <motion.div
            key={alert.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:border-primary-100 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className={`p-2 rounded-lg bg-white shadow-sm ${alert.color}`}>
                <alert.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">{alert.title}</h3>
                    <p className="text-gray-600 mt-1">{alert.message}</p>
                  </div>
                  <span className="text-sm text-gray-500">{alert.time}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}