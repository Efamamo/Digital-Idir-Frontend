import Image from 'next/image';
import React from 'react';

function Testimonial({
  image,
  testimony,
  name,
}: {
  image: string;
  testimony: string;
  name: string;
}) {
  return (
    <div className="max-w-80 p-6 shadow-lg rounded-lg cursor-pointer bg-[#101012] hover:scale-105 duration-700">
      <Image
        src={image}
        alt="testimonial image"
        width={100}
        height={100}
        className="ml-auto rounded-bl-full"
      />
      <h3 className="text-base md:text-lg mt-2">
        <i>{testimony}</i>
      </h3>
      <p className="text-xs md:text-sm mt-2 font-semibold">{name}</p>
    </div>
  );
}

export default Testimonial;
