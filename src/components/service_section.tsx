import React, { useState, useEffect, useRef } from 'react';

const ServicesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer untuk mendeteksi ketika section masuk viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 } // Trigger ketika 20% dari section terlihat
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="services" className="py-20 px-[5%] mx-auto relative z-5 bg-gradient-to-b from-purple-500/5 to-transparent">
      <div className="mx-auto max-w-2xl lg:max-w-7xl">
        {/* Header dengan animasi fade in */}
        <h2 className={`text-center text-base/7 font-semibold text-purple-400 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>Picly Studio</h2>
        <p className={`mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Dari ide jadi visual, semua bisa bareng <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Picly!</span>
        </p>
        
        {/* Grid dengan animasi stagger */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Card 1 - Konten Medsos */}
          <div className={`relative lg:row-span-2 group ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-4xl transition-all duration-300 group-hover:bg-gray-700"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)] hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Konten Medsos Kreatif</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Bikin feed, story, dan reels Instagram jadi lebih hidup dan profesional</p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-white/20">
                  <img src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png" alt="" className="size-full object-cover object-top hover:scale-105 transition-transform duration-500" />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-4xl group-hover:outline-purple-500/30 transition-all duration-300"></div>
          </div>
          
          {/* Card 2 - Kecepatan */}
          <div className={`relative max-lg:row-start-1 group ${isVisible ? 'animate-slide-in-up' : 'opacity-0'}`}>
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-4xl transition-all duration-300 group-hover:bg-gray-700"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Kecepatan & Efisiensi Layanan</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center"><span className="font-semibold text-white">93%</span> project Picly selesai <span className="font-semibold text-white">tepat waktu</span> atau bahkan lebih cepat dari deadline yang dijanjikan.</p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <span className="absolute top-35 right-10 text-[15px] font-bold text-[#7269F2] bg-[#D8D6FF]/10 px-4 py-1 rounded-full border border-[#9E98F7]/30 shadow-sm animate-pulse-gentle">
                  93%
                </span>
                <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png" alt="" className="w-full max-lg:max-w-xs object-cover object-bottom hover:scale-105 transition-transform duration-300" style={{ height: '70px' }} />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl group-hover:outline-purple-500/30 transition-all duration-300"></div>
          </div>
          
          {/* Card 3 - Manajemen File */}
          <div className={`relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group ${isVisible ? 'animate-slide-in-down' : 'opacity-0'}`}>
            <div className="absolute inset-px rounded-lg bg-gray-800 transition-all duration-300 group-hover:bg-gray-700"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Manajemen File & Data Aman</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Semua file desain dan riwayat revisi Anda terjamin aman di platform digital kami</p>
              </div>
              <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png" alt="" className="h-[min(152px,40cqw)] object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 group-hover:outline-purple-500/30 transition-all duration-300"></div>
          </div>
          
          {/* Card 4 - Showcase */}
          <div className={`relative lg:row-span-2 group ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-4xl lg:rounded-r-4xl transition-all duration-300 group-hover:bg-gray-700"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)] hover:transform hover:scale-[1.02] transition-all duration-300">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Showcase Desain</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">Temukan berbagai desain yang kreatif, catchy, dan sesuai kebutuhan brand kalian</p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                  {/* Tab Header - Fixed at top with high z-index */}
                  <div className="relative z-20 flex flex-col bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">DesignGraphic.svg</div>
                      <div className="border-r border-gray-600/10 px-4 py-2">Picly Studio Showcase</div>
                    </div>
                  </div>
                  {/* Content area with image */}
                  <div className="relative z-10 px-0 pt-0 pb-14 overflow-hidden">
                    <div className="@container flex flex-1 items-center max-lg:py-6 lg:pb-2">
                      <img src="/assets/showcase.png" alt="Showcase Design" className="h-[35rem] -mt-17 object-cover object-center w-full hover:scale-105 transition-transform duration-500" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-4xl lg:rounded-r-4xl group-hover:outline-purple-500/30 transition-all duration-300"></div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-in-down {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-gentle {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.2s both;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out 0.4s both;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out 0.8s both;
        }

        .animate-slide-in-up {
          animation: slide-in-up 0.8s ease-out 0.5s both;
        }

        .animate-slide-in-down {
          animation: slide-in-down 0.8s ease-out 0.6s both;
        }

        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;