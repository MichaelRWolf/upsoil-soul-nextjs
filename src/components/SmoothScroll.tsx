'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    // Add event listeners to all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll);
    });

    // Navbar background change on scroll
    const handleScroll = () => {
      const navbar = document.querySelector('nav');
      if (navbar && window.scrollY > 100) {
        navbar.classList.add('bg-white/98', 'shadow-lg');
        navbar.classList.remove('bg-white/95');
      } else if (navbar) {
        navbar.classList.add('bg-white/95');
        navbar.classList.remove('bg-white/98', 'shadow-lg');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
}
