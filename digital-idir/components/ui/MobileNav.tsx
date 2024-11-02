import React from 'react';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger>
        <Image
          src="/assets/hamburger.svg"
          width={30}
          height={30}
          alt="menu"
          className="cursor-pointer"
          color="white"
        />
      </SheetTrigger>
      <SheetContent
        side={'left'}
        className="pt-14 bg-gray-200 border-none w-full"
      >
        <SheetHeader>
          <SheetTitle>
            <SheetClose asChild>
              <Link
                href="/"
                className="text-3xl font-bold mb-4"
                style={{
                  fontFamily: "'Oleo Script', cursive",
                }}
              >
                Digital Idir
              </Link>
            </SheetClose>
          </SheetTitle>
          <SheetDescription className="flex flex-col gap-1 pt-6">
            <SheetClose asChild>
              <Link
                className="font-semibold text-lg text-black hover:text-gray-900"
                href="/sign-in"
              >
                Log in
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/items"
                className="text-lg font-semibold text-black hover:text-gray-900"
              >
                Items
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href="/about"
                className="font-semibold text-black hover:text-gray-900 text-lg"
              >
                About Us
              </Link>
            </SheetClose>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
