import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { LayoutClient } from '@/components/LayoutClient';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AxisPoint Software - Modern Software Solutions',
  description: 'Delivering innovative software solutions with cutting-edge technology and exceptional user experiences.',
  keywords: ['software development', 'IT solutions', 'web development', 'mobile apps', 'cloud services'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
