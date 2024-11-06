import type { Metadata } from 'next';
import '../globals.css';
import LeftSideBar from '@/components/ui/LeftsideBar';
import Link from 'next/link';
import BottomBar from '@/components/ui/BottomBar';
import Image from 'next/image';

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
      <div className="flex justify-between items-center text-white  mt-6 mx-10">
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
        <Link href="/" className="cursor-pointer flex gap-4 p-4 md:hidden mb-4">
          <Image src="/assets/logout.svg" alt="logout" width={24} height={24} />
          <p className="text-white max-xl:hidden">Logout</p>
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
