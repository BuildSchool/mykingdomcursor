import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { navigationItems } from './navigationData';

export default function DashboardBreadcrumbs() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);

  const getBreadcrumbs = () => {
    const breadcrumbs = [];
    let currentPath = '';

    pathSegments.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      if (index === 0) return; // Skip 'app' segment

      const item = navigationItems.find(item => item.id === segment);
      if (item) {
        breadcrumbs.push({
          label: item.label,
          icon: item.icon,
          path: currentPath,
          isLast: index === pathSegments.length - 1
        });
      } else {
        const parentItem = navigationItems.find(item => 
          item.submenu.some(sub => sub.id === segment)
        );
        if (parentItem) {
          const subItem = parentItem.submenu.find(sub => sub.id === segment);
          if (subItem) {
            if (!breadcrumbs.some(b => b.label === parentItem.label)) {
              breadcrumbs.push({
                label: parentItem.label,
                icon: parentItem.icon,
                path: `${currentPath.split('/').slice(0, -1).join('/')}`,
                isLast: false
              });
            }
            breadcrumbs.push({
              label: subItem.label,
              icon: subItem.icon,
              path: currentPath,
              isLast: index === pathSegments.length - 1
            });
          }
        }
      }
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center space-x-2 text-sm">
      <Link
        to="/app"
        className="flex items-center gap-1 text-gray-600 hover:text-primary-600 transition-colors"
      >
        <Home className="w-4 h-4" />
        <span>Home</span>
      </Link>

      {breadcrumbs.map((crumb, index) => (
        <React.Fragment key={crumb.path}>
          <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
          {crumb.isLast ? (
            <div className="flex items-center gap-1.5">
              <span className="w-4 h-4 text-gray-600">
                {crumb.icon}
              </span>
              <span className="text-gray-900 font-medium">
                {crumb.label}
              </span>
            </div>
          ) : (
            <Link
              to={crumb.path}
              className="flex items-center gap-1.5 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <span className="w-4 h-4">
                {crumb.icon}
              </span>
              {crumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}