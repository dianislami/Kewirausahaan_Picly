import React, { useState, useEffect, useRef } from 'react';
import produkData from '../data/produk.json';

interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  badge: string;
  features: string[];
}

const PriceSection: React.FC = () => {
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

  // Get first 3 bundling products
  const bundlingProducts: Product[] = produkData["Bundling"].slice(0, 3);

  return (
    <section ref={sectionRef} className="py-24 px-[5%]">
      <div className="relative isolate">
        <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
          <div style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"></div>
        </div>
        <div className={`mx-auto max-w-4xl text-center transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <h2 className="text-base/7 font-semibold text-indigo-400">Bundling</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">Pilih Paket Layanan yang Sesuai untuk Anda</p>
        </div>
        <p className={`mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`} style={{ transitionDelay: '200ms' }}>Picly menawarkan berbagai layanan desain kreatif dengan harga terjangkau sesuai kebutuhan Anda</p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-end gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-7xl lg:grid-cols-3">
          {bundlingProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`rounded-3xl p-8 ring-1 ring-white/10 sm:p-10 transition-all duration-1000 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              } ${
                index === 0 
                  ? "rounded-t-3xl bg-white/2.5 sm:mx-8 sm:rounded-b-none lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl lg:scale-90 lg:transform"
                  : index === 1 
                  ? "relative bg-gray-800 lg:scale-105 lg:transform lg:shadow-2xl lg:shadow-indigo-500/25"
                  : "bg-white/2.5 sm:mx-8 sm:rounded-t-none lg:mx-0 lg:rounded-tr-3xl lg:rounded-bl-none lg:scale-90 lg:transform"
              }`}
              style={{
                transitionDelay: `${(index + 1) * 300 + 400}ms` // Staggered animation delay after header
              }}
            >
              <h3 className="text-base/7 font-semibold text-indigo-400">{product.badge}</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-white">{product.price}</span>
              </p>
              <p className="mt-4 text-base/7 text-gray-300">{product.description}</p>
              <ul role="list" className="mt-4 space-y-3 text-sm/6 text-gray-300 sm:mt-4">
                {product.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-x-3">
                    <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                      <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href="/services" 
                className={`mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white sm:mt-10 ${
                  index === 1 
                    ? "bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    : "bg-white/10 inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75"
                }`}
              >
                Lihat Detail
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceSection;