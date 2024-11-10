'use client';
import Announcement from '@/components/ui/Announcement';
import RecentNews from '@/components/ui/RecentNews';
import Trending from '@/components/ui/Trending';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

function formatDateTime(isoDate: string): {
  time: string;
  day: string;
  month: string;
  year: string;
} {
  const date = new Date(isoDate);

  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const day = date.getUTCDate().toString();
  const month = date.toLocaleDateString('en-US', { month: 'long' });
  const year = date.getUTCFullYear().toString();

  return { time, day, month, year };
}

export default function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    async function fetchNews() {
      const response = await fetch('http://localhost:5000/api/v1/news', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });
      const data = await response.json();
      setNews(data);
    }

    fetchNews();
  }, []);
  return (
    <section className=" text-white lg:mx-20 px-14 pb-20 md:px-0">
      <div className="flex pb-10 items-start">
        <div
          className="bg-[#101012] text-white  max-2xl:hidden w-64 overflow-x-hidden overflow-y-scroll border border-gray-700 mt-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="pl-10 py-6 border-b border-gray-700">
            <h3 className="text-base font-semibold">Recent news</h3>
          </div>
          {news.map((n: any) => (
            <RecentNews time={formatDateTime(n.date).time} title={n.title} />
          ))}

          <div className="py-10 pl-10 text-sm cursor-pointer">
            <p>+ Read More</p>
          </div>
        </div>
        <div className="md:pl-20 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold">Main News</h2>

          <div className="flex gap-6 mt-10 flex-wrap">
            {news.map((n: any) => (
              <Trending
                title={n.title}
                image={`http://localhost:5000/${n.imageUrl}`}
                date={`${formatDateTime(n.date).day}. ${
                  formatDateTime(n.date).month
                } ${formatDateTime(n.date).year}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
