import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNavigation from '../components/navigation/DashboardNavigation';
import DashboardHeader from '../components/navigation/DashboardHeader';
import DashboardBreadcrumbs from '../components/navigation/DashboardBreadcrumbs';

export default function DashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <div className="flex h-[calc(100vh-4rem)]">
        <DashboardNavigation isOpen={isSidebarOpen} />
        <main className="flex-1 overflow-auto">
          {/* Breadcrumbs Container */}
          <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-6 py-3">
            <DashboardBreadcrumbs />
          </div>
          {/* Page Content */}
          <div className="p-6">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}