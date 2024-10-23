import React from 'react';
import Scroll from './Scroll';
import { Button } from './button';
import { redirect } from 'next/navigation';
import Link from 'next/link';

function Hero() {
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center text-white pb-4"
      style={{
        backgroundImage: `url('/assets/future.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
      }}
    >
      <div></div>
      <div>
        <h1 className="text-8xl mb-4 font-semibold">Digital Idir</h1>{' '}
        <h3 className=" text-xl ">
          Empowering Communities, Connecting Traditions.
        </h3>
        <Link
          href="/sign-up"
          className="bg-blue-600 rounded-full px-8 py-2 max-w-40 text-center block mx-auto mt-4 hover:bg-blue-800"
        >
          Get Started
        </Link>
      </div>

      <Scroll />
    </div>
  );
}

export default Hero;
