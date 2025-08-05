"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Demo from "@/components/DemoScroll";
import { OurServices } from "@/components/FeatureSection2";
import { KeyFeatures } from "@/components/FeaturesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-white">
      <Navbar />
      <Demo />
      <OurServices />
      <KeyFeatures />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
