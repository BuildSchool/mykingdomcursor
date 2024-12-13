import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AuthInput from './AuthInput';
import SocialButtons from './SocialButtons';
import FormDivider from './FormDivider';

interface AuthFormProps {
  type: 'login' | 'signup' | 'forgot';
  onSubmit: (data: any) => void;
  isLoading: boolean;
  error?: string;
}

const titles = {
  login: {
    title: 'Welcome back',
    subtitle: 'Sign in to your account',
    submitText: 'Sign in',
    alternateText: "Don't have an account?",
    alternateLinkText: 'Sign up',
    alternateLink: '/auth/signup'
  },
  signup: {
    title: 'Create your account',
    subtitle: 'Start managing your properties with AI-powered insights',
    submitText: 'Create account',
    alternateText: 'Already have an account?',
    alternateLinkText: 'Sign in',
    alternateLink: '/auth/login'
  },
  forgot: {
    title: 'Reset password',
    subtitle: 'Enter your email to receive reset instructions',
    submitText: 'Send reset link',
    alternateText: 'Remember your password?',
    alternateLinkText: 'Sign in',
    alternateLink: '/auth/login'
  }
};

export default function AuthForm({ type, onSubmit, isLoading, error }: AuthFormProps) {
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const config = titles[type];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">{config.title}</h2>
        <p className="mt-2 text-gray-600">{config.subtitle}</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-lg">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <AuthInput
          label="Email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          required
        />

        {type !== 'forgot' && (
          <AuthInput
            label="Password"
            type="password"
            value={formData.password}
            onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
            required
          />
        )}

        {type === 'signup' && (
          <AuthInput
            label="Confirm Password"
            type="password"
            value={formData.confirmPassword}
            onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
            required
          />
        )}

        {type === 'login' && (
          <div className="text-right">
            <Link
              to="/auth/forgot-password"
              className="text-sm text-primary-600 hover:text-primary-500"
            >
              Forgot password?
            </Link>
          </div>
        )}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 px-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-lg hover:from-primary-500 hover:to-primary-400 transition-all duration-200 font-medium shadow-lg hover:shadow-primary-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Please wait...' : config.submitText}
        </button>
      </form>

      {type !== 'forgot' && (
        <>
          <FormDivider />
          <SocialButtons />
        </>
      )}

      <p className="mt-6 text-center text-sm text-gray-600">
        {config.alternateText}{' '}
        <Link
          to={config.alternateLink}
          className="font-medium text-primary-600 hover:text-primary-500"
        >
          {config.alternateLinkText}
        </Link>
      </p>
    </motion.div>
  );
}