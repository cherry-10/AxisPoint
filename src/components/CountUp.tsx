'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface CountUpProps {
  from?: number;
  to: number;
  duration?: number;
  format?: (value: number) => string;
  className?: string;
  trigger?: boolean;
}

export const CountUp = ({
  from = 0,
  to,
  duration = 2,
  format,
  className = '',
  trigger = true,
}: CountUpProps) => {
  const [displayValue, setDisplayValue] = useState(trigger ? from : to);

  useEffect(() => {
    if (!trigger) {
      setDisplayValue(to);
      return;
    }

    let startTime: number;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Ease out
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentValue = from + (to - from) * easeProgress;

      setDisplayValue(Math.round(currentValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [from, to, duration, trigger]);

  const formatted = format ? format(displayValue) : displayValue.toString();

  return <span className={className}>{formatted}</span>;
};

interface StatCounterProps {
  number: string;
  label: string;
  delay?: number;
}

export const StatCounter = ({ number, label, delay = 0 }: StatCounterProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const refNode = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (refNode) {
      observer.observe(refNode);
    }

    return () => {
      if (refNode) {
        observer.unobserve(refNode);
      }
    };
  }, []);

  // Extract numeric value and suffix from number string (e.g., "50+" -> 50, "+")
  const match = number.match(/^(\d+)(.*)$/);
  const numericValue = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : '';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.5, ease: 'easeOut' }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-primary dark:text-primary-dark mb-2">
        <CountUp
          from={0}
          to={numericValue}
          duration={2}
          trigger={isInView}
          format={(value) => `${value}${suffix}`}
        />
      </div>
      <div className="text-gray-600 dark:text-gray-300">{label}</div>
    </motion.div>
  );
};
