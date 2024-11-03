import Image from 'next/image';
import React from 'react';

interface MemorialProp {
  name: string;
  image: string;
  desc: string;
  dob: any;
  dop: any;
}

function getDateParts(isoDate: any) {
  const date = new Date(isoDate);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[date.getUTCMonth()]; // Retrieves the shortened month name
  const year = date.getUTCFullYear();

  return `${day} ${month} ${year}`;
}

function MemorialCard({ name, image, dob, dop, desc }: MemorialProp) {
  return (
    <div className="bg-white max-w-xs relative rounded-lg">
      <Image
        className="rounded-t-lg"
        src="/assets/candle.webp"
        alt="candle"
        width={320}
        height={200}
      />
      <div className="h-40"></div>
      <div className="absolute top-28 md:top-36 left-0 w-full flex flex-col items-center gap-1">
        <Image
          src={image}
          alt="Profile"
          width={100}
          height={60}
          className="rounded-md"
        />
        <h3 className="text-black text-base font-semibold">{name}</h3>
        <p className="text-black text-sm">
          {`${getDateParts(dob)} - ${getDateParts(dop)}`}
        </p>
        <p className="text-black w-72 text-center">
          <i>"{desc}"</i>
        </p>
      </div>
    </div>
  );
}

export default MemorialCard;
