import Image from 'next/image';
import React from 'react';

interface TrendingProps {
  image: string;
  title: string;
  date: string;
}

function Trending({ image, title, date }: TrendingProps) {
  return (
    <div className="shadow-lg flex flex-col md:flex-row gap-8 items-center bg-[#101012] p-4 max-w-md cursor-pointer">
      <Image src={image} alt="news image" width={200} height={200} />
      <div>
        <h2 className="font-semibold text-base ">{title}</h2>
        <div className="flex gap-2">
          <Image
            src="/assets/events.svg"
            alt="news image"
            width={15}
            height={15}
          />
          <h3 className="my-2">{date}</h3>
        </div>
      </div>
    </div>
  );
}

export default Trending;
