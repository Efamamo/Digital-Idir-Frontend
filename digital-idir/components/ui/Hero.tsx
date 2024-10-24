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
        backgroundImage: `url('/assets/dw.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div></div>
      <div>
        <h1 className="text-5xl md:text-8xl mb-4 font-semibold text-center">
          Digital Idir
        </h1>{' '}
        <h3 className=" text-xl text-center">
          Empowering Communities, Connecting Traditions.
        </h3>
        <Link
          href="/sign-up"
          className="bg-white text-black px-4 md:px-8 py-1 text-center md:py-3 rounded-full max-w-40 block mx-auto text-lg font-semibold mt-4 hover:bg-black hover:text-white"
        >
          Get Started
        </Link>
      </div>

      <Scroll />
    </div>
  );
}

export default Hero;
