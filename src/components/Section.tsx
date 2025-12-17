'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({
  title,
  subtitle,
  children,
  className = '',
  id,
}: SectionProps) => {
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
    <section 
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            className="text-center mb-12"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {title && (
              <motion.h2
                className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
                variants={item}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                variants={item}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};
