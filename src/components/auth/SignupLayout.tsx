import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Star } from 'lucide-react';
import SignupForm from './SignupForm';
import Testimonial from './Testimonial';

export default function SignupLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Building2 className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                MyKingdom
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-lg font-semibold">4.9/5</span>
              <img
                src="https://cdn.capterra.com/badge/4.6.svg"
                alt="Capterra Rating"
                className="h-8 ml-2"
              />
            </div>
          </div>
          <SignupForm />
        </div>
      </div>

      {/* Content Section */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-primary-600 to-primary-800 p-8 items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
        <div className="relative z-10 max-w-lg text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl font-bold">
              Transform Your Property Management with AI
            </h1>
            
            <div className="space-y-6">
              <Feature
                title="Smart Portfolio Management"
                description="Leverage AI-powered insights to optimize your property portfolio performance in real-time."
              />
              <Feature
                title="Automated Excellence"
                description="Save 15+ hours weekly with intelligent automation for tenant management and maintenance."
              />
              <Feature
                title="Enterprise-Grade Security"
                description="Bank-level encryption and compliance measures to protect your valuable property data."
              />
            </div>

            <div className="space-y-6">
              <Testimonial />
              <div className="text-center text-white/80">
                Join 3,000,000+ professionals who trust MyKingdom
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-white/80 text-sm">{description}</p>
    </div>
  );
}