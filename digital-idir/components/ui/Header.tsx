'use client';
import Link from 'next/link';
import React from 'react';
import MobileNav from './MobileNav';
import { usePathname } from 'next/navigation';

function Header() {
  const pathName = usePathname();
  return (
    <div className="absolute w-full text-white">
      <div className="flex justify-between items-center mt-6 mx-8">
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:flex gap-2 items-center">
          <Link
            href="/"
            className="text-3xl font-bold mb-4"
            style={{
              fontFamily: "'Oleo Script', cursive",
              transform: 'rotate(-2deg)',
            }}
          >
            Digital Idir
          </Link>
        </div>

        <div className="hidden md:flex gap-6 justify-center items-center ml-8">
          <Link
            href="/"
            className={`font-semibold hover:text-gray-400 text-base pb-1 ${
              pathName === '/' ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`font-semibold hover:text-gray-400 text-base pb-1 ${
              pathName.includes('/about') ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            About
          </Link>
          <Link
            href="/items"
            className={`font-semibold hover:text-gray-400 text-base pb-1 ${
              pathName.includes('/items') ? 'border-b-2 border-blue-500' : ''
            }`}
          >
            Items
          </Link>
        </div>

        <div className="flex gap-4 items-center justify-end">
          <Link
            className="hidden md:inline-block font-semibold text-base hover:text-gray-400"
            href="/sign-in"
          >
            Log in
          </Link>
          <Link
            className="bg-transparent border-2 border-white px-4 md:px-6 py-1 md:py-2 rounded-full text-base font-semibold hover:bg-white hover:text-black"
            href="/sign-up"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
