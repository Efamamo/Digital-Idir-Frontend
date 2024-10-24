import React from 'react';
import Link from 'next/link';

function CallToAction() {
  return (
    <div className="bg-black py-16 text-center text-white px-5 md:px-0">
      <h2 className="text-2xl md:text-4xl font-bold mb-6">
        Ready to Empower Your Community?
      </h2>
      <p className="text-base md:text-lg mb-8">
        Take the next step and join Digital Idir to support and connect with
        your community.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/sign-up"
          className="bg-white text-black px-4 py-1 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-gray-100"
        >
          Get Started
        </Link>
        <Link
          href="/download"
          className="bg-transparent border-2 border-white px-4 py-1 md:px-8 md:py-3 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-black"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
