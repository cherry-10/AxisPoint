'use client';

import { motion, useMotionValue, useTransform } from 'framer-motion';
import { ReactNode, useRef, useState } from 'react';
import Image from 'next/image';

interface TiltedCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  tag?: string;
  className?: string;
  delay?: number;
  image?: string;
  imageAlt?: string;
}

export const TiltedCard = ({
  icon,
  title,
  description,
  tag,
  className = '',
  delay = 0,
  image,
  imageAlt = 'Card image',
}: TiltedCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Motion values for tilt
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform tilt values to rotation angles (subtle, professional)
  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const mouseX = e.clientX - rect.left - centerX;
    const mouseY = e.clientY - rect.top - centerY;

    // Normalize to -100 to 100 range for tilt
    const normalizedX = (mouseX / centerX) * 100;
    const normalizedY = (mouseY / centerY) * 100;

    x.set(normalizedX);
    y.set(normalizedY);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay * 0.1,
        ease: [0.4, 0, 0.2, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      } as any}
      className={`relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:bg-slate-900 dark:border-slate-700 bg-slate-50 ${className}`}
    >
      {/* Glare Effect Layer - Linear light sweep */}
      {isHovering && (
        <motion.div
          className="absolute inset-0 pointer-events-none z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(
                135deg,
                rgba(255, 255, 255, 0) 0%,
                rgba(255, 255, 255, 0.1) 30%,
                rgba(255, 255, 255, 0.18) 50%,
                rgba(255, 255, 255, 0.05) 70%,
                rgba(255, 255, 255, 0) 100%
              )`,
              pointerEvents: 'none',
              mixBlendMode: 'screen' as const,
            }}
          />
        </motion.div>
      )}

      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover w-full h-full"
            unoptimized={image.startsWith('http')}
          />
        </div>
      )}
      
      <div className="p-6 relative z-10">
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
      </div>
    </motion.div>
  );
};

export const CardGrid = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {children}
    </div>
  );
};
