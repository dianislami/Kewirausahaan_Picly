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
  const [showContent, setShowContent] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    {
      value: 50,
      suffix: "+",
      label: "Proyek desain terselesaikan"
    },
    {
      value: 95,
      suffix: "%",
      label: "Klien puas dengan hasil"
    },
    {
      value: 99,
      suffix: "%",
      label: "Jaminan kualitas layanan"
    },
    {
      value: 3,
      prefix: "Rp",
      suffix: "Jt",
      label: "Total pendapatan kreator"
    }
  ];

  // Intersection Observer untuk mendeteksi ketika section masuk viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Trigger content animation dengan delay
          setTimeout(() => setShowContent(true), 300);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  // Counter animation - dimulai setelah scroll ke section
  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 detik
    const steps = 60; // 60 frame untuk smooth animation
    const stepDuration = duration / steps;

    // Delay counting animation sedikit setelah content muncul
    setTimeout(() => {
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
    }, 600); // Delay 600ms agar content muncul dulu baru counting
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
      <div className={`w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-25 transition-opacity duration-800 ${showContent ? 'opacity-100' : 'opacity-0'}`}></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Dipercaya oleh Klien dari Mahasiswa & Pelaku UMKM
          </h2>
          <p className={`text-lg text-gray-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Kami telah membantu berbagai klien menciptakan konten visual yang menarik dan profesional untuk kebutuhan promosi
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/60 hover:scale-105 ${
                showContent 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${400 + index * 100}ms`,
                transitionDuration: '800ms'
              }}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-purple-400">
                {formatValue(animatedValues[index], stat)}
              </div>
              <div className="text-gray-400 text-base transition-colors duration-300 group-hover:text-gray-300">
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