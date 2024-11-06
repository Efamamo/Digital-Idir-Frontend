'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { sidebarLinks } from '@/constants';
export default function LeftSideBar() {
  const pathName = usePathname();
  return (
    <section className="custom-scrollbar sticky left-0 top-0 z-20 flex gap-56 pb-4 w-2/12 min-w-28 flex-col justify-between overflow-auto border-r border-r-dark-4 bg-dark-2 max-lg:hidden">
      <div className="flex w-full flex-1 flex-col gap-4 px-6 text-white">
        {sidebarLinks.map((link: any) => {
          const isActive =
            (pathName.includes(link.route) && link.route.length > 1) ||
            pathName === link.route;

          return (
            <Link
              href={link.route}
              key={link.label}
              className={`relative flex justify-start gap-3 rounded-lg p-4 ${
                isActive && 'bg-purple-600'
              }`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={20}
                height={20}
              />
              <p className="text-light-1 max-2xl:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-6 px-6">
        <Link href="/" className="cursor-pointer flex gap-4 p-4">
          <Image src="/assets/logout.svg" alt="logout" width={20} height={20} />
          <p className="text-white max-xl:hidden">Logout</p>
        </Link>
      </div>
    </section>
  );
}
