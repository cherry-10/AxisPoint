'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  splitByWords?: boolean;
}

export const SplitText = ({ 
  text, 
  className = '', 
  delay = 0, 
  splitByWords = true 
}: SplitTextProps) => {
  const words = text.split(' ');
  const chars = text.split('');
  const items = splitByWords ? words : chars;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {items.map((item, index) => (
        <motion.span key={index} variants={itemVariant} className="inline-block">
          {splitByWords ? (
            <>
              {item}
              {index !== items.length - 1 && <span>&nbsp;</span>}
            </>
          ) : (
            item
          )}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const FadeInUp = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
}: FadeInUpProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({
  children,
  delay = 0,
  duration = 0.5,
  className = '',
}: ScrollRevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};
