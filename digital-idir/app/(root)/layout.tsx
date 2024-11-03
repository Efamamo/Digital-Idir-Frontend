import type { Metadata } from 'next';
import '../globals.css';
import LeftSideBar from '@/components/ui/LeftsideBar';
import Link from 'next/link';
import BottomBar from '@/components/ui/BottomBar';

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
      <div className="flex gap-2 items-center text-white  mt-6 mx-10">
        <Link
          href="/dashboard"
          className="text-3xl font-bold mb-4"
          style={{
            fontFamily: "'Oleo Script', cursive",
            transform: 'rotate(-2deg)',
          }}
        >
          Digital Idir
        </Link>
      </div>
      <div className="flex pt-12">
        <LeftSideBar />
        {children}
      </div>
      <BottomBar />
    </main>
  );
}
