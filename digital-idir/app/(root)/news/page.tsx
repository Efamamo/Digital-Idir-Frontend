import RecentNews from '@/components/ui/RecentNews';
import Image from 'next/image';
import React from 'react';

function News() {
  return (
    <section className=" text-white md:mx-32 px-14 md:px-0">
      <div className="flex flex-wrap pb-10 items-start">
        <div
          className="bg-[#101012] text-white hidden lg:block w-64 overflow-x-hidden overflow-y-scroll border border-gray-700 mt-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="pl-10 py-6 border-b border-gray-700">
            <h3 className="text-base font-semibold">Recent news</h3>
          </div>
          <RecentNews
            time="10:10"
            title="Something Happend Yesterday Somewhere."
          />
          <RecentNews
            time="05:20"
            title="Something Happend Yesterday Somewhere."
          />
          <RecentNews
            time="10:10"
            title="Something Happend Yesterday Somewhere."
          />
          <RecentNews
            time="10:10"
            title="Something Happend Yesterday Somewhere."
          />

          <RecentNews
            time="01:02"
            title="Something Happend Yesterday Somewhere."
          />

          <div className="py-10 pl-10 text-sm cursor-pointer">
            <p>+ Read More</p>
          </div>
        </div>
        <div className="md:px-32">
          <h2 className="text-2xl md:text-3xl font-bold">Trending News</h2>

          <div className=" flex gap-10 mt-10 items-start flex-wrap">
            <div className="max-w-2xl">
              <Image
                src="/assets/vote.jpg"
                alt="vote"
                width={600}
                height={600}
                className="w-full mb-6 rounded-lg"
              />

              <div className="flex gap-8 flex-wrap justify-between">
                <Image
                  src="/assets/Israel.webp"
                  alt="israel"
                  width={310}
                  height={300}
                  className="rounded-lg w-full lg:w-fit"
                />

                <Image
                  src="/assets/sport.jpeg"
                  alt="sport"
                  width={310}
                  height={300}
                  className="rounded-lg w-full lg:w-fit"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
