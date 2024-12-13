import { ReactNode } from 'react';

export interface SubMenuItem {
  id: string;
  label: string;
  icon: ReactNode;
  description?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
  icon: ReactNode;
  submenu: SubMenuItem[];
}