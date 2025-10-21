import React, { useState, useEffect, useRef } from 'react';
import AbouUsData from '../data/about.json';

interface TeamMember {
    id: number;
    name: string;
    position: string;
    image: string;
    description: string;
}

interface Benefit {
    title: string;
    description: string;
}

interface StatItem {
    value: number;
    suffix: string;
    label: string;
}

const AboutUsPage: React.FC = () => {
    // Import data from JSON
    const teamMembers: TeamMember[] = AbouUsData.teamMembers;
    const benefits: Benefit[] = AbouUsData.benefits;
    const stats: StatItem[] = AbouUsData.stats;
    const missions: string[] = AbouUsData.missions;

    // State for counting animation
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);
    const sectionRef = useRef<HTMLElement>(null);

    // Benefit icons mapping
    const benefitIcons = [
        (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
        ),
        (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
            </svg>
        ),
        (
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
        )
    ];

    // Intersection Observer for triggering animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !isVisible) {
                        setIsVisible(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    // Counter animation function
    const animateCounters = () => {
        stats.forEach((stat, index) => {
            let start = 0;
            const end = stat.value;
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    start = end;
                    clearInterval(timer);
                }
                
                setAnimatedValues(prev => {
                    const newValues = [...prev];
                    newValues[index] = Math.floor(start);
                    return newValues;
                });
            }, 16);
        });
    };

    return (
        <div className="min-h-screen">

            {/* Hero Section */}
            <div className="min-h-[80vh] flex items-center justify-center text-center px-5 relative overflow-hidden">
                <div className="relative isolate px-6 lg:px-8 w-full">
                    <div className="mx-auto max-w-7xl py-20 sm:py-24 lg:py-32">
                        {/* Two Column Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Right Column - Text Content */}
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

                            {/* Left Column - Image */}
                            <div className="text-right">
                                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                                    Kami adalah partner kreatif untuk brand kamu
                                </h1>
                                <p className="mt-8 text-lg font-medium text-gray-400 sm:text-xl animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                                    Kami bukan sekadar tim editing. Bersama Picly, kamu dapat hasil visual berkualitas dan pengalaman kolaborasi yang profesional serta kreatif
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden" style={{ bottom: '-100px' }}>
                    <div className="relative left-1/2 -translate-x-1/2 w-full h-250 flex items-end justify-center">
                        <div className="absolute bottom-0 w-[2000px] h-30 rounded-full bg-gradient-to-t from-purple-600 via-purple-500 to-transparent opacity-25 blur-3xl"></div>
                    </div>
                </div>
            </div>

            {/* Section 1: Tentang Kami & Keuntungan */}
            <section className="relative py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Content */}
                        <div>
                            <h2 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                                Tentang Kami
                            </h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                CV Picly Studio
                            </h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                Picly Creative Studio adalah layanan desain kreatif yang membantu mahasiswa dan pelaku UMKM membuat konten visual menarik seperti poster, feed Instagram, dan video promosi.
                                Picly memberikan kemudahan dalam pemesanan dan komunikasi secara online, dengan hasil desain yang cepat, menarik, dan berkualitas.
                            </p>

                            {/* Benefits Title */}
                            <h4 className="text-3xl font-bold text-white mb-8">
                                Keuntungan Memakai Jasa Kami
                            </h4>

                            {/* Benefits List */}
                            <div className="space-y-6">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        {/* Icon Circle */}
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                                                {benefitIcons[index % benefitIcons.length]}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1">
                                            <h5 className="text-xl font-bold text-white mb-2">
                                                {benefit.title}
                                            </h5>
                                            <p className="text-gray-300 leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Illustration */}
                        <div className="relative">
                            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10">
                                {/* Placeholder for 3D Illustration */}
                                <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <svg className="w-48 h-48 mx-auto text-purple-400/50" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                        </svg>
                                        <p className="text-gray-400 mt-4">3D Illustration Placeholder</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent m-6"></div>

            {/* Section 2: Visi & Misi */}
            <section className="relative py-15 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Illustration */}
                        <div className="relative order-2 lg:order-1">
                            <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10">
                                {/* Placeholder for 3D Illustration */}
                                <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl flex items-center justify-center">
                                    <div className="text-center">
                                        <svg className="w-48 h-48 mx-auto text-purple-400/50" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"/>
                                        </svg>
                                        <p className="text-gray-400 mt-4">3D Illustration Placeholder</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="order-1 lg:order-2">
                            <h2 className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                                Visi & Misi
                            </h2>

                            {/* Visi */}
                            <div className="mb-12">
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    Visi
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    Menjadi studio kreatif yang membantu siapa pun mewujudkan ide visual secara mudah, cepat, dan terjangkau untuk mendukung promosi digital yang lebih menarik.
                                </p>
                            </div>

                            {/* Misi */}
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                    Misi
                                </h3>
                                
                                <div className="space-y-6">
                                    {missions.map((mission, index) => (
                                        <div key={index} className="flex items-center gap-4">
                                            {/* Bullet Circle with Number */}
                                            <div className="flex-shrink-0">
                                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                    {index + 1}
                                                </div>
                                            </div>

                                            {/* Mission Text */}
                                            <p className="text-gray-300 text-lg leading-relaxed pt-2">
                                                {mission}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent m-6"></div>

            {/* Section Stat User */}
            <section ref={sectionRef} className="relative py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Gradient Background for Stats */}
                    <div className="relative backdrop-blur-2xl bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-purple-900/40 rounded-3xl p-12 md:p-20 border border-white/10 overflow-hidden">
                        {/* Decorative Gradient Blobs */}
                        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"></div>
                            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
                        </div>

                        {/* Stats Grid */}
                        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-6xl md:text-7xl font-bold text-white mb-4">
                                        {animatedValues[index]}{stat.suffix}
                                    </div>
                                    <div className="text-lg text-gray-300 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* Section 3: Tim Profesional Kami */}
            <section className="relative py-15 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    {/* Header */}
                    <div className="mb-16 text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            Tim Profesional Kami
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-10">
                            Kenali Tim Kreatif di Balik <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Picly Studio</span>
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Di balik setiap karya visual yang berkesan, ada tim profesional yang bekerja dengan penuh kreativitas. 
                            Kami bukan hanya sekadar editor foto dan video, tetapi juga pencerita visual yang siap membantu mewujudkan 
                            ide Anda menjadi karya yang inspiratif dan berkelas.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed mt-4">
                            Kami adalah tim yang bersemangat dalam menciptakan visual berkualitas tinggi. Dengan pengalaman di bidang 
                            editing foto, video, dan motion graphics, kami siap mengubah ide sederhana menjadi karya yang berkesan. 
                            Setiap proyek adalah kesempatan untuk berkarya, bercerita, dan menghadirkan pengalaman visual terbaik untuk Anda.
                        </p>
                    </div>

                    {/* Team Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                        {teamMembers.map((member, index) => (
                            <div 
                                key={member.id}
                                className="group relative"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                {/* Card */}
                                <div className="backdrop-blur-md bg-slate-800/40 rounded-2xl p-8 border border-slate-700/50 hover:bg-slate-800/20 transition-all duration-300 hover:scale-105 hover:border-purple-500/50 h-full flex flex-col">
                                    {/* Avatar with Gradient Ring */}
                                    <div className="flex justify-center mb-6">
                                        <div className="relative">
                                            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 p-1">
                                                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center">
                                                    <img src={member.image} alt={member.name} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name & Position */}
                                    <div className="text-center mb-4">
                                        <h3 className="text-2xl font-bold text-white mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-gray-400 font-medium">
                                            {member.position}
                                        </p>
                                    </div>

                                    {/* Description */}
                                    <p className="text-gray-300 text-md leading-relaxed text-center">
                                        {member.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent m-6"></div>

            {/* CTA Section */}
            <section className="relative py-15 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl text-center">
                    <div className="backdrop-blur-xl bg-slate-800/40 rounded-3xl p-12 border border-slate-700/50 hover:border-purple-500/50">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Siap Berkolaborasi dengan Kami?
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            Mari wujudkan visi kreatif Anda bersama tim profesional kami
                        </p>
                        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all hover:-translate-y-1">
                            Hubungi Kami Sekarang
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AboutUsPage;
