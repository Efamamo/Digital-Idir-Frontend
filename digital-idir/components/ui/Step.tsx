import React from 'react';

export default function Step({
  number,
  title,
  desc,
}: {
  number: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex flex-col items-center bg-[#1F1F22] py-6 px-8 rounded-lg">
      <h3 className="text-2xl font-semibold mb-4">
        {number}. {title}
      </h3>
      <p className="text-gray-200 text-center">{desc}</p>
    </div>
  );
}
