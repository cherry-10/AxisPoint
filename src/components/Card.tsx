'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  tag?: string;
  className?: string;
  delay?: number;
}

export const Card = ({
  icon,
  title,
  description,
  tag,
  className = '',
  delay = 0,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={{
        y: -4,
        scale: 1.03,
        transition: { type: 'spring', stiffness: 220, damping: 18 },
      }}
      className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 ${className}`}
    >
      {tag && (
        <span className="inline-block bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-dark text-xs font-medium px-3 py-1 rounded-full mb-4">
          {tag}
        </span>
      )}
      
      {icon && (
        <div className="w-12 h-12 bg-primary/10 dark:bg-primary-dark/10 rounded-lg flex items-center justify-center text-primary dark:text-primary-dark mb-4">
          {icon}
        </div>
      )}
      
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

export const CardGrid = ({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {children}
    </div>
  );
};
