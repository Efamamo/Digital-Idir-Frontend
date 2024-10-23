import type { Metadata } from 'next';
import { Playfair_Display } from 'next/font/google';
import { Roboto } from 'next/font/google';

import './globals.css';

// Load the Roboto font with the specified weights
const roboto = Roboto({
  weight: ['400', '500', '700'], // You can specify the font weights you want
  subsets: ['latin'],
});

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
    <html lang="en">
      {/* Apply the Roboto font to the body using className */}
      <body className={`antialiased ${roboto.className}`}>{children}</body>
    </html>
  );
}
