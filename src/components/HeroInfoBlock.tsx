'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroInfoBlockProps {
  icon: string | ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export const HeroInfoBlock = ({ icon, title, description, delay = 0 }: HeroInfoBlockProps) => {
  const isString = typeof icon === 'string';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="mb-6 flex items-center justify-center w-20 h-20 mx-auto"
        >
          {isString ? (
            <div className="relative w-full h-full">
              <Image
                src={icon as string}
                alt={title}
                width={80}
                height={80}
                className="w-full h-full object-contain drop-shadow-lg"
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-primary dark:text-primary-dark">
              {icon}
            </div>
          )}
        </motion.div>

        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
    </motion.div>
  );
};

interface HeroInfoSectionProps {
  children: ReactNode;
  className?: string;
}

export const HeroInfoSection = ({ children, className = '' }: HeroInfoSectionProps) => {
  return (
    <section className={`py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-slate-950 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {children}
        </div>
      </div>
    </section>
  );
};
