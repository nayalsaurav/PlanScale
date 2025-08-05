import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PlanScale India – Real Scale Walkthroughs for Architecture',
  description: 'Experience your project before it\'s built. Visualize homes, offices, and stores at 1:1 scale using India\'s only immersive design walkthrough system.',
  openGraph: {
    title: 'PlanScale India – Real Scale Walkthroughs for Architecture',
    description: 'Experience your project before it\'s built. Visualize homes, offices, and stores at 1:1 scale using India\'s only immersive design walkthrough system.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}