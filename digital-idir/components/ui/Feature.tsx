import Image from 'next/image';
import React from 'react';

function Feature({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center max-w-5xl cursor-pointer hover:scale-105 duration-700">
      <img
        src={image}
        alt="feature image"
        className="max-w-xs md:max-w-md rounded-md"
      />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="max-w-md">{description}</p>
    </div>
  );
}

export default Feature;
