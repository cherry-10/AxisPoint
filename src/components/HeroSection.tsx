'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ReactNode } from 'react';
import { SplitText, FadeInUp } from './AnimatedText';

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
  isRealPhoto?: boolean;
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
  isRealPhoto = false,
}: HeroSectionProps) => {
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

  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Background for non-photo sections */}
      {!isRealPhoto && (
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F6F8FA] via-white to-[#F9FAFB] dark:from-primary-dark/5 dark:via-slate-900 dark:to-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_60%)] dark:bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center opacity-[0.20] dark:opacity-[0.10] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        </div>
      )}
      
      {/* Real Photo Background with Enhanced Overlay */}
      {isRealPhoto && showHeroImage && (
        <div className="absolute inset-0 -z-20">
          <Image
            src={heroImage}
            alt="AxisPoint Software - Team Collaboration"
            fill
            priority
            quality={95}
            className="object-cover w-full h-full"
            unoptimized={true}
          />
          {/* Dark overlay for text readability - enhanced for better contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className={`grid ${showHeroImage && !isRealPhoto ? 'lg:grid-cols-2' : 'grid-cols-1'} gap-12 items-center`}>
          <motion.div
            className={`space-y-6 ${isRealPhoto ? 'relative z-10 text-white' : !showHeroImage ? 'text-center max-w-4xl mx-auto' : ''}`}
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            <SplitText
              text={title}
              className={`text-4xl md:text-6xl font-bold leading-tight tracking-tight block ${isRealPhoto ? 'text-white drop-shadow-lg' : 'text-gray-900 dark:text-white'}`}
              delay={0}
              splitByWords={true}
            />
            
            {subtitle && (
              <FadeInUp delay={0.3}>
                <p 
                  className={`text-lg md:text-xl max-w-prose leading-relaxed ${isRealPhoto ? 'text-gray-100 drop-shadow-md' : 'text-gray-600 dark:text-gray-300'}`}
                >
                  {subtitle}
                </p>
              </FadeInUp>
            )}
            
            {(primaryCta || secondaryCta) && (
              <FadeInUp delay={0.5}>
                <div 
                  className={`flex flex-col sm:flex-row ${isRealPhoto ? '' : !showHeroImage ? 'justify-center' : ''} gap-4 mt-8`}
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
                </div>
              </FadeInUp>
            )}
            
            {children && (
              <FadeInUp delay={0.5} className="mt-12">
                {children}
              </FadeInUp>
            )}
          </motion.div>

          {showHeroImage && !isRealPhoto && (
            <motion.div
              className="relative lg:order-last order-first"
              variants={imageVariants}
              initial="hidden"
              animate="show"
            >
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
