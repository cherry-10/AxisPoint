'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface SplitContentSectionProps {
  title: string;
  description: string | ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  backgroundColor?: string;
  children?: ReactNode;
}

export const SplitContentSection = ({
  title,
  description,
  image,
  imageAlt,
  imagePosition = 'right',
  backgroundColor = 'bg-slate-50 dark:bg-slate-950',
  children,
}: SplitContentSectionProps) => {
  const isImageRight = imagePosition === 'right';

  return (
    <section className={`py-16 md:py-24 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isImageRight ? '' : 'md:grid-flow-dense'}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={isImageRight ? '' : 'md:col-start-2'}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              {title}
            </h2>
            {typeof description === 'string' ? (
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {description}
              </p>
            ) : (
              <div className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                {description}
              </div>
            )}
            {children}
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: isImageRight ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`relative ${isImageRight ? '' : 'md:col-start-1 md:row-start-1'}`}
          >
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover w-full h-full"
                priority={false}
                unoptimized={image.startsWith('http')}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

interface ContentListProps {
  items: string[];
}

export const ContentList = ({ items }: ContentListProps) => {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <motion.li
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          className="flex items-start"
        >
          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mr-3 mt-0.5">
            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <span className="text-gray-700 dark:text-gray-300">{item}</span>
        </motion.li>
      ))}
    </ul>
  );
};
