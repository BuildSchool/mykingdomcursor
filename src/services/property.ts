import { supabase } from '../config/supabase';
import type { Property } from '../types/supabase';

export const propertyService = {
  getProperties: async (userId: string) => {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    
    if (error) throw error;
    return data as Property[];
  },

  getProperty: async (propertyId: string) => {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', propertyId)
      .single();
    
    if (error) throw error;
    return data as Property;
  },

  createProperty: async (userId: string, property: Omit<Property, 'id' | 'user_id' | 'created_at' | 'updated_at'>) => {
    const { data, error } = await supabase
      .from('properties')
      .insert([{ ...property, user_id: userId }])
      .select()
      .single();
    
    if (error) throw error;
    return data as Property;
  },

  updateProperty: async (propertyId: string, updates: Partial<Property>) => {
    const { data, error } = await supabase
      .from('properties')
      .update(updates)
      .eq('id', propertyId)
      .select()
      .single();
    
    if (error) throw error;
    return data as Property;
  },

  deleteProperty: async (propertyId: string) => {
    const { error } = await supabase
      .from('properties')
      .delete()
      .eq('id', propertyId);
    
    if (error) throw error;
  },
};