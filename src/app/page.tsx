'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { HeroInfoBlock, HeroInfoSection } from '@/components/HeroInfoBlock';
import { SplitContentSection, ContentList } from '@/components/SplitContentSection';
import { Section } from '@/components/Section';


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

      {/* Digital Transformation Section */}
      <SplitContentSection
        title="Digital Transformation for Modern Businesses"
        description="We help organizations navigate the complexities of digital transformation with strategic planning, cutting-edge technology, and proven methodologies. Our approach ensures seamless integration of new systems while maintaining business continuity."
        image="/images/content/digital-transformation.svg"
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
        image="/images/content/software-development.svg"
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
        image="/images/content/team-collaboration.svg"
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
    </main>
  );
}
