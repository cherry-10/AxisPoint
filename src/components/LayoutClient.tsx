'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export function LayoutClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
