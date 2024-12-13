import React from 'react';
import { Quote, Star } from 'lucide-react';

export default function Testimonial() {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors border border-white/10">
      <div className="relative">
        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/40" />
        <blockquote className="text-lg text-white mb-4 pl-4">
          "MyKingdom has revolutionized how we manage our properties. The AI insights have helped us increase our ROI by 27% in just 3 months!"
        </blockquote>
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80"
            alt="Michael Chen"
            className="w-12 h-12 rounded-full border-2 border-white/20"
          />
          <div>
            <div className="font-medium text-white">Michael Chen</div>
            <div className="text-sm text-white/70">Property Manager, NYC</div>
          </div>
          <div className="ml-auto flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-gold-500 fill-current shadow-golden" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}