'use client';

import { HeroSection } from '@/components/HeroSection';
import { HeroInfoBlock, HeroInfoSection } from '@/components/HeroInfoBlock';
import { SplitContentSection, ContentList } from '@/components/SplitContentSection';
import { Section } from '@/components/Section';
import { StatCounter } from '@/components/CountUp';


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
        heroImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
        showHeroImage={true}
        isRealPhoto={true}
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

      {/* Digital Transformation Section */}
      <SplitContentSection
        title="Digital Transformation for Modern Businesses"
        description="We help organizations navigate the complexities of digital transformation with strategic planning, cutting-edge technology, and proven methodologies. Our approach ensures seamless integration of new systems while maintaining business continuity."
        image="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80"
        imageAlt="Digital Transformation"
        imagePosition="right"
      >
        <ContentList items={[
          'Strategic roadmap development and execution',
          'Legacy system modernization and migration',
          'Cloud-native architecture design',
          'Process automation and optimization',
          'Change management and training'
        ]} />
      </SplitContentSection>

      {/* Software Development Section */}
      <SplitContentSection
        title="Custom Software Development Excellence"
        description="From concept to deployment, we build scalable, secure, and high-performance software solutions tailored to your unique business requirements. Our agile development process ensures rapid delivery without compromising quality."
        image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
        imageAlt="Software Development"
        imagePosition="left"
        backgroundColor="bg-gray-50 dark:bg-gray-900"
      >
        <ContentList items={[
          'Full-stack web and mobile applications',
          'Enterprise software solutions',
          'API development and integration',
          'Microservices architecture',
          'DevOps and CI/CD implementation'
        ]} />
      </SplitContentSection>

      {/* Team Collaboration Section */}
      <SplitContentSection
        title="Collaborative Approach to Success"
        description="Our team works as an extension of yours, bringing together diverse expertise and perspectives to solve complex challenges. We believe in transparent communication, agile methodologies, and delivering measurable results."
        image="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?w=800&q=80"
        imageAlt="Team Collaboration"
        imagePosition="right"
      >
        <ContentList items={[
          'Dedicated project teams and account managers',
          'Regular progress updates and demos',
          'Flexible engagement models',
          'Knowledge transfer and documentation',
          'Post-launch support and maintenance'
        ]} />
      </SplitContentSection>

        {/* Stats Section */}
        <Section className="bg-gradient-to-r from-primary/5 to-secondary/5 dark:from-primary-dark/10 dark:to-secondary-dark/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatCounter
                key={index}
                number={stat.number}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </div>
        </Section>
    </main>
  );
}
