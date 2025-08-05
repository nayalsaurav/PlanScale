'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Building2, ShoppingBag, Mic } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential',
    description: 'Walk through your home design and validate size, layout, and flow before construction begins.'
  },
  {
    icon: Building2,
    title: 'Commercial',
    description: 'Collaborate on large-scale projects like hospitals, airports, and malls with full stakeholder visibility.'
  },
  {
    icon: ShoppingBag,
    title: 'Retail',
    description: 'Test layouts and customer flow in cafes, gyms, salons, and stores before investing in fit-outs.'
  },
  {
    icon: Mic,
    title: 'Events',
    description: 'Host immersive product launches, seminars, and team-building experiences with full AV and catering.'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#0c0c0c] to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our{' '}
            <span className="bg-gradient-to-r from-[#00bfa5] to-[#5e60ce] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#00bfa5] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#00bfa5]/20 group">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00bfa5] to-[#5e60ce] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{service.title}</h3>
                  <p className="text-[#999999] leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}