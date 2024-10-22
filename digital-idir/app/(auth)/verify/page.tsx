import Link from 'next/link';
import React from 'react';

function Verify() {
  return (
    <div className="h-[60vh] flex justify-center items-center">
      <div className="w-[420px] p-8 rounded-lg  shadow-lg text-center">
        <h2 className="text-gray-700 mb-6 text-2xl font-semibold">
          Email Verification Required
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          We've sent a verification link to your email address. Please check
          your inbox and click on the link to verify your account.
        </p>
        <p className="text-gray-600 text-sm mt-6">
          If you've already verified your email,{' '}
          <Link
            href="/sign-in"
            className="text-blue-600 font-semibold hover:underline"
          >
            Proceed To Login
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Verify;
