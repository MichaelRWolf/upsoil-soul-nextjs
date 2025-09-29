'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-800">
              Upsoil & Soul
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#home" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="#campground" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors">
                Campground
              </Link>
              <Link href="#farm" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors">
                Farm
              </Link>
              <Link href="#activities" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors">
                Activities
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-800 px-3 py-2 text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
            >
              <span className="sr-only">Open main menu</span>
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 mt-1 ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="#home" className="text-gray-700 hover:text-green-800 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="#campground" className="text-gray-700 hover:text-green-800 block px-3 py-2 text-base font-medium">
                Campground
              </Link>
              <Link href="#farm" className="text-gray-700 hover:text-green-800 block px-3 py-2 text-base font-medium">
                Farm
              </Link>
              <Link href="#activities" className="text-gray-700 hover:text-green-800 block px-3 py-2 text-base font-medium">
                Activities
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-green-800 block px-3 py-2 text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
