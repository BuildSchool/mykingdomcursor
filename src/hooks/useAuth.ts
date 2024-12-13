import { useState, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { Provider } from '@supabase/supabase-js';
import { authConfig } from '../config/auth';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const signIn = useCallback(async (email: string, password: string) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      navigate('/dashboard');
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const signUp = useCallback(async (email: string, password: string) => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${authConfig.google.redirectUrl}/auth/callback`
      }
    });
    if (error) throw error;
  }, []);

  const signInWithProvider = useCallback(async (provider: Provider) => {
    try {
      setIsLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${authConfig.google.redirectUrl}/dashboard`,
          queryParams: provider === 'google' ? {
            access_type: 'offline',
            prompt: 'consent',
          } : undefined
        }
      });
      if (error) throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const resetPassword = useCallback(async (email: string) => {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${authConfig.google.redirectUrl}/auth/reset-password`,
    });
    if (error) throw error;
  }, []);

  const signOut = useCallback(async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  }, []);

  return {
    isLoading,
    signIn,
    signUp,
    signInWithProvider,
    resetPassword,
    signOut
  };
}