import React from 'react';

interface RecentNewsProps {
  time: string;
  title: string;
}
function RecentNews({ time, title }: RecentNewsProps) {
  return (
    <div className="pl-10 py-2 w-full border-b border-gray-700 cursor-pointer hover:scale-105 transition-all duration-700">
      <p className="text-sm  mb-1 font-semibold">{time}</p>
      <p className="text-sm text-gray-500 w-10/12">{title}</p>
    </div>
  );
}

export default RecentNews;
