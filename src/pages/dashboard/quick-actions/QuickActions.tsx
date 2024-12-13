import React from 'react';
import { motion } from 'framer-motion';
import { Plus, FileText, MessageSquare, Wrench, DollarSign } from 'lucide-react';

const actions = [
  {
    id: 'add-property',
    title: 'Add New Property',
    description: 'List a new property in your portfolio',
    icon: Plus,
    color: 'bg-primary-500'
  },
  {
    id: 'create-lease',
    title: 'Create Lease Agreement',
    description: 'Generate a new lease document',
    icon: FileText,
    color: 'bg-secondary-500'
  },
  {
    id: 'maintenance',
    title: 'Schedule Maintenance',
    description: 'Book property maintenance or repairs',
    icon: Wrench,
    color: 'bg-accent-500'
  },
  {
    id: 'collect-rent',
    title: 'Collect Rent',
    description: 'Process rent collection for properties',
    icon: DollarSign,
    color: 'bg-emerald-500'
  },
  {
    id: 'message',
    title: 'Message Tenants',
    description: 'Send communications to tenants',
    icon: MessageSquare,
    color: 'bg-blue-500'
  }
];

export default function QuickActions() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Quick Actions</h1>
        <p className="text-gray-600">Frequently used tasks and operations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={action.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="text-left group"
          >
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-primary-100 transition-all duration-300">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-xl ${action.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  <action.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{action.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{action.description}</p>
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}