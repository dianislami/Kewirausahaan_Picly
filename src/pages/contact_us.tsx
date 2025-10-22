import React, { useState } from 'react';
import type { FormEvent } from 'react';
import contactData from '../data/contact.json';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FAQ {
    id: number;
    question: string;
    answer: string;
}

interface SocialMedia {
    name: string;
    url: string;
    icon: string;
}

const ContactUsPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [submitStatus, setSubmitStatus] = useState<string>('');

    const faqs: FAQ[] = contactData.faqs;
    const contactInfo = contactData.contactInfo;
    const socialMediaData: SocialMedia[] = contactData.socialMedia;

    // Handle form input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle form submit
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setSubmitStatus('success');
            setIsSubmitting(false);
            setFormData({ name: '', email: '', phone: '', message: '' });
            
            setTimeout(() => setSubmitStatus(''), 3000);
        }, 1500);
    };

    // Toggle FAQ
    const toggleFAQ = (id: number) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    // Render social media icon
    const renderSocialIcon = (iconType: string) => {
        switch (iconType) {
            case 'instagram':
                return (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                );
            case 'whatsapp':
                return (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                );
            case 'email':
                return (
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <section className="min-h-[80vh] flex items-center justify-center text-center pt-20 px-5 relative overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-full blur-3xl"></div>
                </div>

                <div className="mx-auto max-w-2xl py-32 sm:py-36 lg:py-48">
                    <div className="text-center">
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>Let's Talk About</h1>
                        <h1 className="text-5xl font-semibold tracking-tight text-balance text-purple-500 sm:text-7xl animate-fadeInUp" style={{ animationDelay: '0.4s' }}>Your Project</h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>Ada ide kreatif yang ingin diwujudkan? Mari diskusikan project Anda bersama tim profesional kami</p>
                        <div className="mt-10 flex items-center justify-center gap-x-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                        </div>
                    </div>
                </div>
                <div aria-hidden="true" className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden" style={{ bottom: '-100px' }}>
                    <div className="relative left-1/2 -translate-x-1/2 w-full h-250 flex items-end justify-center">
                        <div className="absolute bottom-0 w-[2000px] h-30 rounded-full bg-gradient-to-t from-purple-600 via-purple-500 to-transparent opacity-25 blur-3xl"></div>
                    </div>
                </div>
            </section>

            {/* Get In Touch Section */}
            <section className="relative py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Side - Contact Info */}
                        <div>
                            <div className="mb-8">
                                <span className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2 block">
                                    • CONTACT
                                </span>
                                <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">
                                    GET IN TOUCH
                                </h3>
                            </div>

                            {/* Contact Details */}
                            <div className="space-y-6 mb-8">
                                {/* Email */}
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-sm">Email</p>
                                        <a href={`mailto:${contactInfo.email}`} className="text-white text-lg group-hover:text-purple-400 transition-colors">
                                            {contactInfo.email}
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-sm">Phone</p>
                                        <a href={`tel:${contactInfo.phone}`} className="text-white text-lg group-hover:text-purple-400 transition-colors">
                                            {contactInfo.phone}
                                        </a>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-gray-400 text-sm">Address</p>
                                        <p className="text-white text-lg">
                                            {contactInfo.address}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Media Links */}
                            <div>
                                <p className="text-gray-400 text-sm mb-4">Follow Us</p>
                                <div className="flex gap-4">
                                    {socialMediaData.map((social, index) => (
                                        <a 
                                            key={index}
                                            href={social.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                                            title={social.name}
                                        >
                                            {renderSocialIcon(social.icon)}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div>
                            <div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-8 border border-slate-700/50">
                                <h4 className="text-2xl font-bold text-white mb-6">Send Message</h4>
                                
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Input */}
                                    <div>
                                        <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="Your name"
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div>
                                        <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    {/* Phone Input */}
                                    <div>
                                        <label htmlFor="phone" className="block text-gray-300 text-sm mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                                            placeholder="+62 812-3456-7890"
                                        />
                                    </div>

                                    {/* Message Textarea */}
                                    <div>
                                        <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                            placeholder="Type your message..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-4 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? 'Sending...' : 'Send Message'}
                                    </button>

                                    {/* Success Message */}
                                    {submitStatus === 'success' && (
                                        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400 text-center">
                                            Message sent successfully! We'll get back to you soon.
                                        </div>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-12"></div>

            {/* FAQ Section */}
            <section className="relative py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-lg font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2 block">
                            • FAQ
                        </span>
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            QUICK ANSWERS
                        </h3>
                        <p className="text-gray-400 text-lg">
                            Pertanyaan yang sering ditanyakan tentang layanan kami
                        </p>
                    </div>

                    {/* FAQ Accordion */}   
                    <div className="space-y-4">
                        {faqs.map((faq) => (
                            <div
                                key={faq.id}
                                className="backdrop-blur-xl bg-slate-800/40 rounded-xl border border-slate-700/50 overflow-hidden transition-all duration-300">
                                <button
                                    onClick={() => toggleFAQ(faq.id)}
                                    className="faq-button w-full px-6 py-5 flex items-center justify-between text-left"
                                >
                                    <span className="text-white font-semibold text-lg pr-4">
                                        {faq.question}
                                    </span>
                                    <svg
                                        className={`w-6 h-6 text-purple-400 flex-shrink-0 transition-transform duration-300 ${
                                            openFAQ === faq.id ? 'rotate-180' : ''
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                                    </svg>
                                </button>
                                
                                <div
                                    className={`overflow-hidden transition-all duration-300 ${
                                        openFAQ === faq.id ? 'max-h-96' : 'max-h-0'
                                    }`}
                                >
                                    <div className="px-6 pb-5 text-gray-300 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-12"></div>

            {/* Map Section */}
            <section className="relative py-16 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Our Location
                        </h3>
                        <p className="text-gray-400 text-lg">
                            Kunjungi studio kami atau hubungi untuk appointment
                        </p>
                    </div>

                    {/* Google Maps Embed */}
                    <div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-4 border border-slate-700/50 overflow-hidden">
                        <div className="relative w-full h-96 rounded-xl overflow-hidden">
                            <iframe
                                src={contactInfo.mapEmbed}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Picly Studio Location"
                                className="grayscale hover:grayscale-0 transition-all duration-300"
                            />
                        </div>
                    </div>

                    {/* Quick Contact CTA */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-300 mb-6 text-lg">
                            Butuh bantuan segera? Hubungi kami via WhatsApp
                        </p>
                        <a
                            href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all hover:-translate-y-1"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                            </svg>
                            Chat via WhatsApp
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;
