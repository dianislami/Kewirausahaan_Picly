import React from 'react';
import HeroSection from './components/hero_section';
import ServicesSection from './components/service_section';
import StatsSection from './components/stats_section';
import PriceSection from './components/price_section';
import Testimonials from './components/testimonial';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <Testimonials />
      <PriceSection />
    </div>
  );
};

export default LandingPage;