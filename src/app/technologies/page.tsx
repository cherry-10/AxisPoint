'use client';

import { HeroSection } from '@/components/HeroSection';
import { HeroInfoBlock, HeroInfoSection } from '@/components/HeroInfoBlock';
import { Section } from '@/components/Section';
import { motion } from 'framer-motion';

const techCategories = [
  {
    name: 'Core Development & Platforms',
    color: 'from-blue-500 to-cyan-500',
    technologies: ['React', 'Angular', 'Node.js', 'Full-Stack Development', 'PWAs', 'Python', 'Java', 'JavaScript', 'C++', 'Kotlin'],
  },
  {
    name: 'Web & Enterprise',
    color: 'from-green-500 to-emerald-500',
    technologies: ['Custom ERP/CRM', 'Financial Software', 'Enterprise Applications', 'TypeScript', 'PostgreSQL', 'MongoDB'],
  },
  {
    name: 'Mobile Development',
    color: 'from-orange-500 to-red-500',
    technologies: ['Native iOS/Android', 'Flutter', 'React Native', 'Kotlin', 'Swift', 'Firebase'],
  },
  {
    name: 'AI & Machine Learning',
    color: 'from-purple-500 to-pink-500',
    technologies: ['Generative AI', 'Predictive Analytics', 'AI Chatbots', 'TensorFlow', 'PyTorch', 'Scikit-learn'],
  },
  {
    name: 'Cloud Computing',
    color: 'from-indigo-500 to-blue-500',
    technologies: ['AWS', 'Azure', 'Google Cloud', 'Serverless', 'Cloud-Native Apps', 'Docker', 'Kubernetes'],
  },
  {
    name: 'Emerging Technologies',
    color: 'from-cyan-500 to-teal-500',
    technologies: ['IoT', 'Blockchain', 'AR/VR', 'RPA', 'Big Data', 'Hadoop', 'Spark'],
  },
  {
    name: 'Cybersecurity & Infrastructure',
    color: 'from-red-500 to-orange-500',
    technologies: ['Security Systems', 'Encryption', 'Penetration Testing', 'DevOps', 'CI/CD', 'Infrastructure as Code'],
  },
  {
    name: 'Data & Analytics',
    color: 'from-yellow-500 to-amber-500',
    technologies: ['Data Engineering', 'BI Dashboards', 'Analytics Platforms', 'Data Science', 'SQL', 'Tableau'],
  },
];

export default function Technologies() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <HeroSection
        title="Technologies We Use"
        subtitle="We build web applications and apps for government and private sectors using a modern and reliable tech stack, staying at the forefront of industry innovation."
        heroImage="/images/hero-innovation.svg"
        showHeroImage={true}
      />

      {/* Hero-Down Info Section */}
      <HeroInfoSection>
        <HeroInfoBlock
          icon="/images/icons/frontend-icon.svg"
          title="Frontend"
          description="Modern UI frameworks and libraries for creating engaging, responsive user experiences."
          delay={0}
        />
        <HeroInfoBlock
          icon="/images/icons/backend-icon.svg"
          title="Backend"
          description="Robust server-side technologies for building scalable and secure application logic."
          delay={1}
        />
        <HeroInfoBlock
          icon="/images/icons/database-icon.svg"
          title="Databases"
          description="Powerful data storage solutions optimized for performance and reliability."
          delay={2}
        />
        <HeroInfoBlock
          icon="/images/icons/tools-icon.svg"
          title="Cloud & Tools"
          description="DevOps, cloud platforms, and automation tools for efficient deployment and operations."
          delay={3}
        />
      </HeroInfoSection>

      {/* Tech Categories */}
      <Section
        title="Our Tech Stack"
        subtitle="A comprehensive selection of cutting-edge technologies for every layer of your application"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {techCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className={`h-1 w-12 bg-gradient-to-r ${category.color} rounded-full mb-4`} />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (index * 0.1) + (techIndex * 0.05), duration: 0.3 }}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium hover:bg-primary/20 dark:hover:bg-primary-dark/20 transition-colors duration-200"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Government & Compliance Section */}
      <Section
        title="Government & Compliance Standards"
        subtitle="Our technology choices ensure compliance with government regulations and security requirements"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Security & Compliance</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-300">ISO 27001 certified security practices</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-300">GDPR and data protection compliance</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-300">End-to-end encryption for sensitive data</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Regular security audits and penetration testing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Government-grade infrastructure</span>
              </li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Scalability & Performance</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Cloud-native architecture for high availability</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Auto-scaling for handling peak loads</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-300">99.9% uptime SLA guarantee</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Disaster recovery and backup solutions</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary dark:text-primary-dark mr-3 font-bold">✓</span>
                <span className="text-gray-600 dark:text-gray-300">Load balancing and CDN integration</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Why These Technologies */}
      <Section
        title="Why We Choose These Technologies"
        className="bg-gray-50 dark:bg-gray-800/50"
      >
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.div variants={item} className="text-center">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary dark:text-primary-dark">
              <span className="text-xl font-bold">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Performance
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We select technologies known for speed, efficiency, and scalability to ensure your applications perform optimally.
            </p>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary dark:text-primary-dark">
              <span className="text-xl font-bold">🔒</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Security
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              All our chosen technologies have strong security records and active communities maintaining security updates.
            </p>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary dark:text-primary-dark">
              <span className="text-xl font-bold">📈</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Maintainability
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              We prioritize technologies with strong ecosystems, extensive documentation, and large developer communities.
            </p>
          </motion.div>
        </motion.div>
      </Section>
    </main>
  );
}
