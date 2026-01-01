'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ReactNode } from 'react';

interface SplashSectionProps {
  title: string;
  subtitle?: string | ReactNode;
  image: string;
  imageAlt: string;
  overlayGradient?: string;
  contentPosition?: 'left' | 'center' | 'right';
  height?: 'small' | 'medium' | 'large' | 'full';
  children?: ReactNode;
  className?: string;
}

export const SplashSection = ({
  title,
  subtitle,
  image,
  imageAlt,
  overlayGradient = 'bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent',
  contentPosition = 'left',
  height = 'medium',
  children,
  className = '',
}: SplashSectionProps) => {
  const heightClasses = {
    small: 'min-h-[50vh] md:min-h-[60vh]',
    medium: 'min-h-[60vh] md:min-h-[80vh]',
    large: 'min-h-[80vh] md:min-h-screen',
    full: 'min-h-screen',
  };

  const contentAlignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };

  const contentPadding = {
    left: 'px-4 sm:px-6 lg:px-8',
    center: 'px-4 sm:px-6 lg:px-8',
    right: 'px-4 sm:px-6 lg:px-8',
  };

  return (
    <section className={`relative overflow-hidden ${heightClasses[height]} ${className}`}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
          quality={100}
          sizes="100vw"
        />
        <div className={`absolute inset-0 ${overlayGradient}`} />
      </div>

      {/* Content Container */}
      <div className={`relative h-full flex flex-col justify-end pb-16 md:pb-24 ${contentPadding[contentPosition]}`}>
        <motion.div 
          className={`max-w-7xl mx-auto w-full flex flex-col ${contentAlignClasses[contentPosition]} space-y-6`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          
          {subtitle && (
            <motion.div 
              className="text-lg md:text-xl text-gray-200 max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {subtitle}
            </motion.div>
          )}

          {children && (
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {children}
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
      >
        <span className="text-white text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <motion.div 
            className="w-1 h-2 bg-white rounded-full"
            animate={{
              y: [0, 8, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

// Floating Card Component
export const FloatingCard = ({
  children,
  className = '',
  delay = 0,
  position = 'top-right',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}) => {
  const positionClasses = {
    'top-left': 'top-8 left-8',
    'top-right': 'top-8 right-8',
    'bottom-left': 'bottom-8 left-8',
    'bottom-right': 'bottom-8 right-8',
  };

  return (
    <motion.div
      className={`absolute ${positionClasses[position]} bg-slate-100/90 dark:bg-slate-800/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl max-w-xs ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.6, 
        delay: delay * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 10
      }}
    >
      {children}
    </motion.div>
  );
};
