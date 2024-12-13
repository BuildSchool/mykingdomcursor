import { supabase } from '../config/supabase';
import type { Tenant } from '../types/supabase';

export const tenantService = {
  getTenants: async (propertyId: string) => {
    const { data, error } = await supabase
      .from('tenants')
      .select('*')
      .eq('property_id', propertyId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Tenant[];
  },

  getTenant: async (tenantId: string) => {
    const { data, error } = await supabase
      .from('tenants')
      .select('*')
      .eq('id', tenantId)
      .single();
    
    if (error) throw error;
    return data as Tenant;
  },

  createTenant: async (tenant: Omit<Tenant, 'id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('tenants')
      .insert([tenant])
      .select()
      .single();
    
    if (error) throw error;
    return data as Tenant;
  },

  updateTenant: async (tenantId: string, updates: Partial<Tenant>) => {
    const { data, error } = await supabase
      .from('tenants')
      .update(updates)
      .eq('id', tenantId)
      .select()
      .single();
    
    if (error) throw error;
    return data as Tenant;
  },

  deleteTenant: async (tenantId: string) => {
    const { error } = await supabase
      .from('tenants')
      .delete()
      .eq('id', tenantId);
    
    if (error) throw error;
  },
};