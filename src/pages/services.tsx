import React, { useState } from 'react';
import PriceSection from '../components/price_section';
import Produk from '../data/produk.json';
import Service from '../data/services.json';

// TypeScript interfaces
interface Product {
    id: number;
    title: string;
    description: string;
    price: string;
    image: string;
    badge: string;
    features: string[];
}

interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    color: string;
    textColor: string;
    pinColor: string;
    borderColor: string;
}

interface Category {
    id: string;
    name: string;
}

const Services: React.FC = () => {
    // Get data from imported JSON
    const services: Service[] = Service.services;
    const categories: Category[] = Service.categories;
    const products: Record<string, Product[]> = Produk;

    // State untuk kategori yang dipilih
    const [selectedCategory, setSelectedCategory] = useState('Poster & Flyer');

    // Filter produk berdasarkan kategori yang dipilih
    const filteredProducts: Product[] = selectedCategory === 'All' 
        ? Object.values(products).flat()
        : products[selectedCategory] || [];

    return (
        <section>
            {/* Hero Section */}
            <div className="min-h-[80vh] flex items-center justify-center text-center px-5 relative overflow-hidden">
                <div className="relative isolate px-6 lg:px-8 w-full">
                    <div className="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32">
                        {/* Two Column Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Text Content */}
                            <div className="text-left">
                                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                                    Dari ide sampai hasil akhir, semua bisa bareng Picly
                                </h1>
                                <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                                    Kami bantu wujudkan konsep kamu jadi karya visual yang impactful dan pastinya punya gaya khas
                                </p>
                            </div>

                            {/* Right Column - Image */}
                            <div className="relative backdrop-blur-xl rounded-3xl p-2 hidden md:block">
                                <div>
                                    <img 
                                        src="./src/assets/services.png" 
                                        alt="Hero Image" 
                                        className="w-150 h-auto object-cover"
                                        />
                                </div>
                                
                                {/* Decorative floating elements */}
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50 animate-pulse" style={{ animationDelay: '1s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute bottom-100 left-20 -z-10 transform-gpu overflow-hidden blur-3xl">
                    <div style={{ clipPath: 'polygon(70.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} className="relative left-[calc(20%-5rem)] aspect-1155/678 w-10 -translate-x-1/2 rotate-5 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(30%-20rem)] sm:w-288.75"></div>
                </div>
                <div aria-hidden="true" className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden" style={{ bottom: '-100px' }}>
                    <div className="relative left-1/2 -translate-x-1/2 w-full h-250 flex items-end justify-center">
                        <div className="absolute bottom-0 w-[2000px] h-30 rounded-full bg-gradient-to-t from-purple-600 via-purple-500 to-transparent opacity-25 blur-3xl"></div>
                    </div>
                </div>
            </div>

            {/* Services section */}
            <div className="relative py-20 px-6 lg:px-8 overflow-hidden">
                {/* Background Gradient */}
                <div aria-hidden="true" className="absolute top-20 left-10 -z-10 transform-gpu overflow-hidden blur-3xl">
                    <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 blur-3xl"></div>
                </div>
                <div aria-hidden="true" className="absolute bottom-20 right-10 -z-10 transform-gpu overflow-hidden blur-3xl">
                    <div className="relative w-96 h-96 rounded-full bg-gradient-to-br from-pink-600/20 to-purple-600/20 blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Layanan Kami
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Solusi kreatif untuk semua kebutuhan digital marketing dan branding bisnis Anda
                        </p>
                    </div>

                    {/* Service Cards with Connection Lines */}
                    <div className="relative">
                        {/* Connecting Lines - Hidden on Mobile */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }} viewBox="0 0 100 100" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#ec4899" stopOpacity={0.3} />
                                    <stop offset="100%" stopColor="#a855f7" stopOpacity={0.3} />
                                </linearGradient>
                            </defs>
                            {/* Line from Card 1 to Card 2 */}
                            <path
                                d="M 33 35 Q 50 35 67 35"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.5"
                                fill="none"
                                strokeDasharray="2,2"
                            />
                            {/* Line from Card 2 to Card 3 */}
                            <path
                                d="M 67 65 Q 50 65 33 65"
                                stroke="url(#lineGradient)"
                                strokeWidth="0.5"
                                fill="none"
                                strokeDasharray="2,2"
                            />
                        </svg>

                        {/* Service Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 relative">
                            {services.map((service, index) => (
                                <div
                                    key={service.id}
                                    className={`relative group ${
                                        index === 1 ? 'lg:mt-24' : ''
                                    } ${index === 2 ? 'lg:mt-48' : ''}`}
                                    style={{ 
                                        animationDelay: `${index * 0.2}s`,
                                        zIndex: 10 
                                    }}
                                >
                                    {/* Pin/Thumbtack */}
                                    <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
                                        <div className={`w-8 h-8 ${service.pinColor} rounded-full shadow-lg flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-300`}>
                                            <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                                        </div>
                                        <div className={`w-2 h-4 ${service.pinColor} mx-auto rounded-b-sm`}></div>
                                    </div>

                                    {/* Card with 3D Effect */}
                                    <div className="relative transform group-hover:rotate-2 group-hover:scale-105 transition-all duration-300">
                                        {/* Card Shadow */}
                                        <div className="absolute inset-0 bg-black/20 rounded-2xl transform translate-y-2 translate-x-1 group-hover:translate-y-3 group-hover:translate-x-2 transition-all duration-300"></div>
                                        
                                        {/* Main Card */}
                                        <div className={`relative bg-gradient-to-br ${service.color} rounded-2xl p-8 border-2 ${service.borderColor} shadow-xl`}>
                                            {/* Card Number */}
                                            <div className={`text-5xl font-bold ${service.textColor} opacity-20 mb-4`}>
                                                {service.id}
                                            </div>

                                            {/* Card Title */}
                                            <h3 className={`text-2xl font-bold ${service.textColor} mb-4`}>
                                                {service.title}
                                            </h3>

                                            {/* Card Description */}
                                            <p className={`${service.textColor} opacity-80 text-sm mb-6 leading-relaxed`}>
                                                {service.description}
                                            </p>

                                            {/* Features List */}
                                            <ul className="space-y-2">
                                                {service.features.map((feature, idx) => (
                                                    <li key={idx} className={`flex items-center ${service.textColor} opacity-70 text-sm`}>
                                                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                        </svg>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            {/* Hover Button */}
                                            <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg hover:shadow-pink-500/50 transition-all">
                                                    Lihat Detail
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent m-6"></div>

            {/* produk section */}
            <div className="relative z-10 w-full px-6 lg:px-8 py-8 my-10">
                <div className="mx-auto max-w-7xl">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Katalog Produk Kami
                        </h2>
                        <p className="text-gray-400 text-lg">
                            Temukan produk terbaik untuk kebutuhan Anda
                        </p>
                    </div>

                    {/* Category Pills Navigation */}
                    <div className="flex justify-center mb-12">
                        <div className="backdrop-blur-xl bg-white/10 rounded-full shadow-xl border-[0.5px] border border-white/10 p-2">
                            <ul className="flex items-center gap-5">
                                {categories.map((category) => (
                                    <li key={category.id}>
                                        <button
                                            onClick={() => setSelectedCategory(category.name)}
                                            className={`
                                                px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300
                                                ${selectedCategory === category.name 
                                                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105' 
                                                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                                                }
                                            `}
                                        >
                                            {category.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Product Cards Grid - Dynamic */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {filteredProducts.map((product) => (
                            <div key={product.id} className="group relative backdrop-blur-xl rounded-2xl p-1 transition-all duration-300 hover:scale-105">
                                {/* Gradient Border */} 
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/50 via-pink-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                                
                                <div className="relative backdrop-blur-md bg-white/5 rounded-2xl border border-white/20 overflow-hidden">
                                    {/* Product Image */}
                                    <div className="relative h-80 overflow-hidden bg-gradient-to-br from-purple-600/20 to-pink-600/20">
                                        <img 
                                            src={product.image} 
                                            alt={product.title}
                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        {/* Badge */}
                                        <div className="absolute top-4 right-4 backdrop-blur-md bg-purple-500/30 px-3 py-1 rounded-full border border-white/30">
                                            <span className="text-white text-xs font-semibold">{product.badge}</span>
                                        </div>
                                    </div>
                                    
                                    {/* Card Content */}
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {product.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                                            {product.description}
                                        </p>
                                        
                                        {/* Features */}
                                        <ul className="space-y-1 mb-4">
                                            {product.features.map((feature, index) => (
                                                <li key={index} className="flex items-center text-gray-300 text-sm">
                                                    <svg className="w-4 h-4 mr-2 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                        
                                        {/* Price and CTA */}
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <span className="text-2xl font-bold text-white">{product.price}</span>
                                                <span className="text-gray-400 text-sm ml-1">/item</span>
                                            </div>
                                            <button className="backdrop-blur-md bg-gradient-to-r from-purple-500/80 to-pink-500/80 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 border border-white/20">
                                                Order Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No Products Message */}
                    {filteredProducts.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 text-lg mb-4">
                                Tidak ada produk untuk kategori "{selectedCategory}"
                            </div>
                            <button 
                                onClick={() => setSelectedCategory('All')}
                                className="text-purple-400 hover:text-purple-300 transition-colors"
                            >
                                Lihat semua produk
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Price Section */}
            <PriceSection />
        </section>
    );
};

export default Services;