'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

function Callback() {
  const router = useRouter();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get('accessToken');
    const refreshToken = params.get('refreshToken');

    if (accessToken && refreshToken) {
      // Store tokens in localStorage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);

      // Redirect to dashboard
      router.push('/');
    } else {
      // Handle the error if tokens are missing
      router.push('/login');
    }
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col gap-4">
        <Image
          color="black"
          src="/assets/loading_black.svg"
          alt="loading"
          width={100}
          height={100}
        />
        <p className="text-lg">Redirecting</p>
      </div>
    </div>
  );
}

export default Callback;
