'use client';

import { HeroSection } from '@/components/HeroSection';
import { SplitContentSection, ContentList } from '@/components/SplitContentSection';
import { ContactSection } from '@/components/ContactSection';

export default function Contact() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Get in Touch"
        subtitle="Let's discuss how AxisPoint Software can help you build, scale, or transform your digital solutions. Our team is ready to turn your vision into reality."
        heroImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
        showHeroImage={true}
        isRealPhoto={true}
      />

      {/* Why Partner With Us Section */}
      <SplitContentSection
        title="Why Partner With AxisPoint Software"
        description="We pride ourselves on delivering exceptional value through expert team collaboration, transparent communication, and a proven track record of success. When you partner with us, you're investing in technical excellence and long-term growth."
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
        imageAlt="Professional Team"
        imagePosition="right"
      >
        <ContentList items={[
          'Industry-leading expertise and best practices',
          'Dedicated account managers and support teams',
          'Transparent, ongoing communication',
          'Scalable solutions that grow with your business',
          'Flexible engagement models tailored to your needs',
          'Post-launch support and continuous improvement'
        ]} />
      </SplitContentSection>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
