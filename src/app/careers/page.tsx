'use client';

import { HeroSection } from '@/components/HeroSection';
import { HeroInfoBlock, HeroInfoSection } from '@/components/HeroInfoBlock';
import { ContactSection } from '@/components/ContactSection';
import { Section } from '@/components/Section';
import { Card, CardGrid } from '@/components/Card';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiBookOpen, FiUsers, FiZap, FiBriefcase, FiCode, FiBarChart2, FiCompass, FiCloud, FiAward, FiMail } from 'react-icons/fi';

const workCulture = [
  {
    icon: <FiBookOpen size={24} />,
    title: 'Learning-Driven Environment',
    description: 'We foster a culture of continuous learning through hands-on projects, mentorship, and technology-focused training programs.',
  },
  {
    icon: <FiZap size={24} />,
    title: 'Industry-Relevant Experience',
    description: 'Team members gain exposure to real-world projects that span multiple industries and modern technology stacks.',
  },
  {
    icon: <FiUsers size={24} />,
    title: 'Collaborative & Transparent Culture',
    description: 'We encourage open communication, teamwork, and knowledge sharing across all levels.',
  },
  {
    icon: <FiBriefcase size={24} />,
    title: 'Focus on Skill Development',
    description: 'We emphasize practical skill building, career growth, and long-term professional development.',
  },
];

const careerOpportunities = [
  {
    icon: <FiCode size={24} />,
    title: 'Software Development',
    description: 'Build modern applications and contribute to innovative projects.',
  },
  {
    icon: <FiBarChart2 size={24} />,
    title: 'Data Analytics & Business Intelligence',
    description: 'Transform data into actionable insights and drive business decisions.',
  },
  {
    icon: <FiCompass size={24} />,
    title: 'IT Consulting & Enterprise Solutions',
    description: 'Guide businesses through digital transformation and strategic initiatives.',
  },
  {
    icon: <FiCloud size={24} />,
    title: 'Cloud & Modern Technologies',
    description: 'Work with cutting-edge cloud platforms and emerging technologies.',
  },
  {
    icon: <FiAward size={24} />,
    title: 'Technical Training & Mentorship',
    description: 'Share your expertise and mentor the next generation of developers.',
  },
];

export default function Careers() {

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Careers at AxisPoint Software PVT LTD"
        subtitle="Grow Your Career With AxisPoint. At AxisPoint Software PVT LTD, we believe that innovation begins with people. We are committed to building a dynamic team of learners, problem-solvers, and technology enthusiasts who are passionate about creating meaningful digital solutions."
        primaryCta={{ text: 'View Opportunities', href: '#opportunities' }}
        heroImage="/images/hero-innovation.svg"
        showHeroImage={true}
      />

      {/* Hero-Down Info Section */}
      <HeroInfoSection>
        <HeroInfoBlock
          icon="/images/icons/learning-icon.svg"
          title="Learning"
          description="Continuous learning through hands-on projects and technology-focused training programs."
          delay={0}
        />
        <HeroInfoBlock
          icon="/images/icons/mentorship-icon.svg"
          title="Mentorship"
          description="Guidance from experienced professionals to accelerate your career growth."
          delay={1}
        />
        <HeroInfoBlock
          icon="/images/icons/projects-icon.svg"
          title="Real Projects"
          description="Work on industry-relevant projects that span multiple domains and technologies."
          delay={2}
        />
        <HeroInfoBlock
          icon="/images/icons/career-icon.svg"
          title="Career Growth"
          description="Clear pathways for professional development and long-term career advancement."
          delay={3}
        />
      </HeroInfoSection>

      {/* Our Work Culture */}
      <Section
        title="Our Work Culture"
        subtitle="Building an environment where talented professionals can thrive"
      >
        <CardGrid>
          {workCulture.map((culture, index) => (
            <Card
              key={index}
              icon={culture.icon}
              title={culture.title}
              description={culture.description}
              delay={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Career Opportunities */}
      <Section
        id="opportunities"
        title="Career Opportunities at AxisPoint"
        subtitle="Explore diverse roles across development, consulting, and training"
        className="bg-gray-50 dark:bg-gray-800/50"
      >
        <CardGrid>
          {careerOpportunities.map((opportunity, index) => (
            <Card
              key={index}
              icon={opportunity.icon}
              title={opportunity.title}
              description={opportunity.description}
              delay={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Who Should Apply */}
      <Section
        title="Who Should Apply?"
        subtitle="We're looking for passionate individuals across all experience levels"
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
              <span className="text-gray-600 dark:text-gray-300">Fresh graduates and students seeking industry exposure</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center mr-4 mt-1">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark" />
              </span>
              <span className="text-gray-600 dark:text-gray-300">Professionals looking to upgrade skills or transition into new technology roles</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center mr-4 mt-1">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark" />
              </span>
              <span className="text-gray-600 dark:text-gray-300">Candidates passionate about learning, innovation, and problem-solving</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 dark:bg-primary-dark/20 flex items-center justify-center mr-4 mt-1">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-primary-dark" />
              </span>
              <span className="text-gray-600 dark:text-gray-300">Individuals interested in development, consulting, or training-focused roles</span>
            </li>
          </motion.ul>
        </div>
      </Section>

      {/* Join Us CTA Section */}
      <Section className="text-center bg-gray-50 dark:bg-gray-800/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Join Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            If you are interested in becoming part of AxisPoint Software PVT LTD, we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="mailto:hr@axispoint-software.com"
              className="btn-primary inline-flex items-center justify-center"
            >
              <FiMail className="mr-2" size={20} />
              Send Your Resume
            </Link>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
            📩 Send your resume to: <a href="mailto:hr@axispoint-software.com" className="text-primary dark:text-primary-dark font-semibold hover:underline">hr@axispoint-software.com</a>
          </p>
        </motion.div>
      </Section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
