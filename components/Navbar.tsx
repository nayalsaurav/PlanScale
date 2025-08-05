'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Features', href: '#features' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#enquiry' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0c0c0c]/95 backdrop-blur-md border-b border-[#333]' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('#home')}
                className="text-2xl font-bold bg-gradient-to-r from-[#00bfa5] to-[#5e60ce] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
              >
                PlanScale India
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white hover:text-[#00bfa5] transition-colors duration-300 font-medium relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00bfa5] transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('#enquiry')}
                className="bg-gradient-to-r from-[#00bfa5] to-[#5e60ce] text-white font-semibold px-6 py-2 rounded-full hover:shadow-lg hover:shadow-[#00bfa5]/25 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-[#00bfa5] hover:bg-[#1a1a1a]"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
        isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute top-16 left-0 right-0 bg-[#0c0c0c]/95 backdrop-blur-md border-b border-[#333] transition-all duration-300 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          <div className="px-6 py-8 space-y-6">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-white hover:text-[#00bfa5] transition-colors duration-300 font-medium text-lg"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('#enquiry')}
              className="w-full bg-gradient-to-r from-[#00bfa5] to-[#5e60ce] text-white font-semibold py-3 rounded-full hover:shadow-lg hover:shadow-[#00bfa5]/25 transition-all duration-300"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}