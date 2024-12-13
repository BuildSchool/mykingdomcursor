import React from 'react';
import { Building2, Users, Wallet, TrendingUp } from 'lucide-react';
import DashboardHeader from '../../components/dashboard/DashboardHeader';
import MetricsGrid from '../../components/dashboard/metrics/MetricsGrid';
import RevenueChart from '../../components/dashboard/charts/RevenueChart';
import OccupancyChart from '../../components/dashboard/charts/OccupancyChart';
import type { MetricData } from '../../components/dashboard/metrics/types';

const metrics: MetricData[] = [
  {
    id: 'properties',
    label: 'Total Properties',
    value: '12',
    change: '+16.7%',
    icon: <Building2 className="w-5 h-5" />,
    color: 'from-primary-500 to-primary-600'
  },
  {
    id: 'tenants',
    label: 'Active Tenants',
    value: '48',
    change: '+10.4%',
    icon: <Users className="w-5 h-5" />,
    color: 'from-secondary-500 to-secondary-600'
  },
  {
    id: 'revenue',
    label: 'Monthly Revenue',
    value: '$52,450',
    change: '+12.3%',
    icon: <Wallet className="w-5 h-5" />,
    color: 'from-accent-500 to-accent-600'
  },
  {
    id: 'occupancy',
    label: 'Occupancy Rate',
    value: '94%',
    change: '+3.2%',
    icon: <TrendingUp className="w-5 h-5" />,
    color: 'from-emerald-500 to-teal-600'
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <MetricsGrid metrics={metrics} />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <OccupancyChart />
      </div>
    </div>
  );
}