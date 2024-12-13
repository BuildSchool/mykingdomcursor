import React from 'react';

interface DashboardCardProps {
  label: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
}

export default function DashboardCard({
  label,
  value,
  change,
  icon,
  color
}: DashboardCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
          {React.cloneElement(icon as React.ReactElement, {
            className: 'text-white'
          })}
        </div>
        <span className="text-sm font-medium text-green-500">{change}</span>
      </div>
      <h3 className="text-sm font-medium text-gray-500 mb-1">{label}</h3>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );
}