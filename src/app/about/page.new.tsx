'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SplashSection, FloatingCard } from '@/components/SplashSection';
import { FiZap, FiTarget, FiCheckCircle, FiHeart, FiUsers, FiAward, FiCode, FiGlobe } from 'react-icons/fi';

const coreValues = [
  {
    icon: <FiZap className="text-blue-500" size={24} />,
    title: 'Innovation',
    description: 'We embrace creativity and forward-thinking approaches to build impactful solutions.',
  },
  {
    icon: <FiTarget className="text-purple-500" size={24} />,
    title: 'Excellence',
    description: 'We deliver high-quality software and services that meet global standards.',
  },
  {
    icon: <FiCheckCircle className="text-green-500" size={24} />,
    title: 'Integrity',
    description: 'We work transparently and ethically, ensuring trust in every partnership.',
  },
  {
    icon: <FiHeart className="text-red-500" size={24} />,
    title: 'Client-Centric',
    description: 'We prioritize client goals, tailoring solutions that create measurable business impact.',
  },
];

const stats = [
  { value: '10+', label: 'Years Experience', icon: <FiAward className="w-6 h-6" /> },
  { value: '100+', label: 'Projects Delivered', icon: <FiCode className="w-6 h-6" /> },
  { value: '50+', label: 'Global Clients', icon: <FiGlobe className="w-6 h-6" /> },
  { value: '30+', label: 'Team Members', icon: <FiUsers className="w-6 h-6" /> },
];

export default function About() {
  return (
    <main className="pt-0">
      {/* Hero Splash Section */}
      <SplashSection
        title="Innovation Meets Excellence"
        subtitle="At AxisPoint Software, we transform ideas into powerful digital experiences that drive business growth."
        image="/images/splash/about-hero.jpg"
        imageAlt="Modern tech workspace with team collaboration"
        height="large"
        overlayGradient="bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent"
      >
        <div className="flex flex-wrap gap-4 mt-8">
          <motion.a
            href="/services"
            className="px-8 py-3 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-100 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Services
          </motion.a>
          <motion.a
            href="/contact"
            className="px-8 py-3 border-2 border-white text-white font-medium rounded-full hover:bg-white/10 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.a>
        </div>

        {/* Floating Stats */}
        <FloatingCard position="bottom-left" className="hidden lg:block">
          <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
          <ul className="space-y-3">
            {[
              '15+ Years of Experience',
              '100+ Successful Projects',
              '95% Client Retention',
              'End-to-End Solutions'
            ].map((item, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="w-3 h-3 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-slate-700 dark:text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </FloatingCard>
      </SplashSection>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 z-10" />
                <Image
                  src="/images/content/team-collaboration.jpg"
                  alt="Our team collaborating"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full mb-4">
                Our Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Building the Future of Technology
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Founded in 2010, AxisPoint Software has been at the forefront of digital transformation, 
                helping businesses leverage technology to solve complex challenges and achieve their goals. 
                Our journey has been marked by innovation, dedication, and a commitment to excellence.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                From our humble beginnings as a small startup to becoming a trusted technology partner for 
                businesses worldwide, we&apos;ve remained focused on delivering exceptional value through 
                cutting-edge solutions and unparalleled service.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.a
                  href="/technologies"
                  className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Our Technologies
                </motion.a>
                <motion.a
                  href="/careers"
                  className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Join Our Team
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Guiding Principles That Define Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our core values are the foundation of everything we do, shaping our culture and driving our success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-slate-200 dark:border-slate-700"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-700 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Partner with AxisPoint Software and experience the difference of working with a team that&apos;s committed to your success.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <motion.a
              href="/contact"
              className="px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/services"
              className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Services
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
