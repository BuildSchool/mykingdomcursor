export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  created_at: string;
  updated_at: string;
}

export interface Property {
  id: string;
  user_id: string;
  name: string;
  address: string;
  type: 'residential' | 'commercial';
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface Tenant {
  id: string;
  property_id: string;
  full_name: string;
  email: string;
  phone: string;
  lease_start: string;
  lease_end: string;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}