'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { HeroInfoBlock, HeroInfoSection } from '@/components/HeroInfoBlock';
import { Section } from '@/components/Section';
import { Card, CardGrid } from '@/components/Card';
import { FiCode, FiTrendingUp, FiCloud, FiUsers } from 'react-icons/fi';

const features = [
  {
    icon: <FiCode size={24} />,
    title: 'Custom Development',
    description: 'Tailored software solutions built to your exact specifications.',
  },
  {
    icon: <FiTrendingUp size={24} />,
    title: 'Scalable Solutions',
    description: 'Applications designed to grow with your business needs.',
  },
  {
    icon: <FiCloud size={24} />,
    title: 'Cloud Ready',
    description: 'Modern cloud-native architecture for reliability and performance.',
  },
  {
    icon: <FiUsers size={24} />,
    title: 'Expert Team',
    description: 'Experienced developers committed to your success.',
  },
];

const stats = [
  { number: '50+', label: 'Projects Delivered' },
  { number: '30+', label: 'Team Members' },
  { number: '15+', label: 'Years Combined Experience' },
  { number: '100%', label: 'Client Satisfaction' },
];

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Modern Software Solutions for Your Business"
        subtitle="AxisPoint Software delivers innovative, scalable, and reliable software solutions that drive business growth and digital transformation."
        primaryCta={{ text: 'Get Started', href: '/services' }}
        secondaryCta={{ text: 'Learn More', href: '/about' }}
        heroImage="/images/hero-tech.svg"
        showHeroImage={true}
      />

      {/* Hero-Down Info Section */}
      <HeroInfoSection>
        <HeroInfoBlock
          icon="/images/icons/innovation-icon.svg"
          title="Innovation"
          description="Cutting-edge solutions powered by the latest technologies and forward-thinking approaches."
          delay={0}
        />
        <HeroInfoBlock
          icon="/images/icons/expertise-icon.svg"
          title="Expertise"
          description="Seasoned professionals with deep technical knowledge and industry experience."
          delay={1}
        />
        <HeroInfoBlock
          icon="/images/icons/reliability-icon.svg"
          title="Reliability"
          description="Proven track record of delivering robust, secure, and high-performance solutions."
          delay={2}
        />
        <HeroInfoBlock
          icon="/images/icons/growth-icon.svg"
          title="Growth"
          description="Scalable architectures designed to evolve with your business needs."
          delay={3}
        />
      </HeroInfoSection>

        {/* Features Section */}
        <Section
          title="Why Choose AxisPoint"
          subtitle="We combine technical excellence with business acumen to deliver solutions that matter."
        >
          <CardGrid>
            {features.map((feature, index) => (
              <Card
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index}
              />
            ))}
          </CardGrid>
        </Section>

        {/* Stats Section */}
        <Section className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary-dark/10 dark:to-secondary-dark/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let&apos;s discuss how AxisPoint can help you achieve your goals with cutting-edge software solutions.
            </p>
            <Link
              href="/careers"
              className="btn-primary inline-flex items-center justify-center"
            >
              Get in Touch
            </Link>
          </motion.div>
        </Section>
    </main>
  );
}
