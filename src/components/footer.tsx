import { Facebook, Instagram, Github, Youtube } from 'lucide-react';

export default function Footer() {
  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '#blog' },
    { name: 'Jobs', href: '#jobs' },
    { name: 'Press', href: '#press' },
    { name: 'Accessibility', href: '#accessibility' },
    { name: 'Partners', href: '#partners' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: () => (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), href: '#twitter', label: 'X (Twitter)' },
    { icon: Github, href: '#github', label: 'GitHub' },
    { icon: Youtube, href: '#youtube', label: 'YouTube' }
  ];

  return (
    <footer id="contact" className="bg-black/50 border-t border-purple-500/10 py-12 px-[5%]">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Icon className="w-6 h-6" />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Picly, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}