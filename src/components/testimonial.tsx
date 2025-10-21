import React from 'react';

interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    image: string;
    testimonial: string;
    rating: number;
}

const Testimonials: React.FC = () => {

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: 'Sarah Johnson',
            position: 'Marketing Director',
            company: 'Tech Startup Inc',
            image: './src/assets/avatar1.jpg',
            testimonial: 'Picly telah mengubah cara kami berkomunikasi dengan audience. Design yang mereka buat tidak hanya eye-catching, tapi juga sangat efektif meningkatkan engagement kami hingga 300%!',
            rating: 5
        },
        {
            id: 2,
            name: 'David Pratama',
            position: 'Business Owner',
            company: 'Culinary Paradise',
            image: './src/assets/avatar2.jpg',
            testimonial: 'Dari logo, menu design, sampai konten social media semuanya dikerjakan dengan sangat profesional. Tim Picly benar-benar memahami kebutuhan bisnis F&B kami!',
            rating: 5
        },
        {
            id: 3,
            name: 'Emily Carter',
            position: 'Content Creator',
            company: 'Beauty Influencer',
            image: './src/assets/avatar3.jpg',
            testimonial: 'Video editing dan content design dari Picly membuat konten saya lebih profesional dan aesthetic. Engagement meningkat drastis sejak bekerjasama dengan mereka!',
            rating: 5
        }
    ];

    return (
        <section>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent m-6"></div>

            {/* Testimonials Section */}
            <div className="min-h-screen relative py-20 px-6 lg:px-8 overflow-hidden">
                
                {/* Animated Gradient Blobs */}
                <div aria-hidden="true" className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
                    <div className="absolute top-30 left-20 w-70 h-70 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                    <div className="absolute top-50 right-20 w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-25 left-1/2 w-45 h-45 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Grid Pattern Overlay */}
                <div 
                    className="absolute inset-0 -z-10 opacity-10"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
                        `,
                        backgroundSize: '50px 50px'
                    }}
                ></div>

                <div className="mx-auto max-w-7xl">
                    {/* Header Section */}
                    <div className="text-center mb-20">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fadeInUp">
                            What People Say
                        </h1>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                            Discover what our satisfied customers have to say about their experiences with our products/services.
                        </p>
                    </div>

                    {/* Testimonial Cards Container */}
                    <div className="relative max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {testimonials.map((testimonial) => {

                                return (
                                    <div
                                        key={testimonial.id}
                                        className="relative rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 h-[450px]"
                                    >
                                        {/* Glassmorphism Card */}
                                        <div className="relative backdrop-blur-xl bg-slate-800/40 rounded-3xl p-8 border border-slate-700/50 shadow-2xl hover:border-purple-500 h-full flex flex-col">
                                            {/* Star Rating */}
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        className="w-5 h-5 text-yellow-400 fill-current"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                                    </svg>
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <div className="flex-grow flex items-center">
                                                <p className="text-white text-base leading-relaxed">
                                                    "{testimonial.testimonial}"
                                                </p>
                                            </div>

                                            {/* Divider */}
                                            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-6"></div>

                                            {/* User Info */}
                                            <div className="flex items-center gap-4">
                                                {/* Avatar */}
                                                <div className="relative">
                                                    <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-white/30 bg-gradient-to-br from-pink-500 to-purple-500 p-0.5">
                                                        <div className="w-full h-full rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
                                                            <span className="text-2xl font-bold text-white">
                                                                {testimonial.name.charAt(0)}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Name and Position */}
                                                <div>
                                                    <h3 className="text-white font-bold text-lg">
                                                        {testimonial.name}
                                                    </h3>
                                                    <p className="text-gray-300 text-sm">
                                                        {testimonial.position}
                                                    </p>
                                                    <p className="text-gray-400 text-xs mt-1">
                                                        {testimonial.company}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Quote Icon */}
                                            <div className="absolute top-6 right-6 text-white/10">
                                                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent m-6"></div>
        </section>
    );
};

export default Testimonials;
