'use client';

import React from 'react';


export default function StatsSection() {
  const stats = [
    {
      value: "8,000+",
      label: "Creators on the platform"
    },
    {
      value: "3%",
      label: "Flat platform fee"
    },
    {
      value: "99.9%",
      label: "Uptime guarantee"
    },
    {
      value: "$70M",
      label: "Paid out to creators"
    }
  ];

  return (
    <section className="py-24 px-[5%]">
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
        <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 hover:bg-slate-800/60"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-3">
                {stat.value}
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
}