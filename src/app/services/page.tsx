import { HeroSection } from '@/components/HeroSection';
import { HeroInfoBlock, HeroInfoSection } from '@/components/HeroInfoBlock';
import { Section } from '@/components/Section';
import { Card, CardGrid } from '@/components/Card';
import { FiCode, FiCpu, FiCloud, FiBarChart } from 'react-icons/fi';

const coreServices = [
  {
    icon: <FiCode size={24} />,
    title: 'Custom Software Development',
    description: 'Building unique applications for specific business needs.',
    tag: 'Development',
  },
  {
    icon: <FiCode size={24} />,
    title: 'Web Development',
    description: 'Creating dynamic, functional websites and web applications.',
    tag: 'Web',
  },
  {
    icon: <FiCode size={24} />,
    title: 'Mobile App Development',
    description: 'Designing and building apps for iOS and Android platforms.',
    tag: 'Mobile',
  },
  {
    icon: <FiCpu size={24} />,
    title: 'Enterprise Software',
    description: 'Solutions for large organizations (CRM, ERP, HR, Inventory).',
    tag: 'Enterprise',
  },
  {
    icon: <FiCloud size={24} />,
    title: 'SaaS Development',
    description: 'Building Software-as-a-Service platforms for scalable solutions.',
    tag: 'SaaS',
  },
];

const advancedServices = [
  {
    icon: <FiBarChart size={24} />,
    title: 'AI & Machine Learning',
    description: 'Developing intelligent systems for data analysis and automation.',
    tag: 'AI/ML',
  },
  {
    icon: <FiCloud size={24} />,
    title: 'Cloud Computing',
    description: 'Services on AWS, Azure, Google Cloud for scalable infrastructure.',
    tag: 'Cloud',
  },
  {
    icon: <FiCpu size={24} />,
    title: 'Blockchain Development',
    description: 'Creating decentralized applications and solutions.',
    tag: 'Blockchain',
  },
  {
    icon: <FiCode size={24} />,
    title: 'Embedded Systems',
    description: 'Software for specific hardware devices and IoT solutions.',
    tag: 'Embedded',
  },
];

const supportServices = [
  {
    icon: <FiCode size={24} />,
    title: 'UI/UX Design',
    description: 'Crafting user-friendly and visually appealing interfaces.',
    tag: 'Design',
  },
  {
    icon: <FiBarChart size={24} />,
    title: 'Quality Assurance & Testing',
    description: 'Ensuring software reliability and performance through rigorous testing.',
    tag: 'QA',
  },
  {
    icon: <FiCloud size={24} />,
    title: 'DevOps Automation',
    description: 'Streamlining development and operations for faster deployment.',
    tag: 'DevOps',
  },
  {
    icon: <FiCpu size={24} />,
    title: 'System Integration',
    description: 'Connecting different software systems to work together seamlessly.',
    tag: 'Integration',
  },
  {
    icon: <FiBarChart size={24} />,
    title: 'Maintenance & Support',
    description: 'Ongoing updates, bug fixes, and 24/7 technical support.',
    tag: 'Support',
  },
  {
    icon: <FiCpu size={24} />,
    title: 'Cybersecurity',
    description: 'Protecting software and systems from threats and vulnerabilities.',
    tag: 'Security',
  },
];

const strategicServices = [
  {
    icon: <FiCpu size={24} />,
    title: 'IT Consulting',
    description: 'Advising businesses on technology strategy and digital roadmaps.',
    tag: 'Consulting',
  },
  {
    icon: <FiBarChart size={24} />,
    title: 'Digital Transformation',
    description: 'Helping companies integrate digital technology into operations.',
    tag: 'Transformation',
  },
  {
    icon: <FiCode size={24} />,
    title: 'Prototyping & MVP',
    description: 'Creating initial versions (Minimum Viable Products) for validation.',
    tag: 'MVP',
  },
];

