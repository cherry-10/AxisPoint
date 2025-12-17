'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Technologies', path: '/technologies' },
  { name: 'Industries', path: '/industries' },
  { name: 'Careers', path: '/careers' },
];

export const Navbar = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  // Ensure component is mounted before rendering theme-dependent UI
  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Animation variants
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
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } },
  };

  const headerBase =
    'fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm transition-all duration-300';
  const headerTheme =
    'bg-[rgba(255,255,255,0.7)] border-gray-100/80 dark:bg-[rgba(15,23,42,0.9)] dark:border-gray-800/80';
  const headerElevation = isScrolled ? 'shadow-md backdrop-blur-md' : 'shadow-sm';

  return (
    <header className={`${headerBase} ${headerTheme} ${headerElevation}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="relative w-14 h-14 flex items-center justify-center">
                <Image
                  src="/axispoint-full-logo.svg"
                  alt="AxisPoint Software Pvt. Ltd. Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="hidden sm:inline text-lg font-bold text-primary dark:text-primary-dark">
                AxisPoint
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Pill Nav */}
          <div className="hidden md:flex items-center">
            <motion.div 
              className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-2 py-1"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {navLinks.map((link) => (
                <motion.div key={link.path} variants={item}>
                  <Link
                    href={link.path}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      pathname === link.path
                        ? 'bg-primary text-white dark:bg-primary-dark dark:text-gray-900'
                        : 'text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark hover:bg-gray-200 dark:hover:bg-gray-700'
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200"
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle theme"
            >
              {mounted && (
                theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />
              )}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    pathname === link.path
                      ? 'bg-gray-100 text-primary dark:bg-gray-800 dark:text-primary-dark'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary-dark'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-primary-dark"
              >
                {mounted && (theme === 'dark' ? 'Light Mode' : 'Dark Mode')}
              </button>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
};
