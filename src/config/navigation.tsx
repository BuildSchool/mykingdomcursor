import React from 'react';
import {
  LayoutDashboard, PieChart, Bell, Zap, Building2, Users, FileText, 
  BarChart2, History, Settings, Wallet, MessageSquare, Calendar, 
  ShieldCheck, HelpCircle, Wrench, Target, TrendingUp, Globe2, 
  Leaf, DollarSign, LineChart, BookOpen, MessageCircle, Lightbulb,
  Scale, FileCheck, Landmark, Plug, Award
} from 'lucide-react';
import type { NavigationConfig } from '../types/navigation';

export const navigationConfig: NavigationConfig = {
  main: [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-5 h-5" />,
      submenu: [
        {
          id: 'overview',
          label: 'Overview',
          icon: <PieChart className="w-5 h-5" />,
          path: '/app/dashboard/overview',
          description: 'Property Performance Summary'
        },
        {
          id: 'alerts',
          label: 'Key Alerts',
          icon: <Bell className="w-5 h-5" />,
          path: '/app/dashboard/alerts',
          description: 'Overdue rent, maintenance issues'
        },
        {
          id: 'quick-actions',
          label: 'Quick Actions',
          icon: <Zap className="w-5 h-5" />,
          path: '/app/dashboard/quick-actions',
          description: 'Renew Lease, Collect Rent'
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
          icon: <Building2 className="w-5 h-5" />,
          path: '/app/properties/manage',
          description: 'View All Properties, Add/Edit Property'
        },
        {
          id: 'analytics',
          label: 'Details & Analytics',
          icon: <BarChart2 className="w-5 h-5" />,
          path: '/app/properties/analytics',
          description: 'Occupancy Status, Financial Performance'
        },
        {
          id: 'history',
          label: 'Property History',
          icon: <History className="w-5 h-5" />,
          path: '/app/properties/history',
          description: 'Historical Data and Changes'
        }
      ]
    },
    {
      id: 'tenants',
      label: 'Tenants',
      icon: <Users className="w-5 h-5" />,
      submenu: [
        {
          id: 'management',
          label: 'Tenant Management',
          icon: <Users className="w-5 h-5" />,
          path: '/app/tenants/management',
          description: 'View Tenant Profiles, Communication Hub'
        },
        {
          id: 'insights',
          label: 'Tenant Insights',
          icon: <Lightbulb className="w-5 h-5" />,
          path: '/app/tenants/insights',
          description: 'Tenant Scoring, Rent Payment History'
        },
        {
          id: 'leases',
          label: 'Lease Management',
          icon: <FileText className="w-5 h-5" />,
          path: '/app/tenants/leases',
          description: 'Active Leases, Renewal Suggestions'
        }
      ]
    },
    {
      id: 'maintenance',
      label: 'Maintenance',
      icon: <Wrench className="w-5 h-5" />,
      submenu: [
        {
          id: 'scheduled',
          label: 'Scheduled Maintenance',
          icon: <Calendar className="w-5 h-5" />,
          path: '/app/maintenance/scheduled',
          description: 'Upcoming Tasks, Vendor Assignments'
        },
        {
          id: 'insights',
          label: 'Maintenance Insights',
          icon: <TrendingUp className="w-5 h-5" />,
          path: '/app/maintenance/insights',
          description: 'Predictive Alerts, Cost Trends'
        },
        {
          id: 'requests',
          label: 'Maintenance Requests',
          icon: <MessageCircle className="w-5 h-5" />,
          path: '/app/maintenance/requests',
          description: 'Tenant-Submitted, Completed & Pending'
        }
      ]
    },
    {
      id: 'financials',
      label: 'Financials',
      icon: <Wallet className="w-5 h-5" />,
      submenu: [
        {
          id: 'income',
          label: 'Income & Expenses',
          icon: <DollarSign className="w-5 h-5" />,
          path: '/app/financials/income',
          description: 'Rental Income Tracking, Expense Logs'
        },
        {
          id: 'optimizations',
          label: 'Optimizations',
          icon: <Target className="w-5 h-5" />,
          path: '/app/financials/optimizations',
          description: 'ROI Analysis, Yield Improvement'
        },
        {
          id: 'payments',
          label: 'Payments',
          icon: <Wallet className="w-5 h-5" />,
          path: '/app/financials/payments',
          description: 'Digital Wallet, Payment History'
        }
      ]
    },
    {
      id: 'insights',
      label: 'Insights & Analytics',
      icon: <LineChart className="w-5 h-5" />,
      submenu: [
        {
          id: 'market-trends',
          label: 'Market Trends',
          icon: <TrendingUp className="w-5 h-5" />,
          path: '/app/insights/market-trends',
          description: 'Property Value Trends, Rental Analysis'
        },
        {
          id: 'opportunities',
          label: 'Investment Opportunities',
          icon: <Target className="w-5 h-5" />,
          path: '/app/insights/opportunities',
          description: 'Data-Driven Recommendations'
        }
      ]
    },
    {
      id: 'compliance',
      label: 'Compliance & Regulations',
      icon: <Scale className="w-5 h-5" />,
      submenu: [
        {
          id: 'alerts',
          label: 'Alerts & Updates',
          icon: <Bell className="w-5 h-5" />,
          path: '/app/compliance/alerts',
          description: 'Regional Compliance Updates, Tax Alerts'
        },
        {
          id: 'documentation',
          label: 'Documentation',
          icon: <FileCheck className="w-5 h-5" />,
          path: '/app/compliance/documentation',
          description: 'Compliance Checklists, Tax Filings'
        }
      ]
    },
    {
      id: 'global',
      label: 'Cross-Border Management',
      icon: <Globe2 className="w-5 h-5" />,
      submenu: [
        {
          id: 'tools',
          label: 'Multi-Country Tools',
          icon: <Landmark className="w-5 h-5" />,
          path: '/app/global/tools',
          description: 'Currency Settings, Tax & Legal Support'
        },
        {
          id: 'portfolio',
          label: 'Global Portfolio',
          icon: <Building2 className="w-5 h-5" />,
          path: '/app/global/portfolio',
          description: 'Regional Insights, Performance by Country'
        }
      ]
    },
    {
      id: 'green',
      label: 'Green Property Management',
      icon: <Leaf className="w-5 h-5" />,
      submenu: [
        {
          id: 'energy',
          label: 'Energy Analytics',
          icon: <Plug className="w-5 h-5" />,
          path: '/app/green/energy',
          description: 'Consumption Tracking, Cost Insights'
        },
        {
          id: 'sustainability',
          label: 'Sustainability Tools',
          icon: <Award className="w-5 h-5" />,
          path: '/app/green/sustainability',
          description: 'Upgrade Recommendations, Certifications'
        }
      ]
    }
  ],
  secondary: [
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-5 h-5" />,
      path: '/app/settings',
      description: 'Account Settings, Preferences'
    },
    {
      id: 'help',
      label: 'Help & Support',
      icon: <HelpCircle className="w-5 h-5" />,
      path: '/app/help',
      description: 'Tutorials, FAQs, Support'
    }
  ]
};