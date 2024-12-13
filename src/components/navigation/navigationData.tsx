import React from 'react';
import {
  LayoutDashboard,
  PieChart,
  Bell,
  Zap,
  Building2,
  BarChart2,
  Database,
  History
} from 'lucide-react';
import type { NavigationItem } from './types';

export const navigationItems: NavigationItem[] = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <LayoutDashboard className="w-5 h-5" />,
    submenu: [
      {
        id: 'overview',
        label: 'Overview',
        icon: <PieChart className="w-5 h-5" />,
        description: 'Get a bird\'s eye view of your entire portfolio'
      },
      {
        id: 'alerts',
        label: 'Key Alerts',
        icon: <Bell className="w-5 h-5" />,
        description: 'Stay informed about critical updates'
      },
      {
        id: 'quick-actions',
        label: 'Quick Actions',
        icon: <Zap className="w-5 h-5" />,
        description: 'Access frequently used features instantly'
      }
    ]
  },
  {
    id: 'properties',
    label: 'Properties',
    icon: <Building2 className="w-5 h-5" />,
    submenu: [
      {
        id: 'manage',
        label: 'Manage Properties',
        icon: <Database className="w-5 h-5" />,
        description: 'Add, edit, and manage your property portfolio'
      },
      {
        id: 'analytics',
        label: 'Details & Analytics',
        icon: <BarChart2 className="w-5 h-5" />,
        description: 'Deep dive into property performance metrics'
      },
      {
        id: 'history',
        label: 'Property History',
        icon: <History className="w-5 h-5" />,
        description: 'View historical data and trends'
      }
    ]
  }
];