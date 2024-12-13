import React from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItemProps {
  to?: string;
  icon: React.ReactNode;
  label: string;
  isLast?: boolean;
}

export default function BreadcrumbItem({ to, icon, label, isLast }: BreadcrumbItemProps) {
  const content = (
    <div className="flex items-center gap-1.5">
      <span className="w-4 h-4">
        {icon}
      </span>
      <span>{label}</span>
    </div>
  );

  if (isLast) {
    return (
      <div className="text-gray-900 font-medium">
        {content}
      </div>
    );
  }

  if (to) {
    return (
      <Link
        to={to}
        className="text-gray-600 hover:text-primary-600 transition-colors"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="text-gray-600">
      {content}
    </div>
  );
}