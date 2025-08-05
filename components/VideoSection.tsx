'use client';

import React from 'react';

export default function VideoSection() {
  return (
    <section className="py-20 bg-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 animate-zoom-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            See It In{' '}
            <span className="bg-gradient-to-r from-[#00bfa5] to-[#5e60ce] bg-clip-text text-transparent">
              Action
            </span>
          </h2>
          <p className="text-xl text-[#999999] max-w-3xl mx-auto">
            Watch how our walkthrough technology transforms your vision into a full-scale immersive experience.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] shadow-2xl">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="PlanScale India Walkthrough Demo"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#00bfa5] rounded-tl-lg"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-[#00bfa5] rounded-tr-lg"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-[#00bfa5] rounded-bl-lg"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#00bfa5] rounded-br-lg"></div>
        </div>
      </div>
    </section>
  );
}