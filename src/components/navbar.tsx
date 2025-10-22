import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:block fixed left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-full shadow-xl border border-purple-500/10 top-4 z-50">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2 pl-4">
            <img src="/assets/logo_picly.png" alt="Picly logo" className='h-8 w-auto'/>
            <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Picly
            </div>
          </div>

          {/* Navigation Links */}
          <ul className="flex list-none">
            <li>
              <NavLink 
                to="/" 
                end
                className={({ isActive }) => 
                  isActive 
                    ? "px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm transition-all" 
                    : "px-8 py-3 rounded-full text-gray-500 font-medium text-sm hover:bg-gray-100 transition-all"
                }
              >
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  isActive 
                    ? "px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm transition-all" 
                    : "px-8 py-3 rounded-full text-gray-500 font-medium text-sm hover:bg-gray-100 transition-all"
                }
              >
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  isActive 
                    ? "px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm transition-all" 
                    : "px-8 py-3 rounded-full text-gray-500 font-medium text-sm hover:bg-gray-100 transition-all"
                }
              >
                Layanan Kami
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/contactUs" 
                className={({ isActive }) => 
                  isActive 
                    ? "px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm transition-all" 
                    : "px-8 py-3 rounded-full text-gray-500 font-medium text-sm hover:bg-gray-100 transition-all"
                }
              >
                Kontak Kami
              </NavLink>
            </li>
          </ul>

          {/* CTA Button */}
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-pink-500/50 transition-all hover:-translate-y-0.5 mr-2">
            Selamat Datang
          </button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="lg:hidden fixed left-1/2 -translate-x-1/2 top-0 left-0 right-0 bg-white/95 rounded backdrop-blur-md border-b border-purple-500/10 z-50">
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/assets/logo_picly.png" alt="Picly logo" className='h-8 w-auto'/>
            <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Picly
            </div>
          </div>

          {/* Hamburger Menu Button */}
          <button 
            onClick={toggleMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="top-full left-0 right-0 rounded shadow-lg">
            <div className="px-4 py-2 space-y-1">
              <NavLink 
                to="/" 
                end
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "block w-full text-left px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm transition-all" 
                    : "block w-full text-left px-4 py-3 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-100 transition-all"
                }
              >
                Beranda
              </NavLink>
              <NavLink 
                to="/about" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "block w-full text-left px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm transition-all" 
                    : "block w-full text-left px-4 py-3 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-100 transition-all"
                }
              >
                Tentang Kami
              </NavLink>
              <NavLink 
                to="/services" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "block w-full text-left px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm transition-all" 
                    : "block w-full text-left px-4 py-3 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-100 transition-all"
                }
              >
                Layanan Kami
              </NavLink>
              <NavLink 
                to="/contactUs" 
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => 
                  isActive 
                    ? "block w-full text-left px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold text-sm transition-all" 
                    : "block w-full text-left px-4 py-3 rounded-lg text-gray-600 font-medium text-sm hover:bg-gray-100 transition-all"
                }
              >
                Kontak Kami
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;