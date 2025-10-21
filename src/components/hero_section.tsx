'use client';

export default function HeroSection() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center text-center pt-20 px-5 relative overflow-hidden">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-36 lg:py-48">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20">
              Announcing our next round of funding. <a href="#" className="font-semibold text-purple-400"><span aria-hidden="true" className="absolute inset-0"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>Data to enrich your online business</h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.</p>
            <div className="mt-10 flex items-center justify-center gap-x-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              <a href="#" className="rounded-md bg-purple-500/30 backdrop-blur-md px-3.5 py-2.5 text-sm font-semibold text-white hover:bg-gradient-to-r from-pink-500 to-purple-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
              <a href="#" className="text-sm/6 font-semibold text-white hover:text-purple-400">Learn more <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden" style={{ bottom: '-150px' }}>
        <div className="relative left-1/2 -translate-x-1/2 w-full h-250 flex items-end justify-center">
          {/* Inner bright glow */}
          <div className="absolute bottom-5 w-100 h-90 rounded-full bg-white opacity-20 blur-3xl"></div>
          {/* Middle purple glow */}
          <div className="absolute bottom-0 w-[900px] h-80 rounded-full bg-purple-500 opacity-30 blur-3xl"></div>
          {/* Outer pink glow */}
          <div className="absolute bottom-0 w-[1200px] h-80 rounded-full bg-gradient-to-t from-purple-600 via-purple-500 opacity-25 blur-3xl"></div>
          {/* Wide base glow */}
          <div className="absolute bottom-0 w-[1500px] h-48 rounded-full bg-gradient-to-t from-purple-600 via-purple-500 to-transparent opacity-25 blur-3xl"></div>
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

        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
}