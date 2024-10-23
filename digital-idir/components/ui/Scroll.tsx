'use client';
import { useEffect, useState } from 'react';

export default function Scroll() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsVisible(false);
    } else {
      setIsVisible(window.innerWidth > 780);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsVisible(window.innerWidth > 780);
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center text-white absolute bottom-2"
      style={{ display: isVisible ? 'flex' : 'none' }}
    >
      <img src="/assets/mouse.png" alt="scroll icon" color="black" />
      <h3 className="font-semibold">Scroll down</h3>
    </div>
  );
}
