import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className="absolute w-full text-white">
      <div className="flex justify-between items-center mt-6 mx-8">
        <div className="flex gap-2 items-center"></div>

        <div className="flex gap-6 justify-center items-center text-black">
          <Link href="/" className="text-base font-semibold">
            About us
          </Link>
          <Link href="/" className="text-base font-semibold">
            Services
          </Link>
        </div>

        <div className="flex gap-4 items-center justify-end">
          <Link className="font-semibold" href="/sign-in">
            Log in
          </Link>
          <Link
            className="bg-black px-5 py-3 rounded-full text-white text-sm font-semibold"
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
