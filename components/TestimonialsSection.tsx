'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Donna Rainey',
    location: 'Client | India',
    quote: 'The walkthrough was a game-changer. We saw the room sizes clearly and made better decisions.'
  },
  {
    name: 'Amara Haqqani',
    location: 'Client | India',
    quote: 'It was amazing to walk into our home before it existed. We refined many details thanks to this!'
  },
  {
    name: 'Roberto Crisafulli',
    location: 'Client | India',
    quote: 'Worth every cent. The welcome mat touch and the team\'s guidance made it truly premium.'
  },
  {
    name: 'Jenn McDermott',
    location: 'Client | India',
    quote: 'We couldn\'t visualize anything on paper. Lifesize made it clear and easy. Confidence = 100%.'
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0c0c0c]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Our{' '}
            <span className="bg-gradient-to-r from-[#00bfa5] to-[#5e60ce] bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-[#1a1a1a] border-[#333] hover:border-[#00bfa5] transition-all duration-300 transform hover:scale-102 hover:shadow-xl hover:shadow-[#00bfa5]/10 group">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-[#00bfa5] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <blockquote className="text-lg text-white mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-[#333] pt-6">
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-[#999999] text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}