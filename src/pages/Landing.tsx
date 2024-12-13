import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import PropertyMap from '../components/PropertyMap';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Team from '../components/Team';
import FAQ from '../components/FAQ';

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Benefits />
      <HowItWorks />
      <PropertyMap />
      <Testimonials />
      <Pricing />
      <Team />
      <FAQ />
    </div>
  );
}