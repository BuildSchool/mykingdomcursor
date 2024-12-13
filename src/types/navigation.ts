import { ReactNode } from 'react';

export interface SubMenuItem {
  id: string;
  label: string;
  icon: ReactNode;
  path: string;
  description?: string;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: ReactNode;
  path?: string;
  submenu?: SubMenuItem[];
}

export interface NavigationConfig {
  main: MenuItem[];
  secondary: MenuItem[];
}