'use client';

import { HeroSection } from '@/components/HeroSection';
import { ContactSection } from '@/components/ContactSection';

export default function Contact() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Let's discuss how AxisPoint Software can help you build, scale, or transform your digital solutions. Our team is ready to turn your vision into reality."
        heroImage="/images/hero-tech.svg"
        showHeroImage={true}
      />

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