export default function Services() {
  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="End-to-end software solutions tailored to your business needs. We create web applications and apps for government and private sectors with innovative, scalable, and reliable solutions that drive growth."
        heroImage="/images/hero-software.svg"
        showHeroImage={true}
      />

      {/* Hero-Down Info Section */}
      <HeroInfoSection>
        <HeroInfoBlock
          icon="/images/icons/development-icon.svg"
          title="Custom Development"
          description="Tailored software solutions built from the ground up to meet your unique business requirements."
          delay={0}
        />
        <HeroInfoBlock
          icon="/images/icons/consulting-icon.svg"
          title="IT Consulting"
          description="Strategic guidance and expert advice to optimize your technology infrastructure and processes."
          delay={1}
        />
        <HeroInfoBlock
          icon="/images/icons/cloud-icon.svg"
          title="Cloud & Data"
          description="Scalable cloud solutions and data management systems for modern enterprises."
          delay={2}
        />
        <HeroInfoBlock
          icon="/images/icons/training-icon.svg"
          title="Training"
          description="Comprehensive training programs to upskill your team on the latest technologies."
          delay={3}
        />
      </HeroInfoSection>

      {/* Core Development Services */}
      <Section
        title="Core Development Services"
        subtitle="Building unique applications tailored to your business needs"
      >
        <CardGrid>
          {coreServices.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tag={service.tag}
              delay={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Emerging & Advanced Technologies */}
      <Section
        title="Emerging & Advanced Technologies"
        subtitle="Cutting-edge solutions for modern challenges"
        className="bg-gray-50 dark:bg-gray-800/50"
      >
        <CardGrid>
          {advancedServices.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tag={service.tag}
              delay={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Support & Optimization Services */}
      <Section
        title="Support & Optimization Services"
        subtitle="Ensuring quality, reliability, and continuous improvement"
      >
        <CardGrid>
          {supportServices.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tag={service.tag}
              delay={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Strategic & Consulting Services */}
      <Section
        title="Strategic & Consulting Services"
        subtitle="Expert guidance for digital transformation and growth"
        className="bg-gray-50 dark:bg-gray-800/50"
      >
        <CardGrid>
          {strategicServices.map((service, index) => (
            <Card
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              tag={service.tag}
              delay={index}
            />
          ))}
        </CardGrid>
      </Section>

      {/* Government & Private Sector Section */}
      <Section
        title="Government & Private Sector Solutions"
        subtitle="Specialized expertise in serving both public and private sector needs"
        className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Government Sector</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">•</span>
                <span className="text-gray-600 dark:text-gray-300">Citizen-facing portals and e-governance solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">•</span>
                <span className="text-gray-600 dark:text-gray-300">Compliance with government standards and regulations</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">•</span>
                <span className="text-gray-600 dark:text-gray-300">Secure data management and information systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">•</span>
                <span className="text-gray-600 dark:text-gray-300">Integration with existing government infrastructure</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">•</span>
                <span className="text-gray-600 dark:text-gray-300">24/7 support and maintenance services</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Private Sector</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">•</span>
                <span className="text-gray-600 dark:text-gray-300">Enterprise resource planning (ERP) systems</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">•</span>
                <span className="text-gray-600 dark:text-gray-300">Customer relationship management (CRM) solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">•</span>
                <span className="text-gray-600 dark:text-gray-300">Business intelligence and analytics platforms</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">•</span>
                <span className="text-gray-600 dark:text-gray-300">Mobile-first applications for customer engagement</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">•</span>
                <span className="text-gray-600 dark:text-gray-300">Scalable solutions for rapid business growth</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Service Details Section */}
      <Section
        title="Why Our Services Stand Out"
        className="bg-gray-50 dark:bg-gray-800/50"
      >
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary dark:text-primary-dark">
              <span className="text-xl font-bold">✓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Expert Team
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Experienced developers and architects with proven track records in delivering enterprise solutions for both sectors.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary dark:text-primary-dark">
              <span className="text-xl font-bold">✓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Agile Methodology
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Flexible, iterative approach ensuring continuous delivery and rapid adaptation to changing requirements.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary dark:text-primary-dark">
              <span className="text-xl font-bold">✓</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Quality Assurance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Rigorous testing and quality standards ensuring reliable, performant, and secure applications.
            </p>
          </div>
        </div>
      </Section>
    </main>
  );
}
