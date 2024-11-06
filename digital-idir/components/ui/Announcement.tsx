import React from 'react';

interface AnnouncementProps {
  title: string;
  date: string;
  time: string;
  desc: string;
}
function Announcement({ title, date, time, desc }: AnnouncementProps) {
  return (
    <div className="flex flex-wrap gap-2 md:gap-0">
      <div className="border-b md:border-r border-gray-400 w-full md:w-24 text-sm flex gap-4 md:gap-1 md:border-b-0 md:flex-col pb-1 md:pb-0">
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <hr className="text-white" />
      <div className="md:ml-6 max-w-3xl">
        <h3 className="text-base font-semibold">{title}</h3>
        <p className="text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default Announcement;
