import React, { useState, useEffect, useRef } from 'react';

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  decimal?: number;
  label: string;
}

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    {
      value: 8000,
      suffix: "+",
      label: "Creators on the platform"
    },
    {
      value: 3,
      suffix: "%",
      label: "Flat platform fee"
    },
    {
      value: 99.9,
      suffix: "%",
      decimal: 1,
      label: "Uptime guarantee"
    },
    {
      value: 70,
      prefix: "$",
      suffix: "M",
      label: "Paid out to creators"
    }
  ];

  // Intersection Observer untuk mendeteksi ketika section masuk viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 detik
    const steps = 60; // 60 frame untuk smooth animation
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      let currentStep = 0;
      
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easedProgress = 1 - Math.pow(1 - progress, 3); // Easing function
        const currentValue = stat.value * easedProgress;

        setAnimatedValues(prev => {
          const newValues = [...prev];
          newValues[index] = currentValue;
          return newValues;
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);
    });
  }, [isVisible]);

  // Format nilai untuk display
  const formatValue = (value: number, stat: StatItem): string => {
    const formatted = stat.decimal 
      ? value.toFixed(stat.decimal)
      : Math.floor(value).toLocaleString();
    
    return `${stat.prefix || ''}${formatted}${stat.suffix}`;
  };

  return (
    <section ref={sectionRef} className="py-24 px-[5%]">

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-25"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted by creators worldwide
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing possimus.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/60"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                {formatValue(animatedValues[index], stat)}
              </div>
              <div className="text-gray-400 text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;