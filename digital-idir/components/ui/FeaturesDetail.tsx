import Image from 'next/image';
import React from 'react';

interface FeaturesProp {
  title: string;
  desc: string;
  image: string;
  list: string[];
  num: number;
}

function FeaturesDetail({ num, image, title, desc, list }: FeaturesProp) {
  return (
    <div
      className="flex flex-wrap gap-20"
      id={num.toString()}
      style={{ scrollMarginTop: '40vh' }}
    >
      <Image src={image} alt="feature detail" width={500} height={500} />

      <div className="max-w-4xl">
        <h3 className="text-xl font-semibold mb-1">
          {num}. {title}
        </h3>
        <p>{desc}</p>

        <ul className="list-disc pl-5 mt-3">
          {list.map((item, index) => (
            <li className="mb-1" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FeaturesDetail;
