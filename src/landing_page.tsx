import HeroSection from './components/hero_section';
import ServicesSection from './components/service_section';
import StatsSection from './components/stats_section';
import WhySection from './components/price_section';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <WhySection />
    </div>
  );
}