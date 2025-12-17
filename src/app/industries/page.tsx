import { HeroSection } from '@/components/HeroSection';
import { HeroInfoBlock, HeroInfoSection } from '@/components/HeroInfoBlock';
import { ContactSection } from '@/components/ContactSection';
import { Section } from '@/components/Section';
import { Card, CardGrid } from '@/components/Card';
import { FiTrendingUp, FiHeart, FiShoppingCart, FiBook, FiHome, FiCpu, FiTruck, FiBarChart, FiArrowUpRight } from 'react-icons/fi';

const industries = [
  {
    icon: <FiCpu size={24} />,
    title: 'IT & Software Services',
    description: 'Custom software development, product engineering, enterprise applications, and technical training programs for modern businesses.',
    tag: 'IT',
  },
  {
    icon: <FiTrendingUp size={24} />,
    title: 'Finance & FinTech',
    description: 'Digital banking solutions, financial platforms, analytics, compliance systems, and fintech training for secure and scalable operations.',
    tag: 'Finance',
  },
  {
    icon: <FiHeart size={24} />,
    title: 'Healthcare & Life Sciences',
    description: 'Healthcare software, patient management systems, health analytics, and training solutions that support digital healthcare transformation.',
    tag: 'Health',
  },
  {
    icon: <FiBook size={24} />,
    title: 'Education & EdTech',
    description: 'Learning management systems (LMS), student portals, online training platforms, corporate upskilling solutions, and academic software.',
    tag: 'Education',
  },
  {
    icon: <FiShoppingCart size={24} />,
    title: 'Retail & E-commerce',
    description: 'E-commerce platforms, inventory systems, CRM, data-driven personalization, and consulting for digital retail growth.',
    tag: 'Retail',
  },
  {
    icon: <FiHome size={24} />,
    title: 'Manufacturing & Industrial',
    description: 'Digital transformation, ERP support, analytics, supply-chain solutions, and industrial software training.',
    tag: 'Manufacturing',
  },
  {
    icon: <FiTruck size={24} />,
    title: 'Logistics & Supply Chain',
    description: 'Logistics platforms, route optimization, warehouse systems, analytics, and consulting for operational efficiency.',
    tag: 'Logistics',
  },
  {
    icon: <FiCpu size={24} />,
    title: 'Enterprise & Corporate Solutions',
    description: 'Business applications, dashboards, automation tools, MIS systems, and enterprise-level IT consulting.',
    tag: 'Enterprise',
  },
  {
    icon: <FiArrowUpRight size={24} />,
    title: 'Startups & Product Companies',
    description: 'End-to-end product development, MVP building, cloud architecture, mentorship, and technical consulting for startups.',
    tag: 'Startup',
  },
  {
    icon: <FiBarChart size={24} />,
    title: 'Data, Analytics & AI',
    description: 'Data engineering, BI dashboards, AI/ML solutions, analytics platforms, and hands-on training in data technologies.',
    tag: 'Data',
  },
];

export default function Industries() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Industries We Serve"
        subtitle="Domain-focused solutions for modern businesses. We bring deep industry expertise and technical excellence to every project."
        heroImage="/images/hero-software.svg"
        showHeroImage={true}
      />

      {/* Hero-Down Info Section */}
      <HeroInfoSection>
        <HeroInfoBlock
          icon="/images/icons/development-icon.svg"
          title="Multi-Domain Solutions"
          description="Expertise across healthcare, finance, retail, education, and enterprise sectors."
          delay={0}
        />
        <HeroInfoBlock
          icon="/images/icons/scalable-icon.svg"
          title="Scalable Platforms"
          description="Architecture designed to grow with your business and handle increasing demands."
          delay={1}
        />
        <HeroInfoBlock
          icon="/images/icons/secure-icon.svg"
          title="Secure Systems"
          description="Enterprise-grade security and compliance for industry-specific requirements."
          delay={2}
        />
        <HeroInfoBlock
          icon="/images/icons/impact-icon.svg"
          title="Business Impact"
          description="Solutions that drive measurable results and transform operations."
          delay={3}
        />
      </HeroInfoSection>

      {/* Industries Grid */}
      <Section
        title="Our Industry Expertise"
        subtitle="Proven experience delivering solutions across diverse sectors"
      >
        <CardGrid>
          {industries.map((industry, index) => (
            <Card
              key={index}
              icon={industry.icon}
              title={industry.title}
              description={industry.description}
              tag={industry.tag}
              delay={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Industry Benefits Section */}
      <Section
        title="Why Choose AxisPoint for Your Industry"
        className="bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Deep Industry Knowledge
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Our team has worked extensively in various industries, understanding unique challenges, regulatory requirements, and best practices specific to your sector.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Compliance expertise</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Industry-specific workflows</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Proven solutions</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Scalable & Secure Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We build applications that grow with your business while maintaining the highest standards of security, performance, and reliability.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Enterprise-grade security</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3">✓</span>
                <span className="text-gray-600 dark:text-gray-300">High availability systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Disaster recovery planning</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <ContactSection />
    </main>
  );
}
