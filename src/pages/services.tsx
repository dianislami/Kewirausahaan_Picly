import { useState } from 'react';

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

export default function Services() {

    const services = [
        {
            id: '01',
            title: 'Desain Konten Sosial Media',
            description: 'Ciptakan feed Instagram, Story, dan konten TikTok yang menarik dengan design konsisten dan sesuai brand identity Anda',
            features: ['Feed Instagram', 'Story Template', 'TikTok Content', 'Reels Design'],
            color: 'from-pink-100 to-pink-50',
            textColor: 'text-pink-900',
            pinColor: 'bg-pink-500',
            borderColor: 'border-pink-200'
        },
        {
            id: '02',
            title: 'Desain Grafis (Poster, Flyer, dll)',
            description: 'Design profesional untuk semua kebutuhan promosi Anda, dari poster event hingga flyer bisnis dengan kualitas print-ready',
            features: ['Event Poster', 'Business Flyer', 'Menu Design', 'Banner & Signage'],
            color: 'from-purple-100 to-purple-50',
            textColor: 'text-purple-900',
            pinColor: 'bg-purple-500',
            borderColor: 'border-purple-200'
        },
        {
            id: '03',
            title: 'Video Editing',
            description: 'Video editing profesional untuk konten promosi, company profile, hingga dokumentasi event dengan hasil yang cinematic',
            features: ['Promo Video', 'Company Profile', 'Event Coverage', 'Tutorial Video'],
            color: 'from-pink-100 to-pink-50',
            textColor: 'text-pink-900',
            pinColor: 'bg-pink-500',
            borderColor: 'border-pink-200'
        }
    ];

    // State untuk kategori yang dipilih
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Daftar kategori
    const categories = [
        { id: 'all', name: 'All' },
        { id: 'poster', name: 'Poster & Flyer' },
        { id: 'feed', name: 'Feed Instagram' },
        { id: 'reel', name: 'TikTok, Reels, Shorts' },
        { id: 'video', name: 'Video Profesional' },
        { id: 'bundling', name: 'Bundling' }
    ];

    // Data produk untuk setiap kategori (tanpa 'All' - akan digenerate dinamis)
    const products: Record<string, Product[]> = {
        'Poster & Flyer': [
            {
                id: 7,
                title: "Event Poster Design",
                description: "Design poster event yang eye-catching dengan layout profesional",
                price: "Rp 75.000",
                image: "./src/assets/produk1.jpg",
                badge: "TRENDING",
                features: ["A3 Size Ready", "Color Variations", "Event Info Layout"]
            },
            {
                id: 8,
                title: "Business Flyer",
                description: "Flyer bisnis dengan design modern untuk promosi produk/service",
                price: "Rp 60.000",
                image: "./src/assets/produk1.jpg",
                badge: "HOT",
                features: ["Double Side", "Print Ready", "QR Code Integration"]
            },
            {
                id: 9,
                title: "Product Poster",
                description: "Poster produk dengan foto styling yang menarik dan informasi lengkap",
                price: "Rp 85.000",
                image: "./src/assets/produk1.jpg",
                badge: "NEW",
                features: ["Product Photography", "Info Graphics", "Brand Consistency"]
            },
            {
                id: 10,
                title: "Restaurant Menu Design",
                description: "Design menu restoran yang appetizing dengan layout mudah dibaca",
                price: "Rp 120.000",
                image: "./src/assets/produk1.jpg",
                badge: "POPULAR",
                features: ["Multi-page Layout", "Food Photography", "Price List"]
            },
            {
                id: 11,
                title: "Concert Poster",
                description: "Poster konser dengan design yang bold dan energetic untuk menarik audience",
                price: "Rp 90.000",
                image: "./src/assets/produk1.jpg",
                badge: "ARTISTIC",
                features: ["Creative Typography", "Vibrant Colors", "Ticket Info"]
            },
            {
                id: 12,
                title: "Real Estate Flyer",
                description: "Flyer properti dengan layout profesional dan foto berkualitas tinggi",
                price: "Rp 80.000",
                image: "./src/assets/produk1.jpg",
                badge: "BEST SELLER",
                features: ["Property Details", "Contact Info", "Location Map"]
            }
        ],
        'Feed Instagram': [
            {
                id: 13,
                title: "Carousel Post Design",
                description: "Design carousel Instagram yang engaging dengan informasi lengkap",
                price: "Rp 45.000",
                image: "./src/assets/produk1.jpg",
                badge: "POPULAR",
                features: ["5 Slide Design", "Swipe Template", "CTA Included"]
            },
            {
                id: 14,
                title: "Quote Post Pack",
                description: "Kumpulan design quote inspiratif untuk meningkatkan engagement",
                price: "Rp 120.000",
                image: "./src/assets/produk1.jpg",
                badge: "BUNDLE",
                features: ["10 Quote Design", "Various Styles", "Editable Text"]
            },
            {
                id: 15,
                title: "Product Showcase",
                description: "Template showcase produk dengan layout yang clean dan modern",
                price: "Rp 65.000",
                image: "./src/assets/produk1.jpg",
                badge: "BEST SELLER",
                features: ["Product Focus", "Price Display", "Brand Elements"]
            },
            {
                id: 16,
                title: "Story Highlight Cover Set",
                description: "Set cover untuk story highlight Instagram yang konsisten dan aesthetic",
                price: "Rp 35.000",
                image: "./src/assets/produk1.jpg",
                badge: "ESSENTIAL",
                features: ["15 Icon Designs", "Custom Icons", "Brand Colors"]
            },
            {
                id: 17,
                title: "Promo Post Template",
                description: "Template post promosi dengan design yang attention-grabbing",
                price: "Rp 40.000",
                image: "./src/assets/produk1.jpg",
                badge: "HOT DEAL",
                features: ["Discount Banner", "CTA Button", "Urgency Elements"]
            },
            {
                id: 18,
                title: "Instagram Grid Planner",
                description: "Paket design untuk menciptakan grid Instagram yang cohesive dan stunning",
                price: "Rp 200.000",
                image: "./src/assets/produk1.jpg",
                badge: "AESTHETIC",
                features: ["18 Post Design", "Grid Preview", "Color Harmony"]
            }
        ],
        'TikTok, Reels, Shorts': [
            {
                id: 19,
                title: "TikTok Trend Video",
                description: "Video pendek mengikuti trend terbaru dengan editing profesional",
                price: "Rp 200.000",
                image: "./src/assets/produk1.jpg",
                badge: "VIRAL",
                features: ["Trend Following", "Quick Edit", "Viral Potential"]
            },
            {
                id: 20,
                title: "Product Reels",
                description: "Instagram Reels untuk showcase produk dengan transisi smooth",
                price: "Rp 250.000",
                image: "./src/assets/produk1.jpg",
                badge: "HOT",
                features: ["Smooth Transition", "Product Focus", "Music Sync"]
            },
            {
                id: 21,
                title: "Behind Scene Content",
                description: "Video behind the scene yang authentic untuk brand storytelling",
                price: "Rp 180.000",
                image: "./src/assets/produk1.jpg",
                badge: "AUTHENTIC",
                features: ["Natural Editing", "Story Telling", "Brand Human"]
            },
            {
                id: 22,
                title: "Tutorial Video Shorts",
                description: "Video tutorial singkat dan jelas untuk edukasi audience Anda",
                price: "Rp 150.000",
                image: "./src/assets/produk1.jpg",
                badge: "EDUCATIONAL",
                features: ["Step by Step", "Text Overlay", "Easy to Follow"]
            },
            {
                id: 23,
                title: "Testimonial Video Reel",
                description: "Video testimonial customer yang compelling dan build trust",
                price: "Rp 220.000",
                image: "./src/assets/produk1.jpg",
                badge: "TRUSTED",
                features: ["Customer Focus", "Subtitle", "Call to Action"]
            },
            {
                id: 24,
                title: "Dance/Trend Challenge Video",
                description: "Video mengikuti challenge viral dengan branding yang subtle",
                price: "Rp 175.000",
                image: "./src/assets/produk1.jpg",
                badge: "TRENDING",
                features: ["Viral Challenge", "Brand Integration", "Fun Content"]
            }
        ],
        'Video Profesional': [
            {
                id: 25,
                title: "Company Profile Video",
                description: "Video profil perusahaan dengan narasi profesional dan visual berkualitas",
                price: "Rp 1.500.000",
                image: "./src/assets/produk1.jpg",
                badge: "PREMIUM",
                features: ["Professional Narration", "4K Quality", "Motion Graphics"]
            },
            {
                id: 26,
                title: "Product Commercial",
                description: "Video komersial produk dengan script dan visual yang menjual",
                price: "Rp 2.000.000",
                image: "./src/assets/produk1.jpg",
                badge: "ENTERPRISE",
                features: ["Script Writing", "Professional Talent", "Multiple Version"]
            },
            {
                id: 27,
                title: "Event Documentation",
                description: "Dokumentasi event lengkap dengan highlight dan full coverage",
                price: "Rp 1.200.000",
                image: "./src/assets/produk1.jpg",
                badge: "COMPLETE",
                features: ["Full Coverage", "Highlight Video", "Raw Footage"]
            },
            {
                id: 28,
                title: "Explainer Video Animation",
                description: "Video animasi explainer yang mudah dipahami untuk menjelaskan produk/layanan",
                price: "Rp 1.800.000",
                image: "./src/assets/produk1.jpg",
                badge: "ANIMATED",
                features: ["2D Animation", "Voiceover", "Script Included"]
            },
            {
                id: 29,
                title: "Corporate Interview Video",
                description: "Video interview profesional dengan multi-camera setup dan editing cinematic",
                price: "Rp 1.000.000",
                image: "./src/assets/produk1.jpg",
                badge: "PROFESSIONAL",
                features: ["Multi-camera", "Studio Lighting", "Post Production"]
            },
            {
                id: 30,
                title: "Brand Story Documentary",
                description: "Video dokumenter brand story yang emotional dan memorable",
                price: "Rp 2.500.000",
                image: "./src/assets/produk1.jpg",
                badge: "CINEMATIC",
                features: ["Storytelling", "Cinematic Grade", "Original Score"]
            }
        ],
        'Bundling': [
            {
                id: 31,
                title: "Social Media Starter Pack",
                description: "Paket lengkap untuk memulai social media dengan semua template design",
                price: "Rp 500.000",
                image: "./src/assets/produk1.jpg",
                badge: "COMPLETE PACK",
                features: ["Logo Design", "Feed Template", "Story Template", "Poster Design"]
            },
            {
                id: 32,
                title: "Business Branding Bundle",
                description: "Paket branding lengkap untuk business dengan semua material promosi",
                price: "Rp 1.000.000",
                image: "./src/assets/produk1.jpg",
                badge: "BUSINESS PACK",
                features: ["Logo + Brand Guidelines", "Business Card", "Letterhead", "Social Media Kit"]
            },
            {
                id: 33,
                title: "Content Creator Package",
                description: "Paket lengkap untuk content creator dengan semua kebutuhan konten",
                price: "Rp 750.000",
                image: "./src/assets/produk1.jpg",
                badge: "CREATOR PACK",
                features: ["Monthly Content", "Video Editing", "Thumbnail Design", "Social Media Management"]
            },
            {
                id: 34,
                title: "E-Commerce Visual Bundle",
                description: "Paket visual lengkap untuk toko online mulai dari logo hingga banner",
                price: "Rp 650.000",
                image: "./src/assets/produk1.jpg",
                badge: "SHOP BUNDLE",
                features: ["Logo + Banner", "Product Photo", "Promo Graphics", "Packaging Design"]
            },
            {
                id: 35,
                title: "Restaurant Marketing Pack",
                description: "Paket marketing lengkap untuk restaurant dengan menu, flyer, dan social media",
                price: "Rp 800.000",
                image: "./src/assets/produk1.jpg",
                badge: "FOOD & BEV",
                features: ["Menu Design", "Social Media Posts", "Promo Flyer", "Food Photography"]
            },
            {
                id: 36,
                title: "Event Promotion Bundle",
                description: "Paket promosi event all-in-one dari poster hingga video teaser",
                price: "Rp 900.000",
                image: "./src/assets/produk1.jpg",
                badge: "EVENT PACK",
                features: ["Event Poster", "Social Media Kit", "Video Teaser", "E-Ticket Design"]
            }
        ]
    };


    // Filter produk berdasarkan kategori yang dipilih
    const filteredProducts: Product[] = selectedCategory === 'All' 
        ? Object.values(products).flat() // Gabungkan semua produk dari semua kategori
        : products[selectedCategory] || [];

    return (
        <section>
            <div className="min-h-[80vh] flex items-center justify-center text-center px-5 relative overflow-hidden">
                <div className="relative isolate px-6 lg:px-8 w-full">
                    <div className="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32">
                        {/* Two Column Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Text Content */}
                            <div className="text-left">
                                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                                    Data to enrich your online business
                                </h1>
                                <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
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
                        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
                            <defs>
                                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
                                    <stop offset="100%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
                                </linearGradient>
                            </defs>
                            {/* Line from Card 1 to Card 2 */}
                            <path
                                d="M 33% 35% Q 50% 35%, 67% 35%"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="8,8"
                            />
                            {/* Line from Card 2 to Card 3 */}
                            <path
                                d="M 67% 65% Q 50% 65%, 33% 65%"
                                stroke="url(#lineGradient)"
                                strokeWidth="2"
                                fill="none"
                                strokeDasharray="8,8"
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
        </section>
    )
}