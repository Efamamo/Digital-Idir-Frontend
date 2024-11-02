import type { Metadata } from 'next';
import { Roboto, Great_Vibes } from 'next/font/google';
import Footer from '@/components/ui/Footer';
import Header from '@/components/ui/Header';
import './globals.css';

// Load the Roboto font with the specified weights
const roboto = Roboto({
  weight: ['400', '500', '700'], // You can specify the font weights you want
  subsets: ['latin'],
});

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes',
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Oleo+Script:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`antialiased ${roboto.className} ${greatVibes.variable} bg-gradient-to-b from-[#17171a] via-[#121417] to-black`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
