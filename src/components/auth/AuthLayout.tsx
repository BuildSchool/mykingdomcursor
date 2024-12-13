import React from 'react';
import { Outlet } from 'react-router-dom';
import { Star } from 'lucide-react';
import Logo from '../common/Logo';
import Testimonial from './Testimonial';

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Form */}
      <div className="w-full lg:w-1/2 p-8 flex items-center justify-center bg-white">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-between mb-8">
            <Logo />
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-gold-500 fill-current shadow-golden"
                  />
                ))}
              </div>
              <span className="text-gray-700 font-medium">4.9/5</span>
              <img
                src="https://cdn.capterra.com/badge/4.6.svg"
                alt="Capterra Rating"
                className="h-8 ml-2"
              />
            </div>
          </div>
          <Outlet />
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="hidden lg:block w-1/2 bg-gradient-to-br from-primary-600 to-primary-700 p-12 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-3xl -top-48 -right-24 animate-float" />
          <div className="absolute w-[400px] h-[400px] bg-secondary-500/10 rounded-full blur-3xl bottom-48 left-12 animate-float" style={{ animationDelay: '-2s' }} />
          <div className="absolute inset-0 bg-mesh-pattern opacity-5" />
        </div>

        <div className="h-full flex flex-col relative z-10">
          <div className="flex-1 flex flex-col justify-center space-y-8 max-w-lg mx-auto">
            <h1 className="text-4xl font-bold text-white leading-tight">
              Transform Your Property Management Experience with MyKingdom
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

            <Testimonial />

            <div className="text-center backdrop-blur-sm bg-white/5 rounded-xl p-6 border border-white/10">
              <div className="text-xl text-white font-medium mb-2">
                Join 3,000,000+ professionals
              </div>
              <div className="text-white/80">
                who trust MyKingdom with their property management
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/15 transition-colors border border-white/10">
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}