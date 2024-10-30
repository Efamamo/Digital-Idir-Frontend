import Image from 'next/image';
import React from 'react';

function MVV() {
  return (
    <div className="flex flex-col items-center pt-20 pb-28">
      <div className="flex gap-20 flex-wrap">
        <div className="max-w-md">
          <Image
            src="/assets/mission.jpeg"
            alt="mvv"
            width={500}
            height={200}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold">Our Mission</h3>
          <p>
            To revolutionize the traditional Ethiopian Idir system by digitizing
            and simplifying the process of community support. We aim to bring
            efficiency, transparency, and accessibility to members through a
            seamless digital platform that connects people, tracks
            contributions, and automates notifications for events and
            contributions.
          </p>
        </div>
        <div className="max-w-md">
          <Image
            src="/assets/vision.jpg"
            alt="mvv"
            width={500}
            height={200}
            className="mb-4"
          />
          <h3 className="text-xl font-semibold">Our Vision</h3>
          <p>
            To become the leading digital platform that preserves and modernizes
            Ethiopian community traditions, making mutual support and resilience
            more accessible for everyone. We envision a connected society where
            technology strengthens the unity and cultural heritage of Ethiopian
            communities worldwide.
          </p>
        </div>
        <div className="max-w-md">
          <Image
            src="/assets/value.jpg"
            alt="mvv"
            width={500}
            height={200}
            className="mb-4"
          />

          <h3 className="text-xl font-semibold">Our Values</h3>
          <ul>
            <li>
              <span className="font-semibold">Community-Centric:</span> We put
              the needs of our communities at the forefront of everything we
              build.
            </li>
            <li>
              <span className="font-semibold">Transparency:</span> We believe in
              clear, open communication and secure financial tracking.
            </li>
            <li>
              <span className="font-semibold">Innovation:</span>
              We are committed to leveraging technology to bring lasting change
              and modernize traditions responsibly.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MVV;
