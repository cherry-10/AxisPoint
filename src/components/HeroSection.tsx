'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  children?: ReactNode;
  className?: string;
  heroImage?: string;
  showHeroImage?: boolean;
}

export const HeroSection = ({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  children,
  className = '',
  heroImage = '/images/hero-tech.svg',
  showHeroImage = true,
}: HeroSectionProps) => {
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    show: { 
      opacity: 1, 
      scale: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      } 
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section className={`relative py-20 md:py-32 overflow-hidden ${className}`}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F8FA] via-white to-[#F9FAFB] dark:from-primary-dark/5 dark:via-slate-900 dark:to-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.20] dark:opacity-[0.10] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid ${showHeroImage ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-12 items-center`}>
          <motion.div
            className={`space-y-6 ${!showHeroImage ? 'text-center max-w-4xl mx-auto' : ''}`}
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight"
              variants={item}
            >
              {title}
            </motion.h1>
            
            {subtitle && (
              <motion.p 
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-prose leading-relaxed"
                variants={item}
              >
                {subtitle}
              </motion.p>
            )}
            
            {(primaryCta || secondaryCta) && (
              <motion.div 
                className={`flex flex-col sm:flex-row ${!showHeroImage ? 'justify-center' : ''} gap-4 mt-8`}
                variants={item}
              >
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="btn-primary inline-flex items-center justify-center"
                  >
                    {primaryCta.text}
                  </Link>
                )}
                
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="btn-secondary inline-flex items-center justify-center"
                  >
                    {secondaryCta.text}
                  </Link>
                )}
              </motion.div>
            )}
            
            {children && (
              <motion.div variants={item} className="mt-12">
                {children}
              </motion.div>
            )}
          </motion.div>

          {showHeroImage && (
            <motion.div
              className="relative lg:order-last order-first"
              variants={imageVariants}
              initial="hidden"
              animate="show"
            >
              <motion.div
                animate={floatingAnimation}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-cyan-500/30 blur-3xl rounded-full transform scale-110" />
                
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl dark:shadow-blue-500/10">
                  <div className="bg-gradient-to-br from-blue-50/50 to-purple-50/50 dark:from-blue-950/20 dark:to-purple-950/20 p-8 backdrop-blur-sm">
                    <Image
                      src={heroImage}
                      alt="AxisPoint Software - Technology and Innovation"
                      width={600}
                      height={600}
                      priority
                      className="w-full h-auto drop-shadow-2xl"
                    />
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 dark:from-blue-500 dark:to-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 rounded-full blur-2xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
