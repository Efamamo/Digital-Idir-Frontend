'use client';
import MemorialCard from '@/components/ui/MemorialCard';
import React, { useEffect, useState } from 'react';

function Memorials() {
  const [memorials, setMemorials] = useState([]);

  useEffect(() => {
    async function fetchMemorials() {
      const response = await fetch('http://localhost:5000/api/v1/memorials', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      const data = await response.json();
      console.log(data);

      setMemorials(data);
    }

    fetchMemorials();
  }, []);
  return (
    <div className=" text-white md:mx-2 lg:mx-40  px-14 md:px-0">
      <h2 className="text-white font-bold text-2xl md:text-3xl text-center">
        In Loving Memorial Of
      </h2>

      {memorials.length === 0 && (
        <h3 className="text-2xl font-semibold mt-20 text-center">
          No Memorial
        </h3>
      )}

      <div className="flex flex-wrap gap-20 items-center justify-center my-20 max-w-7xl">
        {memorials.map((memorial: any) => (
          <MemorialCard
            name={memorial.name}
            dob={memorial.dateOfBirth}
            dop={memorial.dateOfPassing}
            desc={memorial.description}
            image={`http://localhost:5000/${memorial.imageUrl}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Memorials;
