import React from 'react';
import Link from 'next/link';

function CallToAction() {
  return (
    <div className="bg-black py-16 text-center text-white">
      <h2 className="text-4xl font-bold mb-6">
        Ready to Empower Your Community?
      </h2>
      <p className="text-lg mb-8">
        Take the next step and join Digital Idir to support and connect with
        your community.
      </p>
      <div className="flex justify-center gap-4">
        <Link
          href="/sign-up"
          className="bg-white text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100"
        >
          Get Started
        </Link>
        <Link
          href="/download"
          className="bg-transparent border-2 border-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black"
        >
          Join Now
        </Link>
      </div>
    </div>
  );
}

export default CallToAction;
