import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import WaitlistForm from './WaitlistForm';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showWaitlist, setShowWaitlist] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-primary-900 to-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl -top-96 -left-40 animate-float" />
        <div className="absolute w-[600px] h-[600px] bg-secondary-500/10 rounded-full blur-3xl bottom-48 right-12 animate-float" style={{ animationDelay: '-2s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Text Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center pt-12 pb-12"
        >
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-primary-200 bg-clip-text text-transparent leading-tight max-w-5xl mx-auto">
            Transform Your Property Management Experience with MyKingdom
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-200 mb-8 max-w-3xl mx-auto"
          >
            Experience the future of property management with our AI-powered platform. Automate tasks, gain insights, and grow your portfolio effortlessly.
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
          {/* Left Column - Video */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl"
          >
            <video
              ref={videoRef}
              className="w-full aspect-video object-cover"
              poster="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://storage.googleapis.com/webfundamentals-assets/videos/chrome.mp4" type="video/mp4" />
            </video>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            
            <button
              onClick={handleVideoClick}
              className="absolute inset-0 flex items-center justify-center group"
            >
              <div className={`w-20 h-20 bg-primary-500/90 rounded-full flex items-center justify-center transform transition-all duration-300 ${isPlaying ? 'scale-0' : 'group-hover:scale-110'}`}>
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </div>
            </button>
          </motion.div>

          {/* Right Column - Property Images Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="grid grid-cols-2 gap-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="col-span-2"
            >
              <img
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Luxury Property"
                className="w-full h-64 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Modern Building"
                className="w-full h-48 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <img
                src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Property Interior"
                className="w-full h-48 object-cover rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* CTA Button */}
        <div className="text-center pb-20">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => setShowWaitlist(true)}
            className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-400 hover:to-secondary-400 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-primary-500/25 transition-all"
          >
            Join the Waitlist
          </motion.button>
        </div>
      </div>

      <WaitlistForm isOpen={showWaitlist} onClose={() => setShowWaitlist(false)} />
    </section>
  );
}