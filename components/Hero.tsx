'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const scrollToEnquiry = () => {
    const enquirySection = document.getElementById('enquiry');
    if (enquirySection) {
      enquirySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0c0c0c] via-[#1a1a1a] to-[#0c0c0c] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-[#00bfa5] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#5e60ce] rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Walk Through Your{' '}
            <span className="bg-gradient-to-r from-[#00bfa5] to-[#5e60ce] bg-clip-text text-transparent">
              Dreams
            </span>{' '}
            at 1:1 Scale
          </h1>
          
          <p className="text-xl md:text-2xl text-[#999999] max-w-4xl mx-auto leading-relaxed">
            PlanScale India lets you experience your home, office, or store layout in real scale—before construction begins.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button 
              onClick={scrollToEnquiry}
              size="lg" 
              className="bg-[#00bfa5] hover:bg-[#00a693] text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 group"
            >
              Enquire Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-[#5e60ce] text-[#5e60ce] hover:bg-[#5e60ce] hover:text-white px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 group"
            >
              <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#00bfa5] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#00bfa5] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}