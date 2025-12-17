'use client';

import { motion } from 'framer-motion';
import { HeroSection } from '@/components/HeroSection';
import { HeroInfoBlock, HeroInfoSection } from '@/components/HeroInfoBlock';
import { SplitContentSection, ContentList } from '@/components/SplitContentSection';
import { Section } from '@/components/Section';
import { Card, CardGrid } from '@/components/Card';
import { FiZap, FiTarget, FiCheckCircle, FiHeart, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const coreValues = [
  {
    icon: <FiZap size={24} />,
    title: 'Innovation',
    description: 'We embrace creativity and forward-thinking approaches to build impactful solutions.',
  },
  {
    icon: <FiTarget size={24} />,
    title: 'Excellence',
    description: 'We deliver high-quality software and services that meet global standards.',
  },
  {
    icon: <FiCheckCircle size={24} />,
    title: 'Integrity',
    description: 'We work transparently and ethically, ensuring trust in every partnership.',
  },
  {
    icon: <FiHeart size={24} />,
    title: 'Client-Centric Approach',
    description: 'We prioritize client goals, tailoring solutions that create measurable business impact.',
  },
];

const missionPoints = [
  'Empower organizations with innovative software, intelligent systems, and world-class training that accelerate digital transformation and business growth.',
];

const visionPoints = [
  'Become a global leader in delivering smart, scalable, and high-performance technology solutions that drive long-term value for businesses across industries.',
];

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="About AxisPoint Software PVT LTD"
        subtitle="Delivering modern software solutions with innovation and reliability."
        primaryCta={{ text: 'View Services', href: '/services' }}
        secondaryCta={{ text: 'Contact Us', href: '/careers' }}
        heroImage="/images/hero-tech.svg"
        showHeroImage={true}
      />

      {/* Hero-Down Info Section */}
      <HeroInfoSection>
        <HeroInfoBlock
          icon="/images/icons/innovation-icon.svg"
          title="Innovation"
          description="Embracing creativity and forward-thinking to deliver cutting-edge technology solutions."
          delay={0}
        />
        <HeroInfoBlock
          icon="/images/icons/expertise-icon.svg"
          title="Expertise"
          description="Deep technical knowledge across multiple domains and modern technology stacks."
          delay={1}
        />
        <HeroInfoBlock
          icon="/images/icons/reliability-icon.svg"
          title="Reliability"
          description="Consistent delivery of high-quality, secure, and performant software solutions."
          delay={2}
        />
        <HeroInfoBlock
          icon="/images/icons/growth-icon.svg"
          title="Growth"
          description="Committed to continuous improvement and long-term partnerships with our clients."
          delay={3}
        />
      </HeroInfoSection>

      {/* Who We Are Section */}
      <SplitContentSection
        title="Who We Are"
        description="AxisPoint Software PVT LTD is a technology-driven company specializing in software development, IT consulting, and professional training solutions. We help businesses modernize, innovate, and scale through high-quality digital products and future-ready technology services."
        image="/images/content/team-collaboration.svg"
        imageAlt="Team Collaboration"
        imagePosition="right"
      >
        <ContentList items={[
          'Expert team with diverse technical backgrounds',
          'Proven track record across multiple industries',
          'Client-focused approach to solution delivery',
          'Commitment to quality and innovation',
          'Long-term partnership mindset'
        ]} />
      </SplitContentSection>

      {/* Mission & Vision Section */}
      <Section
        title="Our Mission & Vision"
        subtitle="Guiding principles that shape our work"
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Mission
            </h3>
            <ul className="space-y-4">
              {missionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center mr-4 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Vision
            </h3>
            <ul className="space-y-4">
              {visionPoints.map((point, index) => (
                <motion.li
                  key={index}
                  variants={item}
                  className="flex items-start"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary/20 dark:bg-secondary-dark/20 flex items-center justify-center mr-4 mt-1">
                    <span className="w-2 h-2 rounded-full bg-secondary dark:bg-secondary-dark" />
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* What We Do Section */}
      <SplitContentSection
        title="Comprehensive Software Development Services"
        description="From concept to deployment, we deliver end-to-end software solutions that drive business growth. Our full-stack development expertise covers web, mobile, and enterprise applications built with modern technologies and best practices."
        image="/images/content/software-development.svg"
        imageAlt="Software Development"
        imagePosition="left"
        backgroundColor="bg-gray-50 dark:bg-gray-900"
      >
        <ContentList items={[
          'Custom web and mobile application development',
          'Enterprise software and SaaS platforms',
          'Legacy system modernization',
          'API development and third-party integrations',
          'Quality assurance and testing'
        ]} />
      </SplitContentSection>

      {/* IT Consulting Section */}
      <SplitContentSection
        title="Strategic IT Consulting & Advisory"
        description="Navigate complex technology decisions with confidence. Our consulting services help you align technology investments with business objectives, optimize IT infrastructure, and accelerate digital transformation initiatives."
        image="/images/content/consulting-strategy.svg"
        imageAlt="IT Consulting"
        imagePosition="right"
      >
        <ContentList items={[
          'Digital transformation roadmaps',
          'Technology stack evaluation and selection',
          'Architecture design and review',
          'Process optimization and automation',
          'Vendor selection and management'
        ]} />
      </SplitContentSection>

      {/* Innovation Section */}
      <SplitContentSection
        title="Innovation & Continuous Learning"
        description="Stay ahead of the curve with our training programs and innovation initiatives. We offer corporate training, technical workshops, and mentorship programs designed to upskill your team and foster a culture of continuous improvement."
        image="/images/content/innovation-lab.svg"
        imageAlt="Innovation Lab"
        imagePosition="left"
        backgroundColor="bg-gray-50 dark:bg-gray-900"
      >
        <ContentList items={[
          'Corporate training programs',
          'Technical workshops and bootcamps',
          'Mentorship and career development',
          'Innovation labs and proof-of-concepts',
          'Technology trend analysis'
        ]} />
      </SplitContentSection>

      {/* Core Values Section */}
      <Section
        title="Our Core Values"
        subtitle="The principles that guide our decisions and actions"
        className="bg-gray-50 dark:bg-gray-800/50"
      >
        <CardGrid>
          {coreValues.map((value, index) => (
            <Card
              key={index}
              icon={value.icon}
              title={value.title}
              description={value.description}
              delay={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Why Choose Us Section */}
      <Section
        title="Why Clients Choose Us"
        subtitle="What sets AxisPoint apart"
      >
        <div className="max-w-3xl mx-auto">
          <motion.ul
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center mr-4 mt-1">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark" />
              </span>
              <span className="text-gray-600 dark:text-gray-300">Strong technical expertise in modern technologies</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center mr-4 mt-1">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark" />
              </span>
              <span className="text-gray-600 dark:text-gray-300">End-to-end service delivery: consulting, development, deployment, and training</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center mr-4 mt-1">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark" />
              </span>
              <span className="text-gray-600 dark:text-gray-300">Industry-focused solutions across multiple domains</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center mr-4 mt-1">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark" />
              </span>
              <span className="text-gray-600 dark:text-gray-300">Scalable, secure, and future-ready architectures</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center mr-4 mt-1">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark" />
              </span>
              <span className="text-gray-600 dark:text-gray-300">Transparent communication and reliable delivery</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center mr-4 mt-1">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark" />
              </span>
              <span className="text-gray-600 dark:text-gray-300">Commitment to long-term partnerships</span>
            </li>
          </motion.ul>
        </div>
      </Section>

      {/* Contact Section */}
      <Section
        title="Get In Touch"
        subtitle="Reach out to us for any inquiries"
        className="bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <FiMapPin className="text-primary dark:text-primary-dark" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Locations
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Vijayawada, Hyderabad, Mumbai, Pune, Bangalore
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <FiMail className="text-primary dark:text-primary-dark" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Email
            </h3>
            <div className="text-gray-600 dark:text-gray-300 text-sm space-y-1">
              <p>hr@axispoint-software.com</p>
              <p>info@axispoint-software.com</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex justify-center mb-4">
              <FiPhone className="text-primary dark:text-primary-dark" size={32} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Phone
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              040-32665081
            </p>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
