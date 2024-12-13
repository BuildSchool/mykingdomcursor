import React from 'react';
import { Outlet } from 'react-router-dom';
import LandingNavigation from '../components/navigation/LandingNavigation';

export default function LandingLayout() {
  return (
    <div className="min-h-screen bg-white">
      <LandingNavigation />
      <div className="pt-16">
        <Outlet />
      </div>
    </div>
  );
}