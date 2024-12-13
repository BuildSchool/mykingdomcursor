import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import LandingLayout from './layouts/LandingLayout';
import DashboardLayout from './layouts/DashboardLayout';
import AuthLayout from './layouts/AuthLayout';
import Landing from './pages/Landing';
import Dashboard from './pages/dashboard/Dashboard';
import Properties from './pages/dashboard/Properties';
import TenantManagement from './pages/dashboard/tenants/TenantManagement';
import LeaseManagement from './pages/dashboard/tenants/LeaseManagement';
import MaintenanceRequests from './pages/dashboard/maintenance/MaintenanceRequests';
import Alerts from './pages/dashboard/alerts/Alerts';
import SignUp from './pages/auth/SignUp';
import Login from './pages/auth/Login';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route element={<LandingLayout />}>
          <Route path="/" element={<Landing />} />
        </Route>

        {/* Auth routes */}
        <Route element={<AuthLayout><Outlet /></AuthLayout>}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* Dashboard routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/properties" element={<Properties />} />
          <Route path="/dashboard/tenants" element={<TenantManagement />} />
          <Route path="/dashboard/leases" element={<LeaseManagement />} />
          <Route path="/dashboard/maintenance" element={<MaintenanceRequests />} />
          <Route path="/dashboard/alerts" element={<Alerts />} />
        </Route>
      </Routes>
    </Router>
  );
}