import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center text-center pt-20 px-5 relative overflow-hidden">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        {/* Animated Background Blob */}
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-90 animate-float">
          <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 animate-pulse-slow"></div>
        </div>
        
        <div className="mx-auto max-w-2xl py-32 sm:py-36 lg:py-48">
          {/* Animated Badge */}
          <div className="hidden sm:mb-8 sm:flex sm:justify-center animate-slideInDown" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 hover:scale-105 transition-all duration-300">
              Selamat Datang di <a href="#" className="font-semibold text-purple-400"><span aria-hidden="true" className="absolute inset-0"></span><span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent animate-gradient">Picly Studio</span></a>
            </div>
          </div>
          
          <div className="text-center">
            {/* Animated Main Title */}
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              Biarkan Picly bantu kamu bersinar
            </h1>
            
            {/* Animated Subtitle */}
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
              Desain yang tepat bisa bikin brand kamu lebih menonjol. Yuk tingkatkan tampilan bisnismu dengan sentuhan kreatif dari Picly
            </p>
            
            {/* Animated CTA Button */}
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <a href="#" className="group relative rounded-md bg-purple-500/30 backdrop-blur-md px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-gradient-to-r from-pink-500 to-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
                <span className="relative z-10">Get started</span>
                <div className="absolute inset-0 rounded-md bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated Glow Effects */}
      <div aria-hidden="true" className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden" style={{ bottom: '-150px' }}>
        <div className="relative left-1/2 -translate-x-1/2 w-full h-250 flex items-end justify-center">
          {/* Inner bright glow with pulsing animation */}
          <div className="absolute bottom-5 w-100 h-90 rounded-full bg-white opacity-20 blur-3xl animate-pulse-glow"></div>
          {/* Middle purple glow with breathing animation */}
          <div className="absolute bottom-0 w-[900px] h-80 rounded-full bg-purple-500 opacity-30 blur-3xl animate-breathe"></div>
          {/* Outer pink glow with slow rotation */}
          <div className="absolute bottom-0 w-[1200px] h-80 rounded-full bg-gradient-to-t from-purple-600 via-purple-500 opacity-25 blur-3xl animate-rotate-slow"></div>
          {/* Wide base glow with wave animation */}
          <div className="absolute bottom-0 w-[1500px] h-48 rounded-full bg-gradient-to-t from-purple-600 via-purple-500 to-transparent opacity-25 blur-3xl animate-wave"></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(30deg);
          }
          50% {
            transform: translateY(-20px) rotate(30deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-glow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.4;
            transform: scale(1.1);
          }
        }

        @keyframes breathe {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes rotate-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes wave {
          0%, 100% {
            opacity: 0.25;
            transform: scaleX(1);
          }
          50% {
            opacity: 0.35;
            transform: scaleX(1.1);
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes text-shimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px rgba(168, 85, 247, 0.4);
          }
          50% {
            box-shadow: 0 0 20px rgba(168, 85, 247, 0.6), 0 0 30px rgba(236, 72, 153, 0.4);
          }
        }

        @keyframes button-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.02);
          }
        }

        @keyframes button-glow {
          0%, 100% {
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }

        .animate-slideInDown {
          animation: slideInDown 1s ease forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .animate-wave {
          animation: wave 5s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-text-shimmer {
          background: linear-gradient(45deg, #ffffff, #a855f7, #ec4899, #ffffff);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: text-shimmer 4s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }

        .animate-button-pulse {
          animation: button-pulse 2s ease-in-out infinite;
        }

        .animate-button-glow {
          animation: button-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;