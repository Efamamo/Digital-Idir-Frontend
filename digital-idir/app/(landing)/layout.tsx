import type { Metadata } from 'next';
import { Roboto, Great_Vibes } from 'next/font/google';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import '../globals.css';
import LeftSideBar from '@/components/ui/LeftsideBar';

export const metadata: Metadata = {
  title: 'Digital Idir',
  description: 'Traditional Ethiopian Insurance or Idir Digitalized',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
