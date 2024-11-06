'use client';
import Announcement from '@/components/ui/Announcement';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

function formatDateTime(isoDate: string): { date: string; time: string } {
 
  const date = new Date(isoDate);
  const today = new Date();

  const isToday =
    date.getUTCFullYear() === today.getUTCFullYear() &&
    date.getUTCMonth() === today.getUTCMonth() &&
    date.getUTCDate() === today.getUTCDate();

  const day = isToday
    ? 'Today'
    : date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });

  const time = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return { date: day, time: time };
}

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [filteredAnnouncements, setFilteredAnnouncements] = useState([]);

  const searchRef = useRef<any>();

  useEffect(() => {
    async function fetchAnnouncements() {
      const response = await fetch(
        'http://localhost:5000/api/v1/announcements',
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        }
      );

      const data = await response.json();
      setAnnouncements(data);
      setFilteredAnnouncements(data);
    }
    fetchAnnouncements();
  }, []);

  const handleSearch = (e: any) => {
    e.preventDefault();
    const filteredAnnouncements = announcements.filter((a: any) =>
      a.title.toLowerCase().includes(searchRef.current.value.toLowerCase())
    );
    setFilteredAnnouncements(filteredAnnouncements);
  };

  return (
    <div className="text-white px-5 md:pl-44 pb-20">
      <h2 className="text-2xl md:text-3xl font-bold my-8">Announcements</h2>

      <form
        onSubmit={handleSearch}
        className="mt-8 mb-10 ml-6 bg-gray-200 max-w-md p-2 rounded-full pl-6 text-black flex justify-between pr-4"
      >
        <input
          type="text"
          placeholder="Search aticles"
          className="w-full outline-none bg-gray-200"
          ref={searchRef}
        />
        <Image src="/assets/search.svg" alt="search" width={20} height={20} />
      </form>
      {announcements.length === 0 && (
        <h3 className="text-center font-semibold text-lg mt-10">
          No Announcements
        </h3>
      )}

      <div className="pl-6 flex flex-col gap-8">
        {filteredAnnouncements.map((a: any) => (
          <Announcement
            time={formatDateTime(a.date).time}
            date={formatDateTime(a.date).date}
            title={a.title}
            desc={a.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Announcements;
