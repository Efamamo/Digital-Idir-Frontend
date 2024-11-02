import Image from 'next/image';
import React from 'react';

function Loading() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Image
        src="/assets/loading.svg"
        alt="loader"
        width={1100}
        height={1100}
      />
    </div>
  );
}

export default Loading;
