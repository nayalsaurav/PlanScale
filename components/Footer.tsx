'use client';

import React from 'react';

const footerLinks = [
  { label: 'Home', url: '/' },
  { label: 'About', url: '/about' },
  { label: 'Services', url: '/services' },
  { label: 'Blog', url: '/blog' },
  { label: 'Franchise', url: '/franchise' }
];

export default function Footer() {
  return (
    <footer className="bg-[#0c0c0c] border-t border-[#333] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo/Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00bfa5] to-[#5e60ce] bg-clip-text text-transparent">
              PlanScale India
            </h3>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center md:justify-end space-x-8">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-[#999999] hover:text-[#00bfa5] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-[#333] mt-8 pt-8 text-center">
          <p className="text-[#999999]">
            © 2025 PlanScale India. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}