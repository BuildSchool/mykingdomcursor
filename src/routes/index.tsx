import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import LandingLayout from '../layouts/LandingLayout';
import AuthLayout from '../layouts/AuthLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import AuthGuard from '../components/auth/AuthGuard';

// Landing and Auth Pages
import Landing from '../pages/Landing';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword';

// Dashboard Pages
import {
  Dashboard,
  Alerts,
  QuickActions,
  Properties,
  PropertyManage,
  PropertyAnalytics,
  PropertyHistory,
  TenantManagement,
  TenantInsights,
  LeaseManagement,
  MaintenanceScheduled,
  MaintenanceInsights,
  MaintenanceRequests,
  FinancialsIncome,
  FinancialsOptimizations,
  FinancialsPayments
} from '../pages/dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      { index: true, element: <Landing /> }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <SignUp /> },
      { path: 'forgot-password', element: <ForgotPassword /> }
    ]
  },
  {
    path: '/app',
    element: <AuthGuard><DashboardLayout /></AuthGuard>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'dashboard', element: <Dashboard /> },
      { path: 'dashboard/alerts', element: <Alerts /> },
      { path: 'dashboard/quick-actions', element: <QuickActions /> },
      
      // Properties
      { path: 'properties', element: <Properties /> },
      { path: 'properties/manage', element: <PropertyManage /> },
      { path: 'properties/analytics', element: <PropertyAnalytics /> },
      { path: 'properties/history', element: <PropertyHistory /> },
      
      // Tenants
      { path: 'tenants/management', element: <TenantManagement /> },
      { path: 'tenants/insights', element: <TenantInsights /> },
      { path: 'tenants/leases', element: <LeaseManagement /> },
      
      // Maintenance
      { path: 'maintenance/scheduled', element: <MaintenanceScheduled /> },
      { path: 'maintenance/insights', element: <MaintenanceInsights /> },
      { path: 'maintenance/requests', element: <MaintenanceRequests /> },
      
      // Financials
      { path: 'financials/income', element: <FinancialsIncome /> },
      { path: 'financials/optimizations', element: <FinancialsOptimizations /> },
      { path: 'financials/payments', element: <FinancialsPayments /> }
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}